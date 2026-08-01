import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

// Dictionary of translations for root files & track markdown files
const rootTranslations = {
  'README.md': `<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/lisensi-MIT-1a1a1a?style=flat-square" alt="Lisensi MIT"></a>
  <a href="ROADMAP.md"><img src="https://img.shields.io/badge/tracks-15-3553ff?style=flat-square" alt="15 tracks"></a>
  <a href="ROADMAP.md"><img src="https://img.shields.io/badge/modul-66_tersedia-3553ff?style=flat-square" alt="66 modul"></a>
</p>

<h1 align="center">AI Creator Academy (Bahasa Indonesia)</h1>

<p align="center"><b>Kurikulum gratis dan open-source untuk menghasilkan uang dari konten AI gambar, video, dan audio — untuk kreator dan agensi di Indonesia.</b></p>

<p align="center">
  <a href="https://www.youtube.com/watch?v=SC9zJ6AxDek">
    <img src="docs/assets/video-20-thumbnail.png" alt="AI Creator Academy: Kursus Gratis Generatif AI" width="640">
  </a>
</p>

---

Kebanyakan edukasi AI hanya mengajarkan cara membuat prompt atau cara menggunakan sebuah tool. Kurikulum ini mengajarkan sesuatu yang jauh lebih berharga: bagaimana mengubah gambar/video/audio buatan AI — atau aplikasi yang Anda buat sendiri dengan coding agent — menjadi **layanan jasa atau produk yang bernilai jual tinggi**. **Setiap modul diakhiri dengan penentuan harga (pricing), posisi pasar (positioning), dan cara mendapatkan klien pertama Anda — bukan hanya "cara kerjanya".**

## Kenapa Ini Dibuat

Komunitas berbayar yang mengajarkan hal seperti ini (seperti Skool/Whop, seharga $47–$97/bulan) berkumpul di sekitar niche ini — permintaannya sudah terbukti sangat tinggi. Yang belum ada adalah versi gratis yang mencantumkan angka-angka realistis dan menjadikan "bagaimana saya dibayar dari ini" sebagai topik utama.

## Daftar Isi

- [Daftar Track](#daftar-track)
- [Struktur Modul](#struktur-modul)
- [Cara Memulai](#cara-memulai)
- [FAQ](#faq)
- [Lisensi](#lisensi)

## Daftar Track

15 track independen — pilih mana saja yang sesuai dengan bisnis yang ingin Anda bangun.

| # | Track | Apa yang Anda Bangun | Modul | Status |
|---|---|---|---|---|
| 1 | [Iklan Video AI & UGC](tracks/01-ai-video-ads-ugc/) | Batch iklan gaya UGC yang siap dijual ke brand | 5 | ✅ Tersedia |
| 2 | [Pembuatan Film AI](tracks/02-ai-filmmaking/) | Film pendek, trailer, video musik | 5 | ✅ Tersedia |
| 3 | [Kanal AI Tanpa Wajah](tracks/03-faceless-ai-channels/) | Kanal YouTube/TikTok tanpa kamera | 5 | ✅ Tersedia |
| 4 | [Pabrik Konten AI](tracks/04-ai-content-factories/) | Pipeline Ide → Naskah → Video → Publish secara masal | 6 | ✅ Tersedia |
| 5 | [Avatar & Influencer AI](tracks/05-ai-avatars-and-influencers/) | Karakter AI konsisten sebagai aset bisnis | 5 | ✅ Tersedia |
| 6 | [Audio & Musik AI](tracks/06-ai-audio-and-music/) | Kloning suara, dubbing, podcast, musik | 5 | ✅ Tersedia |
| 7 | [Fotografi Produk AI](tracks/07-ai-product-photography/) | Foto produk kualitas studio tanpa fotografer | 4 | ✅ Tersedia |
| 8 | [Fesyen AI & Virtual Try-On](tracks/08-ai-fashion-and-virtual-tryon/) | Fitting baju virtual untuk e-commerce fesyen | 4 | ✅ Tersedia |
| 9 | [Staging Real Estat AI](tracks/09-ai-real-estate-staging/) | Foto ruangan kosong → ruangan ber-furnitur | 3 | ✅ Tersedia |
| 10 | [Headshots & Potret AI](tracks/10-ai-headshots-and-portraits/) | Foto profil & headshot profesional konsisten | 4 | ✅ Tersedia |
| 11 | [Print-on-Demand & Merch AI](tracks/11-ai-print-on-demand-and-merch/) | Seni AI laris di produk fisik merchandise | 4 | ✅ Tersedia |
| 12 | [Konten Stok AI & Lisensi](tracks/12-ai-stock-content-and-licensing/) | Katalog stok yang bisa dilisensikan berulang kali | 3 | ✅ Tersedia |
| 13 | [Panduan Memilih Tool AI](tracks/13-ai-tools-mastery/) | Model mana untuk kebutuhan apa — panduan pembeli | 4 | ✅ Tersedia |
| 14 | [Bisnis Freelance & Agensi AI](tracks/14-ai-freelancing-and-agency-business/) | Penentuan harga, kontrak, mencari klien, scaling tim | 5 | ✅ Tersedia |
| 15 | [Agent AI & Vibe-Coding](tracks/15-ai-agents-and-vibe-coding/) | Membangun micro-tool tanpa latar belakang CS | 4 | ✅ Tersedia |

## Aplikasi Web (Web Application)

Anda dapat membuka materi ini dalam bentuk **Aplikasi Web LMS Modern** dengan menjalankan:

\`\`\`bash
npm run dev
\`\`\`
Buka browser di **http://localhost:3000** atau **http://localhost:3001**.
`,

  'ROADMAP.md': `# Peta Jalan (Roadmap) AI Creator Academy

Setiap track dan modul, berurutan, dengan status keterisian. Ini adalah sumber kebenaran tunggal untuk modul yang tersedia.

Keterangan status: ✅ tersedia · 🚧 dalam pengerjaan · ⬜ segera hadir

## Track 1 — Iklan Video AI & UGC ✅
1. Cara Kerja Sebenarnya Iklan AI UGC
2. Konsistensi Wajah & Karakter AI
3. Membuat Batch 10 Iklan Video
4. Menentukan Harga & Menjual Iklan UGC
5. Bedah Kasus & Teardown Real

## Track 2 — Pembuatan Film AI ✅
1. Generasi Skenario & Jalan Cerita
2. Papan Cerita & Perencanaan Shot
3. Gerakan Kamera & Prompt Sinematografi
4. Merangkai & Editing Film Pendek
5. Menjual Film Pendek (Sponsor & Lisensi)

## Track 3 — Kanal AI Tanpa Wajah (Faceless Channels) ✅
1. Pemilihan Niche & Pipeline Naskah
2. Narasi & Pacing Sesuai Durasi Video
3. Perhitungan Jujur RPM & Penghasilan
4. Mengembangkan Banyak Kanal Sekaligus
5. Tangga Monetisasi & Sumber Income

## Track 4 — Pabrik Konten AI ✅
1. Pipeline Ide → Naskah → Papan Cerita → Video → Suara → Musik → Kaption → Publish
2. Membangun Pabrik Konten TikTok & Reels
3. Membangun Pabrik Konten YouTube Shorts
4. Desain Thumbnail Menarik dengan AI
5. Produksi Masal & Penjadwalan Konten
6. Menjual Layanan Pabrik Konten ke Klien

## Track 5 — Avatar & Influencer AI Konsisten ✅
1. Membuat Karakter AI yang Konsisten
2. Pipeline Karakter AI Menjadi Konten
3. Kloning Suara & Dialog Karakter
4. Tingkat Monetisasi Berdasarkan Jumlah Follower
5. Studi Kasus Agensi: Ekonomi Tim Kecil

## Track 6 — Audio & Musik AI ✅
1. Dasar Kloning Suara & Text-to-Speech (TTS)
2. Dubbing AI & Penerjemahan Bahasa
3. Produksi Podcast & Pembersihan Audio AI
4. Pembuatan Musik & Efek Suara (SFX) AI
5. Konversi Suara Nyanyi & Sintesis Vokal

## Track 7 — Fotografi Produk AI E-Commerce ✅
1. Foto Produk Tanpa Fotografer Fisik
2. Studi Kasus Konversi Penjualan Sebelum vs Sesudah
3. Menjual Foto Produk sebagai Layanan Paket
4. Workflow Masal untuk Katalog Produk

## Track 8 — Fesyen AI & Virtual Try-On ✅
1. Virtual Fitting Baju untuk E-Commerce Fesyen
2. Lookbook Studio Berkonversi Tinggi
3. Konsistensi Ukuran & Layout Pakaian
4. Kasus Konversi Penjualan Fesyen

## Track 9 — Staging Real Estat AI ✅
1. Pipeline Ruangan Kosong → Ruangan Berisi Furnitur
2. Strategi Harga Dibandingkan Staging Fisik Tradisional
3. Menjual Layanan Staging ke Agen Properti

## Track 10 — Headshots & Potret AI ✅
1. Generasi Headshot Profil Konsisten
2. Trik Tampil Beda dari Kompetitor Murah di Fiverr
3. Headshot Masal untuk Tim Perusahaan Remote
4. Headshot Kreatif & Potret AI Artistik

## Track 11 — Print-on-Demand & Merch AI ✅
1. Mendesain Seni AI Laris untuk Merchandise
2. Dasar Platform Print-on-Demand (Etsy, Tokopedia, Redbubble)
3. Membangun Katalog Produk Tanpa Desain Pasaran
4. Perhitungan Harga & Passive Income Print-on-Demand

## Track 12 — Konten Stok AI & Lisensi ✅
1. Aset AI Apa yang Benar-Benar Laris di Stock Marketplace
2. Generasi Masal Katalog Aset Siap Lisensi
3. Model Lisensi & Ekspektasi Passive Income Realistis

## Track 13 — Panduan Memilih Tool AI ✅
1. Model Gambar AI — Mana yang Tepat untuk Kebutuhan Anda
2. Model Video AI — Mana yang Tepat untuk Kebutuhan Anda
3. Model Audio/Suara AI — Mana yang Tepat untuk Kebutuhan Anda
4. API vs Lokal: Kerangka Kerja Pengambilan Keputusan

## Track 14 — Bisnis Freelance & Agensi AI ✅
1. Menentukan Harga Layanan Jasa Anda
2. Dasar Kontrak Kerja & Pembatasan Scope
3. Cara Mencari & Closing Klien Pertama
4. Scaling dari Freelancer Menjadi Agensi Kecil
5. Membangun Portofolio yang Menjual

## Track 15 — Agent AI & Vibe-Coding ✅
1. Membangun Micro-Tool Sendiri Tanpa Gelar CS
2. Menjual Tool Berbasis AI ke Klien
`
};

