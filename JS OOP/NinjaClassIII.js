function Sensei(name) {
    this.name = name;
    this.health = 200;
    let speed = 10;
    let strength = 10;
    let wisdom = 10;

    this.showStats = function () {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }

    this.speakWisdom = function (ninja) {
        ninja.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }


}

function Ninja(name) {
    this.name = name;
    this.health = 100;
    let speed = 3;
    let strength = 3;


    this.showStats = function () {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }

    this.kick = function (ninja) {
        const damage = strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
        return this;
    }

}

Ninja.prototype.punch = function (ninja) {
    ninja.health -= 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    return this;
}

Ninja.prototype.sayName = function () {
    console.log("My name is " + this.name);
    return this;
}

Ninja.prototype.drinkSake = function () {
    this.health += 10;
    return this;
}

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
const superSensei = new Sensei("Master Splinter");

blueNinja.sayName();
redNinja.sayName();

blueNinja.punch(redNinja);
blueNinja.punch(redNinja);
blueNinja.punch(redNinja);
redNinja.kick(blueNinja);
superSensei.speakWisdom(blueNinja);
superSensei.speakWisdom(redNinja);
superSensei.showStats();


blueNinja.showStats();
redNinja.showStats();