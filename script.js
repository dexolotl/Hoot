$( document ).ready(function() {
	//newline counts as a char
	$("#editor").keyup(function() {
		var text = $("#editor").val();
		var lastTagEnd = 0;
		for (i = 0; i < text.length; i++) {
			if (text.charAt(i) == "<") {
				for (j = i; j < text.length; j++) {
					if (text.charAt(j) == ">") {

						var tagText = splitter(i, j, lastTagEnd, text)
						$("#editor").val(tagText[0] + "<span>" + tagText[1] + "</span>" + tagText[2]);

						lastTagEnd = j;
						break;
					}
				}
				//splitter(i, j, lastTagEnd, text);
				//lastTagEnd = j;
			}
		}
	});

	function splitter(startTag, endTag, startPos, code) {
		var splitCode = [];
		splitCode[0] = code.substring(startPos, startTag);
		splitCode[1] = code.substring(startTag, endTag + 1);
		splitCode[2] = code.substring(endTag + 1, code.length);
		return splitCode;
	}
});
