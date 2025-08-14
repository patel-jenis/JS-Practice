class Student {
    #grid;

    constructor(name, age, course, marks, grid) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.marks = marks;
        this.#grid = grid;
    }

    getDetails() {
        console.log(`Name   : ${this.name}`);
        console.log(`Age    : ${this.age}`);
        console.log(`Course : ${this.course}`);
        console.log(`Marks  : ${this.marks}`);
        console.log(`grId   : ${this.#grid}`);
    }
}

let s1 = new Student("Jenis", 22, "Full Stack", [98, 99, 80], 1201);
s1.getDetails();