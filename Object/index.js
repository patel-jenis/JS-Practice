let person = {
    name: "Jenis",
    age: 22,
    marks: {
        maths: 98,
        english: 99,
        ss: 95, 
    },
    isDeveloper: true, 
}

// console.log(person);
// console.table(person);



// read
// console.log(person.marks);


// Update
// person.age = 21;
// console.log(person);


// delete
delete person.marks;
console.table(person);