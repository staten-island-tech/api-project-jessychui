import "../style/style.css";

/* const nintendo = {
  name: document.querySelector(),
}; */

let name = "kirby";

async function getData(name) {
  try {
    const response = await fetch(
      `https://www.amiiboapi.com/api/amiibo/?name=${name}`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData(name);
