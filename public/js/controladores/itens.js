const path = require("path");

const getFilePath = (fileName) => {
    return path.join(__dirname, "../../html", fileName);
};

const home = (req, res) => {
    const filePath = getFilePath("index.html");
    res.sendFile(filePath);
}

const sobre = (req, res) => {
    const filePath = getFilePath("who-we-are.html");
    res.sendFile(filePath);
}

const estimate = (req, res) => {
    const filePath = getFilePath("estimate.html");
    res.sendFile(filePath);
};

const escola = (req, res) => {
    const filePath = getFilePath("escolas.html");
    res.sendFile(filePath);
};

const comun_visual = (req, res) => {
    const filePath = getFilePath("comun-visual.html");
    res.sendFile(filePath);
};

module.exports = {
    home,
    sobre,
    estimate,
    escola,
    comun_visual,
}