require('./paper-full.js');

function createEllipse() {
  var rectangle = new Rectangle(createPoint(), new Size(300, 200));
  var path = new Path.Ellipse(rectangle);
  path.fillColor = '#433633';
  return path;
}
