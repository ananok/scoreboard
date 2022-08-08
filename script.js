let scoreH=document.getElementById("home-sc")
let scoreG=document.getElementById("guest-sc")
let count=0
let count2=0


function plusOne(){
    count++
    scoreH.innerHTML=count
}

function plusTwo(){
    count=count+2
    scoreH.innerHTML=count
}

function plusThree(){
    count=count+3
    scoreH.innerHTML=count
}

function plusOne1(){
    count2++
    scoreG.innerHTML=count2
}

function plusTwo2(){
    count2=count2+2
    scoreG.innerHTML=count2
}

function plusThree3(){
    count2=count2+3
    scoreG.innerHTML=count2
}

function reset(){
    count=0
    count2=0
    scoreG.innerHTML=count2;
    scoreH.innerHTML=count

}