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
    gyarto: string,
    tipus: string,
    hengerurtartalom: number,
    benzinese: boolean
}

var auto1: Auto = { gyarto: "Skoda", tipus: "Fabia", hengerurtartalom: 1400, benzinese: true };

function Tesztek() {

    Rowmaker("Van e minusz", szamtomb, "Igaz kene legyen", vaneminusz(szamtomb));
    Rowmaker("Kor kerulet, terulet", "A kor sugara: " + sugar, "Kerulet: 18.84, Terulet: 28.26", kkt(sugar));


}

Tesztek();