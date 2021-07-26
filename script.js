let person = {
    firstName: 'Ivan',
    secondName: 'Ivanov',
    showData(){
        console.log(`Name is ${this.firstName} ${this.secondName}` )
    },
}

let newPerson = Object.assign({}, person);
newPerson.firstName = prompt('Введіть нове Ім\'я для "newPerson"');
newPerson.secondName = prompt('Введіть нове прізвище для "newPerson"');

person.showData();
newPerson.showData();


// let MyMath = {
//     a: +prompt('Введіть число "a"'),
//     b: +prompt('Введіть число "b"'),
//     sum() {console.log(`${this.a} + ${this.b} = ${this.a + this.b}`)},
//     multiplication() {console.log(`${this.a} * ${this.b} = ${this.a * this.b}`)},
//     division() {console.log(`${this.a} / ${this.b} = ${this.a / this.b}`)},
//     subtraction() {console.log(`${this.a} - ${this.b} = ${this.a - this.b}`)},
// }

// MyMath.sum()
// MyMath.multiplication()
// MyMath.division()
// MyMath.subtraction()