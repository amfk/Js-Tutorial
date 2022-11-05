div=document.getElementById("container");
third=document.getElementById("btn")
third.addEventListener("click",()=>{
  console.log("Hew")
div.style.backgroundColor = "black"
div.style.color = "lightgreen";


})


document.forms['validationform'].addEventListener("submit",validate)


function funct(a,b){
return (a+b);
}




function validate(){
  
let roll = document.validationform.roll.value ;
let pass = document.validationform.pass.value ;

if(roll===null || roll>100 || roll == ""){
  alert("invalid")
}
else{
  console.log("Valid Password")
}
if(pass.length <8){
  alert("Passowrd is too short")
}
}

