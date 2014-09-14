$( document ).ready(function() {
    //newline counts as a char
    $("#editor").keyup(function() {
        var text = $("#editor").text();
        console.log(highlight(text));
    });
    var start = 0; 
    function highlight(text) {
        var highlighted = "";
        for (i = 0; i < text.length; i++) {
            if (text.charAt(i) == "<") {
                for (j = i; j < text.length; j++) {
                    if (text.charAt(j) == ">") {
                        //var returner = splitter(start, i, j, text);
                        //text = returner[0] + "<span>" + returner[1] + "</span>" + returner[2];
                        //start = j;
                        highlighted += (i + " " + j + " " + splitter(start,i,j,text) + "\n");
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
