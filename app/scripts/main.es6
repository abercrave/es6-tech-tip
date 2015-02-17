(function(window, document, $, undefined) {

  "use strict";

  // Classes
  class Person {

    constructor(firstName, lastName) {
    // Default arguments
    // constructor(firstName = 'Joe', lastName='Schmoe') {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    get name() {
      return this.firstName + ' ' + this.lastName;
      // Template strings
      // return `${this.firstname} $this.lastName`;
    }

    set name(name) {
      var names = name.split(' ');
      this.firstName = names[0];
      this.lastName = names[1];

      // Destructuring arrays
      // [this.firstName, this.lastName] = name.split(' ');
    }

    greet() {
      setTimeout(function() {
      // setTimeout(() => {
        alert('Greetings, ' + this.name + '!');
      }, 1)
    }
  }

  var person = new Person('Ben', 'Evans');
  // console.log(person.name);

  $('button').click(() => {
    person.greet();
  })
  // console.log(person.name);

  // Splats
  var awards = (first, second, ...others) => {
    return {
      gold: first,
      silver: second,
      honorableMention: others
    }
  }
  // console.log(awards('Tom', 'Dick', 'Harry', 'Adolphus'));

  // Maps
  var m = new Map
  m.set('name', 'Bobby');
  //
  // console.log('m.name', m.get('name'));
  // console.log('m.size', m.size);

  m.set('age', 5)

  // console.log(m.has('age'));
  // console.log(m.has('foobar'));

  m.forEach(function(value, key){
    // console.log(key + ' maps to ' + value);
  });

  m.clear();

  // console.log(m.size);

}(window, document, jQuery));
