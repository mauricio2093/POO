import UberSpecial from "./plugins/uberSpecial.js";
import Trip from "./Trip.js";

const   id= 1,
        license = "QTF-304",
        driver = "Daniela Osorno";


const uber =    new Trip({plugins : [new UberSpecial(id, license, driver)],} );




