# Konsistensi Karakter & Wajah

> Apabila creator AI Anda tampak menyerupai sosok yang berbeda pada setiap adegan, tidak ada client yang bersedia membayar ad tersebut.

**Track:** AI Video Ads & UGC

**Waktu:** ~40 menit

**Prasyarat:** Bagaimana AI UGC Bekerja Sebenarnya

## Masalahnya

Keluhaan paling umum dari individu yang mengeksplorasi konten berbasis AI adalah: "karakter" yang sama tampak berubah menjadi sosok yang berbeda pada setiap proses generasi — bentuk wajah yang bergeser, perbedaan usia, hingga ketidaksesuaian pakaian. Untuk sekadar gambar tunggal, hal ini tidak menjadi kendala. Namun untuk kampanye ad UGC, host saluran tanpa wajah, maupun AI influencer, kendala ini merupakan batasan utama — penonton akan menyadarinya secara seketika, dan client akan menolak hasil pengerjaan tersebut.

Mayoritas panduan melewatkan pembahasan ini karena merupakan bagian yang paling rumit untuk dijelaskan secara sederhana, dan inilah alasan mengapa topik ini disusun dalam modul tersendiri.

## Konsep

Konsistensi dicapai dengan menyajikan sebuah "anchor" yang mengikat model agar tidak bergeser, alih-alih mendeskripsikan ulang karakter melalui teks pada setiap tahapan. Terdapat tiga tipe anchor, diurutkan dari yang paling dasar hingga yang paling kuat:

* **Prompt-only consistency** — mendeskripsikan karakter secara detail setiap saat (rambut, wajah, usia, pakaian). Tingkat paling dasar — deskripsi teks bersifat ambigu dan model akan menginterpretasikan celah tersebut secara berbeda pada setiap generasi.
* **Reference-image consistency** — memasukkan foto referensi dari karakter bersisian dengan prompt, sehingga model mengacu pada struktur wajah nyata, bukan sekadar deskripsi teks. Jauh lebih kuat, dan paling mudah diterapkan pada model berbasis API.
* **Fine-tuned/locked identity (LoRA atau padanannya)** — melatih adapter kecil mengandalkan beberapa foto dari karakter yang sama sehingga model dapat mereproduksi identitas presisi tersebut dari prompt mana pun. Paling kuat dan fleksibel untuk berbagai adegan, namun membutuhkan persiapan lebih (umumnya melalui tahapan local/self-hosted, bukan sekadar pemanggilan API tunggal).

Penetapan **seed** (titik angka acak awal untuk generasi) juga membantu dalam satu sesi pengerjaan, namun penetapan seed semata tidak dapat bertahan di berbagai prompt atau sesi yang berbeda sebagaimana foto referensi atau identitas yang terlatih — posisikan penetapan seed sebagai elemen pendukung, bukan mekanisme utama.

## Lakukan itu

1. **Pilih atau hasilkan karakter anchor Anda** — dapat berupa gambar "founder" berbasis AI maupun foto referensi pengganti, beresolusi tinggi, menghadap ke depan, dengan pencahayaan netral.
2. **Terapkan conditioning foto referensi** untuk setiap proses generasi berikutnya dari karakter tersebut — sertakan gambar anchor bersisian dengan setiap prompt baru (pakaian, pose, latar belakang yang berbeda) alih-alih mendeskripsikan ulang sosok tersebut dalam teks.
3. **Evaluasi potensi pergeseran (drift)** — hasilkan 3-5 variasi lalu bandingkan: keselarasan struktur wajah, perkiraan usia, serta ciri khas identitas yang konsisten (bintik wajah/freckles, gaya rambut spesifik). Apabila tampak bergeser, pertegas prompt untuk hanya mendeskripsikan elemen yang berubah (pakaian, latar belakang) dan percayakan seluruh struktur wajah pada foto referensi.
4. **Untuk penggunaan berulang skala tinggi** (karakter ad yang tampil berkala, seorang influencer, maupun host saluran), pertimbangkan untuk melatih model identitas khusus (tipe LoRA) — membutuhkan alokasi waktu persiapan awal, namun menyajikan tingkat konsistensi yang sangat presisi untuk penggunaan jangka panjang.

