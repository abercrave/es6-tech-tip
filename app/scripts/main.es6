class Person {

  constructor(firstName, lastName) {
  // constructor(firstName = 'Joe', lastName='Schmoe') {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  set name(name) {
    var names = name.split(' ');

    this.firstName = names[0];
    this.lastName = names[1];

    // [this.firstName, this.lastName] = name.split(' ');
  }

  greet() {
    alert('Greetings,' + this.name + '!');
  }

  greetLater() {
    setTimeout(function() {
    // setTimeout(() => {
      alert('Greetings, ' + this.name + '!');
    }, 1);
  }
}

var person = new Person('Ben', 'Evans');

// console.log(person.name);

var awards = (first, second, ...others) => {
  return {
    gold: first,
    silver: second,
    honorableMention: others
  };
}

// console.log(awards('Tom', 'Dick', 'Harry', 'Adolphus'));
