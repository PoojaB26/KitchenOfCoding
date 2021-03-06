/**
 * Created by pblead26 on 04-Mar-17.
 */

function showSection2() {
    document.getElementById('go-next').style.display = "block";
}

function nextPage() {
    location.href = "page4b.html";
}

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var outputText = document.getElementById("code-output");

    outputText.innerHTML = outputText.innerHTML + text;
    showSection2();

}


function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}
// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() {

    var finalProg =  document.getElementById("test-code").value;
    var mypre = document.getElementById("code-output");
    mypre.innerHTML = '';
    Sk.pre = "code-output";
    Sk.configure({output:outf, read:builtinRead});
    var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, finalProg, true);
    });
    myPromise.then(function(mod) {
            console.log('success');
        },
        function(err) {
            console.log(err.toString());
        });
}
function clearConsole(){
    var outputText = document.getElementById("code-output");
    outputText.innerHTML = " ";
}