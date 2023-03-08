// Set up Tone
// let osc = new Tone.AMOscillator(600, 'sine', 'sine').start()
// let gain = new Tone.Gain().toDestination();
// let pan = new Tone.Panner().connect(gain);
// let ampEnv = new Tone.AmplitudeEnvelope({
//   attack: 0.1,
//   decay: 0.2,
//   sustain: 3.0,
//   release: 0.8
// }).connect(pan);
// osc.connect(ampEnv);

const plucky = new Tone.PluckSynth()

let img1;
let img2;
let boolean = true;

function preload() {
  img1 = loadImage('../megaman.png');
  img2 = loadImage('../penguin.png');
}

function setup() {
  createCanvas(400, 400);
  plucky.toDestination();
}

function draw() {
  background(220);
  image(img1,0,0,200,150);
  if(boolean){
    image(img2,190,30,80,80,0,0,50,40);
  }else{
    image(img2,200,30,80,100,140,150,50,50);
  }

}

function mousePressed() {
  boolean = false;
  setTimeout(()=>{
    boolean = true;
  }, 300)

}