const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;

const hen = {
    name:'Helen' , 
    eggsCount: 0,
    layAnEgg(){
        this.eggsCount++;
        console.log('"EGG"');
    }
    
}
hen.name 
hen.eggsCount 
hen.layAnEgg() 
hen.layAnEgg()
hen.eggsCount 