# Emmetify CSS

> **Style at the speed of thought.** A lightweight, zero-dependency CSS framework powered by pure Emmet shorthand syntax and modern CSS primitives.

If you already write Emmet abbreviations in your code editor, you already know 90% of Emmetify CSS. No arbitrary class vocabularies, no heavy JavaScript runtimes, and no specificity wars.

---

## Why Emmetify?

* **Zero Learning Curve:** If you know `display: flex;` is `df` in Emmet, your class is `df`. If `font-size: 16px;` is `fz16`, your class is `fz16`.
* **Ultra Lightweight:** **~16.9 kB** minified (~3.5 kB gzipped). Over 90% smaller than traditional CSS frameworks.
* **Modern CSS Architecture:** Built entirely on native CSS `@layer` (reset, tokens, layout, utilities, components, animations), logical properties (`margin-inline`, `margin-block`), and CSS container-ready rules.
* **No Specificity Wars:** Utilities reliably override component defaults without sprinkling `!important` across your code.
* **Sub-Millisecond Pipeline:** Bundled with Rust-powered **LightningCSS** for blazing build and watch speeds (~10ms rebuilds).

---

## Quickstart

### 1. Direct `<link>` (Zero Setup)

Download or copy `dist/emmetify.min.css` directly into your project and link it in your `<head>`:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Emmetify Quickstart</title>
  <link rel="stylesheet" href="./dist/emmetify.min.css">
</head>
<body class="p16">

  <!-- Centered responsive container & gap-based grid -->
  <main class="container">
    <div class="row">
      <div class="col-12 col-@md-6 col-@lg-4">
        <h1 class="fz30 fw700 c">Welcome to Emmetify</h1>
        <p class="fz16 c-b mt8">Style layout and components using pure muscle memory.</p>
      </div>

      <div class="col-12 col-@md-4">
        <div class="p16 bgc br8 c-w tac">
          <p class="fz14 fw600">Sidebar Widget</p>
        </div>
      </div>
    </div>
  </main>

</body>
</html>

```

### 2. Clone & Build from Source

```bash
git clone https://github.com/your-username/emmetify-css.git
cd emmetify-css
npm install
npm run build

```

* `npm run build` — Compiles and minifies source into `/dist` with full source maps.
* `npm run watch` — Watches `emmetify/` and hot-rebuilds changes instantaneously.

---

## The Syntax Rulebook

Emmetify strictly maps to **official Emmet property expansion behavior**:

1. **Direct Numeric Binding (Positive Values):** Numbers attach directly to property abbreviations without hyphens.
* `fz16` → `font-size: 1rem;` (16px)
* `fw700` → `font-weight: 700;`
* `p16` → `padding: 1rem;`
* `br8` → `border-radius: 8px;`


2. **Hyphens Reserved for Negative Offsets:** Following Emmet rules, hyphens indicate negative numeric values.
* `mt-16` → `margin-top: -1rem;`
* `m-8` → `margin: -0.5rem;`


3. **Direct Emmet Property Abbreviations:**
* `df` (`display: flex;`) | `dg` (`display: grid;`) | `db` (`display: block;`) | `dn` (`display: none;`)
* `posa` (`position: absolute;`) | `posr` (`position: relative;`) | `posst` (`position: sticky;`)
* `aic` (`align-items: center;`) | `jcsb` (`justify-content: space-between;`) | `jcc` (`justify-content: center;`)



---

## Quick Reference

### Layout & Flexbox

| Class | CSS Output |
| --- | --- |
| `df` / `dg` / `db` / `dn` | `display: flex / grid / block / none;` |
| `fxdr` / `fxdc` | `flex-direction: row / column;` |
| `fxww` / `fxwnw` | `flex-wrap: wrap / nowrap;` |
| `aic` / `aifs` / `aife` | `align-items: center / flex-start / flex-end;` |
| `jcc` / `jcsb` / `jcsa` | `justify-content: center / space-between / space-around;` |
| `g0`, `g4`, `g8`, `g16`, `g24`, `g32` | `gap: [value];` |

### Responsive Grid System

Emmetify includes a clean 12-column flexbox grid powered by native `gap`:

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-@md-6 col-@lg-4">Column 1</div>
    <div class="col-12 col-@md-6 col-@lg-4">Column 2</div>
    <div class="col-12 col-@md-12 col-@lg-4">Column 3</div>
  </div>
</div>

```

* Breakpoints use standard modern range syntax: `sm` (576px), `md` (768px), `lg` (992px).

### Spacing (Margin & Padding)

