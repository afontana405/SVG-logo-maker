const Svg = require('../lib/svg.js');

describe('Svg', () => {
    describe('changeText', () => {
        it('should return a div with the users text and color choices', () => {
            const data = {text: 'css', textColor: 'green', shape: 'square'};
            const text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="green">css</text>`;
            const textChanger = new Svg(data).changeText("css", "green");
            expect(textChanger).toEqual(text);
        })
    });
})