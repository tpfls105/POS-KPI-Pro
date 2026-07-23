// ==============================
// POS KPI UI Controller
// ==============================



// ==============================
// 계산 실행
// ==============================

function triggerCalculate(){

    if(typeof calculateKPI === "function"){

        calculateKPI();

    }

}




// ==============================
// 결과 표시 보조
// ==============================

function updateUI(){

    triggerCalculate();

}




// ==============================
// 초기 실행
// ==============================

function initUI(){


    updateUI();


}