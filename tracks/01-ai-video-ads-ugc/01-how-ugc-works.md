# Bagaimana AI UGC Bekerja Sebenarnya

> Sebuah ad UGC sejatinya hanyalah lima elemen yang digabungkan — begitu Anda dapat melihat celah batasnya, Anda dapat merancang bagian mana pun dari elemen tersebut.

**Track:** AI Video Ads & UGC

**Waktu:** ~45 menit

**Prasyarat:** Tidak ada

## Masalahnya

Brand bersedia membayar creator nyata sebesar $200-$1,500 untuk setiap ad berbasis UGC (user-generated-content-style) karena format ini mampu menghasilkan konversi yang lebih tinggi ketimbang ad studio yang dipoles rapi — tampilan visualnya menyerupai seseorang yang tengah berbicara secara wajar di hadapan kamera mengenai suatu produk, alih-alih sebuah komersial. Kendalanya: proses mencari, memberikan brief, pengambilan gambar, hingga merevisi human creators memakan waktu lambat dan sulit dieksekusi dalam skala besar. Sebuah brand yang menghendaki 20 ad variants untuk kebutuhan pengujian tidak akan bisa mengumpulkan 20 creators dalam waktu singkat.

UGC berbasis AI menjadi solusi efektif atas kendala skala tersebut, namun mayoritas orang yang mengujinya kerap terbentur pada satu hal: "creator" AI mereka tampak tidak konsisten dari satu adegan ke adegan berikutnya, atau sinkronisasi suara/lip-sync terlihat artifisial, sehingga ad tersebut ditolak. Memahami alur pipeline secara utuh — bukan sekadar "mengetikkan prompt" — merupakan pembeda utama antara ad yang layak pakai dan ad yang tampak canggung.

## Konsep

Sebuah ad AI berformat UGC terdiri atas lima tahapan terpisah yang dapat diproduksi secara mandiri serta saling ditukar:

```
Script  →  Avatar / Voice  →  Video  →  Captions  →  Export

```

* **Script** — susunan narasi singkat berupa hook + pitch + call-to-action yang dirancang menyerupai gaya tutur manusia nyata, bukan sekadar ad copy.
* **Avatar/Voice** — dapat berupa avatar talking-head yang dihasilkan bersama voice sintetis/kloning, maupun gambar referensi statis yang dianimasikan mengandalkan lip-sync berbasis trek audio.
* **Video** — penampilan dari avatar, ditunjang oleh materi b-roll (tampilan produk, rekaman layar) yang disunting secara presisi di sekitarnya.
* **Captions** — teks otomatis yang disematkan secara permanen (burned-in captions), menjadi standar utama format ini mengingat mayoritas penonton menyimak video tanpa mengaktifkan suara.
* **Export** — format serta aspect ratio yang disesuaikan secara presisi dengan platform tujuan (9:16 untuk Reels/TikTok/Shorts, atau sesekali 1:1 dan 16:9).

Alasan mengapa pemahaman alur pipeline ini jauh lebih krusial ketimbang sekadar berburu "model terbaik" adalah karena setiap tahapan dapat dieksekusi mengandalkan tools yang berbeda. Titik terlemah dari ad tersebut terletak pada bagian yang tampak paling tidak realistis — yang umumnya bersumber dari sinkronisasi wajah/suara avatar, bukan pada script atau captions.

## Lakukan itu

