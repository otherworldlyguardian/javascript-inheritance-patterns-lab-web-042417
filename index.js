function Point (x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function () {
  return `${this.x}, ${this.y}`
}

function Side (length) {
  this.length = length
}

function Shape () {
}

Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function (x, y) {
  this.position = new Point(x, y)
}

function Circle (radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function () {
  return this.radius * 2
}

Circle.prototype.area = function () {
  return Math.PI * this.radius^2
}

Circle.prototype.circumference = function () {
  return Math.PI * this.diameter()
}

function Polygon (sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function () {
  return this.sides.reduce(function (acc, val) {
    debugger
    return acc + val.length
  }, 0)
}

Polygon.prototype.numberOfSides = function () {
  return this.sides.length
}

function Quadrilateral (sOne, sTwo, sThree, sFour) {
  Polygon.call(this)
  this.sides = [new Side(sOne), new Side(sTwo), new Side(sThree), new Side(sFour)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle (sOne, sTwo, sThree) {
  Polygon.call(this)
  this.sides = [new Side(sOne), new Side(sTwo), new Side(sThree)]
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Rectangle (width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function () {
  return this.width * this.height
}

function Square (length) {
  Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function () {
  return Object.keys(new Square).toString()
}
