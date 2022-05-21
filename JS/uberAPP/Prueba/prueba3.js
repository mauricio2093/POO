class Prueba3{
    constructor(plugins) {
        this.plugins = plugins || [];
        this._initPlugins();
    }

    _initPlugins(){
        this.plugins.forEach(() => {
            pruebaElement1();
            pruebaElement2();
        })
    }
    
} 
export default Prueba3;
