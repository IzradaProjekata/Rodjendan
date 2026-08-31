# 🚀 Kako Postaviti na Vercel

Evo korak-po-korak instrukcija. Trebat će ti **5 minuta**.

## Što Trebaš

- GitHub račun (besplatan na github.com)
- Vercel račun (besplatan na vercel.com)
- Node.js instaliran na računalu (optional, samo ako testiraš lokalno)

## Korak 1: Kreiraj GitHub Repozitorijum

1. Idi na [github.com/new](https://github.com/new)
2. Kreiraj novi repozitorijum:
   - **Repository name**: `lista-zelji-rodjestan`
   - Odaberi "Public"
   - Klikni "Create repository"

3. Na novoj stranici, vidiš instrukcije. Otvor terminal i uradi:

```bash
# Kreiraj folder
mkdir lista-zelji-rodjestan
cd lista-zelji-rodjestan

# Inicijalizuj git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TVOJE_KORISNICKO_IME/lista-zelji-rodjestan.git
git push -u origin main
```

*(Zamijeni `TVOJE_KORISNICKO_IME` sa stvarnim GitHub korisničkim imenom)*

## Korak 2: Dodaj sve Fajlove

Svi fajlovi koje sam kreiram trebaju biti u tom folderu:

```
lista-zelji-rodjestan/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

Kreiraj `.gitignore` fajl sa:
```
node_modules/
.next/
*.log
.env.local
.DS_Store
```

## Korak 3: Push na GitHub

```bash
git add .
git commit -m "Add wishlist project"
git push origin main
```

## Korak 4: Deploy na Vercel

### Opcija A: Kroz Web (PREPORUČENO)

1. Idi na [vercel.com](https://vercel.com)
2. Klikni "Sign Up" ili "Log In"
3. Odaberi "Continue with GitHub"
4. Autoriziraj Vercel pristup GitHub-u
5. Klikni "New Project"
6. Odaberi `lista-zelji-rodjestan` repozitorijum
7. Klikni "Import"
8. **Framework**: Next.js (trebao bi da se auto-detektuje)
9. Klikni "Deploy"

**To je to! Čekaj 2-3 minuta i tvoj site je živ!** 🎉

### Opcija B: Kroz Terminal

```bash
npm install -g vercel
vercel login
# Slijedi instrukcije
vercel
```

## Korak 5: Pristupi svojoj Stranici

Vercel će ti dati URL kao:
```
https://lista-zelji-rodjestan.vercel.app
```

Pošalji link prijateljima i porodici!

## Kako Promijeniti Stavke

Trebalo bi:

1. Otvori `app/page.js` u editoru (VS Code preporučujem)
2. Nađi `const [items, setItems] = useState([...])`
3. Uredi stavke:

```javascript
{
  id: 1,
  name: 'Naziv proizvoda',
  link: 'https://link-do-proizvoda.com',
  purchasedBy: null,  // null = nije kupljena, ili 'Ime osobe'
  category: 'Elektronika' // Premijeni sa bilo čim
},
```

4. Spremi fajl
5. Uradi:
```bash
git add app/page.js
git commit -m "Update wishlist items"
git push origin main
```

6. Vercel će se automatski redeploy-ati! (čekaj 1-2 minuta)

## Savjeti

**Dodaj Lipu Sličicu** (favicon)

1. Kreiraj `public/` folder
2. Dodaj `favicon.ico` fajl
3. Update `layout.js`:

```javascript
export const metadata = {
  title: 'Moja Lista Želja',
  icons: {
    icon: '/favicon.ico',
  }
}
```

**Promijeni Naslov**

U `layout.js`:
```javascript
export const metadata = {
  title: 'Moja Lista Želja - [Tvoje Ime]',
  description: 'Popis mojih željenih poklona za rodjestan',
}
```

---

## Ako Nešto Ide Po Zlu

### "Deployment je Failed"
- Provjeri jesu li svi fajlovi pravilno strukturirani
- Provjeri `package.json` - trebalo bi biti `next` verzija 14+

### "Stranicu Vidim ali Nije Lijepa"
- Čekaj 2-3 minuta da se CSS učita
- Osvježi stranicu (Ctrl+F5 ili Cmd+Shift+R)

### "Linković ne Radi"
- Provjeri jesu li linkovi pravilno formatirani
- Trebalo bi: `https://www.example.com`

---

**Sretno! 🎉🎁**

Bilo šta nije jasno? Probaj ponovo ili pozovi za pomoć!
