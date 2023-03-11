function createMicrofone(color) {
    let isOn = true //escondendo propriedade o mundo exterior!

    function toggleOnOff() {
        if(isOn) {
            console.log("desligar")
        }else {
            console.log("ligar")
        }
        isOn = !isOn
    }
    return {color, toggleOnOff};
}

const microfoneBlack = createMicrofone("black")
const microfoneWhite = createMicrofone("white")

console.log(microfoneBlack)
console.log(microfoneWhite.toggleOnOff())
