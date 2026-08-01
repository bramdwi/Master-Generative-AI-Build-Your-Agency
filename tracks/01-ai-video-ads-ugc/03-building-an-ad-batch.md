# Membangun 10-Ad Batch

> Client tidak membeli satu ad tunggal — mereka membeli variasi untuk diuji. Pembuatan batch adalah produk sebenarnya.

**Track:** AI Video Ads & UGC

**Waktu:** ~50 menit

**Prasyarat:** Bagaimana AI UGC Bekerja Sebenarnya, Konsistensi Karakter & Wajah

## Masalahnya

Satu ad tunggal, sebaik apa pun kualitasnya, merupakan spekulasi atas satu hook dan satu sudut pandang. Brand yang menjalankan iklan berbayar di media sosial memahami hal ini — mereka menguji beberapa variasi secara bersamaan dan mempertahankan mana yang berkinerja terbaik. Inilah alasan mengapa nilai layanan sebenarnya bukanlah "buatkan saya satu ad," melainkan "buatkan saya 10 ad variants yang dapat diuji" — dan memproduksi sebuah batch secara efisien, alih-alih membuat satu per satu dari awal, adalah elemen yang menjadikan alur ini sebagai bisnis yang berkelanjutan.

## Konsep

Sebuah batch bukanlah 10 ad yang tidak saling berhubungan — melainkan satu produk yang divariasikan pada beberapa elemen kecil, sehingga Anda dapat memproduksinya secara efisien sekaligus menyajikan pilihan yang relevan bagi client untuk diuji:

* **Variasi hook** — produk yang sama, dengan 2 detik pembuka yang berbeda (pertanyaan, klaim tegas, sebelum/sesudah, berfokus pada masalah)
* **Variasi sudut pandang (angle)** — produk yang sama, dengan sudut penjualan yang berbeda (harga, kepraktisan, bukti sosial, keunikan)
* **Variasi format** — script yang sama, dengan avatar/voice atau gaya b-roll yang berbeda

Mengubah ketiga elemen tersebut pada setiap ad akan membuat tiap ad berbeda secara keseluruhan, sehingga mustahil untuk mengidentifikasi *mengapa* satu variasi berkinerja lebih unggul dibanding yang lain. Variasikan satu atau dua elemen saja secara bertahap dan pertahankan elemen lainnya tetap konstan — hal inilah yang membuat hasil pengujian yang diterima client menjadi relevan dan terukur.

## Lakukan itu

1. **Kunci elemen konstan.** Produk yang sama, poin pembuktian utama yang sama, serta CTA yang sama — elemen-elemen ini dipertahankan di seluruh rangkaian batch.
2. **Susun 3-4 variasi hook** mengandalkan templat script dari Modul 1, di mana masing-masing menguji sudut pembuka yang berbeda.
3. **Padukan hook dengan 2-3 variasi angle** (berfokus pada harga, kepraktisan, maupun bukti sosial) untuk menyusun matriks kombinasi — contohnya 4 hook × 3 angle tidak harus menghasilkan 12 ad; pilih 8-10 kombinasi paling potensial.
4. **Gunakan kembali karakter konsisten Anda** (Modul 2) di seluruh rangkaian batch kecuali brief mewajibkan beberapa tipe creator.
5. **Lakukan produksi voice dan avatar secara batch** — karena script/karakter telah terkunci, tahapan ini mayoritas berupa pengulangan dengan teks script yang berbeda, di mana generasi berbasis API menunjukkan efisiensinya dibanding tools manual satu per satu.
6. **Serahkan hasil pengerjaan disertai rencana pengujian sederhana** — beri label pada setiap ad berdasarkan elemen variasinya, sehingga client (atau Anda) dapat membaca hasil pengujian secara terstruktur.

## Contoh yang berhasil

Melanjutkan ad GripMount (Modul 1) mengandalkan "creator" yang konsisten dari Modul 2. Berikut matriks pengujian nyata untuk 5-ad batch:

| Ad # | Hook | Angle | Elemen Konstan |
| --- | --- | --- | --- |
| 1 | "I did not expect this to hold through a pothole." | Ketahanan/kejutan | Demo produk yang sama, CTA yang sama |
| 2 | "My old mount fell off literally every drive." | Berfokus pada masalah (menyebutkan titik kendala) | Demo produk yang sama, CTA yang sama |
| 3 | "POV: you're driving and your phone doesn't fall for once." | Format relevan/POV | Demo produk yang sama, CTA yang sama |
| 4 | "This $28 thing fixed a problem I didn't know had a fix." | Pembingkaian harga/nilai | Demo produk yang sama, CTA yang sama |
| 5 | "Two weeks, every pothole, still holding." | Berfokus pada bukti (diawali hasil, bukan pertanyaan) | Demo produk yang sama, CTA yang sama |

Hanya hook dan angle pembuka yang diubah — demo produk, bagian pembuktian, dan CTA dibuat identik di seluruh 5 variasi, sehingga jika satu ad unggul, Anda mengetahui secara pasti bahwa penyebabnya adalah hook, bukan variabel lain.

**Hasil generasi nyata Ad 1 (Modul 1) berbanding Ad 2 dan Ad 3** — karakter anchor yang sama (Modul 2), produk yang sama, hanya kalimat pembuka yang disesuaikan. Seperti inilah wujud eksekusi "batching" dalam praktik nyata:

