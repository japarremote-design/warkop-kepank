# Warkop Kepank — Landing Page

Static single-file landing page. Tidak perlu build step.

## ⚠️ LANGKAH WAJIB SETELAH DEPLOY
Open Graph (preview saat di-share ke WA/FB/Telegram) butuh **URL absolut**.
Setelah dapat domain Vercel, jalankan:

```bash
bash set-domain.sh https://domain-kamu.vercel.app
```

Atau manual: cari-dan-ganti semua `https://warkop-kepank.vercel.app`
di `index.html`, `robots.txt`, dan `sitemap.xml`. Lalu deploy ulang.

## Deploy ke Vercel
1. Buka https://vercel.com/new
2. Drag & drop folder ini ke area upload
3. Framework Preset: **Other** → Build Command & Output Directory dikosongkan
4. Deploy
5. Jalankan `set-domain.sh` dengan URL hasil deploy, lalu deploy ulang

### Via CLI
```bash
npm i -g vercel
vercel --prod
```

## Cek preview share
Setelah deploy ulang, paksa platform baca ulang meta tag:
- **WhatsApp & Facebook**: https://developers.facebook.com/tools/debug/ → tempel URL → "Scrape Again"
- **X / Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/
- **Telegram**: chat ke `@WebpageBot`, kirim URL-nya
- **Google Rich Results**: https://search.google.com/test/rich-results

Catatan: WhatsApp cache preview cukup lama. Kalau belum berubah,
tambahkan `?v=2` di ujung URL saat testing.

## File
| File | Fungsi |
|---|---|
| `index.html` | Halaman utama (semua CSS & JS inline) |
| `og-image.jpg` | Gambar preview share (1200×630) |
| `favicon.svg` / `.ico` | Ikon browser |
| `apple-touch-icon.png` | Ikon saat disimpan di home screen iPhone |
| `icon-192.png` / `icon-512.png` | Ikon PWA / Android |
| `site.webmanifest` | Config PWA |
| `logo/` | Semua file logo + panduan brand (`logo/BRAND.md`) |
| `robots.txt` / `sitemap.xml` | SEO |
| `vercel.json` | Config Vercel |
| `set-domain.sh` | Ganti URL placeholder |
| `_source/` | Script pembuat logo (tidak perlu di-deploy) |

## Logo
Konsep **Stamp Ring**. Semua varian ada di folder `logo/` —
SVG untuk apa pun, PNG siap pakai di `logo/png/`.
Aturan pakai dan kode warna: baca `logo/BRAND.md`.

Untuk foto profil WhatsApp / Instagram / Facebook, pakai:
`logo/png/logo-badge-on-dark-1000.png`

## Yang bisa diubah
- Nomor WA: cari `const WA = '628123068237'` di `index.html`
- Menu & deskripsi: array `MENU` di `index.html`
- Warna: blok `:root{...}` di `<style>`
- Jam buka: fungsi `tick()` — `600` = 10:00, `60` = 01:00 (dalam menit)
- Koordinat peta di JSON-LD (`place:location:*`) masih perkiraan — ganti dengan
  koordinat asli dari Google Maps kalau mau presisi
