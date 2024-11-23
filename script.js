// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   Introduce() {
//     console.log(`Hello,my name is ${this.name} and i am ${this.age} years old`);
//   }
// }
// let info = new Person("irakli", 19);
// info.Introduce();

// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   Introduce() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old`
//     );
//   }
//   static Isadult(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// let info = new Person("Irakli", 17);
// info.Introduce();
// console.log(Person.Isadult(info.age));

// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   speak() {
//     console.log(`${this.name} says: Woof!`);
//   }
// }
// let Does = new Dog("bobi");
// Does.speak();
// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში. დაამატე მეთოდი render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.
// let container = document.getElementById("container");
// class Button {
//   constructor(label, color) {
//     this.label = label;
//     this.color = color;
//   }
//   render(container) {
//     let btn = document.createElement("button");
//     btn.style.backgroundColor = this.color;
//     btn.textContent = this.label;
//     container.appendChild(btn);
//   }
// }
// let btn1 = new Button("გამარჯობა", "red");
// btn1.render(container);
// let btn2 = new Button("გაგიმაჯოს", "blue");
// btn2.render(container);
// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.
// class Vehicle {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }
// }
// class Car extends Vehicle {
//   constructor(model, brand, speed) {
//     super(brand, speed);
//     this.model = model;
//   }
//   describe() {
//     console.log(
//       `მოდელი:${this.model} ბრენდი:${this.brand} სიჩქარე:${this.speed}`
//     );
//   }
// }
// let info = new Car("BMW", "E92", 300);
// info.describe();
// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.
// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//   }
//   static FilterByCategory(product, category) {
//     if (category === "electronics") {
//       product;
//     } else {
//       return null;
//     }
//   }
// }
// let products = new Product("ტელევიზორი", "500 ლარი", "electronics");
// let filteredProducts = Product.FilterByCategory(products, "electronics");
// console.log(filteredProducts);
// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//   }
//   static FilterByCategory(product, category) {
//     if (product.category === category) {
//       return product;
//     }
//   }
// }
// let products = new Product("ტელევიზორი", "500 ლარი", "electronics");
// let filteredProducts = Product.FilterByCategory(products, "electronics");
// console.log(filteredProducts);

// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.
// class Event {
//   constructor(name, date) {
//     this.name = name;
//     this.date = new Date(date);
//   }
//   IsUpcoming() {
//     if (this.date > new Date()) {
//       console.log(`${this.name} მომავალშია`);
//     } else {
//       console.log(`${this.name} არარის მომავალში`);
//     }
//   }
// }
// let check = new Event("ახალიწელი", "2025/01/01");
// check.IsUpcoming();

// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.
// class Character {
//   constructor(name, health) {
//     this.name = name;
//     this.health = health;
//   }
// }
// class Warrior extends Character {
//   constructor(name, health) {
//     super(name, health);
//   }
//   attack() {
//     console.log(`სახელი:${this.name} სიცოცხლე:${this.health - 10}% `);
//   }
// }
// let introduce = new Warrior("irakli", 100);
// introduce.attack();
// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს, რომლებსაც შესაბამისი პრიორიტეტი აქვთ.
// class Task {
//   constructor(completed, priority) {
//     this.completed = completed;
//     this.priority = priority;
//   }
//   togglecompleted() {
//     if (this.completed === "completed") {
//       this.completed = "pending";
//     } else {
//       this.completed = "completed";
//     }
//   }
//   static PriorityTasks(tasks, priority) {
//     return tasks.filter((task) => task.priority === priority);
//   }
// }
// let statuse = new Task("completed", "პირველი");
// statuse.togglecompleted();
// console.log(statuse.completed);
// let task1 = new Task("pending", "პირველი");
// let task2 = new Task("completed", "მეორე");
// let task3 = new Task("pending", "პირველი");
// let tasks = [task1, task2, task3];
// let PriorityTasks = Task.PriorityTasks(tasks, "პირველი");
// console.log(PriorityTasks);

// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.
// class Appointment {
//   constructor(title, date) {
//     this.title = title;
//     this.date = new Date(date);
//   }
//   IsToday() {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     this.date.setHours(0, 0, 0, 0);
//     if (this.date.getTime() === today.getTime()) {
//       console.log(`${this.title} დღეს უნდა გაიმართოს`);
//     } else {
//       console.log(`${this.title} დღეს არუნდა გაიმართოს`);
//     }
//   }
// }
// let Check = new Appointment("ჩემი დაბადებისდღე", "2024-11-23");
// Check.IsToday();
