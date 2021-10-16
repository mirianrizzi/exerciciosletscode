class Person {
  constructor(firstname, lastname, age, gender, interests) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.name = `${this.firstName} ${this.lastName}`;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = `${this.name} is ${this.age} years old. I like ${this.interests}`;
    this.greetingWords = "Hi!"
    this.greetingPhrase = `${this.greetingWords}I'm  ${this.name}`
 
  }

  greeting() {
    console.log(this.greetingPhrase);
  }
}

class Teacher extends Person {
  constructor(firstname, lastname, age, gender, interests, subject,bio) {
    super(firstname, lastname, age, gender, interests, bio);
    this.subject = subject;
    this.greetingPhrase = `Hello. My name is ${this.lastname}, and I teach ${this.subject}`

  }
}

class Student extends Person {
  constructor(firstname, lastname, age, gender, interests,bio) {
    super(firstname, lastname, age, gender, interests, bio);
    this.greetingPhrase = `Yo! I'm ${this.name}`
  }
}

let Meredith = new Student("Meredith", "Gray", "42", "female", "medicine");
Meredith.greeting()
console.log(Meredith.bio)

let Shaun = new Person("Shaun", "Murphy", "28", "male", "Lea");
Shaun.greeting()
console.log(Shaun.bio)

let Gregory = new Teacher("Gregory", "House", "52", "male", "puzzles", "problem solving");
Gregory.greeting()
console.log(Gregory.bio)
