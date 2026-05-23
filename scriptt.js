function cekHasil(){

    let nama = document.getElementById("nama").value;
    let nilai = parseInt(document.getElementById("nilai").value);

    let status = "";
    let grade = "";

    if(nilai >= 90){
        grade = "A";
        status = "LULUS";
    }

    else if(nilai >= 75){
        grade = "B";
        status = "LULUS";
    }

    else if(nilai >= 60){
        grade = "C";
        status = "LULUS";
    }

    else{
        grade = "D";
        status = "TIDAK LULUS";
    }

    let hasil = document.getElementById("hasil");

    hasil.style.display = "block";

    if(status == "LULUS"){
        hasil.className = "hasil lulus";
    }

    else{
        hasil.className = "hasil gagal";
    }

    hasil.innerHTML = `
        <h3>Hasil Penilaian</h3>
        <br>
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Nilai:</b> ${nilai}</p>
        <p><b>Status:</b> ${status}</p>
        <p><b>Grade:</b> ${grade}</p>
    `;
}