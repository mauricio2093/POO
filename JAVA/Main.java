class Main{
    public static void main(String[] args) {
        System.out.println("Hola mundo");
        
        Car car = new Car(null, null);
        car.license = "AQR-201";
        car.driver = "Valentina Garcia";
        car.passenger= 4;
        car.printDataCar();

        Car car2 = new Car(null, null);
        car2.license = "STR-141";
        car2.driver = "Estefania Duque";
        car2.passenger= 4;
        car2.printDataCar();

    }
}
