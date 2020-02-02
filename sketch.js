let fr = 20;
let startBPM = 90;
let tempoSlider;
let counter;
let tempo;

let beat;
let measure;
let nong;
let loop;

let [melT, bpT, bbT, pkT, pulT, nonT, pyT, tokT, gongT] = Array(9).fill(1);
let [melColor, bpColor, bbColor, pkColor, pulColor, nonColor, pyColor, tokColor, gongColor] = Array(9).fill(48);
let fastDecay = 50;
let slowDecay = 25;

function setup() {
  createCanvas(640,480);
  background(24);
  frameRate(fr);
  counter = 0;

  beat = 1;
  measure = 1;
  nong = 1;
  loop = 1;

  mCheck = createCheckbox('', true);
  mCheck.style('position', 'absolute');
  mCheck.style('top', '80px');
  mCheck.style('left', '370px');

  bpCheck = createCheckbox('', true);
  bpCheck.style('position', 'absolute');
  bpCheck.style('top', '130px');
  bpCheck.style('left', '370px');

  bbCheck = createCheckbox('', true);
  bbCheck.style('position', 'absolute');
  bbCheck.style('top', '150px');
  bbCheck.style('left', '370px');

  pkCheck = createCheckbox('', true);
  pkCheck.style('position', 'absolute');
  pkCheck.style('top', '170px');
  pkCheck.style('left', '370px');

  pytkCheck = createCheckbox('', true);
  pytkCheck.style('position', 'absolute');
  pytkCheck.style('top', '220px');
  pytkCheck.style('left', '370px');

  ngCheck = createCheckbox('', true);
  ngCheck.style('position', 'absolute');
  ngCheck.style('top', '240px');
  ngCheck.style('left', '370px');

  gCheck = createCheckbox('', true);
  gCheck.style('position', 'absolute');
  gCheck.style('top', '285px');
  gCheck.style('left', '370px');

  pCheck = createCheckbox('', true);
  pCheck.style('position', 'absolute');
  pCheck.style('top', '335px');
  pCheck.style('left', '370px');

  tempoSlider = createSlider(30, 150, startBPM, 10);
  tempoSlider.position(40, 400);
  tempoSlider.style('width', '340px');
  tempo = 60000 / startBPM / 2;

}

