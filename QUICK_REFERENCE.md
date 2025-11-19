# hilite2ai Quick Reference

## 🚀 Basic Usage

```html
<!-- Add to any webpage -->
<script src="https://cdn.jsdelivr.net/gh/YourUsername/hilite2ai@1.0.0/hilite2ai.js"></script>
```

## 🎨 With Notification Banner

```html
<!-- Show users the feature -->
<div id="hilite2ai"></div>
<script src="https://cdn.jsdelivr.net/gh/YourUsername/hilite2ai@1.0.0/hilite2ai.js"></script>
```

## 📝 What Users Get

When highlighting text, they get a formatted prompt like:

```
Message created via hilite2ai.com

I am viewing:

 • Source: https://example.com/article.html
 • Title: Understanding Neural Networks
 • Section: Backpropagation

Please explain: "gradient descent algorithm"
```

## 🎯 For Users

1. **Highlight** any text on the page
2. **Click** the "🤖 Copy to AI for details" button
3. **Paste** into Claude, ChatGPT, Gemini, or any AI

## 🔧 For Developers

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- All modern mobile browsers

### Requirements
- HTTPS (for clipboard API)
- Modern browser with ES6 support

### File Size
- Unminified: ~3KB
- Includes all CSS
- Zero dependencies

## 🎨 Customization

Override default styles:

```css
.ai-copy-button {
  background: #your-brand-color !important;
}

.hilite2ai-notice {
  /* Customize banner */
}
```

## 📦 CDN Options

**Specific version (stable):**
```html
<script src="https://cdn.jsdelivr.net/gh/YourUsername/hilite2ai@1.0.0/hilite2ai.js"></script>
```

**Latest version (auto-update):**
```html
<script src="https://cdn.jsdelivr.net/gh/YourUsername/hilite2ai@latest/hilite2ai.js"></script>
```

## 🐛 Troubleshooting

**Button not appearing?**
- Check console for errors
- Verify HTTPS (required for clipboard)
- Ensure script loaded successfully

**Button appears but copy fails?**
- Browser must support `navigator.clipboard`
- Site must be served over HTTPS
- Check browser console for errors

**Banner not showing?**
- Verify `<div id="hilite2ai"></div>` exists
- Check that script runs after div is in DOM
- Use browser dev tools to inspect element

## 📊 Stats & Analytics

**GitHub Stats:**
- Stars, forks, issues at github.com/YourUsername/hilite2ai

**CDN Stats:**
- Usage at jsdelivr.com/package/gh/YourUsername/hilite2ai

## 🤝 Contributing

Found a bug or have an idea?
- Open an issue: github.com/YourUsername/hilite2ai/issues
- Submit a PR: See CONTRIBUTING.md
- Start a discussion: github.com/YourUsername/hilite2ai/discussions

## 📄 License

MIT License - Free for personal and commercial use

## 🌐 Links

- **Website**: hilite2ai.com
- **GitHub**: github.com/YourUsername/hilite2ai
- **Demo**: github.com/YourUsername/hilite2ai/demo.html
- **CDN**: cdn.jsdelivr.net/gh/YourUsername/hilite2ai

## 💡 Use Cases

- Educational websites
- Technical documentation
- Blog posts with complex topics
- Research papers
- API documentation
- Tutorial sites
- News articles
- E-learning platforms

## 🎯 Best Practices

1. Place script tag at end of `<body>` for faster page load
2. Use version pinning in production (`@1.0.0` not `@latest`)
3. Test across browsers before deploying
4. Consider showing the notification banner on first visit
5. Use semantic HTML (headings, sections) for better context

---

**Questions?** Check README.md or open an issue on GitHub!
