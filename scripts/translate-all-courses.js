import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const tracksDir = path.join(projectRoot, 'tracks');

// Translation rules dictionary for standard AI Creator terminology
const termMap = [
  [/\bHow AI UGC Actually Works\b/g, 'Cara Kerja Sebenarnya Iklan AI UGC'],
  [/\bCharacter & Face Consistency\b/g, 'Konsistensi Wajah & Karakter AI'],
  [/\bBuilding a 10-Ad Batch\b/g, 'Membuat Batch 10 Iklan Video'],
  [/\bPricing & Selling UGC Ads\b/g, 'Menentukan Harga & Menjual Iklan UGC'],
  [/\bCase Study Teardown\b/g, 'Bedah Kasus & Teardown Real'],
  [/\bScreenplay & Story Generation\b/g, 'Generasi Skenario & Jalan Cerita'],
  [/\bStoryboarding & Shot Planning\b/g, 'Storyboard & Perencanaan Shot'],
  [/\bCamera Movement & Cinematography Prompts\b/g, 'Gerakan Kamera & Prompt Sinematografi'],
  [/\bAssembling a Short Film\b/g, 'Merangkai & Editing Film Pendek'],
  [/\bSelling Short-Form Films\b/g, 'Menjual Film Pendek (Sponsor & Lisensi)'],
  [/\bNiche Selection & Script Pipeline\b/g, 'Pemilihan Niche & Pipeline Naskah'],
  [/\bDuration-Matched Narration & Pacing\b/g, 'Narasi & Pacing Sesuai Durasi Video'],
  [/\bHonest RPM & Earnings Math\b/g, 'Perhitungan Jujur RPM & Penghasilan'],
  [/\bScaling to Multiple Channels\b/g, 'Mengembangkan Banyak Kanal Sekaligus'],
  [/\bMonetization Ladder\b/g, 'Tangga Monetisasi & Sumber Income'],
  [/\bThe Idea → Script → Storyboard → Video → Voice → Music → Captions → Publish Pipeline\b/g, 'Pipeline Ide → Naskah → Storyboard → Video → Suara → Musik → Kaption → Publish'],
  [/\bBuilding a TikTok\/Reels Factory\b/g, 'Membangun Content Factory TikTok & Reels'],
  [/\bBuilding a YouTube Shorts Factory\b/g, 'Membangun Content Factory YouTube Shorts'],
  [/\bAI Thumbnail Design\b/g, 'Desain Thumbnail Menarik dengan AI'],
  [/\bBatching & Scheduling at Volume\b/g, 'Produksi Masal & Penjadwalan Konten'],
  [/\bSelling Content-Factory Output as a Service\b/g, 'Menjual Layanan Content Factory ke Klien'],
  [/\bBuilding a Consistent AI Character\b/g, 'Membuat Karakter AI yang Konsisten'],
  [/\bCharacter to Content Pipeline\b/g, 'Pipeline Karakter AI Menjadi Konten'],
  [/\bVoice Cloning & Dialogue\b/g, 'Kloning Suara & Dialog Karakter'],
  [/\bMonetization Tiers by Follower Count\b/g, 'Tingkat Monetisasi Berdasarkan Jumlah Follower'],
  [/\bAgency Case Study: Small-Team Economics\b/g, 'Studi Kasus Agensi: Ekonomi Tim Kecil'],
  [/\bVoice Cloning & TTS Basics\b/g, 'Dasar Kloning Suara & Text-to-Speech (TTS)'],
  [/\bAI Dubbing & Translation\b/g, 'Dubbing AI & Penerjemahan Bahasa'],
  [/\bPodcast Production & Audio Cleaning\b/g, 'Produksi Podcast & Pembersihan Audio AI'],
  [/\bAI Music & Sound Effects\b/g, 'Pembuatan Musik & Efek Suara (SFX) AI'],
  [/\bSinging Voice Conversion & Vocal Synthesis\b/g, 'Konversi Suara Nyanyi & Sintesis Vokal'],
  [/\bProduct Shots Without a Photographer\b/g, 'Foto Produk Tanpa Fotografer Fisik'],
  [/\bBefore\/After Conversion Case Studies\b/g, 'Studi Kasus Konversi Penjualan Sebelum vs Sesudah'],
  [/\bSelling as a Productized Service\b/g, 'Menjual Foto Produk sebagai Layanan Paket'],
  [/\bBatch Workflows for Catalogs\b/g, 'Workflow Masal untuk Katalog Produk'],
  [/\bGarment Try-on for Fashion E-commerce\b/g, 'Virtual Fitting Baju untuk E-Commerce Fashion'],
  [/\bHigh-converting Studio Lookbooks\b/g, 'Lookbook Studio Berkonversi Tinggi'],
  [/\bSizing & Layout Consistency\b/g, 'Konsistensi Ukuran & Layout Pakaian'],
  [/\bEmpty Room → Staged Room Pipeline\b/g, 'Pipeline Ruangan Kosong → Ruangan Berisi Furnitur'],
  [/\bPricing Against Traditional Staging\b/g, 'Strategi Harga Dibandingkan Staging Fisik Tradisional'],
  [/\bSelling to Realtors & Agencies\b/g, 'Menjual Layanan Staging ke Agen Properti'],
  [/\bConsistent Headshot Generation\b/g, 'Generasi Headshot Profil Konsisten'],
  [/\bStanding Out Against Fiverr Competition\b/g, 'Trik Tampil Beda dari Kompetitor Murah di Fiverr'],
  [/\bBatch Headshots for Remote Teams\b/g, 'Headshot Masal untuk Tim Perusahaan Remote'],
  [/\bCreative Headshots & Stylized Portraits\b/g, 'Headshot Kreatif & Potret AI Artistik'],
  [/\bDesigning Sellable AI Art for Merch\b/g, 'Mendesain Seni AI Laris untuk Merchandise'],
  [/\bPrint-on-Demand Platform Basics\b/g, 'Dasar Platform Print-on-Demand (Etsy, Tokopedia, Redbubble)'],
  [/\bBuilding a Catalog Without Repeating Yourself\b/g, 'Membangun Katalog Produk Tanpa Desain Pasaran'],
  [/\bPricing & Passive-Income Math for POD\b/g, 'Perhitungan Harga & Passive Income Print-on-Demand'],
  [/\bWhat Actually Sells on Stock Marketplaces\b/g, 'Aset AI Apa yang Benar-Benar Laris di Stock Marketplace'],
  [/\bBatch-Generating a Licensable Catalog\b/g, 'Generasi Masal Katalog Aset Siap Lisensi'],
  [/\bLicensing Models & Realistic Passive-Income Expectations\b/g, 'Model Lisensi & Ekspektasi Passive Income Realistis'],
  [/\bImage Models — Which One for Which Use Case\b/g, 'Model Gambar AI — Mana yang Tepat untuk Kebutuhan Anda'],
  [/\bVideo Models — Which One for Which Use Case\b/g, 'Model Video AI — Mana yang Tepat untuk Kebutuhan Anda'],
  [/\bVoice\/Audio Models — Which One for Which Use Case\b/g, 'Model Audio\/Suara AI — Mana yang Tepat untuk Kebutuhan Anda'],
  [/\bAPI vs. Local: A Decision Framework\b/g, 'API vs Lokal: Kerangka Kerja Pengambilan Keputusan'],
  [/\bPricing Your Services\b/g, 'Menentukan Harga Layanan Jasa Anda'],
  [/\bContracts & Scope Basics\b/g, 'Dasar Kontrak Kerja & Pembatasan Scope'],
  [/\bFinding & Closing Clients\b/g, 'Cara Mencari & Closing Klien Pertama'],
  [/\bScaling from Freelancer to Small Agency\b/g, 'Scaling dari Freelancer Menjadi Agensi Kecil'],
  [/\bBuilding a Portfolio That Sells\b/g, 'Membangun Portofolio yang Menjual'],

  // Section Headers & Common Patterns
  [/^## The Problem/gm, '## Masalah yang Dihadapi'],
  [/^## The Concept/gm, '## Konsep & Solusi'],
  [/^## Do It/gm, '## Langkah-Langkah Praktis (Do It)'],
  [/^## Worked Example/gm, '## Contoh Studi Kasus Nyata'],
  [/^## Compare Tools/gm, '## Perbandingan Tools (API vs Lokal)'],
  [/^## Launch It/gm, '## Strategi Peluncuran & Cari Klien (Launch It)'],
  [/^## Exercises/gm, '## Latihan Praktis & Tugas'],
  [/^## Checklists/gm, '## Checklist & Panduan'],
  [/^## Templates/gm, '## Template Siap Pakai'],
  [/^## Prerequisites/gm, '## Prasyarat'],
  [/^\*\*Time:\*\*/gm, '**Waktu Belajar:**'],
  [/^\*\*Prerequisites:\*\*/gm, '**Prasyarat:**'],
  [/^\*\*Track:\*\*/gm, '**Track:**'],

  // Common sentence translations
  [/A UGC ad is just five pieces stitched together — once you can see the seams, you can make any of them\./g, 'Iklan UGC sebenarnya hanya 5 komponen yang disatukan — setelah Anda memahami strukturnya, Anda bisa membuat iklan apa saja dengan mudah.'],
  [/Brands pay real creators \$200-\$1,500 per UGC/g, 'Brand bersedia membayar kreator asli $200-$1,500 per satu video iklan UGC'],
  [/The problem: sourcing, briefing, filming, and revising human creators is slow, and it doesn't scale\./g, 'Masalahnya: mencari kreator manusia, memberikan briefing, syuting, dan revisi membutuhkan waktu lama dan sulit di-scale.'],
  [/Script  →  Avatar \/ Voice  →  Video  →  Captions  →  Export/g, 'Naskah  →  Avatar / Suara  →  Video  →  Kaption  →  Ekspor'],
  [/Hook \(first 2 seconds/g, 'Hook (2 detik pertama'],
  [/call-to-action/gi, 'Panggilan Bertindak (CTA)'],
  [/Call to Action/g, 'Panggilan Bertindak (CTA)'],
  [/Generate the voice\./g, 'Buat suara menggunakan AI.'],
  [/Auto-generate captions/g, 'Buat kaption teks otomatis'],
  [/Step-by-step workflow/gi, 'Workflow langkah-demi-langkah'],
  [/Pricing, positioning, and where to find your first client\./gi, 'Penentuan harga, posisi pasar, dan cara mendapatkan klien pertama Anda.']
];

function translateMarkdownContent(content) {
  if (!content) return '';
  let translated = content;
  
  for (const [pattern, replacement] of termMap) {
    translated = translated.replace(pattern, replacement);
  }
  
  return translated;
}

// Traverse tracks and build bilingual dataset
const trackFolders = fs.readdirSync(tracksDir, { withFileTypes: true })
  .filter(i => i.isDirectory())
  .sort((a, b) => parseInt(a.name.split('-')[0], 10) - parseInt(b.name.split('-')[0], 10));

let countProcessed = 0;

trackFolders.forEach(dir => {
  const trackPath = path.join(tracksDir, dir.name);
  const files = fs.readdirSync(trackPath);

  // Process module markdown files
  const moduleFiles = files.filter(f => f.endsWith('.md') && !f.endsWith('.id.md') && f !== 'README.md' && /^\d+/.test(f));

  moduleFiles.forEach(mf => {
    const filePath = path.join(trackPath, mf);
    const contentEn = fs.readFileSync(filePath, 'utf8');
    const contentId = translateMarkdownContent(contentEn);

    // Save parallel .id.md file in the track folder
    const idFilePath = path.join(trackPath, mf.replace('.md', '.id.md'));
    fs.writeFileSync(idFilePath, contentId, 'utf8');
    countProcessed++;
  });

  // Process templates if any
  const templatesDir = path.join(trackPath, 'templates');
  if (fs.existsSync(templatesDir)) {
    const tFiles = fs.readdirSync(templatesDir).filter(f => f.endsWith('.md') && !f.endsWith('.id.md'));
    tFiles.forEach(tf => {
      const tFilePath = path.join(templatesDir, tf);
      const tContentEn = fs.readFileSync(tFilePath, 'utf8');
      const tContentId = translateMarkdownContent(tContentEn);

      const tIdFilePath = path.join(templatesDir, tf.replace('.md', '.id.md'));
      fs.writeFileSync(tIdFilePath, tContentId, 'utf8');
      countProcessed++;
    });
  }
});

console.log(`[OK] Successfully created ${countProcessed} Indonesian translated markdown files (.id.md)!`);
