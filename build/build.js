var gui = new dat.GUI();
var params = {
    Random_Seed: 0,
    Download_Image: function () { return save(); },
};
gui.add(params, "Random_Seed", 0, 100, 1);
gui.add(params, "Download_Image");
function draw() {
    randomSeed(params.Random_Seed);
    background('white');
    noFill();
    for (var i = 0; i < 10; ++i) {
        push();
        var rand = random(4);
        if (rand < 1) {
            translate(-300, random(-500, 500), random(-500, 500));
        }
        else if (rand < 2) {
            translate(300, random(-500, 500), random(-500, 500));
        }
        else {
            translate(random(-500, 500), -300, random(-500, 500));
        }
        box(random(10, 200), random(10, 200), random(10, 200));
        pop();
        rectMode(CENTER);
        strokeWeight(1);
        for (var i_1 = 0; i_1 < 200; ++i_1) {
            line(150, height * 0.3, width - 100, height * 0.3);
            line(height * 0.1, 90, height * 0.3, width - 100);
            line(height * 0.09, 90, height * 0.2, width - 10);
            line(height * 0.08, 90, height * 0.2 * 0.2, width - 10);
        }
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight(), WEBGL);
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map