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

var minhengerszoveg: string = JSON.stringify(minhenger(autok));

function benzinesdb(autok: Auto[]): number {
    var db: number = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinese) {
            db++;
        }
    }
    return db;
}



function atlaghenger(autok: Auto[]): number {
    var atlag: number = 0;
    for (var i: number = 0; i < autok.length; i++) {
        atlag = atlag + autok[i].hengerurtartalom

    }
    atlag = atlag / autok.length;
    return atlag;
}

function vanebenzines(autok: Auto[]): boolean {
    var valasz: boolean = false;
    for (var i: number = 0; i < autok.length; i++) {
        if (autok[i].benzinese == true) {
            valasz = true;
        }

    }

    return valasz;
}

function szetvalogato(autok: Auto[]): [Auto[], Auto[]] {
    var benzinesek: Auto[] = [];
    var nembenzinesek: Auto[] = [];

    for (var i: number = 0; i < autok.length; i++) {
        if (autok[i].benzinese == true) {
            benzinesek.push(autok[i]);
        }
        else {
            nembenzinesek.push(autok[i]);
        }
    }

    return [benzinesek, nembenzinesek];
}


var benzinesszoveg: string = JSON.stringify(szetvalogato(autok)[0]);
var nembenzinesszoveg: string = JSON.stringify(szetvalogato(autok)[1]);

function maxhengergyarto(autok: Auto[]): string {
    var maxauto: Auto = autok[0];
    for (let i: number = 0; i < autok.length; i++) {

        if (autok[i].hengerurtartalom > maxauto.hengerurtartalom) {

            maxauto = autok[i];

        }
    }

    return maxauto.gyarto;
}

function egeszhenger(autok: Auto[]): Auto[] {
    var autolista: Auto[] = [];
    for (let i: number = 0; i < autok.length; i++) {

        if (autok[i].hengerurtartalom % 1 == 0) {

            autolista.push(autok[i])

        }
    }

    return autolista;
}

var egeszhengerszoveg: string = JSON.stringify(egeszhenger(autok));

function minhenger2(autok: Auto[]): Auto {
    var minauto2: Auto = autok[0];
    for (let i = 0; i < autok.length; i++) {

        if (autok[i].hengerurtartalom < minauto2.hengerurtartalom) {

            minauto2 = autok[i]

        }
    }

    return minauto2;
}


var minhengerszoveg2: string = JSON.stringify(minhenger2(autok));

function minhengergyartotipus(autok: Auto[]): [string, string] {
    var minautogyt: Auto = autok[0];
    for (let i = 0; i < autok.length; i++) {

        if (autok[i].hengerurtartalom < minautogyt.hengerurtartalom) {

            minautogyt = autok[i]

        }
    }

    return [minautogyt.gyarto, minautogyt.tipus];
}






function Tesztek() {

    Rowmaker("Van e minusz", szamtomb, "Igaz kene legyen", vaneminusz(szamtomb));
    Rowmaker("Kor kerulet, terulet", "A kor sugara: " + sugar, "Kerulet: 18.84, Terulet: 28.26", kkt(sugar));
    Rowmaker("Legkisebb hengeres auto", "3 auto van", "Elvileg a teszla", minhengerszoveg);
    Rowmaker("Benzinesek szama", "A 3 auto", "Elvileg 2", benzinesdb(autok));
    Rowmaker("Atlagos hengerurtartalom", "A 3 auto", "Elvileg 800", atlaghenger(autok));
    Rowmaker("Van-e benzines", "A 3 auto", "Elvileg van", vanebenzines(autok));
    Rowmaker("Benzines lista", "A 3 auto", "2 auto", benzinesszoveg);
    Rowmaker("NemBenzines lista", "A 3 auto", "1 auto", nembenzinesszoveg);
    Rowmaker("Max hengerurtartalmu auto gyartoja", "A 3 auto", "Elvileg a Skoda", maxhengergyarto(autok));
    Rowmaker("Egeszhengerszamu autok", "A 3 auto", "Elvileg az osszes", egeszhengerszoveg);
    Rowmaker("Legkisebb hengeres auto megegyszer", "3 auto van", "Elvileg a teszla", minhengerszoveg2);
    Rowmaker("Legkisebb hengeres auto gyarto+tipus", "3 auto van", "Elvileg a teszla es akarmi", minhengergyartotipus(autok));

}

Tesztek();