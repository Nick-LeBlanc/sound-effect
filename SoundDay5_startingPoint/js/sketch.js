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

const plucky = new Tone.PluckSynth();
const pitch  = new Tone.PitchShift(-1);

const notes = [
    { pitch: "G4", timing: 0 },
    { pitch: "F4", timing: 0.1 },
    { pitch: "E4", timing: 0.1 },
    { pitch: "D4", timing: 0.1 },
    { pitch: "C4", timing: 0.1 }
];

function play() {
    let delay = Tone.now();
    for(let i = 0; i < notes.length; i++) {
        delay += notes[i].timing;
        plucky.triggerAttackRelease(notes[i].pitch, '8n', delay);  
    }
}

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
  pitch.toDestination();
  plucky.connect(pitch);
}

function draw() {
  background(220);
  image(img1,0,100,200,150);
  if(boolean){
    image(img2,190,30,200,200,0,0,50,40);
  }else{
    image(img2,200,30,200,200,140,150,50,50);
  }

  text("press mouse to kill Chill Penguin", 200, 300);

}

function mousePressed() {
  
  boolean = false;
  setTimeout(()=>{
    boolean = true;
  }, 500)


   play();

}