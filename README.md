# FKM Karlova Ves — web (Astro + Keystatic)

Toto je TVOJ pôvodný web, prerobený do Astro + Keystatic:
- dizajn 1:1 (tvoje vlastné styles.css, main.js, obrázky)
- header, mobilné menu a pätička sú už len na JEDNOM mieste (žiadne duplicity)
- stránky kategórií U6–U19 sú jedna spoločná šablóna + dáta (a majú konečne
  správne názvy — pôvodne všade chybne svietilo „U10")
- CMS Keystatic na editáciu

================================================================
DÔLEŽITÉ — adresa
================================================================
Tento web je postavený pre KOREŇ domény (tak, ako pobeží na finálnom
serveri klubu, napr. www.fkmkvba.sk). Cesty k súborom sú typu /styles.css.

Na bezplatné PREVIEW cez GitHub Pages ho preto nasaď ako KOREŇOVÝ web:
repozitár pomenuj  thevilo.github.io  → web pôjde na https://thevilo.github.io/
(NIE do podpriečinka ako /karlova-ves/, tam by sa pokazili cesty.)

================================================================
1) Spustenie na počítači (voliteľné, na úpravy cez CMS)
================================================================
    npm install
    npm run dev
Web: http://localhost:4321
CMS: http://localhost:4321/keystatic   (editácia kategórií)

================================================================
2) Editácia textov
================================================================
- Kategórie (názvy): cez CMS na /keystatic, alebo v súboroch
  src/content/kategorie/*.json
- Ostatné texty (úvod, o klube, nábor, tábory, novinky): zatiaľ priamo
  v súboroch src/content/pages/*.html (obyčajný text medzi značkami).
  Tieto sa dajú tiež pridať do CMS — povedz a dorobím.

================================================================
3) Nasadenie zadarmo (GitHub Pages, cez prehliadač)
================================================================
1. Vytvor repozitár pomenovaný  thevilo.github.io
2. Nahraj doň obsah tohto priečinka (Add file → Upload files).
   Skrytý priečinok .github sa nenahrá ťahaním — súbor
   .github/workflows/deploy.yml vytvor cez Add file → Create new file
   (názov aj obsah skopíruj z tohto projektu).
3. Settings → Pages → Source = GitHub Actions.
4. Actions → počkaj na zelenú fajku → web je na https://thevilo.github.io/

================================================================
4) Presun na server klubu (neskôr)
================================================================
Spusti `npm run build` → vznikne priečinok `dist/` so statickým webom.
Jeho obsah nahráš na hosting/server klubu (cez doménu fkmkvba.sk).
Keďže je to koreňový web, cesty budú sedieť.

================================================================
Poznámky
================================================================
- Stránka „Muži" je ponechaná samostatne (mala iný obsah než ostatné).
- Pridal som chýbajúcu stránku Kontakt (v menu naň viedol odkaz, ale
  súbor neexistoval).
- Hero obrázok (karlovka-hero-image.png) má ~10 MB — pri prenose na server
  ho odporúčam zmenšiť/skomprimovať, web sa tým výrazne zrýchli.
