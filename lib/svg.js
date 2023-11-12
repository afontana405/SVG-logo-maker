class Svg{
    constructor() {
        this.text = answer.text;
        this.textColor = answer.textColor;
        this.shape = answer.shape;
    }
    changeText(chosenText, chosenColor) {
        this.text =  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${chosenColor}">${chosenText}</text>`;
    }
    changeShape(chosenShape) {
        this.shape = chosenShape.render();
    }
    buildSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
}



module.exports = Svg;