1. **Susun script.** Pertahankan durasi penuturan di bawah 30 detik (~75-90 kata). Struktur naskah: hook (2 detik awal — berupa pertanyaan, klaim lugas, maupun kejutan visual), problem/pitch (10-15 detik), proof atau demo (10-15 detik), serta call-to-action (2-3 detik akhir).
2. **Hasilkan voice.** Manfaatkan model text-to-speech atau voice-cloning untuk mengubah script menjadi narasi berartikulasi natural. Selaraskan intonasi dengan karakter produk (energik untuk gawai, tenang untuk produk perawatan kulit) — dan hindari menyudahi proses pada percobaan pertama. Hasilkan 2-3 variasi dengan dinamika tempo serta penekanan kata yang berbeda (penekanan kata pada baris hook dapat mengubah persepsi "terkejut" atau "santai" saat dibaca), lalu pilih opsi yang paling tidak terkesan seperti sedang membaca teks. Keselarasan aksen dan demografi terhadap calon audiens produk juga memegang peranan krusial di sini — pilihan suara yang tidak selaras dapat merusak kualitas script yang sejatinya sudah tersusun baik.
3. **Hasilkan atau animasikan avatar.** Anda dapat menghasilkan video talking-head secara langsung dari script/voice, maupun menganimasikan gambar referensi melalui sinkronisasi lip-sync berbasis trek audio.
4. **Sematkan b-roll.** Sisipkan tampilan produk atau rekaman layar pada bagian pitch/proof — langkah ini sekaligus berfungsi menyamarkan celah ketidaksempurnaan singkat pada rekaman avatar.
5. **Sematkan caption dan lakukan export.** Hasilkan captions secara otomatis, sematkan secara permanen, lalu lakukan export pada format 9:16 untuk kebutuhan platform short-form.
6. **Lakukan ship check.** Sebelum menyerahkan materi kepada client, simak ad yang telah selesai sebanyak satu kali tanpa suara (pastikan apakah hook tetap bekerja secara optimal hanya melalui captions) dan satu kali dengan suara pada volume standar. Apabila Anda mendapati diri Anda jeda sejenak untuk memahami apa yang sedang terjadi, client pun akan merasakan hal yang sama — itu merupakan indikasi untuk memperbaiki tempo atau memotong bagian tertentu, bukan sekadar langsung mengirimkannya.

## Contoh yang berhasil

Produk: dudukan HP magnetik mobil seharga $28 ("GripMount").

**Script** (hook/pitch/proof/CTA, ~28 detik penuturan):

> "Okay, I did not expect this to actually hold my phone through a pothole. [holds up phone, taps mount] I used to have one of those suction ones that fell off literally every drive — this one's magnetic, snaps on in like two seconds. [demo: slaps phone onto mount] It's held through every drive for the last two weeks, potholes included. It's $28, link's below — honestly just get it before your next road trip."

Pemetaan berdasarkan struktur naskah:

* **Hook (0-2s):** "Okay, I did not expect this to actually hold my phone through a pothole." — sebuah klaim spesifik bertema ketakjuban, bukan sekadar pernyataan umum ("this product is great").
* **Problem/Pitch (2-15s):** menyebutkan kegagalan nyata dari produk pesaing (dudukan tipe suction yang mudah terlepas) — elemen inilah yang membuatnya terdengar seperti ucapan manusia nyata, bukan ad copy.
* **Proof/Demo (15-25s):** peragaan visual (menempelkan HP secara langsung) ditunjang penegasan durasi konkret ("two weeks, potholes included") — sajian angka spesifik terasa jauh lebih kredibel ketimbang sekadar ucapan "it works great."
* **CTA (25-28s):** pencantuman harga secara lugas, satu tindakan yang jelas ("link's below"), serta urgensi yang ditautkan pada skenario penggunaan nyata (liburan) alih-alih kalimat generik "buy now."

**Mengapa script ini mampu bertahan dalam tahap produksi:** durasinya cukup ringkas untuk menjaga ritme energi dalam satu kali pengambilan gambar, adegan demo (menempelkan HP) memberi avatar ruang untuk menggerakkan tangan secara natural ketimbang hanya bergeming sambil berbicara — yang sekaligus menyamarkan ketidaksempurnaan minor avatar — serta tidak pernah terlontar kata "AI" maupun terdengar kaku seperti membaca teks.

**Kesalahan umum pada percobaan pertama:** menyusun bagian pitch menyerupai kalimat promosi kaku ("Introducing GripMount, the revolutionary new way to...") alih-alih seperti gaya tutur wajar. Baca script Anda dengan lantang sebelum melangkah ke proses produksi — apabila kalimat tersebut terasa tidak alami untuk diucapkan kepada rekan Anda, susun ulang naskah tersebut.

**Klip di bawah ini merupakan hasil nyata, bukan mockup** — gambar anchor dari Modul 2 yang dianimasikan menjadi klip bicara singkat berdasarkan baris kalimat hook di atas, sehingga Anda dapat mengamati seperti apa tampilan luaran tahap awal sebelum disentuh proses editing/b-roll/captions:

