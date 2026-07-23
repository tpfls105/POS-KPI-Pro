// ==============================
// POS KPI Calculator
// ==============================


// 숫자 변환
function num(id){

    const el = document.getElementById(id);

    if(!el) return 0;

    return Number(el.value || 0);

}



// 화면 출력
function setText(id,value){

    const el=document.getElementById(id);

    if(el){

        el.innerText=value;

    }

}





// ==============================
// 모바일 판매 계산
// ==============================

function calcMobile(){


    // 총판매
    const total =

        num("mnp") +

        num("new010") +

        num("change115") +

        num("change85") +

        num("senior") +

        num("youth") +

        num("lvc") +

        num("used1") +

        num("used05") +

        num("second");



    setText(
        "totalSaleResult",
        total
    );



    // MNP
    setText(
        "mnpResult",
        num("mnp")
    );



    return total;


}





// ==============================
// 매출 포인트 계산
// ==============================

function calcPoint(){


    let point = 0;



    // MNP
    point += num("mnp") * 1;



    // 신규
    point += num("new010") * 1;



    // 고가 기변
    point += num("change115") * 1;



    point += num("change85") * 0.5;



    point += num("senior") * 0.5;



    point += num("youth") * 0.5;



    point += num("lvc") * 0.5;



    // 중고MNP
    point += num("used1") * 1;

    point += num("used05") * 0.5;



    point += num("second") * 0.5;




    point =
        Math.round(point*10)/10;



    setText(
        "pointResult",
        point.toFixed(1)
    );



    return point;


}





// ==============================
// 예상 판매
// ==============================

function calcExpected(){



    const acc =
        num("totalSaleAcc");



    const today =
        Number(
            document.getElementById("totalSaleResult")?.innerText || 0
        );



    // 현재 누적 + 오늘 * 남은 예상치
    const expected =
        acc + today;



    setText(
        "expectedSale",
        expected
    );



}





// ==============================
// 예상 인터넷
// ==============================

function calcInternet(){


    const acc =
        num("internetAcc");



    const today =
        num("internetContract");



    setText(
        "expectedInternet",
        acc + today
    );



}





// ==============================
// 전체 계산
// ==============================

function calculateAll(){


    calcMobile();

    calcPoint();

    calcExpected();

    calcInternet();


}






// ==============================
// 입력 감지
// ==============================


document.addEventListener(
"input",
function(e){


    if(
        e.target.matches(
            "input, textarea"
        )
    ){

        calculateAll();

    }


});





// 초기 실행

document.addEventListener(
"DOMContentLoaded",
()=>{

    calculateAll();

});