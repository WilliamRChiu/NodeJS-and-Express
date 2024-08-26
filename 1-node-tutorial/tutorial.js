//Globals - NO WINDOW!

//__dirname - path to current directory
//__filename - file name
// require - function to use modules (commonJS)
//module - info about curretn module (file)
//process - info about env where program is being executed

console.log(__dirname)

function hello(){
    console.log("hello world");
}
setInterval(hello, 1000);

setInterval(()=>{console.log("Goodbye world")}, 1500);

//modules lesson
//encapsulated code
