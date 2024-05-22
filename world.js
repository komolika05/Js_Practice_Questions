class World {
  constructor() {
    this.cities = [];
  }

  addCity(cityName) {
    const city = new City(cityName);
    this.cities.push(city);
  }

  findCity(cityName) {
    return this.cities.find((c) => c.name === cityName);
  }
}

class City {
  constructor(name) {
    this.name = name;
    this.people = [];
  }

  addPerson(personName, personAge) {
    const person = new Person(personName, personAge);
    this.people.push(person);
  }

  getAllPeople() {
    return this.people;
  }

  getAverageAge() {
    const totalAge = this.people.reduce((sum, person) => sum + person.age, 0);
    return this.people.length ? Math.round(totalAge / this.people.length) : 0;
  }
}
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const world = new World();

world.addCity("Pune");
world.addCity("Indore");

const pune = world.findCity("Pune");
const indore = world.findCity("Indore");

pune.addPerson("Eena", 34);
pune.addPerson("Meena", 26);
pune.addPerson("Deeka", 32);

indore.addPerson("Ram", 89);
indore.addPerson("Shyaam", 54);
indore.addPerson("Rahul", 16);

const peopleInPune = pune.getAllPeople();
console.log("People in Pune:", peopleInPune);

const averageAgeInPune = pune.getAverageAge();
console.log("Average age in Pune:", averageAgeInPune);

const peopleInIndore = indore.getAllPeople();
console.log("People in Indore:", peopleInIndore);

const averageAgeInIndore = indore.getAverageAge();
console.log("Average age in Indore:", averageAgeInIndore);
