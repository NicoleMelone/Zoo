export default class Bear {
    constructor(name, color, gender, heightInch, claws) {
        this.name = name
        this.color = color
        this.gender = gender
        this.heightInch = heightInch
        this.claws = claws
    }
    eat(food) {
        console.log(`The ${this.name} bear eats ${food}.`)
    }

    speak(noise) {
        alert(`The ${this.name} says ${noise}`)
    }
}