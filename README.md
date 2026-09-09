# The Rooftop Side Effect

A static, GitHub Pages-ready microsite for Pristine Properties.

## What is included

- Elevator-inspired landing experience
- Fixed lift-button progress panel
- 7-question Rooftop Side Effect diagnostic
- Randomised point allocation across A/B/C by question
- "Symptom detected" interaction after every answer
- Generated elevator ding using the browser Web Audio API
- Only HIGH or SEVERE results
- 74–98% visible Rooftop Side Effect score
- Final elevator-door analysis transition
- Share button using the Web Share API, with clipboard fallback
- Downloadable 1080 × 1920 diagnosis share card
- Responsive desktop/mobile layout
- Project-specific result content using URL parameters

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, and `script.js` to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`.
7. Save. GitHub will generate the public Pages URL.

## Project variants

The same build supports different project result cards.

Default:
`https://YOUR-USERNAME.github.io/YOUR-REPO/`

YOO Pristine:
`https://YOUR-USERNAME.github.io/YOUR-REPO/?project=yoo`

Pristine Kyra:
`https://YOUR-USERNAME.github.io/YOUR-REPO/?project=kyra`

Generic Pristine:
`https://YOUR-USERNAME.github.io/YOUR-REPO/?project=pristine`

## Change the project CTA URLs

Open `script.js` and edit the `cta` value inside the `PROJECTS` object.

Example:

```js
yoo: {
  ...
  cta: "https://example.com/yoo-pristine"
}
```

## Change questions / scoring

All questions live at the top of `script.js` inside `QUESTIONS`.

Each option contains:

```js
{
  label: "Answer copy",
  points: 3,
  symptom: "Symptom name",
  note: "Short symptom explanation"
}
```

Keep all option scores between 2 and 4 if you want to preserve the current score logic.

## Current score logic

Raw possible score:
- Minimum: 14
- Maximum: 28

Result:
- 14–20 = HIGH
- 21–28 = SEVERE

Visible score:
- Raw scores are mapped to 74–98%

No possible answer path produces a LOW or NEGATIVE diagnosis.

## Notes before final production

- Replace the text-based Pristine brand lockup with the approved logo asset if required.
- Replace `#` CTA links in `PROJECTS` with live project URLs.
- Add legal contest terms before running the giveaway publicly.
- The fictional-condition disclaimer is already present in the footer.
