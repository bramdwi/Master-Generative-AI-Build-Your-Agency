# Konsistensi Karakter & Wajah

> Jika pembuat AI Anda terlihat seperti orang yang berbeda di setiap pengambilan gambar, tidak ada yang akan membayar untuk iklan tersebut.

**Lagu:** Iklan Video AI & UGC
**Waktu:** ~40 menit
**Prasyarat:** Cara Kerja AI UGC Sebenarnya

## Masalahnya

Ini adalah satu-satunya keluhan paling umum dari orang-orang yang mencoba konten buatan AI: "karakter" yang sama terlihat seperti orang yang sedikit berbeda di setiap generasi — bentuk wajah berbeda, usia berbeda, kontinuitas pakaian berbeda. Untuk gambar satu kali, ini tidak masalah. Untuk kampanye iklan UGC, pembawa acara saluran tanpa wajah, atau influencer AI, hal ini didiskualifikasi — pemirsa akan langsung menyadarinya, dan klien akan menolak karya tersebut.

Kebanyakan tutorial melewatkan bagian ini karena ini adalah bagian tersulit untuk dijelaskan secara sederhana, dan itulah mengapa ini adalah modulnya sendiri dan bukan catatan kaki.

## Konsep

Konsistensi berasal dari pemberian "jangkar" pada model yang tidak dapat diabaikan, alih-alih mendeskripsikan ulang karakter dalam teks setiap saat. Tiga jenis jangkar, dari yang terlemah hingga terkuat:

- **Konsistensi hanya sesaat** — mendeskripsikan karakter secara detail setiap saat (rambut, wajah, usia, pakaian). Terlemah — deskripsi teks bersifat ambigu dan model mengisi kesenjangan secara berbeda di setiap generasi.
- **Konsistensi gambar referensi** — memasukkan foto referensi karakter di samping perintah, sehingga model mengkondisikan wajah sebenarnya, bukan hanya deskripsi teks. Jauh lebih kuat, dan paling mudah digunakan dengan model berbasis API.
- **Identitas yang disempurnakan/dikunci (LoRA atau yang setara)** — melatih adaptor kecil pada beberapa foto dengan karakter yang sama sehingga model dapat mereproduksi identitas persis tersebut dari perintah apa pun. Paling kuat dan paling portabel di seluruh adegan, tetapi memerlukan lebih banyak penyiapan (biasanya langkah lokal/yang dihosting sendiri, bukan satu panggilan API).

**seed** yang tetap (titik awal angka acak untuk pembuatan) juga membantu dalam satu sesi, namun seed-locking saja tidak dapat bertahan di berbagai perintah atau sesi seperti yang dilakukan gambar referensi atau identitas terlatih — perlakukan seed-locking sebagai pembantu, bukan mekanisme utama.

## Lakukan itu

1. **Pilih atau buat karakter utama Anda** — baik gambar "pendiri" yang dibuat oleh AI atau foto referensi stand-in, dengan resolusi tinggi, menghadap ke depan, dan pencahayaan netral.
2. **Gunakan pengkondisian gambar referensi** untuk setiap generasi berikutnya dari karakter tersebut — berikan gambar jangkar di samping setiap perintah baru (pakaian, pose, latar belakang yang berbeda) daripada mendeskripsikan ulang orang tersebut dalam teks.
3. **Periksa penyimpangan** — buat 3-5 variasi dan bandingkan: struktur wajah yang sama, usia yang sama, ciri pengenal yang konsisten (bintik-bintik, gaya rambut tertentu). Jika melayang, kencangkan perintah untuk menjelaskan hanya apa yang harus diubah (pakaian, latar belakang) dan andalkan gambar referensi untuk segala hal tentang wajah.
4. **Untuk penggunaan yang berulang-ulang** (karakter iklan berulang, influencer, host saluran), pertimbangkan untuk melatih model identitas khusus (gaya LoRA) — biaya penyiapan satu kali, kemudian konsistensi yang hampir sempurna di seluruh generasi mendatang tanpa batas.

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/character-anchor.jpg" alt="Profil Utama" width="220">
<img src="templates/examples/character-drift-car.jpg" alt="Render Konsisten" width="220">
<img src="templates/examples/gripmount-hook-clip.gif" alt="Gerakan Karakter Konsisten (I2V)" width="220">
</p>
<p align="center"><sub>Master Character (Left) ──► Car Interior Render (Center) ──► Image-to-Video Motion (Right) · <a href="templates/examples/gripmount-hook-clip.mp4">MP4</a></sub></p>

