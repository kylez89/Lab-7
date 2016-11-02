//This is Lab 7 - using a for loop

var total=0;
var groceryList=[
  {name: "Chicken",
  price: 12.00},
  {name: "NY Strip Steak",
  price: 23.00},
  {name: "Brown Rice",
  price: 6.00},
  {name: "Peppers",
  price: 5.50},
  {name: "Raspberries",
  price: 4.50}
];

for (var i=0;i<groceryList.length;i++){
  
  total+=groceryList[i].price;
  
  console.log(groceryList[i].name+ " $" +groceryList[i].price);
  
  
}
  console.log("total: $"+total);






















	]