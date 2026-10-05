let button = document.querySelector("input[type='button']");//pamietaj jak lapac bo sekktorach css

button.addEventListener("click", function(e){
    e.preventDefault();//zeby do razu niekasoalo ale to sprawdz
    let check1 = document.querySelector("#check1");
    let check2 = document.querySelector("#check2");
    let ile_rat = document.querySelector("#numer1");
    let miasto = document.querySelector("select");//lapie jak po selektorze css pamietaj jak to dziala
    
    let calkowita_kwota=0;//wartosc poczatkowa

    // pamietaj jak sprawdzac skalodwe tych kontrolek
    //pamietaj dla text zwyklego selct czy input numer to .value
    //a dla checkboxa to checked trzeba sprawdzi na teue false apmeitaj o tym

    //a options jest dla selcta w trybie multiple

    if(check1.checked){//jelsi zostal wybrany
        calkowita_kwota+=5000;//tyle kosztuje ten kurs
    }
    if(check2.checked){//jelsi zostal wybrany na 2 ify bo zeby mogly
        //byc 2 wybrane i tka ez jest w poleniu dany przyklad   
        calkowita_kwota+=3000;
    }
    let ile_rata = calkowita_kwota/ile_rat.value;//PAMIETAJ TRZEBA VALUE UZYAC SAMO LACZNIK NIE WYSTARCZY

    let pole_wynik = document.querySelector(".wynik");//p po clasie bo sa 2 temu tak i moge tak

    pole_wynik.textContent=`Kurs odbedzie sie w: ${miasto.value}. Koszt całkowity ${calkowita_kwota}zł . Płacisz: ${ile_rat.value} rat po ${ile_rata}zł`;
    //wystarczy tak bo daje smae info
    // PAMIETAJ JAK DZIAL TEN TEXT CONTENT W SESNIE JAK ZMIENIE TAM DAWAC
    //CZYLI TNE ${} PAMIETAJ O TYM I O TYM ZE TA TYLDA ` MUSI BYC UZYWANA  PAMIETAJ JAK TO DZIALA
});