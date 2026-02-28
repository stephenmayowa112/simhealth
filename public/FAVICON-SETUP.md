# Favicon Setup Guide

## Current Setup

The website now has the following favicon files configured:

### Automatic Next.js Icons (in `app/` directory)
- `app/icon.svg` - Main favicon (32x32) - automatically used by Next.js
- `app/apple-icon.svg` - Apple touch icon (180x180) - for iOS devices

### Manual Icons (in `public/` directory)
- `public/favicon.ico` - Legacy favicon for older browsers
- `public/manifest.json` - PWA manifest file

## How to Update Icons

### Option 1: Use Current SVG Icons (Recommended)
The current SVG icons are automatically generated and match your brand colors:
- Primary Green: #75c037
- Secondary Yellow: #ffc42e
- Design: Medical cross with circle

These work great and are already configured!

### Option 2: Replace with Custom Icons

If you want to use custom icon files:

1. **For PNG/ICO favicons:**
   - Create a 32x32 PNG: Save as `public/favicon-32x32.png`
   - Create a 16x16 PNG: Save as `public/favicon-16x16.png`
   - Create a 192x192 PNG: Save as `public/icon-192.png`
   - Create a 512x512 PNG: Save as `public/icon-512.png`
   - Convert to ICO: Use a tool like https://favicon.io to create `public/favicon.ico`

2. **For Apple Touch Icon:**
   - Create a 180x180 PNG: Save as `public/apple-touch-icon.png`
   - Or replace `app/apple-icon.svg` with your custom SVG

3. **For Android/PWA:**
   - Update `public/icon-192.png` and `public/icon-512.png`
   - These are referenced in `public/manifest.json`

## Testing Your Favicons

1. **Local Testing:**
   - Run `npm run dev`
   - Open http://localhost:3000
   - Check browser tab for favicon
   - Check on mobile devices

2. **Production Testing:**
   - After deployment, use https://realfavicongenerator.net/favicon_checker
   - Test on multiple devices and browsers

## Favicon Sizes Reference

- **favicon.ico**: 16x16, 32x32, 48x48 (multi-size ICO file)
- **icon.svg**: Scalable (works at any size)
- **apple-icon.svg**: 180x180 (iOS home screen)
- **icon-192.png**: 192x192 (Android home screen)
- **icon-512.png**: 512x512 (Android splash screen)

## Current Configuration

All favicons are configured in `app/layout.tsx` metadata:
```typescript
icons: {
  icon: [
    { url: '/icon.svg', type: 'image/svg+xml' },
    { url: '/favicon.ico', sizes: 'any' },
  ],
  apple: [
    { url: '/apple-icon.svg', type: 'image/svg+xml' },
  ],
}
```

No additional configuration needed - Next.js handles everything automatically!
