function generateHtml() {

	var container = document.createElement("div");
	container.style.display = "flex";
  	container.style.justifyContent = "center";
  	container.style.alignItems = "center";
	document.body.appendChild(container);

	var canvas = document.createElement("canvas");
	canvas.id = "canvas";
	canvas.width = "600";
	canvas.height = "400";
	container.appendChild(canvas);

	var buttons = document.createElement("div");
	buttons.style.display = "flex";
  	buttons.style.justifyContent = "center";
  	buttons.style.alignItems = "center";
  	container.appendChild(buttons);

  	var upd = document.createElement("button");
  	upd.innerHTML = "New";
  	upd.style.margin = "7px";
  	upd.style.background = "red";
  	upd.style.color = "white";
  	buttons.appendChild(upd);
  	upd.onclick = function() {
  		context = canvas.getContext("2d");
  		context.clearRect(0, 0, canvas.width, canvas.height);
  		addScript("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseText");
  		drowPics();
  	}

  	var download = document.createElement("button");
  	download.innerHTML = "Download";
  	download.style.margin = "7px";
  	download.style.background = "red";
  	download.style.color = "white";
  	buttons.appendChild(download);
  	download.onclick = function() {
  		var dataURL = canvas.toDataURL("image/png");
		var link = document.createElement("a");
		link.href = dataURL;
		link.download = "pictures.png";
		link.click();
  	}

  	addScript("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseText");
}

function addScript(source) {
	var script = document.createElement("script");
	script.src = source;
	document.head.appendChild(script);
}

function drowPics() {
	var a, b, c, d = false;
	var canvas = document.getElementById("canvas")
	var context = canvas.getContext("2d");
	var num = 17;
	var img = new Image();
	var img2 = new Image();
	var img3 = new Image();
	var img4 = new Image();
	img.onload = function() {
	    context.drawImage(img, 0, 0);
	    a = true;
	    check(a, b, c, d);
	}
	img2.onload = function() {
	    context.drawImage(img2, 300, 0);
	    b = true;
	    check(a, b, c, d);
	}
	img3.onload = function() {
	    context.drawImage(img3, 0, 200);
	    c = true;
	    check(a, b, c, d);
	}
	img4.onload = function() {
	    context.drawImage(img4, 300, 200);
	    d = true;
	    check(a, b, c, d);
	}
	img.crossOrigin = "anonymous";
	img.src = "https://source.unsplash.com/collection/" + collection() + "/300x200";
	img2.crossOrigin = "anonymous";
	img2.src = "https://source.unsplash.com/collection/" + collection() + "/300x200";
	img3.crossOrigin = "anonymous";
	img3.src = "https://source.unsplash.com/collection/" + collection() + "/300x200";
	img4.crossOrigin = "anonymous";
	img4.src = "https://source.unsplash.com/collection/" + collection() + "/300x200";
	
	function check(a, b, c, d) {
		if (a && b && c && d) {
			printText();
		}
	}
}

function parseText(response) {
	text = response.quoteText;
}

function printText() {
	var canvas = document.getElementById("canvas")
	var context = canvas.getContext("2d");
	context.font = "20px Arial";
	context.fillStyle = "rgba(0, 0, 0, 0.3)";
  	context.fillRect(0, 0, canvas.width, canvas.height);
  	context.fillStyle = "white"
	var maxWidth = 500;
	var lineHeight = 24;
	context.textAlign = "left";
	wrapText(context, text, maxWidth, lineHeight);
}

function wrapText(context, text, maxWidth, lineHeight) {
	var line = "";
	var words = [];
	var lines = [];

	words = this.text.split(" ");
	for (var i = 0; i < words.length; i++) {
		var testLine = line + words[i] + " ";
    	var testWidth = context.measureText(testLine).width;
    	if (testWidth > maxWidth) {
            lines.push(line);
            line = words[i] + " ";
        }
        else {
            line = testLine;
        }
    }
    lines.push(line);
    var totalHeight = lines.length * lineHeight;
    var fstMarginTop = (400 - totalHeight) / 2;
    var marginLeft = (600 - context.measureText(lines[0]).width) / 2;
    context.fillText(lines[0], marginLeft, fstMarginTop);
    var marginTop = fstMarginTop + lineHeight;
    for (var k = 1; k < lines.length; k++) {
    	marginLeft = (600 - context.measureText(lines[k]).width) / 2;
    	context.fillText(lines[k], marginLeft, marginTop);
    	marginTop += lineHeight;
    }
}

function collection() {
	return parseInt(Math.random() * 100);
}

generateHtml();
drowPics();

var text;