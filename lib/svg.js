class Svg{
    constructor(data) {
        this.text = data.text;
        this.textColor = data.textColor;
        this.shape = data.shape;
    }
    changeText(chosenText, chosenColor) {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${chosenColor}">${chosenText}</text>`;
    }
    changeShape(chosenShape) {
        return chosenShape.render();
    }
    buildSvg(svgText, svgShape) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgShape}${svgText}</svg>`;
    }
}



module.exports = Svg;