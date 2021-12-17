class Car {
    _color: string;
    constructor(color: string) {
        this._color = color;
    }
}

class Audi extends Car {
    _price: number;

    constructor(color: string, price: number) {
        super(color);
        this._price = price;
    }

    display(): void {
        console.log(`${this._price} ${this._color}`);
    }
}

let aud1 = new Audi("Black", 1000);

aud1.display();
aud1._price = 100;
aud1.display();