# Quick Start Guide - Jinxie Bot Landing Page

## 🚀 Mulai dengan Cepat

### 1. Install Dependencies

```bash
cd /home/jins/jinxie-bot-3d-landing
npm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Buka browser dan akses: [http://localhost:3000](http://localhost:3000)

### 3. Build untuk Production

```bash
npm run build
npm start
```

## 📦 Deploy ke Vercel

### Opsi 1: Via Dashboard Vercel

1. Push code ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jinxie Bot 3D Landing Page"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Pergi ke [vercel.com](https://vercel.com)
3. Klik "Import Project"
4. Pilih repository GitHub Anda
5. Klik "Deploy" - Vercel akan otomatis detect Next.js!

### Opsi 2: Via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /home/jins/jinxie-bot-3d-landing
vercel
```

## 🎨 Struktur Project

```
jinxie-bot-3d-landing/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   │
│   ├── components/
│   │   ├── 3d/               # Komponen Three.js
│   │   │   ├── RobotBot.tsx      # Model robot 3D
│   │   │   ├── ParticleField.tsx # Efek partikel
│   │   │   └── Scene3D.tsx       # Scene utama
│   │   │
│   │   ├── sections/         # Section halaman
│   │   │   ├── Hero.tsx          # Hero dengan 3D
│   │   │   ├── Features.tsx      # Daftar fitur
│   │   │   └── CTA.tsx           # Call to action
│   │   │
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   │
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer
│   │
│   └── lib/
│       └── utils.ts         # Utility functions
│
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## ✨ Fitur Utama

### 1. **Robot 3D Interaktif**
- Model robot custom menggunakan Three.js geometries
- Animasi smooth (floating, rotating, dll)
- Warna purple-pink gradient theme
- Logo WhatsApp terintegrasi

### 2. **Particle Effects**
- 1000 partikel floating background
- Smooth rotation animation
- Optimized untuk performance

### 3. **Responsive Design**
- Mobile-first approach
- Breakpoints untuk semua device sizes
- Touch-friendly interactions

### 4. **Modern UI Components**
- shadcn/ui untuk consistent design
- Framer Motion untuk smooth animations
- Lucide icons

## 🎯 Kustomisasi

### Ubah Warna Robot

Edit `src/components/3d/RobotBot.tsx`:

```tsx
// Cari baris ini dan ubah color
<meshStandardMaterial color="#8b5cf6" ... />
```

### Ubah Konten Hero

Edit `src/components/sections/Hero.tsx`:

```tsx
<h1>Meet <span className="text-gradient">Jinxie Bot</span></h1>
<p>Your custom text here...</p>
```

### Tambah Fitur Baru

Edit `src/components/sections/Features.tsx`:

```tsx
const features = [
  {
    icon: YourIcon,
    title: 'Feature Baru',
    description: 'Deskripsi feature...',
    gradient: 'from-color-500 to-color-600',
  },
  // ... tambah lebih banyak
];
```

### Ubah Theme Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary: 263 70% 50%; /* HSL values */
  /* ubah values untuk warna berbeda */
}
```

## 🔧 Tips Optimisasi

### Performance

1. **Reduce Particle Count** (untuk device lemah):
   ```tsx
   // di ParticleField.tsx
   const particleCount = 500; // dari 1000
   ```

2. **Disable Auto-Rotate** (optional):
   ```tsx
   // di Scene3D.tsx
   <OrbitControls autoRotate={false} />
   ```

### SEO

1. Update metadata di `src/app/layout.tsx`
2. Tambahkan sitemap.xml di folder `public/`
3. Update robots.txt sesuai kebutuhan

## 🐛 Troubleshooting

### "Module not found" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3D scene tidak muncul
- Cek browser console untuk errors
- Pastikan browser support WebGL
- Try disable browser extensions

### Build error di Vercel
- Pastikan semua dependencies ada di package.json
- Check vercel.json configuration
- Lihat build logs di Vercel dashboard

## 📚 Teknologi yang Digunakan

- **Next.js 14** - React framework
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer untuk Three.js
- **@react-three/drei** - Helpers untuk R3F
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - UI component library
- **TypeScript** - Type safety

## 🤝 Support

Jika ada pertanyaan atau masalah:
1. Check dokumentasi di README.md
2. Lihat contoh di components
3. Buka issue di GitHub

## 📄 License

MIT - Free to use for personal and commercial projects

---

**Selamat coding! 🎉**

Website sudah siap untuk di-deploy dan di-kustomisasi sesuai kebutuhan Anda!




