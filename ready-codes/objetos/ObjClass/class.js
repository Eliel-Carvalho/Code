class Microfone {
    constructor(color = "black") {
        this.color = color;
        this.inOn  = true;
    }

    toggleOnOff() {
        if(this.ison){
            console.log("Desligar")
        } else {
            console.log("ligar")
        }
        this.ison = ! this.ison
        //console.log(Microfone.ison)
    };
}

const microfone = new Microfone()

console.log(microfone.color.toUpperCase()) //PEGANDO TODA ACADEIA DE PROTOTYPE DO JAVASCRIPT!!
microfone.toggleOnOff();
microfone.toggleOnOff();
microfone.toggleOnOff();
microfone.toggleOnOff();
