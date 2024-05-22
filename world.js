class World {
  constructor() {
    this.cities = [];
  }
  addCity(cityName) {
    const city = new City(cityName);
    this.cities.push(city);
  }

  addPersonToCity(cityName, personName, personAge) {
    const city = this.cities.find((c) => c.name === cityName);
    if (city) {
      const person = new Person(personName, personAge);
      city.people.push(person);
    } else {
      console.log(`City ${cityName} not found`);
    }
  }

  getAllPeopleInCity(cityName) {
    const city = this.cities.find((c) => c.name === cityName);
    if (city) {
      return city.people;
    } else {
      console.log(`City ${cityName} not found`);
      return [];
    }
  }

  getAverageInCity(cityName) {
    const city = this.cities.find((c) => c.name === cityName);
    if (city) {
      const totalAge = city.people.reduce((sum, person) => sum + person.age, 0);
      return city.people.length ? Math.round(totalAge / city.people.length) : 0;
    } else {
      console.log(`City ${cityName} not found`);
      return 0;
    }
  }
}

class City {
  constructor(name) {
    this.name = name;
    this.people = [];
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

world.addPersonToCity("Pune", "eena", 34);
world.addPersonToCity("Pune", "Meena", 26);
world.addPersonToCity("Pune", "Deeka", 32);

world.addPersonToCity("Indore", "Ram", 89);
world.addPersonToCity("Indore", "Shyaam", 54);
world.addPersonToCity("Indore", "Rahul", 16);

const peopleInPune = world.getAllPeopleInCity("Pune");
console.log("People in Pune ", peopleInPune);

const averageAgeInPune = world.getAverageInCity("Pune");
console.log("Average age in Pune ", averageAgeInPune);

const peopleInIndore = world.getAllPeopleInCity("Indore");
console.log("People in Indore ", peopleInIndore);

const averageAgeInIndore = world.getAverageInCity("Indore");
console.log("Average age in Indore ", averageAgeInIndore);
