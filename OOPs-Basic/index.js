class Student {
    constructor(name, age, course, marks) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.marks = marks;
    }

    getDetails() {
        console.log(`Name   : ${this.name}`);
        console.log(`Age    : ${this.age}`);
        console.log(`Course : ${this.course}`);
        console.log(`Marks  : ${this.marks}`);
    }
}

let s1 = new Student("Jenis", 22, "Full Stack", [98, 99, 80]);
s1.getDetails();