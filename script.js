$( document ).ready(function() {
    //newline counts as a char
    $("#editor").keyup(function() {
        var text = $("#editor").text();
        console.log(highlight(text));
    });
    
    function highlight(text) {
        for (i = 0; i < text.length; i++) {
            if (text.charAt(i) == "<") {
                for (j = i; j < text.length; j++) {
                    if (text.charAt(j) == ">") {
                        var returner = splitter(i, j, text);
                        text = returner[0] + "<span>" + returner[1] + "</span>" + returner[2];
                    }
                }
            }
        }
        return text;
    }
       
    function splitter(i, j, text) {
       return [text.substring(0, i), text.substring(i, j + 1), text.substring(j + 1, text.length)]; 
    }
});
