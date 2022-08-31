//Alapérték felvétele
let count=0;

//Gombok és egyéb elemek eltárolása változokba
const value=document.getElementById("value");
const btns=document.querySelectorAll(".btn");
//const decrease=document.getElementById("decrease");
//const reset=document.getElementById("reset");
//const increase=document.getElementById("increase");

//Ciklussal végig lépkedek az eltárolt gombokon amelyeken rajta van a btn class
btns.forEach((btn)=>{ 

    // Az összes gomb közül, amelyeket bejárok a cuklussal, azt kattintom meg amelyik az aktuális ciklusfutásban jön a sorba (elsö ciklusfutés -> 0, indexü gomb (decrease)stb...)
    btn.addEventListener("click",(e)=>{

        //Az éppen aktuális megkattintott gombon milyen class/classok vannak
        const style=e.currentTarget.classList;

        //Ha az aktuálisan megkattintott gombok classai közül tartalmazza a "decrease" classt
        if(style.contains("decrease")){

            //Csökkentjük az alapértéket
            count--;
        }
        //Ha az aktuálisan megkattintott gombok classai közül tartalmazza a "increase" classt
        else if(style.contains("increase")){
            
            //Növeljük az alapértéket
            count++;
        }
        //Ha ezek közül egyik sem akkor marad a "reset class"
        else{

            //Visszaállítjuk az alapértéket
            count=0;
        }

        //Szinek hozzáadása spanhez
        if(count>0){
            value.style.color="green";
        }

        else if(count<0){
            value.style.color="red";
        }

        else{
            value.style.color="black";
        }


        value.textContent=count;
    })
})