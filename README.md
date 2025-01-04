# Emmetify CSS

Emmetify CSS is a lightweight framework that leverages Emmet-style abbreviations to streamline and accelerate your CSS development. It offers a fast and intuitive way to style your web pages, especially for rapid prototyping and development. It also offers a grid system similar to Bootstrap.

## Key Features

- **Lightning Fast:** Emmetify CSS prioritizes a minimal footprint for optimal performance.
- **Emmet-Based Syntax:** Use familiar Emmet abbreviations as class names for quick and intuitive styling.
- **Rapid Prototyping:** Build layouts and style elements with minimal code, speeding up your development workflow.
- **Grid System:** Create responsive layouts with a flexible grid system, similar to Bootstrap's grid.

## Getting Started
To start using Emmetify CSS, include the Emmetify CSS link in your HTML file just like you would with Bootstrap:

### Usage

Apply Emmetify CSS class names directly to your HTML elements.

### Example
```markdown
<div class="container">
    <div class="row">
        <div class="col col-md-12">
            <div class="tac m160">
                <div class="tac">
                    <h1 class="h1 p20">Welcome to Emmetify CSS</h1>
                </div>
                <div class="tac">
                    <p>Emmetify CSS is a lightweight framework that leverages Emmet-style abbreviations to streamline and accelerate your CSS development.</p>
                </div>
                <div class="tac mt16">
                    <a href="#"><span class="btnr mx8">Explore features</span></a>
                    <a href="#"><span class="btnr mx8">Get started</span></a>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Explanation of Emmetify CSS Classes in the Example:

- **tac:** `text-align: center;`
- **m160:** `margin-top: 160px;` (or potentially `margin: 160px;` if it's shorthand for all sides)
- **h1:** Styles a heading 1 element (e.g., font-size, font-weight).
- **p20:** `padding: 20px;`
- **mt16:** `margin-top: 16px;`
- **btnr:** Styles a button with rounded corners (e.g., border-radius).
- **mx8:** `margin-left: 8px; margin-right: 8px;` (margin on the x-axis)
- **container, row, col col-md-12:** These classes suggest a Bootstrap-like grid system. `col-md-12` likely means the column spans 12 columns on medium screens and up.

### Contributing
Emmetify CSS is an ongoing project and we welcome contributions! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request. Your feedback and contributions are highly appreciated.
