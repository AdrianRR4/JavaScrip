/** 
const jokeUrl = "https://api.chucknorris.io/jokes/random";


fetch(jokeUrl).then((response) => {
  response.json().then((response) => {
    console.log(response.id);
    console.log(response.value);
  });

  //console.log(response);
});
*/

import { obtenerChiste } from "./js/http-providers";

obtenerChiste().then(console.log);
