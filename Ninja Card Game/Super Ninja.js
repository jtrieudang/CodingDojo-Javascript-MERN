class Sensei extend Ninja{
    constructor(wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom= wisdom;

    speakWisdom(){
        super.drinkSake();
        console.log(this.wisdom);
    }
}

https://github.com/CodingDojoDallas/mean_sept_2017/blob/master/Leslie_Hayes/JS_Fundamentals/ninja_classiii.html
others:

// class Sensei extends Ninja {
//     constructor(name){
//         super(name);
//         this.speed = 10;
//         this.strength = 10;
//         this.wisdom = 10;
//         this.health = 200;
//     }

//     speakWisdom(){
//         super.drinkSake();
//         console.log("What one programmer can do in one month, \ntwo programmers can do in two months.");
//     }

//     showStats(){
//         console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
//     }
// }

// let = super_sensei = new Sensei("Master Splinter");
// super_sensei.speakWisdom();
// super_sensei.showStats();