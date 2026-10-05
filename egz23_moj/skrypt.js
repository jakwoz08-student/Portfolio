let button  = document.querySelector("input[type='button']");

button.addEventListener('click', (e)=>{
    e.preventDefault();
    let plik = document.querySelector("#nazwa_pliku");
    let kolor = document.querySelector("#kolor");
    let cena = document.querySelector("#cena");

    let plik_nazwa = plik.files[0].name;
    //pamietaj jak te pliki input type file obslugiwac

    alert(`Wzór: ${plik_nazwa}, kolor ${kolor.value} w cenie ${cena.value} zł"`);
    //PAMIETAJ O VLAUE JAK TO DZIALA
    //PAMUETAJ JAK TEN ALERT DZIAL ON JEST KOMUKATEM OD WISTLA KOMNIKAT
    let obraz = document.createElement("img");

    obraz.setAttribute('src',plik_nazwa);
    obraz.setAttribute('alt',plik_nazwa);
    obraz.setAttribute('class','miniatury');

    let rodzic = document.querySelector("article section");
    //tak lamie po zalesco css

    rodzic.append(obraz);
});