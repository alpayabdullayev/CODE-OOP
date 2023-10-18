// class EBOB{
//     constructor(number){
//         this.number = number
//     }

//     Bolen(){
//         let arr = []
//         for (let i = 0; i <= this.number; i++) {
//             if (this.number %i ===0) {
//                 arr.push(i)
//             }

//         }
//         console.log(arr);
//     }
// }

// let bolenler = new EBOB(24)
// bolenler.Bolen()

// class Admin{
//     constructor(user,password){
//         this.password=password
//         this.user=user
//     }

//     LOGIN(userCheck,passwordCheck){
//         if(this.user === userCheck && this.password === passwordCheck){
//             console.log("daxl oldu");
//         }
//         else{
//             console.log("sehvdir");
//         }
//     }
// }
// let user=prompt()
// let kod = prompt()
// let giris = new Admin("alpay","admin123")
// giris.LOGIN(user,kod)

// class Human {
//     constructor(name,surname,fullName){
//         this.name = name
//         this.surname = surname
//         this.fullName = fullName
//     }
// }
// class Worker extends Human {
//     constructor(salary, age,name,surname,fullName) {
//         super(name, surname, fullName);
//         this.salary = salary
//         this.age = age
//     }

// }

// let User = new Worker(50000, 30, "Alpay", "Abdullayev", "Alpay Abullayev")
// console.log(User.name);

const arr = [
  {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments",
  },
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: "Beverages",
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections",
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products",
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals",
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry",
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce",
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood",
  },
];

arr.sort((a, b) =>
  a.description > b.description ? 1 : b.description > a.description ? -1 : 0
);
console.table(arr);

arr.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
console.table(arr);

arr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
console.table(arr);

let keyword = "sa     ";

const arrFilter = arr.filter((item) =>
  item.description.toLocaleLowerCase().includes(keyword.toLocaleLowerCase().trim())
);
console.log(arrFilter);
