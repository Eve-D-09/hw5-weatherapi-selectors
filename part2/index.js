/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
/* <li>Turn the one with the id 'first_ghost' orange</li> */

document.getElementById('first_ghost').setAttribute('fill', '#ffa31a');
// document.getElementById("first_ghost").style.fill = "#ffa31a";


// ------------------------------------------------------------------------------------
// GET BY CLASSNAME
// Turn the ones with the class of 'second_wave' blue
// document.getElementsByClassName('ghost second_wave')[0].setAttribute('fill', '#005ce6');
// document.getElementsByClassName('ghost_second_wave').setAttribute('fill', '#005ce6');

const ghostsBlue = document.getElementsByClassName('second_wave');

for(const items of ghostsBlue ) {
  items.setAttribute('fill', '#005ce6');
  // items.style.fill = "#005ce6";
};

console.log(ghostsBlue);


// ---------------------------------------------------------------------------------------
// GET AREA, DRILL DOWN using GET BY TAG NAME
// Select Area 51, then select the svgs inside it and turn them green
const svgBox = document.getElementById("area-51");
const svgItems = svgBox.getElementsByTagName("svg");

for (const item of svgItems) {
  item.setAttribute('fill', '#00b359');
  
};

console.log(svgItems);


// ----------------------------------------------------------------------------------------
// querySelector nth-child
// Using <code>querySelector</code> (starting at the document level) and an <code>nth-child</code>-type css selector, 
// make the penultimate ghost in area 51 have a red stroke with a <code>strokeWidth</code> of <code>15px
//  QQQ - why nth-chil(2) does not work for me? 

const middleGhost = document.querySelector("#area-51 > svg:nth-of-type(2)");

 
middleGhost.setAttribute('stroke', 'red');
middleGhost.setAttribute('stroke-width', '15px');


console.log(middleGhost);

// --------------------------------------------------------------------------------------------------------------------
// from the last child, select the div immediately above the ghost and make its border '5px dashed'
// Starting with that penultimate ghost you just selected, select the div immediately above the ghost and make its border '5px dashed'

middleGhost.closest("div").style.border = "5px dashed";


// --------------------------------------------------------------------------------------------------------------------
// querySelectorAll
// Using querySelectorAll, select all the ghosts in the div which has an id of area-50 and turn them red


const ghostsRed = document.querySelectorAll("#area-50  svg");
for (const item of ghostsRed) {
  item.setAttribute('fill', 'red');

};

console.log(ghostsRed);