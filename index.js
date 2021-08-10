let firstSpan = document.querySelector(".first-span");
let secondSpan = document.querySelectorAll(".second-span");
let pahestayin = document.querySelectorAll(".pahestayin-span");
let Big = document.querySelectorAll(".big");
var count = -1;
var countForB = 0;
var countForC = 0;
var countForD = 0;
var countForE = 0;
var countForF = 0;
a();
function circle(i){
    Big[i].children[1].classList.add("first-div");
    Big[i].children[1].firstChild.classList.add("first-span");
    setTimeout(()=>{secondSpan[i].innerHTML = "" + (countForB);},700);
    setTimeout(()=>{pahestayin[i].innerHTML = "" + (countForB)},400);
    setTimeout(()=>{ Big[i].children[1].firstChild.innerHTML = "" + (countForB);},500);
    setTimeout(()=>{
        Big[i].children[1].classList.remove("first-div");
        Big[i].children[1].firstChild.classList.remove("first-span");
    },1300);
    return;
}
function circleSecond(i){
    Big[i].children[1].classList.add("first-div");
    Big[i].children[1].firstChild.classList.add("first-span");
    setTimeout(()=>{secondSpan[i].innerHTML = "" + (countForC);},700);
    setTimeout(()=>{pahestayin[i].innerHTML = "" + (countForC)},400);
    setTimeout(()=>{ Big[i].children[1].firstChild.innerHTML = "" + (countForC);},500);
    setTimeout(()=>{
        Big[i].children[1].classList.remove("first-div");
        Big[i].children[1].firstChild.classList.remove("first-span");
    },1300);
    return;
}
function circleThird(i){
    Big[i].children[1].classList.add("first-div");
    Big[i].children[1].firstChild.classList.add("first-span");
    setTimeout(()=>{secondSpan[i].innerHTML = "" + (countForD);},700);
    setTimeout(()=>{pahestayin[i].innerHTML = "" + (countForD)},400);
    setTimeout(()=>{ Big[i].children[1].firstChild.innerHTML = "" + (countForD);},500);
    setTimeout(()=>{
        Big[i].children[1].classList.remove("first-div");
        Big[i].children[1].firstChild.classList.remove("first-span");
    },1300);
    return;
}
function circleForth(i){
    Big[i].children[1].classList.add("first-div");
    Big[i].children[1].firstChild.classList.add("first-span");
    setTimeout(()=>{secondSpan[i].innerHTML = "" + (countForE);},700);
    setTimeout(()=>{pahestayin[i].innerHTML = "" + (countForE)},400);
    setTimeout(()=>{ Big[i].children[1].firstChild.innerHTML = "" + (countForE);},500);
    setTimeout(()=>{
        Big[i].children[1].classList.remove("first-div");
        Big[i].children[1].firstChild.classList.remove("first-span");
    },1300);
    return;
}
function circleFifth(i){
    Big[i].children[1].classList.add("first-div");
    Big[i].children[1].firstChild.classList.add("first-span");
    setTimeout(()=>{secondSpan[i].innerHTML = "" + (countForF);},700);
    setTimeout(()=>{pahestayin[i].innerHTML = "" + (countForF)},400);
    setTimeout(()=>{ Big[i].children[1].firstChild.innerHTML = "" + (countForF);},500);
    setTimeout(()=>{
        Big[i].children[1].classList.remove("first-div");
        Big[i].children[1].firstChild.classList.remove("first-span");
    },1300);
    return;
}
function a(){
    //firstSpan.innerHTML = "" + (count + 1);
    // setTimeout(()=>{secondSpan.innerHTML = "" + (count);},1000);
    if(count === 9){
        count = -1;
        countForB++;
        if(countForB === 6){
            countForB = 0;
            countForC++;
            if(countForC === 9){
                count = -1;
                countForB = 0;
                countForC = 0;
                countForD++;
                if(countForD === 6){
                    count = -1;
                    countForB = 0;
                    countForC = 0;
                    countForD = 0;
                    countForE++;
                    if(countForE === 9){
                        count = -1;
                        countForB = 0;
                        countForC = 0;
                        countForD = 0;
                        countForE = 0;
                        countForF++;
                        if(countForF === 2){
                            count = -1;
                            countForB = 0;
                            countForC = 0;
                            countForD = 0;
                            countForE = 0;
                            countForF = 0;
                            circle(4);
                            circleSecond(3);
                            circleThird(2);
                            circleForth(1);
                            circleFifth(0);
                            a();
                            return;
                        }
                        circle(4);
                        circleSecond(3);
                        circleThird(2);
                        circleForth(1);
                        circleFifth(0);
                        a();
                        return;
                    }
                    circle(4);
                    circleSecond(3);
                    circleThird(2);
                    circleForth(1);
                    a();
                    return;
                }
                circle(4);
                circleSecond(3);
                circleThird(2);
                a();
                return;
            }
            circle(4);
            circleSecond(3);
            a();
            return;
        }
        a();
        circle(4);
        return;
    }
    setTimeout(()=>{secondSpan[5].innerHTML = "" + count;},700);
    setTimeout(()=>{pahestayin[5].innerHTML = "" + count;},10);
    setTimeout(()=>{firstSpan.innerHTML = "" + count;},500);
    setTimeout(a,2000);
    count++;
    return;
}
// function b(){
//     if(countForB === 6){
//         countForB = 0;
//         count = -1;
//         a();
//         return;
//     }
//     Big[4].children[1].classList.add("first-div");
//     Big[4].children[1].firstChild.classList.add("first-span");
//     setTimeout(()=>{secondSpan[4].innerHTML = "" + (countForB);},700);
//     setTimeout(()=>{pahestayin[4].innerHTML = "" + (countForB);},400);
//     setTimeout(()=>{Big[4].children[1].firstChild.innerHTML = "" + (countForB);},500);
//     setTimeout(()=>{
//         Big[4].children[1].classList.remove("first-div");
//         Big[4].children[1].firstChild.classList.remove("first-span");
//     },2000);
//     //countForB++;
//     return;
// }
// function c(){
//     Big[3].children[1].classList.add("first-div");
//     Big[3].children[1].firstChild.classList.add("first-span");
//     setTimeout(()=>{secondSpan[3].innerHTML = "" + (countForC);},700);
//     setTimeout(()=>{pahestayin[3].innerHTML = "" + (countForC)},400);
//     setTimeout(()=>{ Big[3].children[1].firstChild.innerHTML = "" + (countForC);},500);
//     setTimeout(()=>{
//         Big[3].children[1].classList.remove("first-div");
//         Big[3].children[1].firstChild.classList.remove("first-span");
//     },1300);
//     countForC++;
//     a();
//     return;
// }