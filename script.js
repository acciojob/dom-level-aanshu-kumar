//your JS code here. If required.
// JavaScript code to determine the DOM level of an element
document.addEventListener('DOMContentLoaded', () => {
    // Select the target element with id 'level'
    const targetElement = document.getElementById('level');
    
    if (targetElement) {
        let domLevel = 0; // Initialize DOM level counter
        let currentElement = targetElement;

        // Traverse up the DOM tree until the root html element is reached
        while (currentElement) {
            domLevel++;
            currentElement = currentElement.parentElement;
        }

        // Display the DOM level using alert
        alert(`The level of the element is: ${domLevel}`);
    } else {
        alert("Element with id 'level' not found in the DOM.");
    }
});
