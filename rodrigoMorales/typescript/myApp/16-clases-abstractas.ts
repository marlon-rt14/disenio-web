interface Billable {
  currentBill(): string;
}

interface Flyable {
  altitude(): string;
}

abstract class Vehicle implements Billable {
  static precioActual: string;
  constructor(
    protected readonly brandName: string,
    private modelo: string,
    private color: string,
    private precio: number
  ) {}

  get precioActual() {
    return `el precio actual es ${this.precio}`;
  }

  set newPrecio(precio: number) {
    this.precio = precio;
  }

  static convertirAPrecioActual(precio: number, typeDeMoneda: string) {
    // let result = "";
    let result = this.precioActual;
    switch (typeDeMoneda) {
      case "USD":
        result = "US " + precio;
        break;
      case "PESO":
        result = "$" + precio;
        break;
    }
    return result;
  }

  abstract drive(): void;

  currentBill(): string {
    return "La factura es de " + this.precio;
  }
}

class Car extends Vehicle implements Billable, Flyable {
  drive(): void {
    console.log(`Estoy conduciendo un auto ${this.brandName}`);
  }

  altitude(): string {
    return "50 000 pies";
  }
}

class Airplane extends Vehicle {
  drive(): void {
    console.log(`Estoy conduciendo un auto ${this.brandName}`);
  }
}

const car = new Car("mazda", "3", "rojo", 200);
// const car : Billable = new Car("mazda", "3", "rojo", 200);
// const car : Flyable = new Airplane("mazda", "3", "rojo", 200);

console.log(Car.convertirAPrecioActual(200, "USD"));
// car.drive();
