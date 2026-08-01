# Empty Room → Staged Room Pipeline

> Mentransformasi ruang kosong menjadi hunian mewah berkonversi tinggi dalam hitungan menit mengandalkan depth-aware AI inpainting.

**Track:** AI Real Estat (Pementasan Virtual)
**Waktu:** ~40 menit
**Prasyarat:** Pemahaman dasar tentang image generation prompts

## The Problem

Properti kosong dalam listing real estate kerap kali memicu kesenjangan persepsi yang signifikan bagi calon pembeli: ruangan yang hampa tampak lebih sempit, dingin, serta sulit dibayangkan potensi tata letaknya ketimbang ruang yang berfurnitur. Berdasarkan data National Association of Realtors (NAR), **81% pembeli merasa jauh lebih mudah mengimajinasikan properti sebagai hunian masa depan ketika disajikan dalam kondisi staged**, dan properti dengan staging mampu meraih nilai jual **hingga 20% lebih tinggi** ketimbang ruangan kosong.

Meski demikian, eksekusi physical staging tradisional menuntut biaya yang sangat tinggi serta memakan waktu:

- **Cost:** Menyewa furniture fisik dan mempekerjakan tim interior design menghabiskan alokasi anggaran **$2,500 hingga $5,000+ per bulan** untuk setiap listing.
- **Turnaround:** Penjadwalan tim pengangkut serta perakitan furniture memakan waktu **3 hingga 7 hari**, yang berimbas pada tertundanya peluncuran listing.
- **Risk:** Proses pemindahan furniture fisik berisiko menggores lantai atau merusak dinding selama masa transportasi.

Apabila Anda mengandalkan penyuntingan gambar sederhana atau 3D rendering kelas bawah, furniture yang dihasilkan tampak pipih, tidak proporsional, serta mengambang secara tidak alami di atas lantai—yang seketika meruntuhkan kepercayaan calon pembeli. Anda membutuhkan workflow AI yang cepat dan photorealistic untuk mempertahankan geometri ruangan sembari mengisi sudut ruang secara sempurna dengan interior decor yang elegan.

## The Concept

Alur kerja AI virtual staging bertumpu pada **Perspective-Locked Inpainting** serta **Depth-Aware Furniture Placement**:

```
Empty Room Photo ──► Depth Mask Generation ──► Perspective Alignment ──► Inpainting Furniture ──► Shadow & Reflection Matching
```

### Pilar Teknis Utama:

1. **Perspective & Vanishing Point Locking:** Fotografi real estate memanfaatkan lensa sudut lebar (16–24mm) dengan vanishing point arsitektural yang presisi. Guna mencegah furniture tampak terdistorsi atau miring, model AI wajib mengacu pada horizon line serta sudut dinding vertikal yang ada.
2. **Floor & Wall Depth Preserving:** Saat menata ruang kosong, model AI harus mampu mendeteksi floor planes, baseboards, serta arah pencahayaan jendela. Mengintegrasikan ControlNet Depth atau depth-masking memastikan kaki sofa menapak sempurna di atas permukaan lantai dan sejajar dengan batas dinding tanpa mengubah tekstur jendela, pintu, maupun lantai secara struktural.
3. **Interior Style Presets:** Virtual staging yang efektif menyasar demografi pembeli secara spesifik melalui tema estetika terkurasi:
   - **Modern Scandinavian:** Kayu oak terang, sofa berbahan linen netral, coffee table minimalis, serta pot tanaman monstera.
   - **Contemporary Luxury:** Sofa sectional berbahan beludru, coffee table marmer, pencahayaan aksen kuningan, serta area rug yang empuk.
   - **Coastal Modern:** Tekstil bernuansa terang, aksen rotan, warna biru lembut, jute rug tenun, serta pendar sinar matahari alami yang hangat.

## Do It

### Step 1: Capture & Select the Source Photograph

Dapatkan foto sudut lebar beresolusi tinggi dari ruangan kosong tersebut. Pastikan foto tegak lurus (seimbang secara horizontal dan tegak lurus secara vertikal) serta tersinari secara optimal oleh pendar cahaya alami. Simpan sebagai berkas `empty-room-source.jpg`.

### Step 2: Define the Staging Mask Area

Buka aplikasi photo editor atau antarmuka inpainting Anda. Tandai area lantai yang akan ditempati furniture sembari mempertahankan elemen struktural (jendela, perapian, tiang penyangga, dinding utama) agar tidak tersentuh. Buat inpainting mask layer yang mencakup 60–70% dari area lantai yang terbuka.

### Step 3: Write the Depth-Aware Staging Prompt

Rangkai prompt mengandalkan spesifikasi gaya interior Anda dari panduan [`templates/virtual-staging-brief.md`](templates/virtual-staging-brief.md). Sematkan kata kunci arsitektur dan pencahayaan diawal prompt agar selaras dengan foto asli:

