console.log("lets start do it");
fullname="pruthvi";
console.log(fullname);


const product={
    title:"pen",
    price:"300",
    offer:5
};
console.log(product);


let age=25;
if (age>18) {
    console.log("you can vote");}

if (age<18) {
    console.log("you can't vote");

}
let mode="dark";
let color;
if (mode==="dark") {
    color="white";
    
}
console.log(color);
alert("dumma nagu swalp")


let str="pruthvi";
console.log(str.length);
 let newstr=str.toUpperCase();
console.log(str);
console.log(newstr);



let i=0;
for(let i=1;i<=5;i++)
    console.log(i);
    

let modeBtn=document.querySelector("#mode");
let currMode="light";

modeBtn.addEventListener("click", ()=>{
    console.log("you are trying to change mode");
    if(currMode==="light"){
        currMode="dark";
        document.body.style.backgroundColor="black";
    } else{
            currMode="light";
            document.body.style.backgroundColor="white";
        }
        console.log(currMode); 

});


let Age=prompt("enter our age");

let result=  age<=18 ?  "adult" : "not adult";
console.log(result);

let score=prompt("enter your score");
let grade;
if (score>=90 && score<=100) {
    grade="A";
    
}
else if (score>=70 && score<=89) {
    grade="B";
    
}
else if (score>=60 && score<=79) {
    grade="C";
    
}
else if (score>=50 && score<=69) {
    grade="D";
    
}

else if (score>=0 && score<=49) {
    grade="fail";
    
}
console.log("your grade was: ",grade);


for(count=1;count<=10;count++){
    console.log("pruthvi" ,count);
}

