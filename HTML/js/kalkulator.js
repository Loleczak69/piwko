//alert("OK :)");

function pole(a,b) {
    let wynik= a*b;
    let element_txtPole= document.getElementById("txtPole");
    element_txtPole.value=wynik;
}

let el_btnOb= document.querySelector("#btnObwod");
// I
/*
el_btnOb.onclick=function(){
    let el_txtA=document.querySelector("#txtA");
    let el_txtB_var =  Number(document.querySelector("#txtB").value);
    let wynik_obw= 2* Number(el_txtA.value) + 2* el_txtB_var;

    // wyswietlenie w div
    let divWyn= document.querySelector("#divWynik");
    divWyn.innerHTML = `Obwód wynosi: <b> ${wynik_obw} </b><br> `;
}*/
el_btnOb.addEventListener("click",function(){
    let el_txtA=document.querySelector("#txtA");
    let el_txtB_var =  Number(document.querySelector("#txtB").value);
    let wynik_obw= 2* Number(el_txtA.value) + 2* el_txtB_var;

    // wyswietlenie w div
    let divWyn= document.querySelector("#divWynik");
    divWyn.innerHTML = `Obwód wynosi: <b> ${wynik_obw} </b><br> `;
});