# hilite2ai

**Make any website AI-ready in seconds.** A lightweight JavaScript library that lets users highlight text and copy contextual prompts to their favorite AI assistant.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/RobinNixon/hilite2ai)

## 🚀 Quick Start

Add one line to your website:

```html
<script src="https://cdn.jsdelivr.net/gh/RobinNixon/hilite2ai@1.0.0/hilite2ai.js"></script>
```

That's it! Users can now:
1. **Highlight** any text on your page
2. **Click** the "🤖 Copy to AI for details" button
3. **Paste** into Claude, ChatGPT, Gemini, or any AI tool

## ✨ Features

- **Zero dependencies** - Pure vanilla JavaScript
- **Tiny footprint** - ~3KB minified
- **Zero configuration** - Works out of the box
- **AI-agnostic** - Works with any AI assistant
- **Privacy-first** - No data sent to external servers
- **Mobile-friendly** - Responsive design
- **Accessible** - Keyboard navigation support

## 📋 What Gets Copied

When users click the button, a structured prompt is copied to their clipboard:

```
Message created via hilite2ai.com

I am viewing:

 • Source: https://example.com/article.html
 • Title: Understanding Machine Learning
 • Section: Neural Networks

Please explain: "backpropagation algorithm"
```

This gives AI assistants complete context for better, more relevant answers.

## 🎨 Optional: Add a Notice Banner

Want to let users know your site is AI-enhanced? Add this div anywhere on your page:

```html
<div id="hilite2ai"></div>
<script src="https://cdn.jsdelivr.net/gh/yourusername/hilite2ai@1.0.0/hilite2ai.js"></script>
```

The script will automatically populate it with a beautiful, dismissible banner.

## 💡 Why Use This?

### For Website Owners
- ✅ **Enhance learning** - Help readers understand complex content
- ✅ **Zero cost** - No API fees, no backend needed
- ✅ **User choice** - Visitors use their preferred AI
- ✅ **Future-proof** - Works with emerging browser AI features
- ✅ **Easy integration** - One script tag, done

### For Users
- ✅ **Contextual help** - AI sees source, title, and section
- ✅ **Any AI works** - Use Claude, ChatGPT, Gemini, local LLMs
- ✅ **Keyboard friendly** - Copy works with Ctrl+C too
- ✅ **Mobile support** - Works on all devices

## 🔧 Advanced Usage

### Self-Hosting

Download `hilite2ai.js` and host it yourself:

```html
<script src="/path/to/hilite2ai.js"></script>
```

### Customization

The script uses CSS classes you can override:

```css
.ai-copy-button {
  /* Customize the copy button */
  background: #your-color !important;
}

.hilite2ai-notice {
  /* Customize the notice banner */
  position: relative; /* Change from fixed to inline */
}
```

### Version Pinning

Use a specific version to prevent breaking changes:

```html
<script src="https://cdn.jsdelivr.net/gh/yourusername/hilite2ai@1.0.0/hilite2ai.js"></script>
```

Or always get the latest:

```html
<script src="https://cdn.jsdelivr.net/gh/yourusername/hilite2ai@latest/hilite2ai.js"></script>
```

## 🌐 Browser Support

Works in all modern browsers:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Requirements:**
- `navigator.clipboard` API (HTTPS required)
- ES6 support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development

1. Clone the repo
```bash
git clone https://github.com/yourusername/hilite2ai.git
```

2. Make changes to `hilite2ai.js`

3. Test locally by opening `demo.html` in a browser

4. Submit a PR!

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Credits

Created by [Robin Nixon](https://github.com/yourusername) to make web content more accessible and AI-ready.

Inspired by the future of browser-native AI assistance.

## 🔮 Future Vision

As AI becomes integrated into browsers, this pattern will evolve. The structured prompt format is designed to be:
- **Machine-readable** for future browser AI hooks
- **Standardized** for potential web standards
- **Extensible** for new interaction patterns

## 📞 Support

- 🐛 **Bug reports**: [GitHub Issues](https://github.com/yourusername/hilite2ai/issues)
- 💬 **Questions**: [GitHub Discussions](https://github.com/yourusername/hilite2ai/discussions)
- 🌐 **Website**: [hilite2ai.com](https://hilite2ai.com)

---

**Make your website AI-ready today!** ⚡