// Translate root files
Object.keys(rootTranslations).forEach(file => {
  const filePath = path.join(projectRoot, file);
  fs.writeFileSync(filePath, rootTranslations[file], 'utf8');
});

console.log('[OK] Successfully updated root README.md, ROADMAP.md to Indonesian!');

// Perform search and replace translation across all markdown files in tracks/
const tracksDir = path.join(projectRoot, 'tracks');

function translateContent(text) {
  return text
    .replace(/^#\s+How AI UGC Actually Works/gm, '# Cara Kerja Sebenarnya Iklan AI UGC')
    .replace(/^#\s+Character & Face Consistency/gm, '# Konsistensi Wajah & Karakter AI')
    .replace(/^#\s+Building a 10-Ad Batch/gm, '# Membuat Batch 10 Iklan Video')
    .replace(/^#\s+Pricing & Selling UGC Ads/gm, '# Menentukan Harga & Menjual Iklan UGC')
    .replace(/^#\s+Case Study Teardown/gm, '# Bedah Kasus & Teardown Real')
    .replace(/^## The Problem/gm, '## Masalah yang Dihadapi')
    .replace(/^## The Concept/gm, '## Konsep & Solusi')
    .replace(/^## Do It/gm, '## Langkah-Langkah Praktis (Do It)')
    .replace(/^## Worked Example/gm, '## Contoh Studi Kasus Nyata')
    .replace(/^## Compare Tools/gm, '## Perbandingan Tools (API vs Lokal)')
    .replace(/^## Launch It/gm, '## Strategi Peluncuran & Cari Klien (Launch It)')
    .replace(/^## Exercises/gm, '## Latihan Praktis & Tugas')
    .replace(/^\*\*Time:\*\*/gm, '**Waktu Belajar:**')
    .replace(/^\*\*Prerequisites:\*\*/gm, '**Prasyarat:**')
    .replace(/^\*\*Track:\*\*/gm, '**Track:**');
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  items.forEach(item => {
    const fullPath = path.join(dirPath, item.name);
    if (item.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.isFile() && item.name.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const translated = translateContent(content);
      fs.writeFileSync(fullPath, translated, 'utf8');
    }
  });
}

processDirectory(tracksDir);
console.log('[OK] Successfully translated all .md files in tracks/ to Indonesian!');
