function getBigger() {
    document.getElementById("text-area").style.fontSize = "24pt";
}

function getFancyShmancy() {
    document.getElementById("text-area").style.fontWeight = "bold";
    document.getElementById("text-area").style.color = "blue";
    document.getElementById("text-area").style.textDecoration = "underline";
}

function getBoringBetty() {
    document.getElementById("text-area").removeAttribute("style");
}

function getMoo() {
    inputStr = document.getElementById("text-area").value;
    splitUpper = inputStr.toUpperCase().split(".")
    joinMoo = splitUpper.join("-MOO.")

    document.getElementById("text-area").value = joinMoo;
}