$( document ).ready(function() {
	//newline counts as a char
	$("#editor").keyup(function() {
		var text = $("#editor").text();
		for (i = 0; i < text.length; i++) {
			if (text.charAt(i) == "#") {
				for (j = i; j < text.length; j++) {
					if (text.charAt(j) == "{") {
						console.log("ID selector from positions " + i + " to " + j);
						break;
					}
				}
			}
		}
	});
});
