// for random color
// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Get all elements with class "hover-element"
const hoverElements = document.querySelectorAll('.hover-element');

// Add event listeners to each element
hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', function () {
        // Change the background color to a random color when hovering
        element.style.backgroundColor = getRandomColor();
    });

    element.addEventListener('mouseleave', function () {
        // Restore the original background color when the mouse leaves
        element.style.backgroundColor = '';
    });
});

/* -------------------------------------------------------------------------------------- */

// get input from input field
function getInputFieldValue(inputValue) {
    const InputFieldElement = document.getElementById(inputValue);
    const InputField = InputFieldElement.value;
    return InputField;
}

// get text element value
function getTextElementValue(value) {
    const textInputElement = document.getElementById(value);
    const textInputElementString = textInputElement.innerText;
    const textInput = parseFloat(textInputElementString);

    return textInput;
}


// validation for word and number
function validation(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numerical values for base and height.");
        return;
    }
}

// for set value

function createAriaCalculationElement(text, area) {
    const areaCalculationOutput = document.getElementById('area-calculation');
    const li = document.createElement('li');

    const div = document.createElement('div');
    div.classList.add('area-calculation-inner');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    const button = document.createElement('button');
    button.textContent = 'Convert to m²';
    button.classList.add('area-calculation-btn');


    p1.textContent = text;
    p2.innerText = area + "cm²";

    areaCalculationOutput.appendChild(li);
    li.appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(button);

    button.addEventListener('click', function () {
        const areaInSquareMeters = area * 0.01;
        p2.innerText = areaInSquareMeters.toFixed(2) + "m²";
    })
}
