var heightJames = 180;
var heightHelena = 160;
var heightMoma = 170;
var ageJames = 26;
var ageHelena = 23;
var ageMoma = 22;

function calculate(Age,height)
{
    
    var score = 5*Age+height;
    return score;
    
}
var James = calculate(26,180);
var Helena = calculate(23,160);
var Moma = calculate(22,170);

if (James  > Moma)
{
    if (James > Helena)
    {
   console.log('James Menang dengan nilai' +  + James);
    }
    else
    {
    console.log('Helena Menang dengan nilai' +  + Helena);
    }
}
else if (Janes  > Helena)
{
    if (John > Moma)
    {
    console.log('James Menang dengan nilai' +  + James);
    }
    else
    {
    console.log('Moma Menang dengan nilai' +  + Moma);
    }
}
else if (Moma > James)
{
    if (Moma > Moma)
    {
    console.log('Moma Menang dengan nilai' +  + Moma);
    }
    else
    {
    console.log('Helena Menang dengan nilai' +  + Helena);
    }
}
else if ( James == Helena)
{
    console.log('Seri dengan nilai' +  + James);
}
else if (James == Moma)
{
    console.log('Seri ' +  + James);
}
else
{
console.log('seri dengan nilai' +  + Moma);
}
