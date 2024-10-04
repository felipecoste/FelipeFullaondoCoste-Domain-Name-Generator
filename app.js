/* eslint-disable no-console */
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let exten = [".com", ".net", ".er", ".on"];
// console.time('tiempo')
// for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adj.length; j++) {
//     for (let k = 0; k < noun.length; k++) {
//       for (let l = 0; l < exten.length; l++) {
//         let dominio = pronoun[i] + adj[j] + noun[k] + exten[l];
//         console.log(dominio);
//       }
//     }
//   }
// }
// console.timeEnd('tiempo');
console.time('tiempo');
function generarUrl() {
let combinaciones = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let u of exten) {
          combinaciones.push(`${p}${a}${n}${u}`);
        }
      }
    }
  }
  
  return console.log(combinaciones);
}
console.timeEnd('tiempo');
generarUrl();
