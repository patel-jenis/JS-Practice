class Animal {
    constructor (name) {
        this.name = name;
    }

    speak() {
        console.log("Speeking...");
    }

    walk() {
        console.log("Animal Walking....");
    }
}

class Dog extends Animal {
    constructor (name, color) {
        super(name);
        this.color = color;
    }

    walk() {
        super.walk();
    }
}

class DobberMan extends Dog {
    constructor (name, color, age) {
        super(name, color);
        this.age = age;
    }

    getDetails() {
        console.log(`Name  : ${this.name}`);
        console.log(`Color : ${this.color}`);
        console.log(`Age   : ${this.age}`);
    }
}

const d1 = new DobberMan("Sheru", "black", 4);
console.log(d1);
d1.getDetails();