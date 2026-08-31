# ⚡ Quick Start - 5 Minut do Života

## Za Nestrpljive (samo suština)

### 1️⃣ GitHub
- Kreiraj GitHub račun (besplatan)
- New Repo → `lista-zelji-rodjestan` → Public → Create

### 2️⃣ Učitaj Fajlove
Kopaj sve fajlove iz ovog foldera u svoj repozitorijum:
```
app/
  - layout.js
  - page.js
  - globals.css
package.json
next.config.js
tailwind.config.js
postcss.config.js
.gitignore
```

### 3️⃣ Vercel
1. Idi na [vercel.com](https://vercel.com)
2. Sign Up → Continue with GitHub
3. New Project → Odaberi repo → Deploy

### 4️⃣ DONE! 
Dobio si link! Pošalji ga svima 🎉

---

## Uredi Stavke

1. Otvori `app/page.js`
2. Nađi `const [items, setItems] = useState([`
3. Promijeni stavke:

```javascript
{
  id: 1,
  name: 'Tvoja stavka',
  link: 'https://link.com',
  purchasedBy: null,
  category: 'Tip'
},
```

4. Spremi i `git push` - Vercel redeploy-uje automatski!

---

Gotovo! 🎁

Detalji? Vidi `DEPLOYMENT.md` ili `README.md`