## Contoh yang berhasil

Misalkan Anda menghasilkan gambar anchor untuk seorang "creator" berkala — seorang wanita berusia akhir 20-an, menghadap ke depan, pencahayaan netral, rambut cokelat, dengan bintik halus di hidungnya — untuk menampilkan ad GripMount Anda (Modul 1) di seluruh rangkaian.

**Tanpa foto referensi (prompt-only):** mengetik ulang "woman, late 20s, brown hair, freckles" pada setiap adegan baru akan menghasilkan sosok wanita yang *berbeda* setiap saat — deskripsi dasarnya serupa, namun model mengisi bentuk wajah, panjang rambut, dan pola bintik secara berbeda pada tiap generasi. Dalam 5 adegan, Anda kemungkinan akan memperoleh 5 karakter yang tampak berbeda.

**Dengan conditioning foto referensi:** masukkan gambar anchor bersisian dengan setiap prompt baru ("same woman, now in a car, holding a phone" — hanya mendeskripsikan perubahan). Bentuk wajah, pola bintik, dan estimasi usia tetap terkunci karena model mengacu pada gambar nyata, bukan mengira-ngira ulang dari teks. Ini merupakan skema acuan bawaan yang ideal untuk ad client GripMount.

**Evaluasi pergeseran dalam praktik nyata** — karakter wanita anchor dihasilkan dalam 3 pengaturan adegan nyata (interior mobil, meja dapur, berjalan di luar ruangan), menggunakan gambar anchor sebagai masukan referensi pada image model yang mendukung fitur *edit*, alih-alih sekadar prompt teks polos:

**Hasil nyata yang diperoleh:** tidak terjadi pergeseran berarti di seluruh adegan — bentuk wajah, pola bintik, dan rambut tetap terjaga bahkan pada adegan luar ruangan dengan pencahayaan yang berbeda dari gambar anchor. Ini merupakan hasil nyata dari penerapan conditioning foto referensi yang tepat: masukkan gambar anchor sebagai masukan *edit* (bukan mendeskripsikan ulang karakter dalam prompt teks baru) dan biarkan prompt fokus mendeskripsikan latar tempat. Apabila Anda mendapati pergeseran pada percobaan pribadi — garis rahang yang lebih membulat, bintik wajah yang menghilang, atau usia yang tampak berbeda — hal itu umumnya dipicu oleh prompt yang mendeskripsikan ulang fitur wajah alih-alih hanya area sekitar, atau gambar referensi tidak dimasukkan ke dalam endpoint yang mendukung fitur edit.

**Kondisi yang tepat untuk melatih LoRA:** apabila "creator" yang sama akan menampilkan puluhan ad selama beberapa bulan (bukan sekadar satu rangkaian GripMount), pelatihan LoRA menggunakan 15-20 foto akan mengunci identitas secara jauh lebih presisi dan mengeliminasi risiko pergeseran pada tiap adegan — investasi waktu yang sepadan untuk penggunaan berulang.

*Proses eksekusi 3 adegan di atas:* mengunggah gambar anchor satu kali via `upload_file` milik muapi, lalu melakukan 3 pemanggilan terpisah ke **`nano-banana-2-edit`** ($0.06/image), dengan memasukkan gambar terunggah tersebut sebagai referensi (`images_list`) pada tiap pemanggilan disertai prompt yang hanya mendeskripsikan latar tempat baru ("same woman as in the reference image, now sitting in a car...") — tanpa mendeskripsikan ulang struktur wajah itu sendiri. Model edit berbasis referensi lain yang beroperasi dengan mekanisme serupa: `nano-banana-pro-edit`, `gpt-image-2-image-to-image`.

## Bandingkan Alat

Untuk tahapan foto referensi, generasi image models saat ini (contohnya Nano Banana 2/Pro, Seedream) mampu mempertahankan identitas wajah secara signifikan lebih baik saat terjadi perubahan prompt ketimbang image models generasi sebelumnya — potret anchor pada Contoh yang berhasil di atas dihasilkan menggunakan salah satu dari model tersebut. Kualitas model memegang peranan yang sangat krusial di sini ketimbang pada tahapan alur kerja lainnya, mengingat fokus utama modul ini adalah mengatasi pergeseran identitas.

