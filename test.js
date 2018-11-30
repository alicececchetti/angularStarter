var nome = "pippo";
var cognome = "miao";
var age;
age = 18;
var scem = "sasa";
var sao = "sao";
var ciao;
ciao = ["miao", "ciao"];
var person;
person = { name: "pippo", age: 22 };
function go(direction, distance) {
    if (direction === void 0) { direction = "left"; }
    if (distance === void 0) { distance = 100; }
    console.log(direction, distance);
}
go();
go("left", 50);
go("right");
function drive(param) { }
drive({ distance: 100 });
function add(x, y) {
    return x + y;
}
add(10, 50);
var p = add(10, 50) + 100;
var add2 = function (x) { };
var multiply = function (x) { return x * 2; };
var multiply2 = function (x) {
    return x * 2;
};
var asdfg = 2222;
