# Yapılacaklar — React Todo App

React + TypeScript + Tailwind CSS ile geliştirilmiş CRUD todo uygulaması.

## Özellikler

- ✅ Görev ekleme (Create)
- 📋 Görev listeleme ve filtreleme (Read)
- ✏️ Görev düzenleme (Update)
- 🗑️ Görev silme (Delete)
- 🎯 Öncelik seviyeleri (Düşük / Orta / Yüksek)
- 📊 İlerleme çubuğu

## Proje Yapısı

```
src/
├── components/      # Yeniden kullanılabilir UI bileşenleri
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Navbar.tsx
│   ├── PriorityBadge.tsx
│   ├── TodoCard.tsx
│   └── TodoForm.tsx
├── pages/           # Sayfa bileşenleri
│   └── Home.tsx
├── interfaces/      # TypeScript tip tanımlamaları
│   └── Todo.ts
├── App.tsx
└── index.tsx
```

## Kullanılan Teknolojiler

- **ReactJS** (v18)
- **TypeScript**
- **Tailwind CSS** (v3)
- **Google Fonts** – Syne + DM Sans

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm start

# Production build
npm run build
```

## Netlify Deploy

`npm run build` çıktısındaki `build/` klasörünü Netlify'a sürükle-bırak ile yükle,  
ya da GitHub repo'yu Netlify'a bağla → Build command: `npm run build`, Publish directory: `build`

## Ekran Görüntüsü

![Todo App](screenshot.png)
