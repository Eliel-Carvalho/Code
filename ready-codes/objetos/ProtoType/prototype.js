function Microfone(color = "black", isOn = true ) {
    this.color = color
    this.isOn = isOn
};

Microfone.prototype.toggleOnOff = () => {
    if(this.ison){ // o this.color é referencia da nossa função construtura, que é referencia da nossa variavel microfone!!
        console.log("Desligar")
    } else {
        console.log("ligar")
    }
    this.ison = ! this.ison
    //console.log(Microfone.ison)
};

const microfone = new Microfone();
const microfoneWhite = new Microfone("White", false);

microfoneWhite.toggleOnOff();
microfoneWhite.toggleOnOff();
microfoneWhite.toggleOnOff();
microfoneWhite.toggleOnOff();

