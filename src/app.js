/* eslint-disable no-console */
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let exten = ['.com', '.net', '.er', '.on'];


for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++){
        for (let k = 0; k < noun.length; k++){
            for (let l = 0; l < exten.length; l++){
                let dominio = pronoun[i] + adj[j] + noun[k]+ exten[l];
                console.log(dominio);
                
            }
        }
    }
}