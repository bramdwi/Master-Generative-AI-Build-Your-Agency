# Daftar Periksa Konsistensi Karakter

Dari [Module 2: Character & Face Consistency](../02-character-consistency.md). Sebelum mengirimkan batch, bandingkan semua gambar yang dihasilkan dari karakter yang sama dengan gambar tersebut.

## Contoh yang diisi

Menggunakan potret jangkar asli dari Contoh Kerja Modul 2 (wanita, akhir 20-an, rambut cokelat, bintik-bintik), dimasukkan sebagai referensi ke `nano-banana-2-edit` untuk 3 generasi sebenarnya — [car interior](../02-character-consistency.md), meja dapur, berjalan di luar:

| Periksa | Interior mobil | Meja dapur | Berjalan di luar |
|---|---|---|---|
| Struktur wajah cocok dengan jangkar | ✅ | ✅ | ✅ |
| Usia yang tampak konsisten | ✅ | ✅ | ✅ |
| Bintik-bintik hadir | ✅ | ✅ | ✅ |
| Warna kulit/pergeseran pencahayaan | Cocok dengan jangkar | Cocok dengan jangkar | Beda pencahayaan (outdoor), identitas tetap dipegang |
| Kontinuitas pakaian (jika adegan sama) | t/a — bidikan berbeda | tidak ada | tidak ada |

**Putusan:** tidak ada penyimpangan pada salah satu dari ketiganya, termasuk pengambilan gambar di luar ruangan dengan pencahayaan yang sangat berbeda dari jangkar. Seperti inilah pengkondisian gambar referensi yang dilakukan dengan benar - gambar referensi diteruskan ke model berkemampuan *edit* (bukan perintah hanya teks baru), dan perintah tersebut hanya menjelaskan pengaturannya, bukan wajahnya. Jika Anda melihat penyimpangan dalam upaya Anda sendiri, periksa kedua hal tersebut terlebih dahulu sebelum berasumsi bahwa model tersebut tidak dapat memiliki identitas.

## Daftar periksa kosong

- [ ] Struktur wajah cocok dengan seluruh bidikan (bentuk wajah, jarak mata, hidung)
- [ ] Usia yang tampak konsisten
- [ ] Ciri khas apa pun (bintik-bintik, bekas luka, gaya rambut tertentu) muncul di setiap bidikan
- [ ] Warna/pencahayaan kulit tidak mengubah identitas yang terlihat
- [ ] Jika pakaian harus tetap sama di seluruh adegan, periksa kontinuitas antar potongan
