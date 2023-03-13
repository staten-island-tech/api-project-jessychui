import "../style/style.css";

/* const nintendo = {
  name: document.querySelector(),
}; */

let name = "";

async function getData(name) {
  try {
    const response = await fetch(`https://www.thecolorapi.com/id?${name}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData(name);
