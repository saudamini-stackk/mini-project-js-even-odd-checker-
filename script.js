function checkNumber() {
    let num = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.innerHTML = "Please enter a number";
        return;
    }

    if (num % 2 === 0) {
        result.innerHTML = num + " is Even";
        result.className = "show even";
    } else {
        result.innerHTML = num + " is Odd";
        result.className = "show odd";
    }
}
