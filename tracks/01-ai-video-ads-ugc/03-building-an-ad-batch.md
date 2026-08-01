# Membangun Kelompok 10 Iklan

> Klien tidak membeli satu iklan — mereka membeli varian untuk diuji. Batching adalah produk sebenarnya.

**Lagu:** Iklan Video AI & UGC
**Waktu:** ~50 menit
**Prasyarat:** Cara Kerja AI UGC, Konsistensi Karakter & Wajah

## Masalahnya

Sebuah iklan, betapapun bagusnya, adalah pertaruhan pada satu sudut dan satu sudut. Merek yang menjalankan media sosial berbayar mengetahui hal ini — mereka menguji berbagai varian satu sama lain dan mempertahankan varian mana yang berkinerja baik. Inilah sebabnya mengapa layanan sebenarnya bukanlah "buatkan saya iklan", melainkan "buatkan saya 10 varian iklan yang dapat saya uji" — dan memproduksi secara batch secara efisien, bukan satu per satu dari awal, itulah yang menjadikan bisnis ini layak dan bukan kerajinan yang lambat.

## Konsep

Satu batch bukanlah 10 iklan yang tidak terkait — ini adalah satu produk, yang divariasikan dalam sejumlah kecil sumbu, sehingga Anda dapat memproduksinya secara efisien sambil tetap memberikan hal-hal berbeda yang bermakna kepada klien untuk diuji:

- **Variasi pengait** — produk yang sama, pembukaan berbeda 2 detik (pertanyaan, klaim tebal, sebelum/sesudah, soal terlebih dahulu)
- **Variasi sudut** — produk yang sama, sudut penjualan berbeda (harga, kenyamanan, bukti sosial, kebaruan)
- **Variasi format** — skrip yang sama, avatar/suara atau gaya b-roll yang berbeda

Memvariasikan ketiganya per iklan akan membuat setiap iklan berbeda dalam segala hal, sehingga mustahil untuk mengetahui *mengapa* satu iklan mengungguli yang lain. Variasikan satu atau dua sumbu sekaligus dan pertahankan sisanya konstan — itulah yang membuat hasil yang diperoleh klien benar-benar berguna, bukan sekadar "iklan lain".

## Lakukan itu

1. **Kunci konstanta.** Produk yang sama, titik bukti inti yang sama, CTA yang sama — produk ini tetap sama di seluruh batch.
2. **Tulis 3-4 varian kait** menggunakan templat skrip dari Modul 1, masing-masing menguji sudut pembukaan yang berbeda.
3. **Pasangkan kait dengan 2-3 varian sudut** (berfokus pada harga, berfokus pada kenyamanan, berfokus pada ketahanan sosial) untuk menghasilkan matriks kombinasi Anda — misalnya. 4 kait × 3 sudut tidak berarti 12 iklan; pilihlah 8-10 kombinasi yang paling menjanjikan daripada setiap permutasi.
4. **Gunakan kembali karakter Anda yang konsisten** (Modul 2) di seluruh kumpulan kecuali ringkasan tersebut memerlukan beberapa "tipe" pembuat.
5. **Pembuatan suara dan avatar secara batch** — karena skrip/karakter dikunci, langkah ini sebagian besar merupakan pengulangan dengan teks skrip yang berbeda, yang mana pembuatan berbasis API dapat menggunakan alat manual satu per satu.
6. **Tayangkan dengan rencana pengujian sederhana** — beri label pada setiap iklan berdasarkan sumbu mana iklan tersebut bervariasi, sehingga klien (atau Anda) benar-benar dapat membaca hasilnya setelahnya.

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/gripmount-ad2-problem-first.gif" alt="Variasi Iklan 2: Loop Masalah-Pertama" width="240">
<img src="templates/examples/gripmount-ad3-pov.gif" alt="Variasi Iklan 3: Lingkaran Demonstrasi POV" width="240">
</p>
<p align="center"><sub>Image-to-Video Problem-First Hook (Left) ──► POV Product Demonstration Loop (Right) · <a href="templates/examples/gripmount-ad2-problem-first.mp4">Ad 2 MP4</a> · <a href="templates/examples/gripmount-ad3-pov.mp4">Ad 3 MP4</a></sub></p>

Melanjutkan iklan GripMount (Modul 1) dengan "pembuat" yang konsisten dari Modul 2. Berikut matriks kumpulan pengujian 5 iklan yang sebenarnya:

| Iklan # | Kait | Sudut | Konstan |
|---|---|---|---|
| 1 | "Saya tidak mengira ini akan terjadi melalui lubang." | Daya tahan/kejutan | Demo produk yang sama, CTA yang sama |
| 2 | "Gunung lamaku terjatuh setiap kali berkendara." | Masalah-pertama (sebutkan titik sakitnya) | Demo produk yang sama, CTA yang sama |
| 3 | "POV: kamu sedang mengemudi dan ponselmu tidak jatuh sekali pun." | Format terkait/POV | Demo produk yang sama, CTA yang sama |
| 4 | "Benda seharga $28 ini memperbaiki masalah yang saya tidak tahu ada perbaikannya." | Pembingkaian harga/nilai | Demo produk yang sama, CTA yang sama |
| 5 | "Dua minggu, setiap lubang, masih bertahan." | Buktikan dulu (memimpin dengan hasil, bukan pertanyaan yang menarik) | Demo produk yang sama, CTA yang sama |

Hanya pengait dan sudut bukaan yang berubah — demo produk, bagian bukti, dan CTA tetap sama di kelima iklan tersebut, jadi jika satu iklan menang, Anda tahu itu pengaitnya, bukan variabel lainnya.

