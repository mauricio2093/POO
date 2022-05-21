from car import Car

class UberPool(Car):
    brand = str
    model = str

    def __init__(self,license,drvier,brand,model):
        super.__init__(license,drvier)
        self.brand = brand
        self.model = model
