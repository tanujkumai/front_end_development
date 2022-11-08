// ==============
// FUNCTION SCOPE
// ==============
// let totalEggs = 0;  //making it globel
// function collectEggs(){
//     totalEggs = 6;  //untill i make it globel variable i can't use outside the function block
// }

// console.log(totalEggs);
// collectEggs()
// console.log(totalEggs)

// let bird = 'parrot';
// function birdwatch (){
//     let bird = 'owls';
//     console.log(bird);
// }

// birdwatch()
// console.log(bird);



// ==============
// BLOCK SCOPE
// ==============
// let radius = 8;
// if (radius > 0) {
//   let msg = "hiiiiiii";
//   const PI = 3.14156;
// }

// console.log(msg);  //can't use these two because of the same reason(they are defined inside the bolck)
// console.log(PI);   // as above fuction 


// for(let i=0 ; i<7 ; i++){
//     var msg = 'hi';
// }

// console.log(msg);

//can't use msg and i variable but if use var instead of let then i can use them out side the block 


// ==============
// LEXICAL SCOPE
// ==============
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}
