var user = /** @class */ (function () {
    function user() {
        // this.carica = _carica;
        // this.numeroChiamate = _numeroChiamate;
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    user.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    user.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = minutiDurata * 0.20;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log("Chiamata effettuata di ".concat(minutiDurata, " minuti. Costo: ").concat(costoChiamata.toFixed(2), " euro."));
        }
        else {
            console.log("Saldo insufficiente per effettuare la chiamata.");
        }
    };
    user.prototype.numero404 = function () {
        return this.carica.toFixed(2);
    };
    user.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    user.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        console.log("Chiamate azzerate.");
    };
    return user;
}());
var FirstUser = new user();
var SecondUser = new user();
var ThirdUser = new user();
FirstUser.ricarica(50);
SecondUser.ricarica(30);
ThirdUser.ricarica(15);
console.log("Saldo iniziale FirstUser: ".concat(FirstUser.numero404(), " euro"), "Saldo iniziale SecondUser: ".concat(SecondUser.numero404(), " euro"), "Saldo iniziale ThirdUser: ".concat(ThirdUser.numero404(), " euro"));
FirstUser.chiamata(3);
SecondUser.chiamata(9);
ThirdUser.chiamata(2);
FirstUser.chiamata(4);
SecondUser.chiamata(8);
ThirdUser.chiamata(1);
console.log("Saldo residuo FirstUser: ".concat(FirstUser.numero404(), " euro"), "Saldo residuo SecondUser: ".concat(SecondUser.numero404(), " euro"), "Saldo residuo ThirdUser: ".concat(ThirdUser.numero404(), " euro"));
console.log("Chiamate effettuate FirstUser: ".concat(FirstUser.getNumeroChiamate()), "Chiamate effettuate SecondUser: ".concat(SecondUser.getNumeroChiamate()), "Chiamate effettuate ThirdUser: ".concat(ThirdUser.getNumeroChiamate()));
FirstUser.azzeraChiamate();
SecondUser.azzeraChiamate();
ThirdUser.azzeraChiamate();
console.log("FirstUser: ".concat(FirstUser.getNumeroChiamate()), "SecondUser: ".concat(SecondUser.getNumeroChiamate()), "ThirdUser: ".concat(ThirdUser.getNumeroChiamate()));
