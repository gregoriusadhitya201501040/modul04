var heightJames = 180;
var heightHelena = 160;
var ageJames = 26;
var ageHelena = 23;

function calculate(Age,height)
{
    
    var score = 5*Age+height;
    return score;
    
}
var John = calculate(26,180);
var Jesie = calculate(23,160);

console.log(John + ' ' + 'James');
console.log(Jesie + ' ' + 'Helena');
