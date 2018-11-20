let mobilenet; 

function modelReady(){
	console.log("Model is ready!!!");
}

function setup() {
	createCanvas(640, 480);
	background(0);
	mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}


let mobileNet;

function modelReady() {
	console.log("Model is ready");
	mobileNet.predict(puffin, gotResults);
}

function gotResults(error, results){
	if (error){
		console.error(error);
	} else{
		console.log(results);
		let label = results[0].className;
		fill(0);
		textSize(64);
		text(label, 10, height-100);
		createP(label);
	}
}

function imageReady(){
	image(puffin, 0, 0, width, height);
}


function setup(){
	createCanvas(640, 480);
	puffin = createImg("images/puffin.jpg", imageReady);
	puffin.hide();
	background(0);
	mobileNet = ml5.imageClassifier("MobileNet", modelReady);
}