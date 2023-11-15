function Rowmaker(teszt: any, bemenet: any, elvart: any, eredmeny: any) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.appendChild(document.createTextNode(teszt));
    td2.appendChild(document.createTextNode(bemenet));
    td3.appendChild(document.createTextNode(elvart));
    td4.appendChild(document.createTextNode(eredmeny));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    var tabla: any = document.getElementById("torzs");
    tabla.appendChild(tr);
}



var szamtomb: number[] = [12, 23, -5, 4];


function vaneminusz(szamtomb: number[]): boolean {
    var logikai: boolean = true;
    var minszam: number = szamtomb[0];

    for (var i: number = 1; i < szamtomb.length; i++) {
        if (szamtomb[i] < minszam) {
            minszam = szamtomb[i];
        }
    }
    if (minszam > -1) {
        logikai = false;
    }
    return logikai;
};


document.write(vaneminusz(szamtomb).toString());



var sugar: number = 3;
function kkt(sugar: number): number[] {

    var keruletterulet: [number, number] = [sugar * 2 * 3.14, sugar * sugar * 3.14];
    var kerulet: number = keruletterulet[0];
    var terulet: number = keruletterulet[1];


    return [kerulet, terulet];
};


document.write(kkt(sugar).toString());



/*var keruletterulet: [number, number] = [sugar * 2 * 3.14, sugar * sugar * 3.14];
var kerulet: number = keruletterulet[0];
var terulet: number = keruletterulet[1];

document.write((kerulet).toString());
document.write((terulet).toString());
document.write((keruletterulet).toString());*/

interface Auto {
    gyarto: string;
    tipus: string;
    hengerurtartalom: number;
    benzinese: boolean;
}



var auto1: Auto = {
    gyarto: "Skoda",
    tipus: "Fabia",
    hengerurtartalom: 1400,
    benzinese: true
};

console.log(auto1);

var auto2: Auto = {
    gyarto: "Opel",
    tipus: "Astra",
    hengerurtartalom: 1000,
    benzinese: true
};
var auto3: Auto = {
    gyarto: "Tesla",
    tipus: "Akarmi",
    hengerurtartalom: 0,
    benzinese: false
};



var autok: Auto[] = [auto1, auto2, auto3];





function minhenger(autok: Auto[]): Auto {
    var minauto: Auto = autok[0];
    for (let i = 0; i < autok.length; i++) {

        if (autok[i].hengerurtartalom < minauto.hengerurtartalom) {

            minauto = autok[i]

        }
    }

    return minauto;
}
console.log(minhenger(autok));

function benzinesdb(autok: Auto[]): number {
    var db: number = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinese) {
            db++;
        }
    }
    return db;
}

var minhengerszoveg: string = JSON.stringify(minhenger(autok));

function atlaghenger(autok: Auto[]): number {
    var atlag: number = 0;
    for (var i: number = 0; i < autok.length; i++) {
        atlag = atlag + autok[i].hengerurtartalom

    }

    return atlag / autok.length;
}

function vanebenzines(autok: Auto[]): boolean {
    var valasz: boolean = false;
    for (var i: number = 0; i < autok.length; i++) {
        if (autok[i].benzinese) {
            valasz = true;
        }

    }

    return valasz;
}

function benzineslista(autok: Auto[]): Auto[] {
    let aktbenzines: Auto[] = [];


    for (let i: number = 0; i < autok.length; i++) {
        if (autok[i].benzinese) {
            aktbenzines.push(autok[i]);
        }

    }

    console.log(aktbenzines);
    return aktbenzines;

}

var benzines: Auto[] = benzineslista(autok);


var benzinesszoveg: string = JSON.stringify(benzines);


function nembenzineslista(autok: Auto[]): Auto[] {
    let aktnembenzines: Auto[] = [];


    for (let i: number = 0; i < autok.length; i++) {
        if (autok[i].benzinese = false) {
            aktnembenzines.push(autok[i]);
        }

    }


    return aktnembenzines;

}

var nembenzines: Auto[] = nembenzineslista(autok);


var nembenzinesszoveg: string = JSON.stringify(nembenzines);


function Tesztek() {

    Rowmaker("Van e minusz", szamtomb, "Igaz kene legyen", vaneminusz(szamtomb));
    Rowmaker("Kor kerulet, terulet", "A kor sugara: " + sugar, "Kerulet: 18.84, Terulet: 28.26", kkt(sugar));
    Rowmaker("Legkisebb hengeres auto", "3 auto van", "Elvileg a teszla", minhengerszoveg);
    Rowmaker("Benzinesek szama", "A 3 auto", "Elvileg 2", benzinesdb(autok));
    Rowmaker("Atlagos hengerurtartalom", "A 3 auto", "Elvileg 800", atlaghenger(autok));
    Rowmaker("Van-e benzines", "A 3 auto", "Elvileg van", vanebenzines(autok));
    Rowmaker("Benzines lista", "A 3 auto", "2 auto", benzinesszoveg);
    Rowmaker("NemBenzines lista", "A 3 auto", "1 auto", nembenzinesszoveg);

}

Tesztek();