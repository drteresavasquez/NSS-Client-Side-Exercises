console.log("HERE");

var sentenceBio = ["I", "spend", "my", "days", "coding,", "helping", "students", "find", "their", "superhero", "within", "and", "reading", "books."];

 addExcitement = (theWordArray, symbol) => {
	
	let output = "";
    let character = symbol;
	for (let i = 0; i < theWordArray.length; i++) {
        output += " " + theWordArray[i];
        //WE DONT WANT THE FIRST WORD TO HAVE AN ! SINCE 0/3 WILL RETURN A REMAINDER OF 0, SO WE ADD 1 TO i.
		if ((i+1) % 3 === 0) {
			output += character;
			character += symbol;
		}
		console.log(output);
	}
}

// // Invoke the function and pass in the array
addExcitement(sentenceBio, "?")