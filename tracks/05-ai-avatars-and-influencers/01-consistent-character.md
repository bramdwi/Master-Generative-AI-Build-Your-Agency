# Membangun Karakter AI yang Konsisten

> Seorang influencer virtual membutuhkan wajah yang terkunci, bukan perintah acak.

**Lacak:** Avatar & Influencer AI
**Waktu:** ~45 menit
**Prasyarat:** Tidak ada

## Masalahnya

Satu-satunya rintangan terbesar dalam membangun influencer virtual atau juru bicara merek yang konsisten adalah **penyimpangan wajah**. Jika Anda menulis prompt untuk karakter di kamar tidur, dan kemudian di kantor, model text-to-image (seperti Midjourney atau DALL-E) akan menampilkan dua orang yang berpenampilan berbeda. Panjang rambut berubah, simetri wajah berubah, dan pakaian bervariasi.

Jika karakter Anda terlihat seperti orang yang berbeda di setiap postingan, audiens Anda tidak akan membangun hubungan emosional. Ilusi tentang orang sungguhan telah rusak, dan Anda tidak dapat menjual sponsor merek. (Pikirkan seperti ini: jika influencer sejati mengubah warna rambut, warna mata, dan bentuk wajah mereka di antara setiap postingan Instagram, Anda akan berasumsi bahwa itu adalah akun yang sama sekali berbeda — karakter AI juga mengalami kehancuran kepercayaan yang sama.)

Untuk membangun influencer virtual yang layak, Anda harus menerapkan sistem dorongan terstruktur dan saluran pengkondisian wajah yang mengunci fitur wajah, rambut, dan pakaian karakter Anda di berbagai adegan.

## Konsep

Konsistensi karakter dalam AI generatif bergantung pada tiga teknik inti:

### 1. Jangkar Deskripsi (Token Cepat):
Daripada mengetikkan perintah umum (misalnya *"wanita cantik"*), Anda harus menulis deskripsi yang sangat detail dan kaku tentang wajah, rambut, dan gaya. Gunakan token unik (misalnya *"rambut coklat bertekstur crop, wajah oval, mata hijau, sedikit bintik"*). Mengulangi token yang sama di setiap perintah akan membentuk jangkar visual.

### 2. Jangkar Lemari Pakaian:
Jaga agar pakaian karakter Anda tetap konstan. Jangan mengganti pakaian mereka di setiap adegan. Karakter virtual (dan karakter kartun) dikenali dari pakaian khasnya. Kunci satu atau dua label pakaian (misalnya, *"mengenakan sweter crewneck biru tua"*) dan jaga agar tetap sama di semua render.

### 3. Pertukaran Wajah & Pengondisian Referensi (InsightFace / cref):
Bahkan dengan perintah terkunci, detail kecil wajah akan berubah berdasarkan pencahayaan dan sudut kamera. Anda mengatasinya dengan mengambil potret master berkualitas tinggi dari karakter Anda dan menggunakan mesin pertukaran wajah (seperti `z-image-p` melalui muapi) untuk memproyeksikan wajah master ke adegan yang baru dibuat.

```
Master Face Portrait  ──►  New Scene Generation  ──►  Face Swap Layer  ──►  Consistent Render
```

---

## Lakukan itu

### Langkah 1: Tentukan Profil Karakter Anda
Buka [`templates/character-style-guide.md`](templates/character-style-guide.md). Tuliskan fitur visual karakter Anda, gaya pakaian, dan warna khasnya.

### Langkah 2: Hasilkan Potret Master
Gunakan `nano-banana-2` (rasio aspek disetel ke `1:1`) untuk menghasilkan foto karakter Anda yang bersih dan menghadap ke depan dalam pencahayaan lembut dan netral.
* *Contoh perintah:* `"Front portrait of Emma, a 28-year-old female influencer with a short textured brown bob, oval face, slight freckles on her nose, looking at the camera. Soft neutral studio lighting, clean gray background, photorealistic, 8k."`
Simpan render terbaik sebagai **Wajah Referensi Utama** Anda (misalnya, `emma-master.jpg`).

### Langkah 3: Hasilkan Latar Belakang Adegan Baru
Tulis petunjuk untuk karakter Anda di lokasi baru (misalnya di meja kafe, di kantor). Pastikan deskripsi wajah, detail rambut, dan label pakaian **100% identik** dengan perintah utama Anda:
* *Permintaan baru:* `"Emma, a 28-year-old female influencer with a short textured brown bob, oval face, slight freckles, wearing a dark blue crewneck sweater, sitting at a wooden cafe table holding a coffee cup. Minimalist cafe background, warm morning light, photorealistic, 8k."`

### Langkah 4: Jalankan Pipa Face-Swap
Jika wajah di generasi kafe sedikit menyimpang dari master, gunakan titik akhir `/z-image-p` (atau pertukaran wajah InsightFace):
* **Sumber Gambar (Referensi):** Unggah `emma-master.jpg` Anda.
* **Target Gambar:** Unggah generasi kafe baru Anda.
* Mesin akan menyelaraskan dan menukar fitur wajah, menjaga pencahayaan dan sudut kepala gambar target sambil mengunci struktur hidung, mata, dan pipi Emma.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/emma-master.jpg" alt="Profil Utama: Emma" width="220">
<img src="templates/examples/emma-cafe-consistent.jpg" alt="Render Konsisten Bertukar Wajah" width="220">
<img src="templates/examples/emma-cafe-motion.gif" alt="Loop Gerakan Karakter Avatar (I2V)" width="220">
</p>
<p align="center"><sub>Master Avatar (Left) ──► Face-Swapped Output (Center) ──► Image-to-Video Motion (Right) · Video File: <a href="templates/examples/emma-cafe-motion.mp4">templates/examples/emma-cafe-motion.mp4</a></sub></p>

