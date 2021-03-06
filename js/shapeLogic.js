var shapesLogger = [];

var shapes = {
  a: createDecagon,
  b: createCircle,
  c: createTriangle,
  d: createRectangle,
  e: createEllipse,
  f: createStar,
  g: createArc,
  h: createArrow,
  i: createBackground('#DECBB7'),
  j: createBackground('#8F857D'),
  k: createBackground('#5C5552'),
  l: createBackground('#433633'),
  m: createBackground('#6E0D25'),
  n: createBackground('#774E24'),
  o: createBackground('#6A381F'),
  p: createBackground('#AA5042'),
  q: createBackground('#1D1A05'),
  r: createLine,
  s: createSemiCircle,
  t: createZigZag,
  u: createCircles,
  v: createTarget,
  w: createRectangles,
  x: createTriangles,
  y: createArrows,
  z: createDiamond
};

function createPoint() {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  return (maxPoint * randomPoint);
}

function createDecagon() {
  var decagon = new Path.RegularPolygon(createPoint(), 300, 200);
  decagon.fillColor = '#8F857D';
  return decagon;
}

function createCircle() {
  var circle = new Path.Circle(createPoint(), 300);
  circle.fillColor = '#DECBB7';
  return circle;
}

function createTriangle() {
  var triangle = new Path.RegularPolygon(createPoint(), 3, 300);
  triangle.fillColor = '#8F857D';
  return triangle;
}

function createRectangle() {
  var rectangle = new Rectangle(new Point(100, 100), new Point(350, 500));
  var path = new Path.Rectangle(rectangle);
  path.fillColor = '#5C5552';
  return path;
}

function createEllipse() {
  var rectangle = new Rectangle(createPoint(), new Size(300, 200));
  var path = new Path.Ellipse(rectangle);
  path.fillColor = '#433633';
  return path;
}

function createStar() {
  var points = 12;
  var radius1 = 100;
  var radius2 = 50;
  var path = new Path.Star(createPoint(), points, radius1, radius2);
  path.fillColor = '#DECBB7';
  return path;
}

function createArc() {
  var from = createPoint();
  var through = createPoint();
  var to = createPoint();
  var path = new Path.Arc(from, through, to);
  path.strokeColor = '#FFFFFF';
  path.strokeWidth = 10;
  return path;
}

function createArrow() {
  var path = new Path();
  path.strokeColor = 'black';
  path.add(new Point(0, 0));
  path.add(new Point(view.size.width / 2, view.size.height));
  path.add(new Point(view.size.width, 0));
  return path;
}

function createLine() {
  var path = new Path();
  path.strokeColor = 'black';
  path.strokeWidth = 2.5;
  path.add(new Point(0, view.size.height / 2));
  path.add(new Point(view.size.width, view.size.height / 2));
  return path;
}

function createSemiCircle() {
  var semiCircle = new Path.Circle(createPoint(), 300);
  semiCircle.strokeColor = '#1C3144';
  semiCircle.fillColor = '#1C3144'
  semiCircle.removeSegment(0);
  return semiCircle;
}

function createZigZag() {

  var path = new Path();
  path.strokeColor = 'black';
  path.add(new Point(0, 0));
  path.add(new Point(view.size.width / 6, view.size.height));
  path.add(new Point(view.size.width / 3, 0));
  path.add(new Point(view.size.width / 2, view.size.height));
  path.add(new Point(view.size.width * 2 / 3, 0));
  path.add(new Point(view.size.width * 5 / 6, view.size.height));
  path.add(new Point(view.size.width, 0));
  return path;
}

function createCircles() {
  var circlePath = new Path.Circle(createPoint(), 200);
  circlePath.strokeColor = 'black';
  circlePath.fillColor = '#772F1A';

  var clones = 30;
  var angle = 360 / clones;

  for (var i = 0; i < clones; i++) {
    var clonedPath = circlePath.clone();
    clonedPath.rotate(angle * i, circlePath.bounds.topLeft);
    shapesLogger.push(clonedPath);
  }
  return circlePath;
}

function createTarget() {
  var circlePath = new Path.Circle(createPoint(), 300);
  circlePath.style = {
  fillColor: '#92817A'
  };
  // Make a copy of the path and set its stroke color to red:
  var copy = circlePath.clone();
  copy.fillColor = '#F7F0F5';

  // Scale the copy by 50%:
  copy.scale(0.5);
  shapesLogger.push(copy);
  return circlePath;
}

function createBackground(string) {
  return function() {
    var maxPoint = new Point(view.size.width, view.size.height);
    var rectangle = new Rectangle(new Point(0, 0), maxPoint);
    var path = new Path.Rectangle(rectangle);
    path.fillColor = string;
    return path;
  };
}

function createRectangles() {
  var rectangle = new Rectangle(new Point(0, 0), new Point(view.size.width, view.size.height));
  var path = new Path.Rectangle(rectangle);
  path.strokeColor = 'black';
  return path;
}

function createTriangles() {
  var myPath = new Path();
  myPath.strokeColor = 'black';
  myPath.add(new Point(0, view.size.height));
  myPath.add(new Point(0, 0));
  myPath.add(new Point(view.size.width, view.size.height));
  myPath.add(new Point(view.size.width, 0));
  myPath.add(new Point(0, view.size.height), new Point(view.size.width, 0));
  return myPath;
}

function createArrows() {
  var myPath = new Path();
  myPath.strokeColor = 'black';
  myPath.add(new Point(40, 90));
  myPath.add(new Point(90, 40));
  myPath.add(new Point(140, 90));
  return myPath;
}

function createDiamond() {
  var path = new Path();
  path.strokeColor = 'black';
  path.add(new Point(view.size.width /2, 0), new Point(0, view.size.height / 2));
  path.add(new Point(view.size.width /2, 0), new Point(view.size.width, view.size.height / 2));
  path.add(new Point(0, view.size.height / 2), new Point(view.size.width / 2, view.size.height));
  path.add(new Point(view.size.width /2, view.size.height), new Point(view.size.width, view.size.height /2));
  return path;
}

function onKeyDown(event) {
  if (sounds[event.key]) {
    var sound = new Howl({
      src: sounds[event.key]
    });
    sound.play();
    var shape = shapes[event.key]();
    shapesLogger.push(shape);
  }
}


function onFrame(event) {
  for (var i = 0; i < shapesLogger.length; i++) {
    if (typeof shapesLogger[i] === 'number') {
      window.setTimeOut(function(){}, shapesLogger[i]);
    }
    shapesLogger[i].rotate(3);
    shapesLogger[i].scale(.85);
  }
}
