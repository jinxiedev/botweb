# Jinxie Bot - 3D Landing Page

A modern, interactive 3D landing page for Jinxie Bot WhatsApp AI Assistant built with Next.js, Three.js, and Tailwind CSS.

## Features

- 🎨 **3D Interactive Robot**: Fully animated 3D robot model built with Three.js
- ⚡ **Smooth Animations**: Framer Motion for silky smooth page transitions
- 🎭 **Modern UI**: Built with shadcn/ui components
- 📱 **Responsive Design**: Works perfectly on all devices
- 🚀 **Performance Optimized**: Fast loading and smooth 60fps animations
- 🌙 **Dark Theme**: Beautiful purple-pink gradient theme

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **UI Components**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
jinxie-bot-3d-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── RobotBot.tsx       # 3D Robot model
│   │   │   ├── ParticleField.tsx  # Particle effects
│   │   │   └── Scene3D.tsx        # Main 3D scene
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   └── CTA.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
└── README.md
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: "hsl(var(--primary))",
  // ... more colors
}
```

### 3D Model

Customize the robot in `src/components/3d/RobotBot.tsx`. You can:
- Change colors
- Adjust proportions
- Modify animations
- Add more features

### Content

Update text content in:
- `src/components/sections/Hero.tsx` - Hero section
- `src/components/sections/Features.tsx` - Features list
- `src/components/sections/CTA.tsx` - Call to action

## Performance Tips

- The 3D scene is automatically suspended for smooth loading
- Particle count can be adjusted in `ParticleField.tsx`
- Three.js models use efficient geometry (RoundedBox from Drei)
- Images and assets are optimized by Next.js

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

All modern browsers with WebGL support.

## License

MIT

## Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Three.js




