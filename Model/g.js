class God {
    constructor(name, size, power, item, family, guides) {
        this.name = name
        this.size = size
        this.power = power
        this.item = item
        this.family = family
        this.guides = guides
    }

    issue(problem) {
        console.log(`${this.family} asks ${this.name} to use ${this.guides} to solve the ${problem} problem.`)
    }

    destroys(place) {
        alert(`${this.name} destroys ${place} with his mighty ${this.item} of ${this.power}!`)
    }

}

export default God;