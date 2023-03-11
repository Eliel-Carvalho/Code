const Microfone = {
    color: "black",
    ison: false,
    toggleOnOff(){
        if(Microfone.ison){
            console.log("Desligar")
        } else {
            console.log("ligar")
        }
        Microfone.ison = ! Microfone.ison
        //console.log(Microfone.ison)
    },
}

Microfone.toggleOnOff()
