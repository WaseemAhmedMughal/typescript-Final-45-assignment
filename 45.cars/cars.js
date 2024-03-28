"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carinfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carinfo;
}
;
let answers = storeCarInfo('Honda', 'Civic', { color: 'white' }, { features: ['navigation', 'Power Windows', 'ABS'] });
console.log(answers);
