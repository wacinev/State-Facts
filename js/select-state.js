// explore the dataset
console.log(stateData.ny);

let selectMenu = document.getElementById('state-list');
selectMenu.addEventListener('change',displayStateInfo);
console.log(selectMenu.value);//ca
//get the current selected state from the database
//object[dynamicPropertyValue]
console.log(stateData[selectMenu.value]);

let selectedState = stateData[selectMenu.value];
//individual pieces of data from selected state:
//get the bird mammal flower tree
console.log(selectedState.bird);
console.log(selectedState.mammal);
console.log(selectedState.flower);
console.log(selectedState.tree);

//the select menu has an option array
console.log(selectMenu.options.length);


console.log(selectMenu.value);


//get the DOM elements that hold the state area
let infoAbbrlP = document.getElementById('info-abbr')
let infoCapitolP = document.getElementById('info-capitol')
let infoPopulationP = document.getElementById('info-population')
let infoStatehoodP = document.getElementById('info-statehood')
let infoNicknameP = document.getElementById('info-nickname')
let infoPic = document.getElementById('info-pic')
let figCaption = document.getElementById('info-name')
let infoMammalP = document.getElementById('info-mammal')
let infoBirdP = document.getElementById('info-bird')
let infoFlowerP = document.getElementById('info-flower')
let infoTreeP = document.getElementById('info-tree')

// output the selected state data to their respective p tags
//.textContent show information on webpage
function displayStateInfo() {
    console.log(this.value)
    let selectedState = stateData[this.value];
    infoMammalP.textContent = selectedState.mammal;
    infoBirdP.textContent = selectedState.bird;
    infoFlowerP.textContent = selectedState.flower;
    infoTreeP.textContent = selectedState.tree;
    infoAbbrlP.textContent = selectedState.abbr;
    infoCapitolP.textContent = selectedState.capitol;
    infoPopulationP.textContent = selectedState.pop;
    infoStatehoodP.textContent = selectedState.statehood;
    infoNicknameP.textContent = selectedState.nickname;
    infoPic.src = 'img/' + selectedState.abbr + '.jpg';
    figCaption.textContent = selectedState.name;
}
