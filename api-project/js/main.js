import "../style/style.css";

/* const nintendo = {
  name: document.querySelector(),
}; */

let name = "random";

async function getData(name) {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/${name}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData(name);
