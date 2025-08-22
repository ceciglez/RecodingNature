let points = [];
let delaunay;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 100; i++) {
    points.push(createVector(random(width), random(height)));
  }
  //delaunay = d3.Delaunay.from(points.map(p => [p.x, p.y]));


  delaunay = calculateDelaunay(points);
}

function draw() {
  background(220);

  fill(255, 0, 0, 50);
  circle(width / 2, height / 2, 200);

  for(let v of points) {
    stroke(0);
    strokeWeight(4);
    point(v.x, v.y);
  }
}

function calculateDelaunay(points) {
  
  let pointsArray = [];
  for (let v of points) {
    pointsArray.push([v.x, v.y]);
  }

  console.log(pointsArray);
  return new d3.Delaunay(pointsArray);
}