//Alapérték felvétele
let count=0;

//Gombok és egyéb elemek eltárolása változokba
const value=document.getElementById("value");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
const increase=document.getElementById("increase");

//Egyszerű, lusta módszer
increase.addEventListener("click", ()=>{

        //Növelem az alapértékem 1-el
    count++;

    //Megnézem hogy az alapértékem nagyobb-e mint 0
    if(count > 0){

        //Ha nagyobb, akkor hozzáadok egy zöld betűszínt
       value.style.color="green" ;

    }
     //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott értékét

    value.textContent=count;
})


//Decrease
decrease.addEventListener("click", ()=>{

    //Növelem az alapértékem 1-el
count--;

//Megnézem hogy az alapértékem nagyobb-e mint 0
if(count < 0){

    //Ha nagyobb, akkor hozzáadok egy piros betűszínt
   value.style.color="red" ;

}
 //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott értékét

value.textContent=count;
})


//Reset
reset.addEventListener("click", ()=>{

    //Alapértéket visszaállítom 0-ra
count= 0;


    //Visszaállítom az alap betűszínt
   value.style.color="black";


 //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott értékét

    value.textContent=count;
})