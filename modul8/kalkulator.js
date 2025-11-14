function hitung(operasi) {
    let a = parseFloat(document.getElementById("bil1").value);
    let b = parseFloat(document.getElementById("bil2").value);
    let hasil = "";

    if (isNaN(a) || isNaN(b)) {
        hasil = "Input tidak valid";
    } else {
        if (operasi === "+") hasil = a + b;
        else if (operasi === "-") hasil = a - b;
        else if (operasi === "*") hasil = a * b;
        else if (operasi === "/") hasil = a / b;
    }

    document.getElementById("hasil").value = hasil;
}
