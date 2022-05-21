class Car :
    def __init__(self):
        self.id          =   int
        self.license     =   str  
        self.driver      =   str
        self.passenger   =   int

    def printDataCar(self):
        print("Licensia " + self.license + " Driver " + self.driver)

