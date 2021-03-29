export default class Howlers {
    constructor(name, color, legs, teeth, height, attack) {
        this.name = name
        this.color = color
        this.legs = legs
        this.teeth = teeth
        this.height = height
        this.attack = attack
    }

    eats(food) {
        console.log(`${this.name} catches ${food} using his deadly ${this.attack}!`)
    }

    attacks(hit) {
        alert(`${this.name} ${hit} with his ${this.teeth} teeth!`)
    }

}