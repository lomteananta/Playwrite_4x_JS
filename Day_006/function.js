let person =
{
    fname:"ananta",     lname:"andy",     weight:68,    age:36
}


// aceesing value of property  
console.log("Previous value ", person["age"]);
console.log(person.lname);

// add new proeprty to the exsiting object person)

person["height"]=5.7;
person.height=5.8;
person.gendar="Male";
console.log(person.height);
console.log(person.gendar);

// update exisiting value
person.age=39;
console.log("New Age : ",person.age);

//remove value from object 
delete person.gendar;
console.log(person.gendar);

//read all perperty using loop statement  
for(let x in person)
{
   // console.log(x); // print only perporty names
   // console.log(person.x); // prints only value of property
    console.log(x+ "  ", person[x]); //prints all vlaue with names 
}