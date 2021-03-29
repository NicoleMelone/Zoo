export default class Dragon {
    constructor(name, color, race, element, wings) {
        this.name = name
        this.color = color
        this.race = race
        this.element = element
        this.wings = wings
    }

    eats(food) {
        console.log(`${this.name} uses ${this.element} to take down ${food}!`)
    }

    attack(hit) {
        alert(`${this.name} attacks with ${hit}!`)
    }
}