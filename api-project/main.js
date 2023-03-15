import "/style.css";

const DOMselectors = {
  enter: document.getElementById("enter"),
  container: document.getElementById("container"),
  number: document.getElementById("number")
}

const URL = "https://api.disneyapi.dev/characters";

DOMselectors.container.innerHTML = "";

async function getData() {
    DOMselectors.container.innerHTML = "";
    try{
        const response = await fetch(URL); //
        const data = await response.json();
        Object.entries(data)
        console.log(Object.entries(data));
        let number = DOMselectors.number
        Object.entries(data).filter((char) => char[1].number == `${_id}`)
        .forEach(char => { 
            console.log(char[1]["name"]);
            DOMselectors.box.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                <div class="name">${char[1]["name"].split("_").join(" ")}</div>
                <img class="images" alt="${char[0]["name"]}" src="${char[1]["imageUrl"]}" />
                </div>`
            );
        });
       
        
    } catch (error) {
        console.log(error);
    }
    }

DOMselectors.enter.addEventListener("click", getData);