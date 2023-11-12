class Shape {
    constructor() {
        this.color = answer.shapeColor;
    }
    setColor(chosenColor) {
        this.color = chosenColor;
}
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="150" height="150" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="225,10 100,210 350,210 fill="${this.color}" />`;
    }
}

module.exports = {Circle, Square, Circle};