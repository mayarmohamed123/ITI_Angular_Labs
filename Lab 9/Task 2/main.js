export class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly");
    }
  }
  getArea() {
    throw new Error("Method 'getArea()' must be implemented.");
  }
  getPerimeter() {
    throw new Error("Method 'getPerimeter()' must be implemented.");
  }

  toString() {
    return `${this.constructor.name} → Area: ${this.getArea().toFixed(
      2
    )}, Perimeter: ${this.getPerimeter().toFixed(2)}`;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

export class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

export class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return this.side ** 2;
  }
  getPerimeter() {
    return 4 * this.side;
  }
}
