document.addEventListener(
"DOMContentLoaded",
()=>{


// ==============================
// +/- 버튼
// ==============================


document.querySelectorAll(".plus")
.forEach(btn=>{


btn.addEventListener(
"click",
()=>{


const id =
btn.dataset.target;


const input =
document.getElementById(id);



if(input){


input.value =
Number(input.value || 0) + 1;


input.dispatchEvent(
new Event("input")
);


}



});


});





document.querySelectorAll(".minus")
.forEach(btn=>{


btn.addEventListener(
"click",
()=>{


const id =
btn.dataset.target;


const input =
document.getElementById(id);



if(input){


let value =
Number(input.value || 0)-1;



if(value < 0){

value = 0;

}



input.value=value;



input.dispatchEvent(
new Event("input")
);



}



});


});






// ==============================
// 월초 초기화
// ==============================


const reset =
document.getElementById("resetMonth");



if(reset){


reset.addEventListener(
"click",
()=>{


if(
confirm(
"모든 누적 데이터를 초기화할까요?"
)

){



document
.querySelectorAll(
"input, textarea"
)
.forEach(el=>{


if(
el.type==="number" ||
el.tagName==="TEXTAREA"
){

el.value="0";


}



});




document.getElementById("outsideWork").value="";



if(
typeof calculateAll==="function"
){

calculateAll();

}



alert(
"초기화 완료"
);



}



});



}






// ==============================
// 날짜 기본값
// ==============================


const date =
document.getElementById("reportDate");



if(date && !date.value){


const today =
new Date();


date.value =
today.toISOString()
.slice(0,10);


}






// ==============================
// 최초 계산
// ==============================


if(
typeof calculateAll==="function"
){

calculateAll();

}



});