function draw() {
  background(12);


  textAlign(LEFT, BOTTOM);
  fill(240, 240, 240);
  textSize(28);
  text('Javanese Gamelan: Ladrang structure', 40, 40);
  textSize(20);
  text('Balungan', 400, 100);
  textSize(18);
  text('tempo', 400, 415);
  textSize(14);
  text("by camille o.", 550, 465);
  text('Saron', 500, 85);
  text('Demung', 500, 100);
  text('Slenthem', 500, 115);
  textSize(20);
  fill(48,240,240);
  text('Bonang panerus', 400, 145);
  fill(48,48,240);
  text('Bonang barung', 400, 170);
  fill(240,48,240);
  text('Peking', 400, 195);
  fill(48,240,48);
  text('Kempyang and ketuk', 400, 240);
  text('Gong', 400, 305);
  fill(240,48,48);
  text('Kenong', 400, 265);
  fill(240,240,48);
  text('Kempul', 400, 355);

  counter += deltaTime;
  if (counter > tempo){
    beat++;
    counter = 0;
  }
  if (beat > 4) {
    beat = 1;
    measure ++;
    nong ++;
    loop ++;
  }
  if (measure > 4) { measure = 1; }
  if (nong > 8) { nong = 1; }
  if (loop > 32) { loop = 1; }
/*
  textSize(20);
  textAlign(CENTER,CENTER);
  fill(24,200,48);
  if (beat == 1){ text('I', 80, 440); }
  else if (beat == 2) { text('love', 80, 440);}
  else if (beat == 3) { text('my-', 80, 440); }
  else { text('-self', 80, 440); }

  text(measure, 160, 440);
  text(nong, 250, 440);
  text(loop, 330, 440);

  fill(activeColor); //debug
  text(counter, 600, 100);
  text(beat, 600, 150);
  text(loop, 600, 200); */

  tempo = 60000 / tempoSlider.value() / 2;

  if (mCheck.checked()){
    if (beat == 4){
      melColor = decay(melColor, 1, slowDecay);
      fill(color(melColor, melColor, melColor));
    }
    else {
      melColor = decay(melColor, 0, slowDecay);
      fill(color(melColor, melColor, melColor));
    }
  }
  else {
    melColor = 48;
    fill(color(24,24,24));
  }
  ellipse(210,100,60,60); //melody

  if (bpCheck.checked()){
    if (beat % 2 == 1){
      bpColor = decay(bpColor, 1, fastDecay);
      fill(color(48, bpColor, bpColor));
    }
    else {
      bpColor = decay(bpColor, 0, fastDecay);
      fill(color(48, bpColor, bpColor));
    }
  }
  else {
    bpColor = 48;
    fill(color(24,24,24));
  }
  ellipse(120,170,40,40); //BP

  if(bbCheck.checked()){
    if (beat == 2){
      bbColor = decay(bbColor, 1, slowDecay);
      fill(color(48, 48, bbColor));
    }
    else {
      bbColor = decay(bbColor, 0, slowDecay);
      fill(color(48, 48, bbColor));
    }
  }
  else {
    bbColor = 48;
    fill(color(24,24,24));
  }
  ellipse(210,170,40,40); //BB

  if (pkCheck.checked()){
    if (beat % 2 == 0){
      pkColor = decay(pkColor, 1, fastDecay);
      fill(color(pkColor, 48, pkColor));
    }
    else {
      pkColor = decay(pkColor, 0, fastDecay);
      fill(color(pkColor, 48, pkColor));
    }
  }
  else {
    pkColor = 48;
    fill(color(24,24,24));
  }
  ellipse(300,170,40,40); //peking

  if (pytkCheck.checked()){
    if (measure % 2 == 1 && beat == 4){
      pyColor = decay(pyColor, 1, slowDecay);
      fill(color(48, pyColor, 48));
    }
    else {
      pyColor = decay(pyColor, 0, slowDecay);
      fill(color(48, pyColor, 48));
    }
  }
  else {
    pyColor = 48;
    fill(color(24,24,24));
  }
  ellipse(160,235,25,25); //pyang

  if (pytkCheck.checked()){
    if (measure == 2 && beat == 4){
      tokColor = decay(tokColor, 1, slowDecay);
      fill(color(48, tokColor, 48));
    }
    else {
      tokColor = decay(tokColor, 0, slowDecay);
      fill(color(48, tokColor, 48));
    }
  }
  else {
    tokColor = 48;
    fill(color(24,24,24));
  }
  ellipse(260,235,25,25); //kotuk

  if (ngCheck.checked()){
    if (nong == 1 && beat == 1){
      nonColor = decay(nonColor, 1, slowDecay);
      fill(color(nonColor, 48, 48));
    }
    else {
      nonColor = decay(nonColor, 0, slowDecay);
      fill(color(nonColor, 48, 48));
    }
  }
  else {
    nonColor = 48;
    fill(color(24,24,24));
  }
  ellipse(210,235,35,35); //kenong

  if (gCheck.checked()){
    if (loop == 32 && beat == 4){
      gongColor = decay(gongColor, 1, slowDecay);
      fill(color(48, gongColor, 48));
    }
    else {
      gongColor = decay(gongColor, 0, slowDecay);
      fill(color(48, gongColor, 48));
    }
  }
  else {
    pulColor = 48;
    fill(color(24,24,24));
  }
  ellipse(210,300,40,40); //gong

  if (pCheck.checked()){
    if (nong == 4 && beat == 4 && loop != 4){
      pulColor = decay(pulColor, 1, slowDecay);
      fill(color(pulColor, pulColor, 48));
    }
    else {
      pulColor = decay(pulColor, 0, slowDecay);
      fill(color(pulColor, pulColor, 48));
    }
  }
  else {
    pulColor = 48;
    fill(color(24,24,24));
  }
  ellipse(210,350,25,25); //kempul

}

function decay(colorValue, decaying, decayRate){
  if (decaying == 1){
    return 240;
  }
  else {
    let c = colorValue - decayRate;
    if (c < 48){
      c = 48;
    }
    return c;
  }
}
