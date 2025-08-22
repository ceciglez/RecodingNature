let seedPoints = [];
let delaunay; 

function setup(){
  createCanvas(400,400);

  for(let i = 0; i < 100; i++){
    seedPoints[i] = createVector(random(width), random(height));
  }

  // delaunay = new d3.Delaunay(points); // the d3Delaunay library needs an array of numbers, not an array of p5 vectors

  delaunay = calculateDelaunay(seedPoints); // so we will use a custom function to convert the array of p5 vectors into an array of numbers

}

function draw(){
  background(255);

  for(let v of seedPoints){
    stroke(0);
    strokeWeight(4);
    point(v.x, v.y);
  }

  noFill();
  strokeWeight(1); 
  console.log(delaunay.triangles);
  let{points, triangles} = delaunay; // destructuring assignment

  for(let i = 0; i < delaunay.triangles.length; i+=3){
    let a = 2 * delaunay.triangles[i];
    let b = 2 * delaunay.triangles[i+1];
    let c = 2 * delaunay.triangles[i+2];
    triangle(points[a], 
             points[a+1],
             points[b], 
             points[b+1], 
             points[c], 
             points[c+1]);
  }




}

function calculateDelaunay(){
  let pointsArray = [];
  for(let v of seedPoints){
    pointsArray.push(v.x, v.y); // convert each p5 vector into two numbers and push them into a new array
  }

  console.log(pointsArray);
  return new d3.Delaunay(pointsArray);
}