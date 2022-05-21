from car import Car

class UberPool(Car):
    typeCarAccept = []
    seatsMaterial = []

    def __init__(self,license,drvier,typeCarAccept,seatsMaterial):
        super.__init__(license,drvier)
        self.typeCarAccept = typeCarAccept
        self.typeCarAccept = seatsMaterial
