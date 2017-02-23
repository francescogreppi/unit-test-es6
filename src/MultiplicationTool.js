class MultiplicationTool {
	select(e){
		let clickedItem,
			multiples;
		if(e.target !== e.currentTarget) {
			clickedItem = e.target.id;
		}
		e.stopPropagation();
		multiples = this.getMultiples(clickedItem);
		this.resetHighlight();
		this.highlight(multiples);
	}
	highlight(multiples){
		multiples.forEach((multiple)=>{
			document.getElementById(multiple).className = "highlight";
		})
	}
	resetHighlight(){
		let i;
		for(i=1;i<=144;i++){
			document.getElementById(i).removeAttribute("class");
		};
	}
	getMultiples(number){
		let multipleArray = [];
		let i;
		for(i=1;i<=144;i++){
			if(i%number === 0){
				multipleArray.push(i);
			}
		}
		return multipleArray;
	}
}

export default MultiplicationTool;