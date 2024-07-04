'use strict';
// Program do dodawania karty pacjenta. 



// Oblicza rok przejścia na emeryturę na podstawie płci
function obliczEmer(rok,plec){
    rok = Number(rok);
    rok = plec === 'mężczyzna' ? rok +=65 :rok += 60;
    return rok;
}

function obliczPesel(Pesel){
    
    let przedostatniZnak = parseInt(Pesel.charAt(Pesel.length - 2));
    let dataString = String(Pesel);
    //sprawdzanie płci
    const plecPacjenta = (przedostatniZnak % 2 == 1 ) ? 'mężczyzna' : 'kobieta';
    //Sprawdzanie daty urodzenia
    let rok = dataString.substring(0,2);
    let miesiac = dataString.substring(2,4);
    let dzien = dataString.substring(4,6);

    if (miesiac <=12) rok = 19 + rok; 
    else if (miesiac >=21 && miesiac <=32) {
        rok = 20 + rok;
        miesiac -= 20;
    }
    else if (miesiac >=41 && miesiac <=52) {
        rok = 21 + rok;
        miesiac -= 40;
    }
    else if (miesiac >=61 && miesiac <=72) {
        rok = 22 + rok;
        miesiac -= 60;
    }
    else if (miesiac >=81 && miesiac <=92) {
        rok = 23 + rok;
        miesiac -= 80;
    }
    else rok = "err"
    let dataPacjenta = (dzien+"."+miesiac.toString().padStart(2,"0")+"."+rok)
    // 19 + rok 
    let emeryt = obliczEmer(rok, plecPacjenta);
    //obliczanie wieku
    let dane = [plecPacjenta, dataPacjenta, emeryt];
    return dane;
}
 
function kontrola(Pesel){
    
    let Pesel2 = [...Pesel];//.map(cyfra => parseInt(cyfra));
    Pesel2 = Pesel2.map(cyfra => parseInt(cyfra));
    let Popr = 1;
    Popr = ((1*Pesel2[0] + 3*Pesel2[1] + 7*Pesel2[2] + 9*Pesel2[3] + 1*Pesel2[4] + 3*Pesel2[5] + 7*Pesel2[6] + 9*Pesel2[7] + 1*Pesel2[8] + 3*Pesel2[9] + 1*Pesel2[10] ) % 10) == 0 ? Popr=2: Popr=1;
    console.log(`Liczba kontrolna: ${Popr}`);
    return Popr;
}

function walidacjaStr(){
}

function dadajZwierze(){
}




alert('Witaj w portalu pacjenta :) \nPrzejdzmy do procesu tworzenia karty pacjenta.');


//Podanie podstawowych danych
const Imie = prompt('Imię pacjenta:');
const Nazw = prompt('Nazwisko pacjenta:');
const Pesel = prompt('Pesel pacjenta:');

if (kontrola(Pesel) == 1) alert("Error:\nPesel jest nie poprawny!");
else alert("Pesel jest poprawny :)");
//Utworzenie karty pacjenta
let kartaPacjenta = [Imie, Nazw, Pesel];

alert(`Dane pacjenta\nImię: ${kartaPacjenta[0]}\nNazwisko: ${kartaPacjenta[1]}\nPesel: ${kartaPacjenta[2]}`);


//Dodatkowe infomacje pacjenta
let dodatkoweInfo = prompt('Czy dodać dodatkowe informacje pacjenta? (Tak/Nie)');

if (dodatkoweInfo.toLowerCase() == "tak") 
    {
        kartaPacjenta.push(...obliczPesel(Pesel));
        alert(`Dane pacjenta\nImię: ${kartaPacjenta[0]}\nNazwisko: ${kartaPacjenta[1]}\nPesel: ${kartaPacjenta[2]}\nPłeć: ${kartaPacjenta[3]}\nData urodzenia: ${kartaPacjenta[4]}\nData rozpoczęcia emerytury: ${kartaPacjenta[5]}\n`);;
    }
else alert("Zrezygnowano z umieszczania dodatkowych informacji w karcie pacjenta");


//kartaPacjenta = dodatkoweInfo.toLowerCase() == "tak" ? kartaPacjenta.push(obliczPesel(Pesel)):alert("Dodatkowe informacje nie zostaną dodane");


//console.log(kartaPacjenta);

// napisz funkcje i zrób wybór, czy karta ma być rozszerzona o dodatkowe 
//informacje takie jak rok emerytury