# Interactive Service Section 🎨

A stunning, interactive service showcase section with animated gradient backgrounds and smooth hover effects. Built with vanilla HTML, CSS, and JavaScript.

![Project Preview](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 🌈 **Animated Gradient Background** — 5 continuously moving color blobs creating a living gradient effect
- 🎯 **Interactive Hover Effects** — Smooth rectangle slide-ins, text transformations, and image reveals
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance Optimized** — Using CSS transforms and requestAnimationFrame for smooth 60fps animations
- 🎨 **Modern Design** — Bold typography, wide letter spacing, and vibrant color palette
- 🌊 **Smooth Scroll Behavior** — Entrance animations with Intersection Observer API

## 🚀 Demo

Visit the live demo: [View Demo](https://binitchoudhary.github.io/animation/)

Or run locally:

```bash
# Clone the repository
git clone https://github.com/binitchoudhary/animation.git

# Navigate to the project directory
cd animation

# Start a local server (choose one):

# Option 1: Using Node.js
npx -y http-server -p 8000

# Option 2: Using Python
python -m http.server 8000

# Option 3: Just double-click index.html
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
animation/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Interactive behaviors
├── hover-image.svg     # Hover effect image asset
└── README.md           # Project documentation
```

## 🎨 Design Features

### Animated Gradient Background

- **5 color blobs** with pink, purple, and magenta gradients
- Continuous motion using both CSS keyframes and JavaScript RAF
- Smooth sinusoidal movement patterns
- Blur effects for soft gradient transitions

### Service List

Five interactive service items:

- **BRANDING**
- **WEBDESIGN**
- **SOCIALMEDIA**
- **STRATEGY**
- **MEDIAPROD.**

### Hover Interactions

Each service item features:

- ✅ Colored rectangle that scales in from the right
- ✅ Text color transition to pure white
- ✅ Letter spacing increase (8px → 12px)
- ✅ Image reveal with scale animation
- ✅ Subtle parallax effect based on cursor position
- ✅ Smooth cubic-bezier easing

## 🛠️ Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Animations, gradients, transforms
- **JavaScript (ES6+)** — Interactive behaviors
- **Google Fonts** — Inter font family
- **Intersection Observer API** — Scroll-triggered animations
- **RequestAnimationFrame** — Smooth blob animations

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Adjustments                            |
| ---------- | ----------- | -------------------------------------- |
| Desktop    | > 768px     | Full-size text, generous spacing       |
| Tablet     | ≤ 768px     | Adjusted font sizes, smaller blobs     |
| Mobile     | ≤ 480px     | Compact layout, reduced letter spacing |

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🔧 Customization

### Change Animation Speed

In `script.js`, adjust the blob speed:

```javascript
speed: 0.003 + Math.random() * 0.004, // Increase for faster motion
```

### Modify Hover Colors

In `script.js`, customize the gradient colors:

```javascript
const hoverColors = [
  "linear-gradient(135deg, #yourColor1, #yourColor2)",
  "linear-gradient(135deg, #yourColor3, #yourColor4)",
  // Add more gradients...
];
```

### Adjust Service Text Size

In `style.css`, modify the font size:

```css
.service-text {
  font-size: clamp(36px, 5.5vw, 72px); /* min, preferred, max */
}
```

### Change Background Colors

In `style.css`, update blob gradients:

```css
.blob-1 {
  background: radial-gradient(circle, #yourColor1, #yourColor2);
}
```

## 📊 Performance

- **60 FPS animations** using CSS transforms and requestAnimationFrame
- **Optimized rendering** with `will-change` property
- **Efficient event handling** with event delegation
- **Lazy loading** with Intersection Observer for entrance animations

## 🎓 Learning Resources

This project demonstrates:

- CSS keyframe animations
- JavaScript requestAnimationFrame
- Intersection Observer API
- CSS transforms and transitions
- Responsive design techniques
- Event handling and delegation
- Modern JavaScript (ES6+)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Binit Choudhary**

- GitHub: [@binitchoudhary](https://github.com/binitchoudhary)
- Repository: [animation](https://github.com/binitchoudhary/animation)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📧 Contact

For any questions or suggestions, feel free to open an issue or reach out!

---

**Made with ❤️ and lots of gradients**
