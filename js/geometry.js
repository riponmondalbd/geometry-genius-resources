// for triangle
document.getElementById('triangle-calculate-btn').addEventListener('click', function () {
    const triangleInputFieldB = parseFloat(getInputFieldValue('triangle-input-field-b'));
    const triangleInputFieldH = parseFloat(getInputFieldValue('triangle-input-field-h'));

    // validation
    validation(triangleInputFieldB, triangleInputFieldH);

    // calculation
    const area = 0.5 * triangleInputFieldB * triangleInputFieldH;

    // set value
    createAriaCalculationElement("Triangle", area);

});

// for rectangle
document.getElementById('rectangle-calculate-button').addEventListener('click', function () {
    const rectangleInputFieldW = parseFloat(getInputFieldValue('rectangle-input-field-w'));
    const rectangleInputFieldL = parseFloat(getInputFieldValue('rectangle-input-field-l'));

    // validation
    validation(rectangleInputFieldL, rectangleInputFieldW);

    // calculate
    const area = rectangleInputFieldW * rectangleInputFieldL;

    // set value
    createAriaCalculationElement("Rectangle", area);

})

// for Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const parallelogramTextInputB = getTextElementValue('parallelogram-text-value-b');
    const parallelogramTextInputH = getTextElementValue('parallelogram-text-value-h');

    // calculation
    const area = parallelogramTextInputB * parallelogramTextInputH;

    // set value
    createAriaCalculationElement("Parallelogram", area);
})

// for rhombus
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const rhombusTextInputD1 = getTextElementValue('rhombus-text-value-d1');
    const rhombusTextInputD2 = getTextElementValue('rhombus-text-value-d2');

    // calculation
    const area = 0.5 * rhombusTextInputD1 * rhombusTextInputD2;

    // set value
    createAriaCalculationElement("Rhombus", area);
})

// for pentagon
document.getElementById('pentagon-btn').addEventListener('click', function () {
    const pentagonTextInputP = getTextElementValue('pentagon-text-value-p');
    const pentagonTextInputB = getTextElementValue('pentagon-text-value-b');

    // calculation
    const area = 0.5 * pentagonTextInputB * pentagonTextInputP;

    // set value
    createAriaCalculationElement("Pentagon", area);
})

// for ellipse
document.getElementById('ellipse-btn').addEventListener('click', function () {
    const ellipseTextInputA = getTextElementValue('ellipse-text-value-a');
    const ellipseTextInputB = getTextElementValue('ellipse-text-value-b');

    // calculation
    const area = 3.1416 * ellipseTextInputA * ellipseTextInputB;

    // set value
    createAriaCalculationElement("Ellipse", area);
})