* **All sides:** `m0`, `m4`, `m8`, `m16`, `m24`, `m32` / `p0`, `p4`, `p8`, `p16`, `p24`, `p32`
* **Horizontal (Inline):** `mx-a` (`margin-inline: auto;`), `mx8`, `mx16`, `px8`, `px16`
* **Vertical (Block):** `my8`, `my16`, `my24`, `py8`, `py16`, `py24`
* **Directional:** `mt16`, `mb24`, `pt8`, `pb16`
* **Negative:** `m-8`, `m-16`, `mt-8`, `mt-16`

### Typography

* **Font Size:** `fz10`, `fz12`, `fz14`, `fz16`, `fz18`, `fz20`, `fz24`, `fz30`, `fz36`, `fz48`, `fz60`, `fz72`
* **Font Weight:** `fw300`, `fw400`, `fw500`, `fw600`, `fw700`, `fw800`, `fw900`
* **Alignment:** `tal` (left), `tac` (center), `tar` (right), `taj` (justify)
* **Transformation:** `ttu` (uppercase), `ttl` (lowercase), `ttc` (capitalize)
* **Decoration:** `tdn` (none), `tdu` (underline), `tdl` (line-through)

### Colors & Depth

* **Backgrounds:** `bgc` (primary), `bgc-g` (gray-100), `bgc-w` (white), `bgc-b` (black), `bgcv` (transparent)
* **Text Colors:** `c` (primary), `c-g` (gray-500), `c-w` (white), `c-b` (black)
* **Borders & Radii:** `bd` (1px solid), `bn` (none), `bw1`, `bw2`, `br4`, `br8`, `br50p` (circle)
* **Shadows:** `bxshd-sm`, `bxshd-md`, `bxshd-lg`, `bxshd-soft`, `bxshd-neon`, `bxshd-inset`

### Media & Images

* **Responsive Media:** `media` wrapper with native `object-fit: cover`
* **Object Fit & Position:** `objf-c` (cover), `objf-ca` (contain), `objp-c` (center), `objp-t` (top)
* **Aspect Ratios:** `ar1-1`, `ar16-9`, `ar4-3`, `ar9-16`
* **Avatars:** `avatar-sm` (32px), `avatar-md` (48px), `avatar-lg` (64px)

---

## Example: The "Double Emmet" Workflow

Because Emmetify matches your editor's abbreviations, you can generate fully styled components in your code editor with a single line of Emmet markup expansion.

**Type this into your HTML file:**

```text
div.container.py16>div.df.aic.jcsb.p16.bgc.br8.c-w>div.df.aic.g16>img.avatar-md.ar1-1.objf-c[src="avatar.jpg"]+div>h3.fz18.fw700.c-b{Jane Doe}+p.fz14.c-g{Product Designer}^^button.cu.p8.px16.bgc.c-w.br4.bn.fw600{Connect}

```

**Press `Tab` — instantly expanded and fully styled:**

```html
<div class="container py16">
  <div class="df aic jcsb p16 bgc br8 c-w">
    <div class="df aic g16">
      <img src="avatar.jpg" alt="" class="avatar-md ar1-1 objf-c">
      <div>
        <h3 class="fz18 fw700 c-b">Jane Doe</h3>
        <p class="fz14 c-g">Product Designer</p>
      </div>
    </div>
    <button class="cu p8 px16 bgc c-w br4 bn fw600">Connect</button>
  </div>
</div>

```

---

## Source Directory Layout

```text
emmetify/
├── emmetify.css              /* Master entry point with @layer definitions */
├── core/
│   ├── reset.css             /* Modern 0-margin element reset & media defaults */
│   └── tokens.css            /* Custom properties (colors, scales, gutters) */
├── utilities/
│   ├── display.css           /* db, di, dib, df, dg, dn */
│   ├── position.css          /* posa, posr, posst, t0, l0, zi* */
│   ├── flexbox-grid.css      /* aic, jcsb, gap, 12-col layout engine */
│   ├── spacing.css           /* m*, p*, mx*, my*, negative scales */
│   ├── typography.css        /* fz*, fw*, tal, tac, ttu */
│   ├── borders.css           /* bd*, bw*, br* */
│   └── effects.css           /* bxshd-*, op*, colors */
├── components/
│   └── media.css             /* img-fluid, objf-*, ar*, avatar-* */
└── modules/
    └── animations.css        /* keyframes & anim-* triggers */

```

---

## Contributing

Contributions are welcome! If you find a missing standard Emmet property abbreviation or want to suggest improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/add-missing-shorthand`)
3. Commit your changes (`git commit -m 'feat: add text-overflow and white-space utilities'`)
4. Push to the branch (`git push origin feature/add-missing-shorthand`)
5. Open a Pull Request

---

## License

MIT © Emmetify CSS
