import os
import re

# Dictionary for sentence and phrase translation
TRANSLATION_MAP = {
    # Headers
    r"^# How AI UGC Actually Works": "# Cara Kerja Sebenarnya Iklan AI UGC",
    r"^# Character & Face Consistency": "# Konsistensi Wajah & Karakter AI",
    r"^# Building a 10-Ad Batch": "# Membuat Batch 10 Iklan Video",
    r"^# Pricing & Selling UGC Ads": "# Menentukan Harga & Menjual Iklan UGC",
    r"^# Case Study Teardown": "# Bedah Kasus & Teardown Real",
    r"^## The Problem": "## Masalah yang Dihadapi",
    r"^## The Concept": "## Konsep Utama",
    r"^## Do It": "## Langkah-Langkah Eksekusi (Do It)",
    r"^## Worked Example": "## Contoh Studi Kasus Real",
    r"^## Compare Tools": "## Komparasi Tool (API vs Lokal)",
    r"^## Launch It": "## Strategi Penjualan & Cari Klien (Launch It)",
    r"^## Exercises": "## Latihan & Tugas Praktis",

    # Sentences & Paragraphs in UGC Module 1
    "A UGC ad is just five pieces stitched together — once you can see the seams, you can make any of them.":
        "Iklan UGC sebenarnya hanya lima komponen yang disatukan — begitu Anda memahami bagian-bagiannya, Anda bisa membuat iklan apa saja.",
    "Brands pay real creators $200-$1,500 per UGC (user-generated-content-style) ad because it converts better than polished studio ads — it looks like a real person talking to camera about a product, not a commercial.":
        "Brand membayar kreator asli $200-$1,500 per iklan gaya UGC (user-generated-content) karena konversinya jauh lebih tinggi daripada iklan studio yang kaku — iklan ini terlihat seperti orang biasa yang berbicara jujur tentang suatu produk di depan kamera.",
    "The problem: sourcing, briefing, filming, and revising human creators is slow, and it doesn't scale. A brand that wants 20 ad variants to test can't get 20 creators on short notice.":
        "Masalahnya: mencari kreator manusia, memberikan briefing, syuting, dan mengurus revisi sangat lambat dan sulit di-scale. Brand yang ingin menguji 20 variasi iklan tidak bisa mendapatkan 20 kreator dalam waktu singkat.",
    "AI-generated UGC solves the scaling problem, but most people trying it get stuck on one thing: their AI \"creator\" doesn't look consistent from shot to shot, or the voice/lip-sync looks obviously fake, and the ad gets rejected.":
        "Iklan UGC berbasis AI menyelesaikan masalah pemrosesan masal ini, tetapi kebanyakan orang yang mencobanya terjebak pada satu hal: \"kreator\" AI mereka tidak terlihat konsisten antar shot, atau suara/lip-sync terlihat palsu, sehingga iklan ditolak klien.",
    "Understanding the actual pipeline — not just \"type a prompt\" — is what separates a usable ad from an uncanny one.":
        "Memahami pipeline produksi yang sebenarnya — bukan sekadar \"ketik prompt\" — adalah hal yang membedakan antara iklan yang menjual dengan iklan yang tampak aneh.",
    "A UGC-style AI ad is five stages, each producible independently and swappable:":
        "Iklan AI berformat UGC terdiri dari 5 tahapan yang dapat diproduksi secara independen dan diganti-ganti:",
    "- **Script** — a short, conversational hook + pitch + call-to-action, written the way a real person talks, not ad copy.":
        "- **Script (Naskah)** — hook singkat + penawaran + panggilan bertindak (CTA), ditulis dengan gaya bicara orang santai, bukan naskah iklan kaku.",
    "- **Avatar/Voice** — either a generated talking-head avatar with a cloned/synthetic voice, or a still reference image animated with lip-sync driven by an audio track.":
        "- **Avatar/Suara** — avatar yang berbicara dengan suara kloning/sintetis, atau gambar referensi yang dianimasikan dengan lip-sync berdasarkan trek audio.",
    "- **Video** — the avatar's performance, plus any b-roll (product shots, screen recordings) cut around it.":
        "- **Video** — penampilan avatar ditambah B-roll pendukung (foto produk, rekaman layar) yang dipotong secara pas.",
    "- **Captions** — auto-generated, burned-in captions, standard for the format because most viewers watch muted.":
        "- **Captions (Kaption)** — teks otomatis yang menempel di video, wajib untuk format ini karena mayoritas penonton menyaksikan tanpa suara (muted).",
    "- **Export** — format/aspect ratio matched to the platform (9:16 for Reels/TikTok/Shorts, sometimes 1:1 or 16:9).":
        "- **Export (Ekspor)** — rasio aspek disesuaikan dengan platform (9:16 untuk Reels/TikTok/Shorts, atau 1:1 dan 16:9).",
    "The reason this pipeline matters more than any single \"best model\" is that each stage can be produced by a different tool, and the weak link is whichever stage looks least real — usually the avatar's face/voice sync, not the script or captions.":
        "Alasan mengapa pipeline ini jauh lebih penting daripada sekadar mencari \"tool AI terbaik\" adalah karena setiap tahap bisa dihasilkan oleh tool berbeda, dan titik terlemahnya adalah tahap mana yang paling terlihat palsu — biasanya sinkronisasi wajah/suara avatar, bukan naskah atau kaptionnya.",

    # Step-by-step
    "1. **Write the script.** Keep it under 30 seconds spoken (~75-90 words). Structure: hook (first 2 seconds — a question, a bold claim, or a visual surprise), problem/pitch (10-15 seconds), proof or demo (10-15 seconds), call-to-action (last 2-3 seconds).":
        "1. **Tulis naskah.** Pertahankan durasi pengucapan di bawah 30 detik (~75-90 kata). Struktur: Hook (2 detik pertama — pertanyaan, klaim berani, atau kejutan visual), Problem/Pitch (10-15 detik), Proof/Demo (10-15 detik), Call-to-Action (2-3 detik terakhir).",
    "2. **Generate the voice.** Use a text-to-speech or voice-cloning model to turn the script into natural-sounding narration. Match tone to the product (energetic for a gadget, calm for skincare) — and don't stop at the first take. Generate 2-3 versions varying pacing and emphasis (which word gets stressed in the hook line changes how \"surprised\" or \"casual\" it reads), and pick the one that sounds least like it's being read off a page. Accent/demographic match to the product's likely audience matters here too — a mismatched voice can undercut an otherwise good script.":
        "2. **Hasilkan suara.** Gunakan model text-to-speech atau kloning suara untuk mengubah naskah menjadi narasi alami. Sesuaikan nada suara dengan produk (enerjik untuk gadget, tenang untuk skincare) — dan jangan berhenti di take pertama. Buat 2-3 versi dengan variasi pacing dan penekanan kata, lalu pilih yang paling alami. Kesesuaian aksen dan demografi dengan target penonton juga sangat penting.",
    "3. **Generate or animate the avatar.** Either generate a talking-head video directly from the script/voice, or animate a reference image with lip-sync driven by the audio track.":
        "3. **Generasi atau animasikan avatar.** Buat video talking-head langsung dari naskah/suara, atau animasikan foto referensi dengan lip-sync berbasis audio.",
    "4. **Add b-roll.** Cut in product shots or screen recordings during the pitch/proof section — this also hides any short imperfect stretches in the avatar footage.":
        "4. **Tambahkan B-roll.** Sisipkan foto/video produk atau rekaman layar saat bagian penawaran/demo — ini sekaligus menyamarkan kekurangan kecil pada gerakan avatar.",
    "5. **Caption and export.** Auto-generate captions, burn them in, and export at 9:16 for short-form platforms.":
        "5. **Tambahkan kaption dan ekspor.** Buat kaption otomatis, tempelkan pada video, dan ekspor dengan rasio 9:16 untuk platform video pendek.",
    "6. **Ship check.** Before sending anything to a client, watch the finished ad once with sound off (does the hook work from captions alone?) and once with sound on at regular volume. If you catch yourself pausing anywhere to figure out what's happening, a client will too — that's a sign to fix pacing or cut, not just ship it and see.":
        "6. **Pemeriksaan akhir (Ship check).** Sebelum mengirimkan hasil ke klien, tonton video sekali tanpa suara (apakah hook tetap berhasil hanya dari kaption?) dan sekali lagi dengan suara normal. Jika Anda merasa ada bagian yang membingungkan atau membosankan, klien juga akan merasakannya — perbaiki pacing atau potong bagian tersebut sebelum dikirim."
}

def translate_text(content):
    translated = content
    for en, id_text in TRANSLATION_MAP.items():
        translated = re.sub(re.escape(en), id_text, translated)
    return translated

def process_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_content = translate_text(content)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

tracks_dir = os.path.join(projectRoot, "tracks")
count = 0
for root, dirs, files in os.walk(tracks_dir):
    for file in files:
        if file.endswith(".md"):
            process_file(os.path.join(root, file))
            count += 1

print(f"[OK] Translated {count} markdown files in tracks/")
