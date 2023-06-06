console.log("Hello, World");

let num1: number = 100;
// num1 = "hello";
console.log(num1);

interface Point2D {
  x: number;
  y: number;
};

interface Point3D {
  x: number;
  y: number;
  z: number;
};

const point2D: Point2D = { x: 0, y: 10};
const point3D: Point3D = { x: 0, y: 10, z: 20 };

function iTakePoint2D(point: Point2D) {
  console.log(`point: ${point.x}`);
  console.log(`point: ${point.y}`);
};

iTakePoint2D(point2D);
iTakePoint2D(point3D);
// iTakePoint2D({ x: 20 });

// let num2 = 100;
// num2 = "hello";
// console.log(num2);

// console.log(0 == "");
// console.log(0 === "");

function createCounter() {
  let val = 0;
  return {
    increment() { val++ },
    getVal() { return val }
  }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("1:", counter1.getVal());
console.log("2:", counter2.getVal());

counter1.increment();
console.log("1:", counter1.getVal());
console.log("2:", counter2.getVal());
