# Warkop Kepank — Panduan Logo

Konsep: **Stamp Ring** — stempel bundar bergaya specialty coffee.
Cangkir beruap di tengah, dikelilingi nama dan kota.

## Warna

| Nama | HEX | Pakai untuk |
|---|---|---|
| Coffee Black | `#0e0906` | Latar utama |
| Deep Brown | `#241610` | Latar badge padat |
| Gold | `#d4a565` | Warna logo utama |
| Gold Bright | `#f0c584` | Aksen, highlight |
| Cream | `#f4ece1` | Teks & logo di latar gelap |
| WA Green | `#25d366` | Tombol WhatsApp saja |

## Font
- Ring logo: **Space Grotesk** Bold
- Wordmark: **Archivo Black**
- Website: **Playfair Display** (judul) + **Plus Jakarta Sans** (teks)

Font sudah ditanam langsung di dalam file SVG, jadi logo tampil sama
di semua perangkat walau font-nya belum terpasang.

## Isi folder

### SVG (utama — dipakai untuk apa pun, tidak pecah)
| File | Pakai di |
|---|---|
| `logo-primary-gold.svg` | Latar gelap — versi paling sering dipakai |
| `logo-primary-dark.svg` | Latar terang / kertas |
| `logo-primary-cream.svg` | Latar gelap alternatif, foto |
| `logo-badge-on-dark.svg` | Foto profil WA / IG / FB |
| `logo-badge-on-gold.svg` | Stiker cup, merchandise |
| `logo-badge-on-cream.svg` | Cetak, nota, kemasan |
| `logo-lockup-dark-bg.svg` | Header, spanduk (mendatar) |
| `logo-lockup-light-bg.svg` | Kop surat, nota |
| `logo-icon-gold.svg` | Ikon polos, ukuran kecil |
| `favicon.svg` | Ikon browser |

### PNG (`logo/png/`)
Ukuran siap pakai 16 – 1024 px, latar transparan.
- Foto profil sosmed → `logo-badge-on-dark-1000.png`
- Spanduk / banner → `logo-lockup-dark-bg-1600.png`
- Cetak besar → pakai SVG, bukan PNG

## Aturan pakai

**Boleh**
- Ubah warna logo ke satu warna solid (emas, krem, cokelat, hitam, putih)
- Pakai badge saja tanpa tulisan kalau ruangnya sempit
- Untuk ukuran di bawah 40 px, pakai `logo-icon-*` (cangkir + cincin saja) —
  teks melingkarnya tidak terbaca di ukuran segitu

**Jangan**
- Menarik logo jadi gepeng atau memanjang
- Menaruh logo di atas foto ramai tanpa lapisan gelap di belakangnya
- Memberi bayangan, gradasi, atau garis tepi tambahan
- Memutar logo

**Ruang kosong**: sisakan jarak minimal selebar ¼ diameter logo di semua sisi.

**Ukuran minimum**: badge lengkap 40 px, ikon polos 16 px.

## Ganti warna sendiri
File SVG bisa dibuka di teks editor. Cari kode warna (`#d4a565`)
dan ganti sesuai kebutuhan — tidak perlu software desain.
