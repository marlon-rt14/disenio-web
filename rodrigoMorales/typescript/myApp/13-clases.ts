class Vehicle {
  constructor(
    private readonly brandName: string,
    private modelo: string,
    private color: string
  ) {}

  public drive() {
    console.log(`conduciendo el vehiculo ${this.brandName}`);
  }
}

const vehicle = new Vehicle("mazda", '2', 'rojo');

console.log(vehicle);
// vehicle.drive();
