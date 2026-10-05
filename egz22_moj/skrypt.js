//tutaj sa 2 skrypty ale to dawaj se zawsze do 1 pliku z js

//skrypt 1

let pole_obrazow  =document.querySelector(".punkt_odniesenia");

for(let i=1;i<=10;i++){
    let nazwa_plik = `${i}.jpg`;//tak sobie generuje nazwe dynamicznie bo jest ich 10 i musze etli to robic
    let obraz = document.createElement("img");
    obraz.setAttribute('src',nazwa_plik);
    obraz.setAttribute('title',i);
    obraz.setAttribute('class','wzory');

    pole_obrazow.before(obraz);//dodaje na koniec tej skecji od wzorow czyli obrazow
}
let idz_w_dol = document.createElement("br");
pole_obrazow.before(idz_w_dol);//musze to dodac aby to wygladalo tak jak tam chcieli
//skrypt 2

let przycisk1 = document.querySelector(".przycisk1");
let przycisk2 = document.querySelector(".przycisk2");
let przycisk3 = document.querySelector(".przycisk3");

let sekcja1 = document.querySelector(".sekcja1");
let sekcja2 = document.querySelector(".sekcja2");
let sekcja3 = document.querySelector(".sekcja3");

//PAMIETAJ O TAKIM ZDARZENIU JAK MOUSEOVER CZYLI PO
//NAJECHAMIU BO NIE ZAWSZE MUSI BYC PO CLIKNIECIUE

przycisk1.addEventListener('mouseover',(e)=>{
    e.preventDefault();//pamietaj aby to zostal a nie bylo na chwile
    sekcja1.setAttribute('class','widoczny');
    sekcja2.setAttribute('class','ukryty');
    sekcja3.setAttribute('class','ukryty');

    //PAMITAJ JAK TEOG CAMMELCASE ZAPISAC I ZEBY TEGO UZYWAC TO POBERZ STYLE OBIEKT NA EL TRZEBA SIE TAM DOSTAC PATRZ NIZEJ PAMIETAJ O TYM
    przycisk1.style.backgroundColor="Salmon";
    przycisk2.style.backgroundColor="Crimson";
    przycisk3.style.backgroundColor="Crimson";
});

przycisk2.addEventListener('mouseover',(e)=>{
    e.preventDefault();//pamietaj aby to zostal a nie bylo na chwile
    sekcja1.setAttribute('class','ukryty');
    sekcja2.setAttribute('class','widoczny');
    sekcja3.setAttribute('class','ukryty');

    //PAMITAJ JAK TEOG CAMMELCASE ZAPISAC
    przycisk1.style.backgroundColor="Crimson";
    przycisk2.style.backgroundColor="Salmon";
    przycisk3.style.backgroundColor="Crimson";
});

przycisk3.addEventListener('mouseover',(e)=>{
    e.preventDefault();//pamietaj aby to zostal a nie bylo na chwile
    sekcja1.setAttribute('class','ukryty');
    sekcja2.setAttribute('class','ukryty');
    sekcja3.setAttribute('class','widoczny');

    //PAMITAJ JAK TEOG CAMMELCASE ZAPISAC
    przycisk1.style.backgroundColor="Crimson";
    przycisk2.style.backgroundColor="Crimson";
    przycisk3.style.backgroundColor="Salmon";
});