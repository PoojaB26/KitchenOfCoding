function findSelection(field) {
    var test = document.getElementsByName(field);
    var sizes = test.length;

    //alert(sizes);
    for (i=0; i < sizes; i++) {
        if (test[i].checked==true) {
            //alert(test[i].value + ' you got a value');
            return test[i].value;
        }
    }
}

function submitForm() {


    var selection= findSelection("proceed");
    if(selection=="yes"){
        $(function() {
            $("#page1").load("page2.html");
        });    }
    else{
        $(function() {
            $("#page1").load("decline.html");
        });    }

}