*Proses eksekusi produksi dari awal hingga akhir via muapi API:*

1. Hasilkan potret anchor mengandalkan **`nano-banana-2`** (text-to-image, $0.06/image) — gambar yang sama persis digunakan pada contoh Modul 2.
2. Unggah gambar tersebut melalui endpoint `upload_file` milik muapi guna memperoleh URL yang dapat dirujuk oleh model berikutnya.
3. Masukkan URL gambar tersebut ke dalam **`seedance-2-image-to-video-fast`** (image-to-video, $0.75/clip) disertai prompt yang mendeskripsikan tindakan serta baris dialog secara presisi — tidak diperlukan proses TTS/lip-sync terpisah, mengingat model ini menghasilkan pergerakan mulut serta tuturan suara secara bersamaan dari prompt.
4. Unduh berkas `.mp4` yang dihasilkan dari CDN muapi (luaran yang dihasilkan akan kedaluwarsa setelah 30 hari, sehingga aset yang ingin Anda simpan perlu segera diunduh) lalu konversikan menjadi pratinjau GIF tanpa suara di atas menggunakan `ffmpeg` untuk kebutuhan tampilan.

Total biaya produksi untuk satu klip ini: **$0.81** yang mencakup dua pemanggilan model. Alur ini menerapkan secara presisi pipeline "image → video model, prompt-driven" yang dipaparkan pada Lakukan itu, langkah 3 — nama model yang tercantum merupakan contoh saat ini, bukan rekomendasi mengikat; cermati Bandingkan Alat di bawah ini untuk memilih model yang tepat apabila opsi tersebut telah diperbarui.

## Bandingkan Alat

Penamaan model akan terus berkembang secara dinamis, namun pemilihan *kategori* memegang peranan yang jauh lebih krusial ketimbang penamaan model secara spesifik — berikut opsi yang terhitung relevan untuk setiap tahapan saat ini:

| Stage | Model muapi yang relevan | Keunggulan |
| --- | --- | --- |
| Voice/TTS | Gemini TTS, ElevenLabs text-to-dialogue | Penyampaian multi-speaker yang natural disertai kendali emosi/tempo — bukan TTS yang terdengar kaku |
| Avatar/video (image → talking clip) | Seedance 2.x, Kling 3.0 | Generasi model video saat ini yang mampu menangani pergerakan kepala/tangan serta tuturan suara secara meyakinkan dalam satu tahapan, sebagaimana klip di atas |
| Lip-sync (audio-driven, onto an existing video/image) | Model lip-sync khusus (misalnya sync-style lip-sync) atau model Kling avatar | Pilihan yang lebih tepat apabila Anda telah memiliki rekaman narasi terpisah yang perlu diselaraskan ke wajah, alih-alih menghasilkan suara + pergerakan secara bersamaan |

| Path | Biaya per ad | Tingkat persiapan | Konsistensi | Paling sesuai untuk |
| --- | --- | --- | --- | --- |
| **muapi API** (managed) | Biaya kredit per generasi, tanpa infrastruktur mandiri | Rendah — panggil endpoint, dapatkan hasil | Tinggi — model/voice yang sama dapat digunakan kembali via parameter API | Iterasi cepat, pengerjaan proyek client, menguji banyak variasi |
| **Tools UGC berbayar all-in-one lainnya** | Umumnya berbasis langganan, penetapan harga per akses | Rendah, namun terikat pada tampilan UI/workflow mereka | Bervariasi tergantung tools | Tim yang menghendaki antarmuka GUI, bukan API |
| **Local/self-hosted** (ComfyUI + local TTS/video models, misalnya LTX 2.3) | Bebas biaya pasca ketersediaan perangkat keras, namun membutuhkan GPU yang mumpuni | Tinggi — pengaturan alur kerja, pengunduhan model, serta penyesuaian | Mampu mencapai tingkat konsistensi yang sangat tinggi setelah disesuaikan, namun membutuhkan proses yang lebih lambat | Efisiensi biaya marjinal untuk volume besar, kendali penuh, serta client yang sensitif terhadap privasi dan menghindari pemrosesan cloud |

