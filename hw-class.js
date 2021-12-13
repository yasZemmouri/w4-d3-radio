//Radio Object
const radio = {
  stations: [
    {
      name: "power123",
      songs: [
        {
          artist: "Gil Scott Heron",
          title: "Peices of a Man",
        },
        {
          artist: "ACDC",
          title: "Back in Black",
        },
        {
          artist: "Bjork",
          title: "Army of Me",
        },
        {
          artist: "Mobb Deep",
          title: "Drink Away the Pain",
        },
      ],
    },
    {
      name: "power124",
      songs: [
        {
          artist: "Silk Sonic",
          title: "Smoking By the Window",
        },
        {
          artist: "Stevie Ray Vaughn",
          title: "Heavens Door",
        },
        {
          artist: "Beyonce",
          title: "Single Ladies",
        },
        {
          artist: "Black Keys",
          title: "Gold On the Ceiling",
        },
      ],
    },
  ],
  changeStation() {
    // Generate random number, use that number to access a station.
    let stationIndex = Math.floor(Math.random() * this.stations.length);
    return this.stations[stationIndex];
  },
};
newStation = radio.changeStation();
//pick the 2nd song on the station.
console.log(
  `Now Playing: ${newStation.songs[1].title} by ${newStation.songs[1].artist}`
);

//Animal Class
class Animal {
  constructor(name, color, age, legs) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.legs = legs;
  }
  food() {
    console.log(`I'm ${this.name} I eat everything`);
  }
}
const cow = new Animal("Penny", "yellow", 4, 4);
cow.food();
class Carnivor extends Animal {
  constructor(name, color, age, legs, diete) {
    super(name, color, age, legs);
    this.diete = diete;
  }
  food() {
    console.log(`Im ${this.name} I eat MEAT.`);
  }
  hunt() {
    console.log("I hunt to eat.");
  }
}
const lion = new Carnivor("Bernie", "red", 99, 4, "meat");
console.log(lion);
lion.food();
lion.hunt();
