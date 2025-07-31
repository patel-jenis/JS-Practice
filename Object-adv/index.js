let person = {
    name: "Jenis",
    grid: 123,
    marks: 99,
    details: function () {
        console.log(`Name : ${this.name}`);
        console.log(`GrId : ${this.grid}`);
        console.log(`Marks : ${this.marks}`);
    }
}

// person.details();

// For In Looop - It is a only loop which apply on object...

// for print keys iin object
// for (let key in person) {
//     console.log(key);
// }

// for print Values iin object
for (let val in person) {
    console.log(person[val]);
}