LTX 2.3 patut disebut secara spesifik untuk alur local: opsi ini merupakan open-weight video model yang dapat dijalankan pada ComfyUI, menjadikannya padanan lokal paling mendekati untuk kelas model Seedance/Kling di atas — secara bawaan performanya belum sepadan, namun menjadi satu-satunya dalam kelompok ini yang dapat Anda jalankan di GPU pribadi tanpa pemanggilan API.

Keseimbangan nyata yang perlu dipertimbangkan: alur local sepenuhnya bebas biaya per generasi setelah dikonfigurasi, namun alokasi waktu untuk persiapan dan iterasi terhitung besar — Anda perlu meluangkan waktu penyesuaian alur kerja ComfyUI hingga berjalan stabil. Pemanfaatan API merupakan acuan bawaan yang tepat saat Anda masih mempelajari standar kualitas visual yang ideal; alur local mulai terhitung relevan saat Anda memproduksi dalam skala volume nyata (puluhan ad/bulan) atau saat client secara khusus mewajibkan pemrosesan secara on-premise.

## Luncurkan

**Cara menetapkan harga:** Pengerjaan ad berformat UGC pada marketplace freelance berkisar antara $10-$55 untuk setiap ad yang telah selesai; agensi mengemas layanan ini dalam skema retainer sebesar $1,500-$3,000/bulan untuk pemenuhan berkala. Tetapkan harga berdasarkan deliverable (contohnya, "$150 untuk 5 ad variants") alih-alih hitungan jam — client lebih memahami paket ad ketimbang durasi waktu produksi Anda.

**Cara memosisikan layanan:** Kedepankan hasil akhir bagi bisnis ("lebih banyak variasi ad untuk diuji, lebih cepat, tanpa perlu tim film"), bukan proses AI di baliknya. Brand yang membeli ad UGC berfokus pada konversi dan kecepatan pengujian, bukan pada metode pembuatan video tersebut.

**Lokasi menemukan client pertama:** Brand e-commerce DTC yang tengah menjalankan iklan berbayar di media sosial merupakan target yang paling potensial — mereka telah terbiasa membeli UGC dan memahami format tersebut. Melakukan cold outreach kepada brand yang aktif menjalankan ad di Meta/TikTok (terlihat pada pustaka iklan publik platform terkait) dengan menyertakan sampel ad produk mereka merupakan pendekatan yang jauh lebih kuat ketimbang penawaran generik.

**Angka riil di lapangan:** Studi kasus terdokumentasi menunjukkan brand secara individual mampu menjalankan materi ad berformat AI-UGC dengan alokasi ad spend mencapai $600K+/bulan untuk satu produk tunggal — poin utamanya bukan berarti Anda akan langsung menyamai angka tersebut, melainkan sebagai bukti bahwa format ini telah teruji dalam skala besar dan bukan sekadar tren sesaat.

## Latihan

1. **Mudah:** Susun tiga script UGC berdurasi 30 detik untuk produk yang Anda gunakan, mengacu pada struktur hook/pitch/proof/CTA.
2. **Sedang:** Produksi satu ad utuh dari awal hingga akhir (script → voice → avatar → captions → export) untuk produk nyata maupun simulasi.
3. **Sulit:** Produksi 5 variasi dari ad yang sama (produk serupa, dengan hook atau sudut pandang berbeda) lalu bandingkan hook mana yang diproyeksikan berkinerja paling optimal, beserta alasannya.

## Template

Template siap pakai yang dihasilkan oleh modul ini — lengkapi dan manfaatkan kembali untuk proyek nyata:

* [`templates/ugc-script-template.md`](templates/ugc-script-template.md) — struktur script hook/pitch/proof/CTA dalam bentuk template isian.
* [`templates/ad-brief-checklist.md`](templates/ad-brief-checklist.md) — daftar periksa untuk memberi brief pada diri sendiri (atau client) sebelum memulai produksi.

---

[Track overview](README.md) · Berikutnya: [Konsistensi Karakter & Wajah →](02-character-consistency.md)
