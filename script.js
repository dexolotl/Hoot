$( document ).ready(function() {
    //newline counts as a char
    $("#editor").keyup(function() {
        var text = $("#editor").text();
        $("#editor").html(highlight(text));
    });
    var start = 0; 
    function highlight(text) {
        var highlighted = text;
        for (i = 0; i < text.length; i++) {
            if (text.charAt(i) == "<") {
                for (j = i; j < text.length; j++) {
                    if (text.charAt(j) == ">") {
                        highlighted = (splitter(start,i,j,text)[0] + "<span>" + splitter(start,i,j,text)[1] + "</span>" + splitter(start,i,j,text)[2] + "\n");
                        break;
                    }
                }
            }
        }
        return highlighted;
    }
       
    function splitter(start, i, j, text) {
       return [text.substring(start, i), text.substring(i, j + 1), text.substring(j + 1, text.length)]; 
    }
});
