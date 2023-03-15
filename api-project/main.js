import "/style.css";

const DOMselectors = {
  enter: document.getElementById("enter"),
  container: document.getElementById("container"),
  number: document.getElementById("number"),
};

const URL = "https://api.disneyapi.dev/characters";

DOMselectors.container.innerHTML = "";

async function getData() {
  DOMselectors.container.innerHTML = "";
  try {
    const response = await fetch(URL); //
    const data = await response.json();
    let realData = Object.entries(data)[0][1];
    let number = Number(DOMselectors.number.value);
    console.log(realData, number - 1);
    let x = 0;
    realData.map((thing) => {
      thing._id = x;
      x += 1;
    });
    realData
      .filter((char) => number - 1 == char._id)
      .forEach((char) => {
        DOMselectors.container.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
                <div class="name">${char["name"]}</div>
                <img class="images" alt="${char["name"]}" src="${char["imageUrl"]}" />
                </div>`
        );
      });
  } catch (error) {
    console.log(error);
  }
}

DOMselectors.enter.addEventListener("click", getData);
