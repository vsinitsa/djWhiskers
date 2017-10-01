module.exports.randColor = () => {
    var pad = "00"
    var r = randomInt(0, 256).toString(16);
    var g = randomInt(0, 256).toString(16);
    var b = randomInt(0, 256).toString(16);
    var rgb = `#${r.substring(0, pad.length - r.length) + r}${g.substring(0, pad.length - g.length) + g}${b.substring(0, pad.length - b.length) + b}`;
    return rgb.toUpperCase();
}

var randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