**Iklan 1 (Modul 1) vs. Iklan 2 dan Iklan 3, sebenarnya dihasilkan** — karakter jangkar yang sama (Modul 2), produk yang sama, hanya baris pembuka yang berubah. Seperti inilah tampilan "batching" dalam praktiknya, bukan sekadar tabel pengait:



Memproduksi 3 ini memerlukan penggunaan kembali gambar jangkar yang diunggah yang sama di 3 panggilan `seedance-2-image-to-video-fast` yang terpisah, hanya mengubah baris dialog perintah setiap kali (~$0,75/klip) — inilah tepatnya yang dimaksud dengan "pembuatan suara dan avatar yang menghasilkan batch" di Do It, langkah 5 berarti: karakter dan produk tetap, hanya teks skrip yang berubah per panggilan.

**Cara membaca tes** setelah iklan ini dijalankan sebagai iklan sosial berbayar: periksa **hook rate** terlebih dahulu (% pemirsa yang menonton setelah 2-3 detik pertama) — iklan dengan hook rate yang lemah akan mati, apa pun yang terjadi di hilir, jadi jangan repot-repot membandingkan CPA di dalamnya dulu. Hanya bandingkan biaya per hasil (CPA/ROAS) di seluruh iklan yang sudah memiliki tingkat kaitan yang layak; BPA yang rendah dengan pembelanjaan yang sangat sedikit hanyalah gangguan, bukan sinyal. Aturan praktis yang umum: jalankan setiap varian dalam jangka waktu yang cukup lama untuk menghapus beberapa ribu tayangan (kira-kira 3-4 hari dengan anggaran harian per varian yang sederhana) sebelum menentukan pemenangnya — cukup lama untuk melewati fase pembelajaran awal platform, cukup singkat untuk tidak menyia-nyiakan pembelanjaan pada varian yang jelas-jelas kalah.

**Pelabelan untuk klien:** mengirimkan kumpulan iklan dengan masing-masing iklan diberi tag berdasarkan hal yang berbeda-beda ("Iklan 2 = pengait pertama yang bermasalah") sehingga siapa pun yang menjalankan pembelian media dapat membaca hasilnya kembali ke keputusan materi iklan tertentu, bukan hanya "iklan 2 berkinerja lebih baik".

## Bandingkan Alat

| Jalur | Throughput untuk kumpulan 10 iklan | Terbaik untuk |
|---|---|---|
| **muapiAPI** | Cepat — membuat skrip batch sebagai panggilan berulang yang hanya memvariasikan teks skrip/params | Klien bekerja dengan tenggat waktu; default untuk produksi batch |
| **Alat UGC berbayar lainnya (berbasis GUI)** | Lebih lambat — biasanya satu per satu melalui UI, meskipun UI telah dipoles | Iklan tunggal sesekali, bukan produksi batch |
| **Lokal/dihosting sendiri** | Bisa cepat setelah alur kerja pembuatan batch disiapkan (misalnya antrean alur kerja ComfyUI), namun investasi penyiapan hanya membuahkan hasil pada volume berulang yang tinggi | Agensi yang memproduksi banyak batch per bulan yang telah membayar biaya setup lokal di Modul 1/2 |

## Luncurkan

**Cara menentukan harga:** Harga per batch, bukan per iklan — mis. "$150-$300 untuk 5-8 batch pengujian iklan," termasuk penskalaan dengan revisi. Hal ini sesuai dengan pemikiran merek tentang anggaran iklan UGC dan lebih mudah untuk dijual dibandingkan kartu tarif per iklan.

**Cara memposisikannya:** Jual *kemampuan pengujian*, bukan jumlah iklan — "dapatkan 8 varian untuk menemukan pemenang" adalah promosi yang lebih kuat daripada "dapatkan 8 iklan". Merek yang menjalankan media sosial berbayar sudah memahami mengapa hal ini penting.

**Di mana menemukan klien pertama:** Sama seperti Modul 1 — merek DTC secara nyata menjalankan iklan sosial berbayar. Khusus untuk pekerjaan batch, sebutkan dalam penjangkauan bahwa Anda dapat menyelesaikan batch pengujian lengkap lebih cepat daripada mencari beberapa pembuat manusia, karena kecepatan untuk menguji adalah nilai sebenarnya yang didukung di sini.

**Jumlah sebenarnya:** Pengikut iklan UGC tingkat agensi yang didokumentasikan dalam kisaran $1.500-$3.000/bulan biasanya membeli produksi batch berkelanjutan seperti ini, bukan iklan satu kali — modul inilah yang membuat model pengikut tersebut dapat diterapkan.

## Latihan

1. **Mudah:** Rencanakan matriks kumpulan 6 iklan (3 kait × 2 sudut) untuk produk pilihan Anda, tanpa harus memproduksinya terlebih dahulu.
2. **Sedang:** Menghasilkan kumpulan 5 iklan secara menyeluruh, mempertahankan karakter dan CTA yang konstan sambil memvariasikan kaitan dan sudut.
3. **Sulit:** Buat kumpulan 10 iklan dan tulis "rencana pengujian" satu halaman yang dapat digunakan klien untuk melacak varian mana yang berkinerja terbaik.

## Templat

Templat yang dapat digunakan kembali yang dihasilkan modul ini — isi templat ini dan gunakan kembali pada pekerjaan nyata:

- [`templates/batch-matrix-template.md`](templates/batch-matrix-template.md) — templat pengisian untuk merencanakan kombinasi kait × sudut sebelum produksi.

---

[← Previous: Character & Face Consistency](02-character-consistency.md) · [Track overview](README.md) · Berikutnya: [Pricing & Selling UGC Ads →](04-pricing-and-selling-ugc.md)
