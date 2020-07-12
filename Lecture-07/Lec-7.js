window.onload = function()
{
    //do all bindings here.........
    console.log("Handle Bindings!");
    var btn = document.getElementById("btnAdd");
    btn.onclick = function()
    {
        console.log("Handling Add New Todo Button");
    };
};