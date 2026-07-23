// ==============================
// POS KPI Storage
// ==============================


const STORAGE_KEY = "POS_KPI_DATA";



const defaultData = {

    storeName: "",

    managerName: "",

    inputs: {}

};



// ==============================
// 데이터 가져오기
// ==============================

function getData(){


    const data =
    localStorage.getItem(
        STORAGE_KEY
    );


    if(!data){

        return structuredClone(defaultData);

    }



    try{

        return JSON.parse(data);

    }
    catch{

        return structuredClone(defaultData);

    }


}




// ==============================
// 저장
// ==============================

function saveStorage(){


    const data =
    getData();



    const store =
    document.getElementById(
        "storeName"
    );


    const manager =
    document.getElementById(
        "managerName"
    );



    if(store){

        data.storeName =
        store.value;

    }



    if(manager){

        data.managerName =
        manager.value;

    }




    document
    .querySelectorAll(
        "input, textarea"
    )
    .forEach(element=>{


        if(element.id){

            data.inputs[element.id] =
            element.value;

        }


    });



    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );


}




// ==============================
// 불러오기
// ==============================

function loadStorage(){


    const data =
    getData();



    const store =
    document.getElementById(
        "storeName"
    );


    const manager =
    document.getElementById(
        "managerName"
    );



    if(store){

        store.value =
        data.storeName || "";

    }



    if(manager){

        manager.value =
        data.managerName || "";

    }



    Object.keys(
        data.inputs
    )
    .forEach(id=>{


        const el =
        document.getElementById(id);



        if(el){

            el.value =
            data.inputs[id];

        }


    });


}




// ==============================
// 자동 저장
// ==============================

function autoSave(){


    document
    .querySelectorAll(
        "input, textarea"
    )
    .forEach(element=>{


        element.addEventListener(
            "input",
            ()=>{


                saveStorage();


            }
        );


    });


}




// ==============================
// 월초 초기화
// ==============================

function clearStorage(){


    if(
        !confirm(
            "누적 데이터를 초기화할까요?"
        )
    ){

        return;

    }



    localStorage.removeItem(
        STORAGE_KEY
    );


    location.reload();


}