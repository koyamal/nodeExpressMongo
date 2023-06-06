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

let num2 = 100;
// num2 = "hello";
console.log(num2);
