class Ewok {
    constructor(name, hairColor, skinColor, height, diet) {
        this.name = name
        this.hairColor = hairColor
        this.skinColor = skinColor
        this.height = height
        this.diet = diet
    }

    eats(food) {
        console.log(`${this.name} loves to eat ${food}!`)
    }

    attack(hit) {
        alert(`${this.name} attacks with a mighty ${hit}!`)
    }
}

export default Ewok;