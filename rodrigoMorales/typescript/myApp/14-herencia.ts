class Vehicle {
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

  public drive() {
    console.log(
      `conduciendo un ${this.brandName} modelo: ${this.modelo} color: ${this.color}`
    );
  }
}

class Car extends Vehicle {
  // sobreescribir un metodo
  drive(): void {
    console.log(`Estoy conduciendo un auto ${this.brandName}`);
  }
}

const car = new Car("mazda", "3", "rojo", 200);
console.log(car.precioActual);
car.newPrecio = 400;
console.log(car.precioActual);
car.drive();
