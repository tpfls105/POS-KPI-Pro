document.addEventListener(
"DOMContentLoaded",
()=>{


const btn =
document.getElementById("generateReport");


if(!btn) return;



btn.addEventListener(
"click",
()=>{


const store =
document.getElementById("storeName").value || "";

const manager =
document.getElementById("managerName").value || "";



let date =
document.getElementById("reportDate").value;



if(!date){

    const now = new Date();

    date =
    now.toISOString().slice(0,10);

}



date =
date
.replaceAll("-",".")
.substring(2);





const report =

`▶ 【${date} POS 마감 보고】
 - ${store} / ${manager} 점장

▶ 모바일 KPI
- 총판매(당일/누적/예상) : ${
document.getElementById("totalSaleResult").innerText
} / ${
document.getElementById("totalSaleAcc").value || 0
} / ${
document.getElementById("expectedSale").innerText
}
- MNP(당일/누적) : ${
document.getElementById("mnp").value
} / ${
document.getElementById("mnpAcc").value || 0
}
- 매출포인트(당일/누적) : ${
document.getElementById("pointResult").innerText
} / ${
document.getElementById("pointAcc").value || 0
}
- 맞춤제안(당일/누적) : ${
document.getElementById("customToday").value || 0
} / ${
document.getElementById("customAcc").value || 0
}
- 중고MNP(당일/누적) : ${
Number(document.getElementById("used1").value)
+
Number(document.getElementById("used05").value)
} / ${
document.getElementById("usedAcc").value || 0
}

▶ 홈 KPI
- 인터넷(청약/설치/예상) : ${
document.getElementById("internetContract").value || 0
} / ${
document.getElementById("internetInstall").value || 0
} / ${
document.getElementById("expectedInternet").innerText
}
- 티비프리(당일/누적) : ${
document.getElementById("tvFree").value || 0
} / ${
document.getElementById("tvFreeAcc").value || 0
}
- 스마트홈(당일/누적) : ${
document.getElementById("smartHome").value || 0
} / ${
document.getElementById("smartAcc").value || 0
}

▶ 기본기 KPI
- 고객민원(당일/누적) : ${
document.getElementById("complainToday")?.value || 0
} / ${
document.getElementById("complainAcc")?.value || 0
}
- T-nps(점수/응답률) : ${
document.getElementById("tnpsScore").value || 0
} / ${
document.getElementById("tnpsRate").value || "0%"
}
- 매장 LEVEL : ${
document.getElementById("level").value || ""
}
- 표준화점검 : ${
document.getElementById("standard").value || ""
}

▶ 구조 KPI
- UCRM(타사/누적) : ${
document.getElementById("ucrmToday").value || 0
} / ${
document.getElementById("ucrmAcc").value || 0
}
- 총원(현재/TO) : ${
document.getElementById("memberNow").value || 0
} / ${
document.getElementById("memberTo").value || 0
}
- 인당생산성(마감예상기준) : ${
document.getElementById("productivity").value || 0
}
- 내방객(금일/누적) : ${
document.getElementById("visitorToday").value || 0
} / ${
document.getElementById("visitorAcc").value || 0
}

▶ 예약가입 등록(등록수/목표) : ${
document.getElementById("reserveCount").value || 0
} / ${
document.getElementById("reserveGoal").value || 0
}

* 무실적 활동보고(무성과포스만 작성)
OB콜 : ${
document.getElementById("obCall").value || ""
}건 / 내방약속 : ${
document.getElementById("visitPromise").value || ""
}건
외부활동 : ${
document.getElementById("outsideWork").value || ""
}`




document.getElementById("report").value =
report;



});





// 복사 버튼

const copy =
document.getElementById("copyReport");


if(copy){


copy.addEventListener(
"click",
()=>{


const text =
document.getElementById("report").value;


navigator.clipboard.writeText(text);


alert("마감보고 복사 완료");


});


}



});