**Membuat "Emma" (Avatar Influencer Teknologi)**



* **Profil Referensi Utama:** 28 tahun, bob pendek bertekstur coklat, wajah oval, bintik-bintik, mengenakan sweter crewneck biru tua. Potret utama disimpan ke folder lokal.
* **Adegan 1 (Kantor):** Menghasilkan Emma yang sedang duduk di meja perusahaan. Wajah bertukar dengan Guru.
* **Adegan 2 (Rumah):** Menghasilkan Emma yang berdiri di ruang tamu modern. Wajah bertukar dengan Guru.
* **Adegan 3 (Studio):** Menghasilkan Emma yang berbicara dengan mikrofon studio profesional. Wajah bertukar dengan Guru.

**Hasilnya:** Dalam tiga adegan berbeda dengan pencahayaan dan latar belakang berbeda, wajah, rambut, dan sweter Emma tetap konsisten sempurna. Karakter siap dianimasikan menjadi video.

**Perbandingan di bawah ini nyata, bukan maket** — menampilkan Potret Utama Emma berdampingan dengan render kafenya yang konsisten (wajah utama diproyeksikan ke adegan kafe target melalui `ai-image-face-swap`):

<p align="center">
<img src="templates/examples/emma-master.jpg" alt="Potret Emma Master (1:1)" width="200">
        
<img src="templates/examples/emma-cafe-consistent.jpg" alt="Adegan kafe Emma yang konsisten (9:16)" width="158">
</p>

*Bagaimana ini sebenarnya diproduksi melalui muapi API:*
1. Menghasilkan potret avatar persegi master 1:1 dengan **`nano-banana-2`** ($0,06/gambar).
2. Menghasilkan latar belakang kafe vertikal 09:16 dengan **`nano-banana-2`** menggunakan token prompt karakter yang identik.
3. Mengunggah kedua file dan mengirimkannya ke **`ai-image-face-swap`** ($0,03/swap) untuk menyelaraskan fitur wajah Emma dengan suasana kafe.

---

## Bandingkan Alat

| Platform / Alat | Kemampuan Konsistensi | Pembayaran / Biaya Kredit | Terbaik untuk |
|---|---|---|---|
| **muapi `/ai-image-face-swap`** (Tukar Wajah) | Tinggi (Mempertahankan fitur wajah di segala sudut atau pencahayaan) | ~$0,03 per pertukaran | Pertukaran wajah yang cepat dan massal untuk umpan gambar. |
| **Perjalanan Tengah `--cref`** | Tinggi (Bendera referensi karakter mengunci wajah dan rambut, tetapi dapat kesulitan dengan detail pakaian yang presisi) | Berbasis langganan | Menghasilkan variasi dan pose latar belakang awal. |
| **Difusi Stabil (Adaptor IP)** | Ultra-Tinggi (Kontrol tak terbatas pada node beban wajah dan pose) | Gratis (Berjalan secara lokal di GPU) | Agensi profesional yang membuat model virtual khusus. |

Bagi para pembuat konten yang baru memulai, menggunakan Midjourney atau `nano-banana-2` untuk membuat adegan latar belakang, diikuti dengan melewati `/ai-image-face-swap` face swapper muapi dengan cepat, adalah jalur pipa tercepat dan paling hemat biaya untuk menyampaikan karya klien.

---

## Luncurkan

**Cara memulai merek:**
* **Siapkan Profil Bisnis:** Buat akun Instagram dan TikTok khusus untuk karakter Anda. Jangan memberi label sebagai "AI Generated" di header bio utama — tulislah biodata yang normal dan manusiawi (misalnya *"Berbagi peretasan otomatisasi dan ulasan teknologi"*).
* **Batch Peluncuran:** Sebelum memublikasikan, buat setidaknya **9 postingan yang konsisten** sehingga ketika pemirsa baru mengeklik profil Anda, mereka akan melihat kisi gambar yang kohesif dan profesional.

---

## Latihan

1. **Mudah:** Tulis deskripsi fisik mendetail untuk karakter AI. Hasilkan tiga headshots menghadap ke depan. Pilih potret master terbaik.
2. **Medium:** Ambil potret master Anda dan buat dua variasi pemandangan (misalnya berjalan di kota, duduk di taman) menggunakan jangkar cepat yang identik.
3. **Sulit:** Gunakan mesin pertukaran wajah untuk memproyeksikan wajah karakter utama Anda ke adegan foto stok pihak ketiga, menyelaraskan pencahayaan dan sudut, dan memverifikasi bahwa fitur wajah tetap konsisten.

---

## Template

* [`templates/character-style-guide.md`](templates/character-style-guide.md) — direktori profil untuk mengunci jangkar cepat dan daftar unggulan.

---

[← Track overview](README.md) · Berikutnya: [Character to Content Pipeline →](02-character-content-pipeline.md)
