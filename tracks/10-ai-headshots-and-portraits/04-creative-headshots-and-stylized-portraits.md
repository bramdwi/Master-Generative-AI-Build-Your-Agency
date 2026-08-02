# Headshot Kreatif & Potret Eksekutif Bergaya

> Perluas ke editorial terkenal, pembicara utama, penulis, dan potret industri kreatif menggunakan pencahayaan sesuai suasana sinematik.

**Track:** Foto & Potret AI
**Waktu:** ~40 menit
**Prasyarat:** [01: Consistent Headshot Generation](01-consistent-headshot-generation.md), [02: Standing Out Against Fiverr Competition](02-standing-out-against-fiverr-competition.md)

## Masalahnya

Meskipun foto perusahaan formal (jas & latar belakang abu-abu) mencakup klien korporat tradisional, para profesional kreatif menolak fotografi korporat yang hambar.
* **Pembicara Utama & Penulis:** Membutuhkan pencahayaan panggung yang dramatis, latar belakang gelap yang murung, dan kerangka editorial berdampak tinggi untuk sampul buku dan spanduk konferensi.
* **Artis & Podcaster Musik:** Membutuhkan aksen pencahayaan gel (neon cyan, amber hangat), kedalaman sinematik, dan suasana artistik yang bergaya.
* **Pendiri & Desainer Teknologi:** Lebih menyukai lingkungan yang santai (loteng yang diterangi matahari, dinding bata arsitektur, loteng perkotaan luar ruangan).

Jika Anda hanya menawarkan foto kepala setelan korporat standar, Anda kehilangan klien kreatif, media, dan editorial eksekutif dengan bayaran tinggi yang membayar **$150 hingga $350 per paket potret khusus**.

---

## Konsep

**Creative Editorial Portrait Pipeline** mengubah geometri pencahayaan dan dinamika lingkungan:

```
Identity Vector Lock ──► Cinematic Mood Prompt ──► Gel & Environmental Light Sync ──► High-Res Editorial Polish
```

### Gaya Potret Kreatif:

1. **Pembicara Utama (Pencahayaan Panggung Dramatis):** Latar belakang gelap murung, lampu tombol terarah kuat, pinggiran lampu latar hangat, penurunan bayangan dramatis.
2. **Loteng Pendiri Teknologi (Lingkungan Arsitektur):** Latar belakang loteng bata yang diterangi matahari, cahaya jendela alami yang lembut, pakaian kasual bisnis yang santai (turtleneck, blazer denim).
3. **Podcast / Media Creator (Aksen Gel Warna):** Pencahayaan dua warna (lampu tombol magenta + lampu tepi cyan), latar belakang studio gelap, ekspresi energi tinggi.

---

## Lakukan itu

### Langkah 1: Pilih Gaya Estetika Kreatif
Buka [`templates/headshot-style-guide.md`](templates/headshot-style-guide.md). Cocokkan dengan kepribadian merek klien Anda:

* **Perintah Penulis Utama:**
> __KODE INLINE_0__
* **Permintaan Pendiri Teknologi Kreatif:**
> __KODE INLINE_0__

### Langkah 2: Kunci Identitas & Jalankan Inferensi
Berikan selfie klien Anda ke generator yang dikunci identitasnya (muapi `/nano-banana-2` atau InstantID). Tetapkan bobot identitas ke `0.85` untuk memastikan akurasi wajah 100% sekaligus memungkinkan model menghasilkan efek pencahayaan yang kreatif.

### Langkah 3: Sempurnakan Detail Mikro & Tingkat Warna
Terapkan filter keseimbangan warna yang halus (nuansa teal & oranye sinematik atau amber hangat) agar sesuai dengan estetika sampul majalah. Simpan sebagai `creative-studio-headshot.jpg`.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/creative-studio-headshot.jpg" alt="Potret Pendiri Teknologi Creative Studio" width="480">
</p>
<p align="center"><sub>Creative Studio Tech Founder Portrait (Warm Bokeh & Soft Studio Butterfly Lighting)</sub></p>

**Kampanye Potret Kreatif untuk "Seri Pembicara Utama"**

* **Klien:** Penulis Buku Terlaris & Pembicara Utama.
* **Target Hasil:** 5 Potret Editorial untuk Sampul Buku, Billboard, dan Satu Lembar Pembicara.
* **Gaya Pilihan:** Pencahayaan Panggung Utama, Suasana Hati Penulis NYT, Loteng Perkotaan yang Hangat.
* **Tarif Paket:** **$249.00**.
* **Waktu Produksi:** 25 menit.

---

## Bandingkan Alat

| Gaya / Platform | Kontrol Kreatif | Tingkat Klien | Terbaik Untuk |
|---|---|---|---|
| **FLUX PuLID / InstantID (muapi)** | Tinggi (Responsif terhadap jangkar cepat sinematik: pencahayaan gel, lingkungan loteng) | Profesional kreatif, klien media | Kumpulan potret editorial cepat untuk agensi |
| **Perjalanan Tengah (--referensi identitas cref)** | Sedang-Tinggi (Kualitas estetika luar biasa, kunci identitas lebih lemah) | Materi iklan individu, merek pribadi | Seri editorial media sosial dan foto pembicara |
| **UI Nyaman Lokal (ID Instan + LoRA)** | Maksimum (Kontrol simpul materi iklan penuh atas geometri pencahayaan) | Klien eksekutif beranggaran tinggi | Paket potret pembicara & penulis mewah |

---

## Luncurkan

**Harga paket potret kreatif:**
* **Paket Potret Kreatif Individu:** **$149 – $249** (Termasuk 5 variasi gaya: Keynote Stage, Loft Environmental, Podcast Gel, Author Dark, Studio Press Kit).
* **Tawarkan Pemformatan Pitch-Deck:** Paket foto kepala kreatif yang telah selesai menjadi aset yang telah diukur sebelumnya untuk sampul podcast Spotify (3000x3000 piksel), spanduk YouTube (2560x1440 piksel), dan kit pers speaker.

---

## Latihan

1. **Mudah:** Hasilkan potret kreatif dengan pencahayaan gel dua warna (lampu tombol biru + lampu tepi kuning).
2. **Medium:** Buat foto loteng lingkungan untuk pendiri teknologi dengan latar belakang batu bata terbuka.
3. **Sulit:** Membuat perlengkapan pers editorial 4 potret (Sampul Penulis, Pencahayaan Panggung, Loft Casual, Studio Dark) untuk pembicara utama.

---

## Template

* [`templates/headshot-style-guide.md`](templates/headshot-style-guide.md) — Perintah pencahayaan kreatif, rasio pencahayaan gel, dan perintah negatif editorial.

---

[← Batch Headshots for Remote Teams](03-batch-headshots-for-remote-teams.md) · [Track Overview](README.md)
