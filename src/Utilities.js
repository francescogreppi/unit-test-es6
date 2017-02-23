class Utilities {
	generateGrid(id,instance){
		let i;
		for(i=1;i<=144;i++){
			let cell = document.createElement("div");
			cell.setAttribute("id",i);
			cell.innerHTML = i;
			document.getElementById(id).appendChild(cell);
		}
	}
}

export default Utilities;