- **Prompt:**
> `"High-end modern luxury living room virtual staging. A sleek cream fabric L-shaped sectional sofa with plush pillows resting on a soft beige area rug, low-profile oval wood coffee table, potted fiddle-leaf fig in ceramic planter, natural sunlight casting soft shadows, interior design magazine style, 8k photorealistic resolution, perfectly aligned to floor plane."`

- **Negative Prompt:**
> `"warped floor, distorted furniture legs, floating objects, cartoon, low resolution, blurry, altered windows, altered walls, 3d render look, oversaturated."`

### Step 4: Execute Inpainting with ControlNet / Depth Reference

Masukkan berkas `empty-room-source.jpg` beserta mask Anda ke dalam model (seperti FLUX Inpainting atau muapi `/nano-banana-2` dalam mode inpainting). Atur ControlNet Depth weight pada angka `0.75` guna mempertahankan geometri lantai secara struktural sembari memberi ruang bagi model untuk membentuk volume 3D furniture.

### Step 5: Composite & Verify Contact Shadows

Cermati luaran render pada tingkat pembesaran 100% zoom:

- **Floor Contact:** Pastikan kaki sofa dan meja menapak secara alami pada lantai disertai bayangan kontak yang pekat dan presisi (ambient occlusion).
- **Light Source Consistency:** Pastikan pendar bayangan pada furniture selaras dengan arah jatuhnya sinar matahari dari jendela.
- Simpan hasil staging akhir sebagai berkas `staged-living-room.jpg`.

## Worked Example

**Rincian Eksekusi Staging untuk "Oakridge Listing"**

- **Source Property:** Ruang tamu kosong seluas 450 sq ft dengan lantai kayu murni dan jendela besar bertabur sinar matahari.
- **Target Buyer:** Pasangan profesional muda yang mendambakan gaya modern luxury.
- **Selected Furniture Pack:** Scandinavian Luxury (Cream Sectional, Oak Coffee Table, Textured Rug, Indoor Botanicals).
- **Render Settings:** Denoising strength `0.65`, Depth weight `0.80`, serta rasio aspek 16:9 yang presisi sesuai luaran kamera.
- **Turnaround Time:** Total durasi pemrosesan selama 4 menit.
- **Cost:** Biaya generation AI sebesar **$0.06** berbanding tawaran physical staging tradisional senilai **$3,200**.

## Compare Tools

| Platform / Method | Turnaround Time | Cost per Photo | Realism & Control | Best For |
| --- | --- | --- | --- | --- |
| **FLUX / muapi Inpainting API** | < 1 minute | $0.05 - $0.15 | **Extremely High** — Custom depth control, exact furniture styling | Agensi real estate bereputasi tinggi serta workflow staging terotomatisasi |
| **Specialized Staging SaaS (BoxBrownie, VirtualStagingAI)** | 24 - 48 hours | $20 - $35 | **High** — Peninjauan desainer secara manual atau katalog 3D statis | Listing hunian tunggal dengan alokasi anggaran terbatas |
| **Traditional Physical Staging** | 3 - 7 days | $2,500 - $5,000+ | **Physical Reality** — Penataan furniture nyata di dalam hunian | Mega-mansion super mewah ($5M+) dengan agenda open house langsung |

## Launch It

**Panduan penetapan harga & pengemasan layanan ini:**

- **Single Room Staging:** **$35 – $50** per foto.
- **Full House Listing Package (5 Rooms):** Paket seharga **$149 – $199** (mencakup Living Room, Master Bedroom, Kitchen/Dining, Guest Bedroom, dan Patio).
- **Delivery Specs:** Serahkan berkas JPEG beresolusi tinggi (lebar 3000px+) yang teroptimasi untuk diunggah ke MLS (Multiple Listing Service), Zillow, maupun Redfin dalam kurun waktu 24 jam.

## Exercises

1. **Easy:** Abadikan foto ruang kosong di kediaman Anda atau unduh stock photo ruangan hampa. Tentukan vanishing point utama serta sumber cahaya jendela.
2. **Medium:** Gunakan inpainting tool untuk menata sofa modern serta coffee table ke dalam ruang kosong tersebut sembari menjaga keaslian tekstur lantai dan dinding.
3. **Hard:** Lakukan pengujian staging multi-gaya pada ruangan kosong yang sama: hasilkan versi pertama berkonsep **Modern Scandinavian** dan versi kedua berkonsep **Industrial Loft**, sembari memastikan konsistensi pencahayaan serta presisi perspektif pada kedua render.

## Templates

- [`templates/virtual-staging-brief.md`](templates/virtual-staging-brief.md) — Panduan gaya interior design, kerangka kerja prompt, serta daftar periksa quality control.

---

[Track Overview](README.md) · Berikutnya: [Pricing Against Traditional Staging →](02-pricing-against-traditional-staging.md)
