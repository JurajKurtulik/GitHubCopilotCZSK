# GitHub Copilot: od nápadu k deploymentu

Česká interaktivní prezentace pro Microsoft partnery / SMB, TD SYNNEX CoE Microsoft. 21 scén podle finálního PowerPointu.

## Spuštění

Node.js 22 nebo novější.

```sh
npm install
npm run dev
```

## Produkční sestavení a lokální kontrola

```sh
npm run build
npm run preview
```

Vite vypíše adresu. Otevřete cestu `/GitHubCopilotCZSK/`. Produkční soubory vznikají v `dist/`.

## Ovládání

- Šipka vpravo, mezerník, PageDown: další snímek.
- Šipka vlevo, PageUp: předchozí snímek.
- Home / End: první / poslední snímek.
- F nebo tlačítko: přepnutí celé obrazovky. Esc ji opustí standardním chováním prohlížeče.
- Tečky vpravo: přímá volba snímku. Na dotykovém zařízení lze táhnout doleva či doprava.
- Adresa `#/slide/8` otevře konkrétní snímek a zachová se po obnovení stránky.

Na desktopu má scéna poměr 16:9. Na úzkých mobilních displejích lze delší scénu vnitřně posunout, vždy je otevřen pouze jeden snímek. Nastavení systému pro omezený pohyb vypíná ambientní animace a zjednodušuje přechody.

## GitHub Pages

V repozitáři **Settings → Pages → Build and deployment → Source** vyberte **GitHub Actions**. Workflow `.github/workflows/deploy.yml` sestaví a nasadí aplikaci po každém pushi do `main`; lze jej spustit také ručně v Actions.

Adresa: https://jurajkurtulik.github.io/GitHubCopilotCZSK/

Vite `base` je `/GitHubCopilotCZSK/`. Hashové adresy nepotřebují serverové přepisování. Při změně názvu repozitáře upravte `base` ve `vite.config.ts` a cestu k pozadí v CSS.

## Obsah a značky

Viditelné zdrojové texty jsou v `src/source.json`, kompozice v `src/Scenes.tsx`, styly v `src/styles.css`. Plán každého snímku je v `docs/implementation-plan.md`. Ceny a produktové údaje odpovídají dodané prezentaci, nejsou synchronizovány s online ceníkem. Snímek CSP zdůrazňuje hodnotu dodaného řešení podle zadání.

Logo TD SYNNEX, ikony a screenshoty pocházejí z dodaného PowerPointu. Zůstávají majetkem příslušných vlastníků. Poznámky řečníka a zdrojový PowerPoint se nepublikují.
