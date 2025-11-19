# Setup Guide for hilite2ai

This guide will help you publish hilite2ai to GitHub and make it available via CDN.

## 📦 Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `hilite2ai`
3. Description: `Make any website AI-ready with contextual prompts`
4. Choose: **Public** repository
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

## 🚀 Step 2: Push to GitHub

In your terminal (where the hilite2ai folder is):

```bash
cd hilite2ai
git init
git add .
git commit -m "Initial release v1.0.0"
git branch -M main
git remote add origin https://github.com/YourUsername/hilite2ai.git
git push -u origin main
```

Replace `YourUsername` with your actual GitHub username.

## 🏷️ Step 3: Create a Release

1. Go to your repository on GitHub
2. Click "Releases" (right sidebar)
3. Click "Create a new release"
4. Tag version: `1.0.0` (create new tag on publish)
5. Release title: `v1.0.0 - Initial Release`
6. Description:
   ```
   First stable release of hilite2ai!
   
   Features:
   - Text highlighting with contextual prompt generation
   - Optional notification banner
   - Zero dependencies, ~3KB
   - Works with all AI assistants
   
   Usage:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/YourUsername/hilite2ai@1.0.0/hilite2ai.js"></script>
   ```
   ```
7. Click "Publish release"

## 🌐 Step 4: CDN Access

Your script is now available via jsDelivr CDN:

**Specific version (recommended):**
```html
<script src="https://cdn.jsdelivr.net/gh/YourUsername/hilite2ai@1.0.0/hilite2ai.js"></script>
```

**Latest version (auto-updates):**
```html
<script src="https://cdn.jsdelivr.net/gh/YourUsername/hilite2ai@latest/hilite2ai.js"></script>
```

**Minified (after creating .min.js version):**
```html
<script src="https://cdn.jsdelivr.net/gh/YourUsername/hilite2ai@1.0.0/hilite2ai.min.js"></script>
```

## 🔄 Step 5: Update README Links

After creating the repository, update these URLs in README.md:

1. Replace `yourusername` with your GitHub username in all links
2. Update the version badge
3. Commit and push changes

## 📝 Step 6: Enable GitHub Features

1. **GitHub Pages** (optional for demo):
   - Settings → Pages
   - Source: Deploy from main branch
   - Folder: / (root)
   - Your demo will be at: `https://YourUsername.github.io/hilite2ai/demo.html`

2. **Discussions** (optional for community):
   - Settings → Features
   - Enable "Discussions"

3. **Issue Templates** (optional):
   - Create `.github/ISSUE_TEMPLATE/` folder
   - Add bug report and feature request templates

## 🎯 Step 7: Test the CDN

Create a simple test HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Testing hilite2ai CDN</title>
</head>
<body>
  <div id="hilite2ai"></div>
  
  <h1>Test Page</h1>
  <p>Highlight this text to test the script!</p>
  
  <script src="https://cdn.jsdelivr.net/gh/YourUsername/hilite2ai@1.0.0/hilite2ai.js"></script>
</body>
</html>
```

Open it in a browser and verify everything works!

## 📢 Step 8: Announce

Share your project:
- Tweet about it
- Post on Reddit (r/javascript, r/webdev)
- Share on Hacker News
- Update your personal website
- Add to your portfolio

## 🔧 Future Updates

When you make changes:

1. Update CHANGELOG.md
2. Update version in package.json
3. Commit changes
4. Create a new release with a new version number (e.g., 1.1.0)
5. jsDelivr will automatically serve the new version

## 📊 Analytics (Optional)

To track usage without compromising user privacy:

1. GitHub provides repository insights (stars, forks, traffic)
2. jsDelivr has public stats: `https://www.jsdelivr.com/package/gh/YourUsername/hilite2ai`

## ✅ Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] v1.0.0 release created
- [ ] CDN link tested and working
- [ ] README.md links updated with your username
- [ ] Demo page accessible
- [ ] License file included
- [ ] Contributing guidelines available

## 🎉 You're Live!

Your project is now:
- ✅ Open source on GitHub
- ✅ Available via CDN worldwide
- ✅ Ready for contributors
- ✅ Ready to make websites AI-ready!

Now focus on building the hilite2ai.com landing page to promote adoption!
