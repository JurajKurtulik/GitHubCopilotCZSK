# Pohyb prezentace

Tato úprava zachovává viditelné texty, všech 21 scén, jejich pořadí, kompozici, typografii a značky. Animace jsou oddělené v `src/motion.css`; společné komponenty jsou v `src/motion.tsx` a `src/SharedLifecycle.tsx`.

- Pozadí zůstává připojené mezi scénami: modré světlo 22 s, fialové 31 s, mřížka 37 s a binární fragmenty 29 s. Šest částic má nízkou průhlednost a vlastní pomalé cykly.
- Přechod scén je souběžné prolínání po dobu 500 ms, s posunem maximálně 10 px a změnou měřítka 0,995–1.
- Úvod skládá původní obrazové vrstvy během přibližně 2 s. Následuje pohyb vrstev do 3 px, světelná linka a postupné zvýraznění NÁPAD → ŘEŠENÍ → DEPLOYMENT.
- SVG `DataPulse` sjednocuje občasné datové pakety. Běžný cyklus trvá 7–8,5 s a po průchodu obsahuje klidovou pauzu. Žádné React timery ani canvas.
- Orbit, modelová kritéria, vývoj schopností, propojení znalostí a nástrojů, Azure, dokumentace a obchodní tok mají odlišný významový pohyb. Otázky, ceny a závěr zůstávají klidné.
- Scény 13–14 mají stejný React klíč. `SharedLifecycle` se neodpojuje, zachovává geometrii a přesouvá zvýraznění z PoC na produkční přípravu. Detaily se objeví až po přesunu.
- `prefers-reduced-motion` vypne CSS smyčky, částice i SVG pakety. Framer Motion vynechá prostorové vstupy a ponechá krátké prolínání. Obsah a zvýraznění zůstanou dostupné.

Volitelné hover efekty přidávají jen světelné zvýraznění existujících symbolů. Nepřidávají nové texty ani obsah závislý na myši.


## Continuous motion refinement

Light packets now use normalized 100-unit SVG paths without non-scaling strokes, avoiding tiny repeated dots. Two visible segments run continuously with negative phase offsets and no hidden waiting phase. The hero adds two rotating light rings and four floating binary fragments. Ambient light, particles, node emphasis and layer drift are stronger while text stays readable.

Orbit markers use a dedicated class, so floating label spans cannot inherit dot dimensions. Infrastructure as Code stays on one desktop line and two mobile lines. Brain/context/tools uses a continuous straight gradient beam behind its circles. The shared lifecycle progress track grows from 20% to 40%, retaining steps 1 and 2 while focusing step 3. Reduced-motion preferences disable all continuous animation.

Validation: TypeScript and production build pass. Browser inspection verified nine orbit markers, single-line desktop labels, two-line mobile infrastructure label without horizontal overflow, straight brain connectors, and persistent lifecycle DOM with two/three active steps and 20%/40% progress.
