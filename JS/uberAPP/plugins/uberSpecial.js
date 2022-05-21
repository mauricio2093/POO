class UberSpecial{
    constructor(id, license, driver, passengers, typeCarrAccepted, seatsMaterial){
        this.id =id;
        this.license=license;
        this.driver=driver;
        this.passengers=passengers;
        this.typeCarrAccepted = [];
        this.seatsMaterial = [];
    }
    uberBlack(){
        console.log(`UBER Black id = ${this.id} la licencia es ${this.license} y la conductora es ${this.driver}`);
        
    }
    uberVan(){
        console.log(`UBER Van id id = ${this.id} la licencia es ${this.license} y la conductora es ${this.driver}`);
    }
}
export default UberSpecial;
