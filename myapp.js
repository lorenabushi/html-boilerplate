console.log ("JavaScript");
var num = 10;
console.log (num);

function makeCoffee(sugar, milk)
{
    var instructions = "boil water,";
    instructions += "pour into cup,";
    instructions += "add coffee granules,";
    instructions += "add" + sugar + "spoons of sugar,";
    instructions += "add" + milk + "% milk.";

    return instructions;

}
console.log(makeCoffee(1, 20) );