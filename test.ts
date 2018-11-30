let nome = "pippo";
const cognome = "miao";

let age: number;
age = 18;
let scem = "sasa";
let sao = "sao";

let ciao: string[];
ciao = ["miao", "ciao"];

let person: {
  name: string;
  age: number;
};

person = { name: "pippo", age: 22 };

function go(direction: string = "left", distance: number = 100) {
  console.log(direction, distance);
}

go();
go("left", 50);
go("right");

function drive(param: any) {}

drive({ distance: 100 });

function add(x: number, y: number): number {
  return x + y;
}

add(10, 50);
const p = add(10, 50) + 100;

const add2 = function(x) {};

const multiply = x => x * 2;

const multiply2 = function(x) {
  return x * 2;
};

let asdfg = 2222;










