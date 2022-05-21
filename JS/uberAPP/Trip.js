class Trip{
    constructor({plugins}){
        this.plugins = plugins || [];
        this._initPlugins();
    }

    _initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.uberBlack()
        })
    }
}

export default Trip;
