interface Smartphone {
  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class user implements Smartphone {
  private carica: number;
  private numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
}

ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
}

chiamata(minutiDurata: number): void {
    const costoChiamata: number = minutiDurata * 0.20;
    if (this.carica >= costoChiamata) {
        this.carica -= costoChiamata;
        this.numeroChiamate++;
        console.log(`Chiamata effettuata di ${minutiDurata} minuti. Costo: ${costoChiamata.toFixed(2)} euro.`);
    } else {
        console.log("Saldo insufficiente per effettuare la chiamata.");
    }
}
numero404(): any {
    return this.carica.toFixed(2);
}

getNumeroChiamate(): number {
    return this.numeroChiamate;
}

azzeraChiamate(): void {
    this.numeroChiamate = 0;
    console.log("Chiamate azzerate.");
}
}

const FirstUser: Smartphone = new user();
const SecondUser: Smartphone = new user();
const ThirdUser: Smartphone = new user();

FirstUser.ricarica(50);
SecondUser.ricarica(30);
ThirdUser.ricarica(15);

console.log(`Saldo iniziale FirstUser: ${FirstUser.numero404()} euro`,`Saldo iniziale SecondUser: ${SecondUser.numero404()} euro`, `Saldo iniziale ThirdUser: ${ThirdUser.numero404()} euro` );

FirstUser.chiamata(3);
SecondUser.chiamata(9);
ThirdUser.chiamata(2);

FirstUser.chiamata(4);
SecondUser.chiamata(8);
ThirdUser.chiamata(1);

console.log(`Saldo residuo FirstUser: ${FirstUser.numero404()} euro`,`Saldo residuo SecondUser: ${SecondUser.numero404()} euro`, `Saldo residuo ThirdUser: ${ThirdUser.numero404()} euro` );
console.log(`Chiamate effettuate FirstUser: ${FirstUser.getNumeroChiamate()}`, `Chiamate effettuate SecondUser: ${SecondUser.getNumeroChiamate()}`, `Chiamate effettuate ThirdUser: ${ThirdUser.getNumeroChiamate()}`);
FirstUser.azzeraChiamate();SecondUser.azzeraChiamate();ThirdUser.azzeraChiamate()
console.log(`FirstUser: ${FirstUser.getNumeroChiamate()}`, `SecondUser: ${SecondUser.getNumeroChiamate()}`, `ThirdUser: ${ThirdUser.getNumeroChiamate()}`);