| Path | Kekuatan konsistensi | Tingkat persiapan | Paling sesuai untuk |
| --- | --- | --- | --- |
| **muapi API, conditioning foto referensi** | Baik — kemiripan yang kuat di seluruh generasi | Rendah — sertakan parameter foto referensi | Mayoritas pengerjaan UGC/ad; alur tercepat menuju hasil yang layak |
| **Tools berbayar lain dengan fitur "character" bawaan** | Bervariasi — beberapa mengemas conditioning foto referensi di balik antarmuka yang lebih sederhana | Rendah | Tim yang menghendaki antarmuka GUI di atas teknik dasar yang sama |
| **Local (ComfyUI + LoRA terlatih, atau LTX 2.3 untuk sisi video)** | Paling kuat — identitas yang presisi di seluruh prompt/adegan | Tinggi — membutuhkan pelatihan beberapa foto referensi, lalu alur kerja untuk menjalankannya | Karakter berulang yang digunakan di puluhan/ratusan generasi (seorang influencer, host saluran) di mana biaya persiapan sepadan dengan penggunaan |

Pertimbangkan secara rasional seberapa sering Anda akan menggunakan kembali karakter ini. Conditioning foto referensi via API merupakan pilihan acuan bawaan yang tepat untuk ad client insidental. Identitas lokal yang terlatih baru sepadan dengan alokasi persiapan ekstra apabila Anda memproduksi karakter yang sama secara berulang kali.

## Luncurkan

**Cara menetapkan harga:** Pengerjaan konsistensi tidak ditagihkan secara terpisah — elemen ini merupakan penentu apakah hasil akhir layak digunakan atau tidak, sehingga biayanya telah terintegrasi dalam penetapan harga ad atau konten Anda (lihat Modul 4). Layanan tambahan yang *dapat* Anda tawarkan adalah **paket "branded AI character"** — merancang dan mengunci identitas konsisten yang dapat digunakan kembali oleh client untuk seluruh konten mendatang, yang ditagihkan sebagai biaya persiapan awal ($200-$500) di luar biaya produksi per unit.

**Cara memosisikan layanan:** Posisikan sebagai "jurubicara AI yang dapat digunakan kembali," bukan sekadar "foto buatan AI." Client bersedia mengalokasikan anggaran lebih untuk aset yang dapat digunakan lintas kampanye ketimbang gambar tunggal.

**Penerapan di lapangan:** Setiap track dalam kurikulum ini bertumpu pada modul ini — seorang AI influencer, "host" saluran tanpa wajah, serta karakter ad UGC pada dasarnya merupakan masalah konsistensi dasar yang sama yang diterapkan pada model bisnis yang berbeda.

## Latihan

1. **Mudah:** Hasilkan karakter yang sama dalam 3 pakaian berbeda mengandalkan conditioning foto referensi; evaluasi potensi pergeseran wajah di antaranya.
2. **Sedang:** Hasilkan karakter yang sama dalam 5 adegan/latar belakang berbeda lalu identifikasi detail mana yang bergeser terlebih dahulu (umumnya: usia, proporsi wajah spesifik, gaya rambut).
3. **Sulit:** Konfigurasikan alur kerja ComfyUI lokal dengan identitas terlatih untuk satu karakter, lalu bandingkan konsistensinya terhadap pendekatan foto referensi API pada 5 adegan yang sama.

## Templat

Templat siap pakai yang dihasilkan oleh modul ini — lengkapi dan manfaatkan kembali untuk proyek nyata:

* [`templates/character-consistency-checklist.md`](templates/character-consistency-checklist.md) — hal yang perlu diperiksa dari pergeseran karakter sebelum menyerahkan hasil pengerjaan kepada client.

---

[← Sebelumnya: Bagaimana AI UGC Bekerja Sebenarnya](01-how-ugc-works.md) · [Track overview](README.md) · Berikutnya: [Membangun 10-Ad Batch →](03-building-an-ad-batch.md)
