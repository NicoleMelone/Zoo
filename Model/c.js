export default class Cobra {
    constructor(name, colors, gender, lengthInch, venom = 'No') {
        this.name = name
        this.colors = colors
        this.gender = gender
        this.lengthInch = lengthInch
        this.venom = venom
    }

    eat(food) {
        console.log(`${this.name} eats a ${food}.`)
    }
    speak(noise) {
        alert(`${this.name} makes a ${noise} at you! Is it venomous? ${this.venom}!`)
    }
}