Memproduksi 3 variasi ini memanfaatkan kembali gambar anchor terunggah yang sama melalui 3 pemanggilan terpisah `seedance-2-image-to-video-fast`, dengan hanya menyesuaikan dialog pada prompt di setiap pemanggilan (~$0.75/clip) — ini adalah penerapan nyata dari langkah "produksi voice dan avatar secara batch" pada Lakukan itu, langkah 5: karakter dan produk tetap terkunci, hanya teks script yang disesuaikan per pemanggilan.

**Cara membaca hasil pengujian** saat variasi ini dijalankan sebagai iklan berbayar: evaluasi **hook rate** terlebih dahulu (% penonton yang menyimak melampaui 2-3 detik pertama) — ad dengan hook rate yang rendah tidak perlu dilanjutkan, sehingga Anda tidak perlu membandingkan CPA pada variasi tersebut. Hanya bandingkan cost-per-result (CPA/ROAS) pada ad yang telah menunjukkan hook rate yang memadai; CPA rendah pada jumlah impresi yang sangat kecil merupakan fluktuasi acak, bukan indikator utama. Acuan umum: jalankan setiap variasi hingga meraih beberapa ribu impresi (sekitar 3-4 hari dengan alokasi anggaran harian moderat per variasi) sebelum menentukan hasil akhir — durasi yang cukup untuk melewati tahapan pembelajaran awal platform, sekaligus terukur agar tidak membuang anggaran pada variasi yang tidak efektif.

**Pemberian label untuk client:** serahkan batch disertai label pada setiap ad sesuai variabel perubahannya ("Ad 2 = problem-first hook") sehingga pengelola iklan dapat mengaitkan hasil performa pada keputusan kreatif yang spesifik.

## Bandingkan Alat

| Path | Kapasitas produksi untuk 10-ad batch | Paling sesuai untuk |
| --- | --- | --- |
| **muapi API** | Cepat — susun alur batch sebagai pemanggilan berulang dengan menyesuaikan teks script/parameter | Pengerjaan proyek client dengan batas waktu; acuan utama untuk produksi batch |
| **Tools UGC berbayar lainnya (berbasis GUI)** | Lebih lambat — umumnya diproses satu per satu melalui antarmuka visual | Pembuatan ad tunggal insidental, bukan produksi batch |
| **Local/self-hosted** | Mampu beroperasi cepat setelah alur kerja batch dikonfigurasi (misalnya antrean alur kerja ComfyUI), namun investasi persiapan awal baru sepadan pada volume berulang yang tinggi | Agensi yang memproduksi banyak batch per bulan dan telah mengalokasikan persiapan alur local pada Modul 1/2 |

## Luncurkan

**Cara menetapkan harga:** Tetapkan harga per batch, bukan per ad — contohnya "$150-$300 untuk satu paket pengujian 5-8 ad," disesuaikan dengan cakupan revisi yang disertakan. Skema ini selaras dengan pola pikir anggaran ad dari brand dan lebih mudah dipasarkan dibanding tarif per ad.

**Cara memosisikan layanan:** Tawarkan *kemampuan pengujian*, bukan sekadar jumlah ad — kalimat "dapatkan 8 variasi untuk menemukan performa terbaik" merupakan penawaran yang jauh lebih kuat dibanding "dapatkan 8 ad." Brand yang menjalankan iklan berbayar telah memahami pentingnya alur ini.

**Lokasi menemukan client pertama:** Sama seperti Modul 1 — brand DTC yang aktif menjalankan iklan berbayar di media sosial. Khusus untuk pengerjaan batch, tegaskan dalam komunikasi bahwa Anda dapat menyelesaikan satu paket pengujian lengkap secara jauh lebih cepat dibanding mencari beberapa human creators.

**Angka riil di lapangan:** Retainer ad UGC tingkat agensi dalam kisaran $1,500-$3,000/bulan umumnya mencakup produksi batch berkala seperti ini — modul ini merupakan acuan utama agar model retainer tersebut dapat direalisasikan.

## Latihan

1. **Mudah:** Rancang matriks 6-ad batch (3 hook × 2 angle) untuk produk pilihan Anda, tanpa melangkah ke tahapan produksi terlebih dahulu.
2. **Sedang:** Produksi 5-ad batch dari awal hingga akhir, dengan mempertahankan karakter dan CTA tetap konstan sembari menyesuaikan variasi hook dan angle.
3. **Sulit:** Produksi 10-ad batch dan susun "rencana pengujian" satu halaman yang dapat digunakan client untuk memantau variasi mana yang berkinerja paling optimal.

## Templat

Templat siap pakai yang dihasilkan oleh modul ini — lengkapi dan manfaatkan kembali untuk proyek nyata:

* [`templates/batch-matrix-template.md`](templates/batch-matrix-template.md) — templat isian untuk merencanakan kombinasi hook × angle sebelum melangkah ke proses produksi.

---

[← Sebelumnya: Konsistensi Karakter & Wajah](02-character-consistency.md) · [Track overview](README.md) · Berikutnya: [Penetapan Harga & Penjualan UGC Ads →](04-pricing-and-selling-ugc.md)
