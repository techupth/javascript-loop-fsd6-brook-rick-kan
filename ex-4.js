// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];

for (let n = 0; n < restaurants.length; n++) {
  newRestaurants[n] = "Restaurant Name: " + restaurants[n];
}
console.log(newRestaurants);
