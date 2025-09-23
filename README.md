# Flutter Guide — Interactive Documentation of Flutter Widgets

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md) [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-brightgreen)](https://gabriiivale007.github.io/Flutter-Guide/)

An interactive guide to the main Flutter widgets. This project is a static Single Page App (HTML/CSS/JS) with instant search, syntax-highlighted code examples, and convenient section navigation.

> Repository: `gabriiivale007/Flutter-Guide` • Publish folder: `docs/`

## 📸 Preview

![Widget Overview](./flutter_widgets.png)

![Stateless vs Stateful Comparison](./flutter_comparison.png)

If GitHub Pages is enabled for this repository, the preview will be available at:

- [https://gabriiivale007.github.io/Flutter-Guide/](https://gabriiivale007.github.io/Flutter-Guide/)

## ✨ Features

- Instant search for widgets and attributes (full-text search on key elements)  
- Sidebar navigation by category with breadcrumbs  
- Widget sections dynamically generated from `app.js`  
- Copy-ready code examples with a **Copy** button  
- Syntax highlighting via Prism.js (CDN)  
- Responsive design and dark mode support (`prefers-color-scheme`)  

## 🗂️ Project Structure

```
docs/
    index.html       # Main page (layout, sidebar, introductory sections)
    app.js           # Logic: widget data, search, section generation, UI
    style.css        # Modern styles with CSS variables + dark mode
    flutter_widgets.(png|svg)
    flutter_comparison.(png|svg)
    README.md        # This file
    LICENSE.md       # License file
```

## 🧩 Adding a New Widget

Widget content is defined in `docs/app.js` inside the `widgetData` object.

1) Add a new key (slug) with the following structure:

```js
// In app.js
const widgetData = {
    // ...existing,
    mywidget: {
        name: 'MyWidget',
        category: 'Category',
        description: 'Short description of the widget',
        attributes: {
            'prop1': 'Description of prop1',
            'prop2': 'Description of prop2',
        },
        example: `// Usage example
MyWidget(
    prop1: 'value',
)`,
        tips: [
            'Tip 1',
            'Tip 2',
        ]
    }
};
```

2) Add the link in the sidebar in `docs/index.html` under the appropriate section:

```html
<!-- Inside <nav class="sidebar-nav"> -->
<li><a href="#mywidget" data-section="mywidget">MyWidget</a></li>
```

The page will automatically generate the detailed section (attributes table, example, tips) based on the data provided.

## 🎨 Style Customization

- Edit CSS tokens and variables in `docs/style.css` (the `:root` block and dark mode media query) to adjust colors, spacing, and typography.  
- Dark mode follows `prefers-color-scheme`; you can also force a theme by applying `data-color-scheme="light|dark"` on the `<html>` element.  
- Code syntax uses Prism.js (theme **tomorrow** via CDN) defined in `index.html`.

## 🔧 Dependencies

- Prism.js via CDN for code highlighting  
- Google Fonts (Roboto, Roboto Mono) via CDN  
- No build tools required: it’s a pure static site  

## 🤝 Contributing

Contributions, suggestions, and fixes are welcome. Open an **Issue** or **Pull Request** clearly describing the proposed change.  

---

Author: @gabriiivale007

