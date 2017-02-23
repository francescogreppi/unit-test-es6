import MultiplicationTool from './MultiplicationTool';
import Utilities from './Utilities';

document.addEventListener("DOMContentLoaded", function(event) { 
  	const multiplicationTool = new MultiplicationTool();
	const utilities = new Utilities();
    const parentElement = document.querySelector("#grid");
	utilities.generateGrid('grid', multiplicationTool);
	parentElement.addEventListener("click", multiplicationTool.select.bind(multiplicationTool), false);
});