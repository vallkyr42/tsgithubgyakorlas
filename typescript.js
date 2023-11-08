function Rowmaker(teszt, bemenet, elvart, eredmeny) {
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
    var tabla = document.getElementById("torzs");
    tabla.appendChild(tr);
}
var szamtomb = [12, 23, -5, 4];
function vaneminusz(szamtomb) {
    var logikai = true;
    var minszam = szamtomb[0];
    for (var i = 1; i < szamtomb.length; i++) {
        if (szamtomb[i] < minszam) {
            minszam = szamtomb[i];
        }
    }
    if (minszam > -1) {
        logikai = false;
    }
    return logikai;
}
;
document.write(vaneminusz(szamtomb).toString());
var sugar = 3;
function kkt(sugar) {
    var keruletterulet = [sugar * 2 * 3.14, sugar * sugar * 3.14];
    var kerulet = keruletterulet[0];
    var terulet = keruletterulet[1];
    return [kerulet, terulet];
}
;
document.write(kkt(sugar).toString());
var auto1 = { gyarto: "Skoda", tipus: "Fabia", hengerurtartalom: 1400, benzinese: true };
var auto2 = { gyarto: "Opel", tipus: "Astra", hengerurtartalom: 1000, benzinese: true };
var auto3 = { gyarto: "Tesla", tipus: "Akarmi", hengerurtartalom: 0, benzinese: false };
var autok = [auto1, auto2, auto3];
function minhenger(autok) {
    var minauto = autok[0];
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].hengerurtartalom < minauto.hengerurtartalom) {
            minauto = autok[i];
        }
    }
    return minauto;
}
console.log(minhenger(autok));
function benzinesdb(autok) {
    var db = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinese) {
            db++;
        }
    }
    return db;
}
var minhengerszoveg = JSON.stringify(minhenger(autok));
function Tesztek() {
    Rowmaker("Van e minusz", szamtomb, "Igaz kene legyen", vaneminusz(szamtomb));
    Rowmaker("Kor kerulet, terulet", "A kor sugara: " + sugar, "Kerulet: 18.84, Terulet: 28.26", kkt(sugar));
    Rowmaker("Legkisebb hengeres auto", "3 auto van", "Elvileg a teszla", minhengerszoveg);
    Rowmaker("Benzinesek szama", "A 3 auto", "Elvileg 2", benzinesdb(autok));
}
Tesztek();
