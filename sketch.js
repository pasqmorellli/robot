function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  // Sfondo
  background('#891233');
  noStroke();
  fill(255,255,255,50)
  rect(0, height/2+50, width, height/2-50)

  // Shadow
  noStroke ();
  fill (0, 0, 0, 80);
  ellipse (380, 455, 180, 35);
}

function draw() {
  translate(200,0);

  // Neck
  stroke(0);
  line (175, 150, 175, 250);
  line (195, 150, 195, 250)

  // Antennas
  line (175, 80, 185, 150);
  line (130, 130, 185, 150);
  line (260, 115, 185, 150);

  // Body
  noStroke ();
  fill (150, 150, 150, 255);
  ellipse (180, 420, 70, 70);

  noStroke ();
  fill (150, 150, 150, 255);
  rect (130, 240, 200, 30);

  noStroke ();
  fill (150, 150, 150, 255);
  rect (40, 280, 150, 30);

  noStroke ();
  fill (0, 0, 0, 255);
  rect (130, 210, 100, 200);

  noStroke ();
  fill (50, 50, 50, 255);
  rect (130, 340, 100, 10);

  noStroke ();
  fill (50, 50, 50, 255);
  rect (130, 360, 100, 10);

  noStroke ();
  fill (50, 50, 50, 255);
  rect (130, 380, 100, 10)

  // Head
  noStroke ();
  fill (200, 200, 200, 255);
  ellipse (185, 150, 80, 80);

  noStroke ();
  fill (230, 230, 230, 255);
  ellipse (200, 140, 35, 35);

  noStroke ();
  fill (30, 30, 30, 255);
  ellipse (210, 140, 15, 15);

  noStroke ();
  fill (30, 30, 30, 255);
  ellipse (190, 175, 12, 12);

  noStroke ();
  fill (30, 30, 30, 255);
  ellipse (165, 155, 10, 10);

  noStroke ();
  fill (30, 30, 30, 255)
  ellipse (175, 125, 7, 7)
}
