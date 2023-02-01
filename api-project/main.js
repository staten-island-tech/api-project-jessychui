const color = {
  display: document.getElementById("box"),
  newcolor: document.getElementById("newcolor")
};

/* function clear(
  color.input = "",
)
 */

function newcolor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
}

async function getData() {
  const color = "https://www.colr.org/json/color/random";
  try {
    const response = await fetch(color);
    if (response.status < 200 || response.status > 200) {
      console.log(response.status);
      throw error(response);
    } 
    else {
      const data = await response.json();
      const newcolor = await newcolor();

      function display(){
      data.results.forEach((color) => {
        color.display.innerHTML = "";
        document.getElementById("box").insertAdjacentHTML(
          "beforend",
          `<div class ="card">
          <img class = "" src="${colors.tags.bare}" alt ="">
          <h2> color name: ${color.artist_name}</h2>
          </div>
          <h1> What do you think? </h1>
          <button class="btn" id="next">next color</button>
          <button class="btn" id="confirm">this one!</button>`
        )
      });
      }
      document.getElementById("perfect").addEventListener("click", function(){
       
      });

      document.getElementById("next").addEventListener("click", getData);
    }
    displayNeko(spawn);
    } 
  catch (error) {
    console.log(error);
  }
}
getData();