Katakanlah Anda membuat gambar jangkar untuk "kreator" berulang — seorang wanita berusia akhir 20-an, menghadap ke depan, pencahayaan netral, rambut cokelat, bintik-bintik di hidungnya — untuk menampilkan iklan GripMount Anda (Modul 1) di seluruh batch.



**Tanpa gambar referensi (hanya konfirmasi):** mengetik ulang "wanita, akhir 20-an, rambut cokelat, bintik-bintik" untuk setiap foto baru akan menghasilkan wanita yang *berbeda* setiap kali — deskripsi kasar yang sama, tetapi model mengisi bentuk wajah, panjang rambut yang tepat, dan penempatan bintik yang berbeda setiap generasi. Dari 5 pengambilan gambar, Anda mungkin akan mendapatkan 5 orang yang sangat berbeda.

**Dengan pengkondisian gambar referensi:** meneruskan gambar jangkar di samping setiap perintah baru ("wanita yang sama, sekarang di dalam mobil, memegang telepon" — hanya menjelaskan perubahan apa saja). Bentuk wajah, bintik-bintik, dan usia yang terlihat tetap terkunci karena model mengkondisikan gambar sebenarnya, bukan menebak ulang dari teks. Ini adalah setelan default yang berfungsi untuk iklan klien GripMount satu kali.

**Drift-check, sebenarnya dijalankan** — wanita jangkar yang dihasilkan dalam 3 pengaturan nyata (interior mobil, meja dapur, berjalan di luar), menggunakan gambar jangkar sebagai input referensi ke model gambar berkemampuan *edit* dan bukan perintah teks biasa:



**Apa yang sebenarnya terjadi:** tidak ada perubahan berarti pada ketiganya — bentuk wajah, pola bintik, dan rambut, semuanya bertahan bahkan dalam pengambilan gambar di luar ruangan dengan pencahayaan yang sangat berbeda dari jangkar. Ini adalah hasil nyata dari pengkondisian gambar referensi yang dilakukan dengan benar: teruskan gambar jangkar sebagai input *edit* (tidak hanya mendeskripsikan karakter dalam prompt teks baru) dan biarkan prompt hanya menjelaskan pengaturannya. Jika Anda *benar-benar* melihat penyimpangan dalam upaya Anda sendiri — rahang yang lebih bulat, bintik-bintik yang hilang, usia yang terlihat berbeda — biasanya hal ini terjadi karena perintah tersebut mendeskripsikan ulang fitur wajah, bukan hanya lingkungan sekitar, atau gambar referensi tidak benar-benar diteruskan ke titik akhir yang dapat diedit.

**Ketika layak untuk melatih LoRA:** jika "kreator" yang sama ini akan menampilkan puluhan iklan selama berbulan-bulan (bukan hanya satu batch GripMount), satu kali pelatihan LoRA yang berisi 15-20 foto dirinya akan mengunci identitas lebih rapat dan menghilangkan risiko per pengambilan gambar sama sekali — sesuai dengan penyiapan setelah digunakan kembali, bukan pekerjaan satu kali, adalah rencananya.

*Cara menghasilkan 3 gambar di atas:* mengunggah gambar jangkar satu kali melalui `upload_file` muapi, lalu melakukan 3 panggilan terpisah ke **`nano-banana-2-edit`** ($0,06/gambar), meneruskan gambar yang diunggah yang sama sebagai referensi (`images_list`) setiap kali dengan perintah yang hanya menjelaskan latar baru ("wanita yang sama seperti pada gambar referensi, sekarang duduk di dalam mobil...") — tidak pernah mendeskripsikan ulang wajah itu sendiri. Model edit bersyarat referensi lainnya yang bekerja dengan cara yang sama: `nano-banana-pro-edit`, `gpt-image-2-image-to-image`.

## Bandingkan Alat

