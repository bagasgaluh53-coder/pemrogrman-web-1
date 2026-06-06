// Function untuk menghitung diskon berdasarkan harga dan persentase diskon
function hitungDiskon(harga, diskonPersen) {
  if (typeof harga !== 'number' || typeof diskonPersen !== 'number') {
    return 'Input harus angka';
  }
  if (harga <= 0 || diskonPersen < 0 ) {
    return 'Harga dan diskon harus positif';
  }
  let diskon = harga * (diskonPersen / 100);
  let hargaAkhir = harga - diskon;
  return {
    hargaAwal: harga,
    diskon: diskon,
    hargaAkhir: hargaAkhir
  };
}

// Contoh penggunaan
const hasilDiskon = hitungDiskon(100000, 15);
console.log(hasilDiskon);
// Output: { hargaAwal: 100000, diskon: 15000, hargaAkhir: 85000 }