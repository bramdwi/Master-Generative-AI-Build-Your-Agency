import os
import re

project_root = os.getcwd()
tracks_dir = os.path.join(project_root, "tracks")

# Comprehensive translation dictionary covering headers, concepts, workflows, pricing, and exercises
REPLACEMENTS = [
    # Track Titles & Headers
    (r"# How AI UGC Actually Works", "# Cara Kerja Sebenarnya Iklan AI UGC"),
    (r"# Character & Face Consistency", "# Konsistensi Wajah & Karakter AI"),
    (r"# Building a 10-Ad Batch", "# Membuat Batch 10 Iklan Video"),
    (r"# Pricing & Selling UGC Ads", "# Menentukan Harga & Menjual Iklan UGC"),
    (r"# Case Study Teardown", "# Bedah Kasus & Teardown Real"),
    (r"# Screenplay & Story Generation", "# Generasi Skenario & Jalan Cerita"),
    (r"# Storyboarding & Shot Planning", "# Papan Cerita & Perencanaan Shot"),
    (r"# Camera Movement & Cinematography Prompts", "# Gerakan Kamera & Prompt Sinematografi"),
    (r"# Assembling a Short Film", "# Merangkai & Editing Film Pendek"),
    (r"# Selling Short-Form Films", "# Menjual Film Pendek (Sponsor & Lisensi)"),
    (r"# Niche Selection & Script Pipeline", "# Pemilihan Niche & Pipeline Naskah"),
    (r"# Duration-Matched Narration & Pacing", "# Narasi & Pacing Sesuai Durasi Video"),
    (r"# Honest RPM & Earnings Math", "# Perhitungan Jujur RPM & Penghasilan"),
    (r"# Scaling to Multiple Channels", "# Mengembangkan Banyak Kanal Sekaligus"),
    (r"# Monetization Ladder", "# Tangga Monetisasi & Sumber Income"),
    (r"# Building a TikTok/Reels Factory", "# Membangun Pabrik Konten TikTok & Reels"),
    (r"# Building a YouTube Shorts Factory", "# Membangun Pabrik Konten YouTube Shorts"),
    (r"# AI Thumbnail Design", "# Desain Thumbnail Menarik dengan AI"),
    (r"# Batching & Scheduling at Volume", "# Produksi Masal & Penjadwalan Konten"),
    (r"# Selling Content-Factory Output as a Service", "# Menjual Layanan Pabrik Konten ke Klien"),
    (r"# Building a Consistent AI Character", "# Membuat Karakter AI yang Konsisten"),
    (r"# Character to Content Pipeline", "# Pipeline Karakter AI Menjadi Konten"),
    (r"# Voice Cloning & Dialogue", "# Kloning Suara & Dialog Karakter"),
    (r"# Monetization Tiers by Follower Count", "# Tingkat Monetisasi Berdasarkan Jumlah Follower"),
    (r"# Voice Cloning & TTS Basics", "# Dasar Kloning Suara & Text-to-Speech (TTS)"),
    (r"# AI Dubbing & Translation", "# Dubbing AI & Penerjemahan Bahasa"),
    (r"# Podcast Production & Audio Cleaning", "# Produksi Podcast & Pembersihan Audio AI"),
    (r"# AI Music & Sound Effects", "# Pembuatan Musik & Efek Suara (SFX) AI"),
    (r"# Singing Voice Conversion & Vocal Synthesis", "# Konversi Suara Nyanyi & Sintesis Vokal"),
    (r"# Product Shots Without a Photographer", "# Foto Produk Tanpa Fotografer Fisik"),
    (r"# Before/After Conversion Case Studies", "# Studi Kasus Konversi Penjualan Sebelum vs Sesudah"),
    (r"# Selling as a Productized Service", "# Menjual Foto Produk sebagai Layanan Paket"),
    (r"# Batch Workflows for Catalogs", "# Workflow Masal untuk Katalog Produk"),
    (r"# Garment Try-on for Fashion E-commerce", "# Virtual Fitting Baju untuk E-Commerce Fesyen"),
    (r"# High-converting Studio Lookbooks", "# Lookbook Studio Berkonversi Tinggi"),
    (r"# Sizing & Layout Consistency", "# Konsistensi Ukuran & Layout Pakaian"),
    (r"# Empty Room → Staged Room Pipeline", "# Pipeline Ruangan Kosong → Ruangan Berisi Furnitur"),
    (r"# Pricing Against Traditional Staging", "# Strategi Harga Dibandingkan Staging Fisik Tradisional"),
    (r"# Selling to Realtors & Agencies", "# Menjual Layanan Staging ke Agen Properti"),
    (r"# Consistent Headshot Generation", "# Generasi Headshot Profil Konsisten"),
    (r"# Standing Out Against Fiverr Competition", "# Trik Tampil Beda dari Kompetitor Murah di Fiverr"),
    (r"# Batch Headshots for Remote Teams", "# Headshot Masal untuk Tim Perusahaan Remote"),
    (r"# Creative Headshots & Stylized Portraits", "# Headshot Kreatif & Potret AI Artistik"),
    (r"# Designing Sellable AI Art for Merch", "# Mendesain Seni AI Laris untuk Merchandise"),
    (r"# Print-on-Demand Platform Basics", "# Dasar Platform Print-on-Demand (Etsy, Tokopedia, Redbubble)"),
    (r"# Building a Catalog Without Repeating Yourself", "# Membangun Katalog Produk Tanpa Desain Pasaran"),
    (r"# Pricing & Passive-Income Math for POD", "# Perhitungan Harga & Passive Income Print-on-Demand"),
    (r"# What Actually Sells on Stock Marketplaces", "# Aset AI Apa yang Benar-Benar Laris di Stock Marketplace"),
    (r"# Batch-Generating a Licensable Catalog", "# Generasi Masal Katalog Aset Siap Lisensi"),
    (r"# Licensing Models & Realistic Passive-Income Expectations", "# Model Lisensi & Ekspektasi Passive Income Realistis"),
    (r"# Image Models — Which One for Which Use Case", "# Model Gambar AI — Mana yang Tepat untuk Kebutuhan Anda"),
    (r"# Video Models — Which One for Which Use Case", "# Model Video AI — Mana yang Tepat untuk Kebutuhan Anda"),
    (r"# Voice/Audio Models — Which One for Which Use Case", "# Model Audio/Suara AI — Mana yang Tepat untuk Kebutuhan Anda"),
    (r"# API vs. Local: A Decision Framework", "# API vs Lokal: Kerangka Kerja Pengambilan Keputusan"),
    (r"# Pricing Your Services", "# Menentukan Harga Layanan Jasa Anda"),
    (r"# Contracts & Scope Basics", "# Dasar Kontrak Kerja & Pembatasan Scope"),
    (r"# Finding & Closing Clients", "# Cara Mencari & Closing Klien Pertama"),
    (r"# Scaling from Freelancer to Small Agency", "# Scaling dari Freelancer Menjadi Agensi Kecil"),
    (r"# Building a Portfolio That Sells", "# Membangun Portofolio yang Menjual"),

    # Section Headers
    (r"^## The Problem", "## Masalah yang Dihadapi"),
    (r"^## The Concept", "## Konsep Utama"),
    (r"^## Do It", "## Langkah-Langkah Eksekusi (Do It)"),
    (r"^## Worked Example", "## Contoh Studi Kasus Real"),
    (r"^## Compare Tools", "## Perbandingan Tools (API vs Lokal)"),
    (r"^## Launch It", "## Strategi Penjualan & Cari Klien (Launch It)"),
    (r"^## Exercises", "## Latihan & Tugas Praktis"),
    (r"^## Checklists", "## Checklist & Panduan"),
    (r"^## Templates", "## Template Siap Pakai"),
    (r"^## Prerequisites", "## Prasyarat"),

    # Key Terms
    (r"\*\*Time:\*\*", "**Waktu Belajar:**"),
    (r"\*\*Prerequisites:\*\*", "**Prasyarat:**"),
    (r"\*\*Track:\*\*", "**Track:**"),
    (r"User-Generated Content", "User-Generated Content (Konten Buatan Pengguna)"),
    (r"talking-head avatar", "avatar yang berbicara (talking-head avatar)"),
    (r"voice cloning", "kloning suara"),
    (r"text-to-speech", "text-to-speech (TTS)"),
    (r"call-to-action", "panggilan bertindak (CTA)"),
    (r"Call to Action", "Panggilan Bertindak (CTA)"),
    (r"retainer", "retainer bulanan"),
    (r"productized service", "layanan paket jasa (productized service)"),
    (r"passive income", "pendapatan pasif (passive income)"),
    (r"print-on-demand", "print-on-demand (POD)")
]

def translate_file_content(content):
    res = content
    for pattern, replacement in REPLACEMENTS:
        res = re.sub(pattern, replacement, res, flags=re.MULTILINE)
    return res

count = 0
for root, dirs, files in os.walk(tracks_dir):
    for file in files:
        if file.endswith(".md"):
            fp = os.path.join(root, file)
            with open(fp, "r", encoding="utf-8") as f:
                c = f.read()
            translated = translate_file_content(c)
            with open(fp, "w", encoding="utf-8") as f:
                f.write(translated)
            count += 1

print(f"[OK] Translated {count} markdown files in tracks/.")
