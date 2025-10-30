# Deploy ke GitHub Pages

Proyek ini sudah dikonfigurasi untuk deploy otomatis ke GitHub Pages.

## Setup di GitHub

1. **Push kode ke GitHub repository**
   ```bash
   git remote add origin https://github.com/username/repository-name.git
   git branch -M main
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Aktifkan GitHub Pages di repository settings**
   - Buka repository di GitHub
   - Masuk ke **Settings** > **Pages**
   - Di bagian **Source**, pilih **GitHub Actions**
   - Simpan perubahan

3. **Deploy otomatis**
   - Setiap push ke branch `main` akan otomatis trigger build dan deploy
   - Workflow akan build aplikasi dan deploy ke GitHub Pages
   - Setelah selesai, website akan tersedia di: `https://username.github.io/repository-name/`

## Konfigurasi yang Sudah Dibuat

### 1. Vite Config (`vite.config.ts`)
- **base: "/"** - Untuk deploy di root directory
- **host: "0.0.0.0"** - Agar bisa diakses dari luar
- **port: 5000** - Port untuk Replit environment

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Workflow ini akan:
- Install dependencies dengan npm
- Build aplikasi dengan `npm run build`
- Deploy hasil build dari folder `dist/` ke GitHub Pages

## Jika Deploy ke Subdirectory

Jika repository Anda akan di-deploy ke subdirectory (misalnya `https://username.github.io/repository-name/`), ubah `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: "/repository-name/",  // Ganti dengan nama repository Anda
  // ... konfigurasi lainnya
}));
```

## Build Local

Untuk test build secara lokal:
```bash
npm run build
npm run preview
```

## Catatan
- Pastikan di repository settings, GitHub Pages source sudah diatur ke **GitHub Actions**
- Workflow akan berjalan otomatis setiap ada push ke branch main
- Check tab **Actions** di GitHub untuk melihat status deployment
