console.log("starting");
function handleAddNewTodo()
{
    console.log("Handling Add New Todo Button");
}
function doBindings()
{
    console.log("Handle Bindings!");
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAddNewTodo;//refrence pass
}
window.onload = doBindings;
console.log("finished");
//doBindings();
//will not do bindings as the document is not yet loaded