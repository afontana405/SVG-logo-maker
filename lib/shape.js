class Shape {
    constructor(data) {
        this.color = data.shapeColor;
    }
    setColor(chosenColor) {
        this.color = chosenColor;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="110" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="35" width="150" height="150" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Square, Triangle};