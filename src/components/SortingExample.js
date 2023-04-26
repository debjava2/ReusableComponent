const data=[
    {name:'Apple' ,cost:32,weight:5},
    {name:'Orange' ,cost:62,weight:2},
    {name:'Banana' ,cost:12,weight:10},
]

function getSortValue(fruit){
    //Based on Cretierai wether sort by name or cost or weight or both cost and weight i.e cost/weight 
    // or vis versa 
    // return fruit.name // for string comparession
    // return  fruit.cost/fruit.weight when both 
    return fruit.cost; 
}
const sortOrder='asc';
data.sort((a,b)=>{
const valueA=getSortValue(a);
const valueB=getSortValue(b);
const reverseOrder=sortOrder==='asc' ? 1:-1
if(typeof valueA=='string')
{
    return valueA.localeCompare(valueB)*reverseOrder
}
else{
return (valueA-valueB)*reverseOrder;
}
})