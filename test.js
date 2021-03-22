let eat = document.querySelector("#eat");
let drink = document.querySelector("#drink");
let eatContent = document.querySelector("#eatContent");
let drinkContent = document.querySelector("#drinkContent");
let eatChange = document.querySelector(".eatChange");
let drinkChange = document.querySelector(".drinkChange");
let about = document.querySelector("#about");
let menu = document.querySelector("#menu");
let where = document.querySelector("#where");
let aboutBtn = document.querySelector(".aboutBtn");
let menuBtn = document.querySelector(".menuBtn");
let whereBtn = document.querySelector(".whereBtn");
let homeBtn = document.querySelector(".homeBtn");
let change = document.querySelector(".change");
let btnResponsive = document.querySelector(".btn");
let check = document.querySelector(".check");

let btnValue = false;

homeBtn.addEventListener("click",function(){
    window.scrollTo(0,0);
})
aboutBtn.addEventListener("click",function(){
    let divTop = about.offsetTop;
    window.scrollTo(0,divTop-80);
})
menuBtn.addEventListener("click",function(){
    let divTop = menu.offsetTop;
    window.scrollTo(0,divTop-80);
})
whereBtn.addEventListener("click",function(){
    let divTop = where.offsetTop;
    window.scrollTo(0,divTop-80);
})


eatContent.hidden = false;
drinkContent.hidden = true;
couleur = ["white","black","#616161"];
eat.style.background = couleur[2];
drink.style.background = couleur[0];

eat.style.color= couleur[0];
drink.style.color= couleur[1];

eat.addEventListener("click",function(){
    eatContent.hidden = false;
    drinkContent.hidden = true;
    eat.style.color= couleur[0];
    drink.style.color= couleur[1];
    drink.style.background = couleur[0];
    eat.style.background = couleur[2];
    
})
drink.addEventListener("click",function(){
    eatContent.hidden = true;
    drinkContent.hidden = false;
    eat.style.color= couleur[1];
    drink.style.color= couleur[0];
    drink.style.background = couleur[2];
    eat.style.background = couleur[0];
})

btnResponsive.addEventListener("click", ()=> {
    btnValue = !btnValue;

    if(btnValue){
        check.style.left = "0";
    }else{
        check.style.left = "-100%";
    }
})