Untuk langkah gambar referensi itu sendiri, model gambar generasi saat ini (misalnya Nano Banana 2/Pro, Seedream) memiliki identitas wajah yang jauh lebih baik dalam perubahan cepat dibandingkan model gambar generasi lama — potret jangkar yang digunakan dalam Contoh yang Dikerjakan di atas berasal dari salah satunya. Kualitas model lebih penting di sini dibandingkan di tempat lain, karena seluruh modul ini ada untuk melawan penyimpangan identitas.

| Jalur | Kekuatan konsistensi | Upaya pengaturan | Terbaik untuk |
|---|---|---|---|
| **muapi API, pengondisian gambar referensi** | Bagus — kemiripan yang kuat antar generasi | Rendah — meneruskan parameter gambar referensi | Sebagian besar UGC/iklan berfungsi; jalur tercepat menuju "cukup baik" |
| **Alat berbayar lainnya dengan fitur "karakter" bawaan** | Bervariasi - beberapa membungkus pengkondisian gambar referensi di belakang UI yang lebih sederhana | Rendah | Tim menginginkan GUI dengan teknik dasar yang sama |
| **Lokal (ComfyUI + LoRA terlatih, atau LTX 2.3 untuk sisi video)** | Terkuat — identitas yang hampir identik di semua prompt/adegan | Tinggi — memerlukan izin pelatihan pada beberapa foto referensi, lalu alur kerja untuk menggunakannya | Karakter berulang yang digunakan selama puluhan/ratusan generasi (seorang influencer, pembawa acara saluran) yang biaya pelatihannya terbayar sendiri |

Jujurlah pada diri sendiri tentang berapa kali Anda akan menggunakan kembali karakter ini. Pengkondisian gambar referensi melalui API adalah default yang tepat untuk iklan klien satu kali. Identitas lokal yang terlatih layak untuk disiapkan ekstra hanya setelah Anda membuat karakter yang sama berulang kali.

## Luncurkan

**Cara menentukan harga:** Pekerjaan konsistensi tidak ditagih secara terpisah — hal inilah yang membuat hasil yang dapat digunakan, sehingga dimasukkan ke dalam harga iklan atau konten Anda (lihat Modul 4). Yang *dapat* Anda jual adalah **paket "karakter AI bermerek"** — merancang dan mengunci identitas konsisten yang dapat digunakan kembali oleh klien di semua konten di masa mendatang, dengan biaya penyiapan satu kali ($200-$500) ditambah produksi per potong setelahnya.

**Cara memosisikannya:** Bingkai foto sebagai "juru bicara AI Anda yang dapat digunakan kembali", bukan "foto buatan AI". Klien membayar lebih untuk sesuatu yang dapat mereka gunakan kembali di seluruh kampanye dibandingkan untuk satu gambar.

**Di mana hal ini muncul:** Setiap jalur dalam kurikulum ini bergantung pada modul ini — influencer AI, "host" saluran tanpa wajah, dan karakter iklan UGC semuanya merupakan masalah konsistensi mendasar yang sama yang diterapkan pada model bisnis yang berbeda.

## Latihan

1. **Mudah:** Hasilkan karakter yang sama dalam 3 pakaian berbeda menggunakan pengondisian gambar referensi; periksa penyimpangan wajah di atasnya.
2. **Sedang:** Hasilkan karakter yang sama dalam 5 adegan/latar belakang berbeda dan identifikasi detail mana yang pertama kali muncul (biasanya: usia, proporsi wajah tertentu, gaya rambut).
3. **Sulit:** Siapkan alur kerja ComfyUI lokal dengan identitas terlatih untuk satu karakter dan bandingkan konsistensi dengan pendekatan gambar referensi API untuk 5 adegan yang sama.

## Templat

Templat yang dapat digunakan kembali yang dihasilkan modul ini — isi templat ini dan gunakan kembali pada pekerjaan nyata:

- [`templates/character-consistency-checklist.md`](templates/character-consistency-checklist.md) — apa yang harus diperiksa penyimpangannya sebelum mengirimkan batch ke klien.

---

[← Previous: How AI UGC Actually Works](01-how-ugc-works.md) · [Track overview](README.md) · Berikutnya: [Building a 10-Ad Batch →](03-building-an-ad-batch.md)
