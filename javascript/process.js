import testFunction from './TestFunction';
import TestClass from './TestClass';

var input = document.getElementById("question");

var subButton = document.getElementById("subButton");
subButton.addEventListener("click", displayNewSteps);

function displayNewSteps() {
    testFunction();
    let testClass = new TestClass();
}