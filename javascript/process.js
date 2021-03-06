import testFunction from './TestFunction';
import TestClass from './TestClass';

var input = document.getElementById("question");

var subButton = document.getElementById("subButton");
subButton.addEventListener("click", displayNewSteps);

function displayNewSteps() {
    testFunction();
    let testClass = new TestClass();
}

var mathFieldSpan = document.getElementById('math-field');
var latexSpan = document.getElementById('latex');

var MQ = MathQuill.getInterface(2); // for backcompat
var mathField = MQ.MathField(mathFieldSpan, {
  //spaceBehavesLikeTab: true, // configurable
  handlers: {
    edit: function() { // useful event handlers
      latexSpan.textContent = mathField.latex(); // simple API
    }
  }
});