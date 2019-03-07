var sizeListColors = 5;
function randomPalette(){
    
    var r, g, b;
    r = generationRandomValue(0, 255);
    g = generationRandomValue(0, 255);
    b = generationRandomValue(0, 255);
    console.log("Color: R = ${r} - G = ${g} B = ${b}");

    var HSV = RGBToHSV(r, g, b);
    var arrayRandomColors = [];
    var interval = 1 / sizeListColors;
  
    for (var i = 0; i < sizeListColors; i++) {
        hsl[0] = getNextHue(HSV[0], interval);
        var rgb = hslToRgb(HSV[0], HSV[1], HSV[2]);
        var hex = rgbToHex(rgb[0], rgb[1], rgb[2]).toUpperCase();
        arrayRandomColors.push(hex);
    }

    generateRules(arrayRandomColors);
}

function generateRules(arrayRandomColors) {
    var rules = [
        ".website-background{ color: ${arrayRandomColors[0]};}",
        ".element-text{ color: ${arrayRandomColors[1]};}",
        ".element-border{ border-color: ${arrayRandomColors[2]};}",
        ".element-background{ background-color: ${arrayRandomColors[3]};}",
        ".header{ color: ${arrayRandomColors[4]};}"
    ];
    for (var i = 0; i < sizeListColors; i++) {
        $("#color${i + 1}").css('background-color', arrayRandomColors[i]);
    }
    $("textarea#css-rules").val(rules.join('\r\n\n'));
}

function restart() {
    var arrayRandomColors = [
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF'
    ];
    generateRules(arrayRandomColors);
}

function generationRandomValue(minimum, maximum) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getNextHue(h, distance) {
    h += distance;
    h = h > 1 ? h - 1 : h;
    return h;
}
