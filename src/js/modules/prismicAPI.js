// 1. Imports
import elements from "./DOMelements";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";

// 2. Selectors
const apiEndpoint = "https://your-repository-name.prismic.io/api/v2";

// 3. Actions
function handleError(err) {
  console.log("ohhh noooo");
  alert(err);
}
async function retrieveContent() {
  const promise = await Prismic.getApi(apiEndpoint).catch(handleError);
  const res = await promise.query("");
  const data = await res.results;
  console.log(data);
  return data;
}

// 4. Events

// 5. Exports
export { handleError, retrieveContent };

// async function createHTML() {
//   const data = await retrieveData();
//   data.forEach((element) => {
//     const cardHTML = `
//     <div>
//         <img src=${element.data.image.url} alt=${element.data.image.alt}/>
//         <h6>${element.data.title[0].text} </h6>
//     </div>
//     `;
//     document.body.insertAdjacentHTML("afterbegin", cardHTML);
//   });
// }
// createHTML();
