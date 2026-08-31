# 🎁 Moja Lista Želja za Rodjestan

Jednostavan i lijepo dizajniran website za prezentaciju liste želja.

## Što je Uključeno

- ✨ Responzivan grid dizajn
- 💝 Mogućnost da se stavke označe kao kupljene
- 🎨 Modern dizajn sa gradijentima
- 🔗 Direktni linkovi do proizvoda
- 📱 Mobilno optimizovano

## Brz Setup (3 koraka)

### 1. Kreiraj GitHub repozitorijum

```bash
# Kloniraj ili kreiraj novi folder
mkdir moja-lista-zelji
cd moja-lista-zelji

# Inicijalizuj Git
git init
git add .
git commit -m "Initial commit"
```

### 2. Kreiraj Next.js projekt

Kreiraj fajl `package.json`:

```json
{
  "name": "lista-zelji",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "lucide-react": "^0.263.1"
  }
}
```

Kreiraj folder strukturu:
```
moja-lista-zelji/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── package.json
└── next.config.js
```

### 3. Postavi na Vercel

**Opcija A: Via Web (Najjednostavnije)**

1. Push kod na GitHub
2. Idi na [vercel.com](https://vercel.com)
3. Klikni "New Project"
4. Konektuj GitHub račun
5. Odaberi repozitorijum
6. Klikni "Deploy"

**Opcija B: Via CLI**

```bash
npm install -g vercel
vercel
# Slijedi upustva na ekranu
```

## Kako Editujem Listu?

Otvori `app/page.js` i uredi `useState` sa tvojim stavkama:

```javascript
const [items, setItems] = useState([
  {
    id: 1,
    name: 'Tvoja stavka',
    link: 'https://primer.com',
    purchasedBy: null,  // null ako nije kupljena, inače "Ime osobe"
    category: 'Kategorija'
  },
  // Dodaj sve što želiš...
]);
```

## Funkcionalnosti

- **Označavanje kao kupljeno** - Klikni "Kupi me!" da označiš stavku
- **Sve je local** - Bez baze podataka, sve radi direktno u browseru
- **Lako za prosljeđivanje** - Samo pošalji link prijateljima i porodici

## Savjet

Ako želiš da se kupljene stavke trajno čuvaju, možeš dodati:
- LocalStorage (sprema se u browser)
- Supabase ili Firebase (sprema se online)

Za sad, svaki put kad se osvježi stranica, sve se resetuje na početak.

---

Uživaj u rodjestanu! 🎉🎂
