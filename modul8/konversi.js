function konversi() {
    let n = parseInt(document.getElementById("nilai").value);
    let huruf = "";

    if (isNaN(n) || n < 0 || n > 100) {
        huruf = "Nilai tidak valid!";
    } else if (n <= 40) {
        huruf = "E";
    } else if (n <= 55) {
        huruf = "D";
    } else if (n <= 60) {
        huruf = "C";
    } else if (n <= 65) {
        huruf = "BC";
    } else if (n <= 70) {
        huruf = "B";
    } else if (n <= 80) {
        huruf = "AB";
    } else {
        huruf = "A";
    }

    document.getElementById("hasil").innerText = huruf;
}
