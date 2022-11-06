//class User {

//    constructor(name) {
//        this.name = name;
//    }
//    sayHello() {
//        console.log(this.name + ' Hello ');
//        return this.name
//    }
//}

//const alex = new User('Alex');
//console.log(alex);

//class Person extends User {

//    constructor(name, email) {

//        super(name);

//        this.email = email;

//    }

//    sayHello() {
//        console.log(super.sayHello());
//        console.log(this.email);
//    }

//}

//const Liana = new Person('Liana', 'liana@gmail.com');

////console.log(Liana.sayHello());
//console.log(Liana.sayHello());

class User {
    sayHello() {
        console.log(this.name + ' Hello ');
        return this.name;
    }
}

const alex = new User();

console.log(alex.sayHello());

class Person extends User {
    constructor(name) {
        super();
        this.name = name;
    }
}
const li = new Person('li');

console.log(li);
