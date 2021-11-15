let str = prompt("Inserisci 5 nomi separati da una virgola", `Stefania,Sandro,Maria,Giacomo,Giorgia`).split(`,`);
let arrAge = [32, 21, 47, 12, 78];

let names = str.splice(`,`)

names.push(`Franco`,`Valentina`);
names.unshift(`Giacomo`);
names.splice(4,1,`Marta`);

arrAge.push(54, 32);
arrAge.unshift(12);
arrAge.splice(4, 1, 6);


let newArray = [names, arrAge];

console.log(newArray)

