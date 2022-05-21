
import Prueba1 from './prueba1.js';
import Prueba2 from './prueba2.js';
/*import Prueba3 from './prueba3.js';



const obj = new Prueba3({
    plugins: [new Prueba1(fail), new Prueba2(file)]
});

console.log(obj);

///
const file = "error encontrado" ;
const fail = "error no encontrado" ;
const obj = fn({
        plugins : [new Prueba1(fail), new Prueba2(file)],
}) 
function fn(plugins){
    plugins = plugins || []
    plugins.forEach(plugin => {
        plugin.pruebaElement();
    })  

}*/

const file = "error encontrado" ;
const fail = "error no encontrado" ;
fn({
    plugins : [new Prueba1(fail), new Prueba2(file)],
}) 
function fn({plugins}){
    plugins = plugins || [];
    plugins.forEach(plugin => {
        plugin.pruebaElement();
    console.log(plugins); 
});
}



