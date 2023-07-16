const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Ananá",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Ananá"],
  },
];

//Ejercicio A

console.log("Pizzas con ID impar:");

pizzas.filter(pizza => pizza.id % 2 !== 0).forEach(pizza => {
  console.log(pizza.nombre);
});

console.log("--------------------");

//Ejercicio B

const hayPizza = pizzas.some(pizza => pizza.precio < 600);

if (hayPizza) {
  console.log("Sí, hay pizza que vale menos de $600.");
} else {
  console.log("No, no existe ninguna pizza que valga menos de $600.");
}

console.log("--------------------");

//Ejercicio C

console.log("Nombre de cada pizza con su precio:");

pizzas.forEach(pizza => {
  console.log(`${pizza.nombre}: $${pizza.precio}`);
});

console.log("--------------------");

//Ejercicio D
console.log("Ingredientes de cada pizza:");

pizzas.forEach(pizza => {
  console.log(`Pizza: ${pizza.nombre}`);
  console.log("Ingredientes:");
  
  pizza.ingredientes.forEach(ingrediente => {
    console.log(ingrediente);
  });
  
  console.log("--------------------");
});