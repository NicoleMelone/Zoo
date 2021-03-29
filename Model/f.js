class Fairy {
    constructor(name, color, height, element, special) {
        this.name = name
        this.color = color
        this.height = height
        this.element = element
        this.special = special
    }

    eats(food) {
        console.log(`${this.name} eats the delicous ${food}.`)
    }

    attack(hit) {
        alert(`A fairy ${hit} with ${this.element} damage and ${this.special} towards you.`)
    }
}

export default Fairy;