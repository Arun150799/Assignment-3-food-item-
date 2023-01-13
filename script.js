myarr = [
{
    foodName: "Burger",
    categary:"snacks",
    calories: 272,
    junkFood: "yes"
},
{
    foodName: "Sandwich",
    categary:"Breakfast",
    calories: 252,
    junkFood: "no"
},
{
    foodName: "Omlett",
    categary:"Breafast",
    calories: 226,
    junkFood: "no"
},
{
    foodName: "momos",
    categary:"snacks",
    calories: 230,
    junkFood: "yes"
    
},
{
    foodName: "Halwa",
    categary:"Breakfast",
    calories: 220,
    junkFood: "no"
},
{
    foodName: "Brownbread",
    categary:"Breakfast",
    calories: 380,
    junkFood: "no"
},
{
    foodName: "Rice",
    categary:"lunch",
    calories: 350,
    junkFood: "no"
},
{
    foodName: "Cokies",
    categary:"Breakfast",
    calories: 200,
    junkFood: "no"
},
{
    foodName: "Chicken",
    categary:"Dinner",
    calories: 500,
    junkFood: "no"
},
{
    foodName: "Pasta",
    categary:"Snacks",
    calories: 400,
    junkFood: "yes"
}

];
const result = myarr.filter((myarr)=>{
    if(myarr.categary=="Breakfast")
    {
        return myarr.foodName;
    }
    else 0;

});
console.log(result);
 const calory = myarr.filter((myarr)=>{
    if(myarr.calories<300){
        return myarr.foodName;
    }
 });
 console.log(calory);
 const junky = myarr.filter((myarr)=>{
    if(myarr.junkFood=="yes"){
        return myarr.foodName;
    }
 });
 console.log(junky);