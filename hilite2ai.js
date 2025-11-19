// hilite2ai.com - v1.0.0
// Enables AI-assisted learning by allowing users to highlight text and copy contextual prompts

(function() {
  'use strict';

  // Inject styles into document
  const styles = `
    .ai-copy-button {
      padding: 4px 8px;
      background: #2196F3;
      color: white;
      border: 1px solid #bbb;
      border-radius: 7px;
      font-size: 13px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      white-space: nowrap;
      transition: all 0.2s ease;
    }
    .ai-copy-button:hover {
      background: #1976D2;
      transform: translateY(-1px);
    }
    
    .hilite2ai-notice {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.4;
      animation: slideIn 0.4s ease-out;
    }
    
    @keyframes slideIn {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    .hilite2ai-icon {
      font-size: 24px;
      flex-shrink: 0;
    }
    
    .hilite2ai-text {
      flex: 1;
    }
    
    .hilite2ai-text strong {
      display: inline-block;
      margin-right: 4px;
    }
    
    .hilite2ai-link {
      color: #fff;
      text-decoration: underline;
      opacity: 0.8;
      font-size: 12px;
      white-space: nowrap;
    }
    
    .hilite2ai-link:hover {
      opacity: 1;
    }
    
    .hilite2ai-close {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 18px;
      line-height: 1;
      flex-shrink: 0;
      transition: background 0.2s;
    }
    
    .hilite2ai-close:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    
    @media (max-width: 480px) {
      .hilite2ai-notice {
        font-size: 13px;
      }
    }
  `;

  // Create and inject style element (only once)
  if (!document.getElementById('hilite2ai-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'hilite2ai-styles';
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  // Check if webmaster wants the notice banner
  const noticePlaceholder = document.getElementById('hilite2ai');
  if (noticePlaceholder) {
    noticePlaceholder.className = 'hilite2ai-notice';
    noticePlaceholder.innerHTML = \`
      <span class="hilite2ai-icon">✨</span>
      <span class="hilite2ai-text">
        <strong>AI-Enhanced</strong> — Highlight any text on this page to get AI-powered explanations. 
        <a href="https://hilite2ai.com" target="_blank" class="hilite2ai-link">Learn more</a>
      </span>
      <button class="hilite2ai-close" onclick="this.parentElement.remove()">×</button>
    \`;
  }

  let copyButton = null;
  let thisOS = navigator.userAgent.includes('Mac') ? "Cmd" : "Ctrl";

  // Helper function to find nearest preceding heading
  function findNearestHeading(selection) {
    if (!selection.rangeCount) return null;

    let node = selection.getRangeAt(0).startContainer;

    // If it's a text node, get its parent element
    if (node.nodeType === 3) {
      node = node.parentElement;
    }

    // Walk up the DOM tree looking for a heading
    while (node && node !== document.body) {
      // Check previous siblings and their children
      let sibling = node.previousElementSibling;
      while (sibling) {
        // Check if this sibling is a heading
        if (/^H[1-6]$/i.test(sibling.tagName)) {
          return sibling.textContent.trim();
        }

        // Check if it contains a heading
        const headingInSibling = sibling.querySelector('h1, h2, h3, h4, h5, h6');
        if (headingInSibling) {
          return headingInSibling.textContent.trim();
        }
        sibling = sibling.previousElementSibling;
      }

      // Check if parent is a heading
      node = node.parentElement;
      if (node && /^H[1-6]$/i.test(node.tagName)) {
        return node.textContent.trim();
      }
    }

    // If nothing found, look for the last heading before selection in document order
    const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const range = selection.getRangeAt(0);

    for (let i = allHeadings.length - 1; i >= 0; i--) {
      if (range.compareBoundaryPoints(Range.START_TO_START, 
        document.createRange().selectNode(allHeadings[i])) > 0) {
        return allHeadings[i].textContent.trim();
      }
    }

    return null;
  }

  document.addEventListener('mouseup', (e) => {
    // Ignore if clicking the button itself
    if (copyButton && e.target === copyButton) {
      return;
    }

    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    // Remove existing button
    if (copyButton) {
      copyButton.remove();
      copyButton = null;
    }

    // Only show button if text is selected (and not too long)
    if (selectedText.length > 0 && selectedText.length < 500) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      // Create button
      copyButton = document.createElement('button');
      copyButton.textContent = '🤖 Copy to AI for details';
      copyButton.className = 'ai-copy-button';

      // Position near selection
      copyButton.style.position = 'absolute';
      copyButton.style.left = \`\${rect.left + window.scrollX}px\`;
      copyButton.style.top = \`\${rect.bottom + window.scrollY + 5}px\`;
      copyButton.style.zIndex = '10000';

      // Handle click
      copyButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const currentUrl = window.location.href;
        const pageTitle = document.title;
        const nearestHeading = findNearestHeading(selection);

        // Build contextual prompt
        let prompt = \`Message created via hilite2ai.com

I am viewing:

 • Source: \${currentUrl}
 • Title: \${pageTitle}
\`;
        if (nearestHeading) {
          prompt += \` • Section: \${nearestHeading}
\`;
        }
        prompt += \`
Please explain: "\${selectedText}"\`;

        navigator.clipboard.writeText(prompt).then(() => {
          copyButton.textContent = \`✓ Copied! Press \${thisOS}+V in your AI\`;
          copyButton.style.background = '#4CAF50';

          // Remove the selection after copying
          window.getSelection().removeAllRanges();

          setTimeout(() => {
            if (copyButton) copyButton.remove();
          }, 3000);
        }).catch(err => {
          console.error('Copy failed:', err);
          copyButton.textContent = '❌ Copy failed';
        });
      });

      document.body.appendChild(copyButton);
    }
  });

  // Remove button when clicking elsewhere
  document.addEventListener('mousedown', (e) => {
    if (copyButton && e.target !== copyButton) {
      copyButton.remove();
      copyButton = null;
    }
  });

  // Remove button if the user pressed Ctrl-C to copy
  document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === 'c' || event.key === 'C')) {
      if (copyButton) {
        copyButton.remove();
        copyButton = null;
      }
    }
  });
})();
