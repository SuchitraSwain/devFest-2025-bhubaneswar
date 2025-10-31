export const snippetExamples = {
  extractLinks: `// Extract all links from the page
const links = Array.from(document.querySelectorAll('a[href]'));
const linkData = links.map(link => ({
  text: link.textContent.trim(),
  href: link.href,
  target: link.target || '_self'
}));

// Display results in console
console.table(linkData);
console.log('Found ' + links.length + ' links');
console.log('Link data:', linkData);

// Copy to clipboard (requires page focus)
const textToCopy = linkData.map(l => l.text + ': ' + l.href).join('\\n');

// Try modern clipboard API first
if (navigator.clipboard && navigator.clipboard.writeText) {
  navigator.clipboard.writeText(textToCopy).then(() => {
    console.log('✓ Links copied to clipboard!');
  }).catch(err => {
    console.warn('Clipboard API failed (page may not be focused). Using fallback...');
    // Fallback: create temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      console.log('✓ Links copied to clipboard (fallback method)!');
    } catch (e) {
      console.warn('Could not copy. Link text is in console and textToCopy variable.');
    }
    document.body.removeChild(textarea);
  });
} else {
  // Fallback for older browsers
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    console.log('✓ Links copied to clipboard!');
  } catch (e) {
    console.warn('Could not copy. Link text is in console and textToCopy variable.');
  }
  document.body.removeChild(textarea);
}

// Return the data for console inspection
linkData;`,

  copyVisibleText: `// Copy all visible text from the page
function getVisibleText(element) {
  const style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
    return '';
  }
  
  let text = '';
  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent.trim() + ' ';
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      text += getVisibleText(node);
    }
  }
  return text;
}

const allText = getVisibleText(document.body);
const trimmedText = allText.trim();
const charCount = trimmedText.length;
const wordCount = trimmedText.split(/\\s+/).filter(w => w).length;

// Display results
console.log('Extracted text:', trimmedText);
console.log('Total characters: ' + charCount);
console.log('Total words: ' + wordCount);

// Copy to clipboard (requires page focus)
if (navigator.clipboard && navigator.clipboard.writeText) {
  navigator.clipboard.writeText(trimmedText).then(() => {
    console.log('✓ All visible text copied to clipboard!');
  }).catch(err => {
    console.warn('Clipboard API failed (page may not be focused). Using fallback...');
    // Fallback: create temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = trimmedText;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      console.log('✓ Text copied to clipboard (fallback method)!');
    } catch (e) {
      console.warn('Could not copy. Text is in console and trimmedText variable.');
    }
    document.body.removeChild(textarea);
  });
} else {
  // Fallback for older browsers
  const textarea = document.createElement('textarea');
  textarea.value = trimmedText;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    console.log('✓ Text copied to clipboard!');
  } catch (e) {
    console.warn('Could not copy. Text is in console and trimmedText variable.');
  }
  document.body.removeChild(textarea);
}

// Return the text
trimmedText;`,

  highlightElements: `// Add visual outlines to all elements for layout debugging
const allElements = document.querySelectorAll('*');
let highlightedCount = 0;

allElements.forEach(el => {
  const rect = el.getBoundingClientRect();
  if (rect.width > 0 && rect.height > 0) {
    el.style.outline = '1px solid rgba(255, 0, 0, 0.3)';
    el.style.backgroundColor = 'rgba(255, 0, 0, 0.05)';
    highlightedCount++;
  }
});

console.log('Highlighted ' + highlightedCount + ' elements. Refresh page to remove.');
console.log('Elements highlighted:', highlightedCount);

// Optional: Auto-remove after 10 seconds
setTimeout(() => {
  allElements.forEach(el => {
    el.style.outline = '';
    el.style.backgroundColor = '';
  });
  console.log('Highlights removed.');
}, 10000);

// Return the count
highlightedCount;`,

  monitorChanges: `// Monitor DOM changes and log them
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      const changeInfo = {
        added: mutation.addedNodes.length,
        removed: mutation.removedNodes.length,
        target: mutation.target.nodeName,
        timestamp: new Date().toISOString()
      };
      console.log('DOM changed:', changeInfo);
      
      // Log new elements
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          console.log('Added element:', node.nodeName, node);
        }
      });
      
      return changeInfo;
    } else if (mutation.type === 'attributes') {
      const attrInfo = {
        element: mutation.target.nodeName,
        attribute: mutation.attributeName,
        oldValue: mutation.oldValue,
        newValue: mutation.target.getAttribute(mutation.attributeName)
      };
      console.log('Attribute changed:', attrInfo);
      return attrInfo;
    }
  });
});

// Start observing
observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeOldValue: true
});

console.log('MutationObserver started. Changes will be logged to console.');
console.log('Observer instance:', observer);
console.log('To stop: observer.disconnect();');

// Return the observer so you can control it (saved in variable)
observer;`,

  pageEnhancement: `// Add helpful UI improvements to any page
(function() {
  // Add a "Scroll to Top" button
  const scrollBtn = document.createElement('button');
  scrollBtn.textContent = '↑ Top';
  scrollBtn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; padding: 10px 15px; background: #4285f4; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; box-shadow: 0 2px 10px rgba(0,0,0,0.3);';
  scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(scrollBtn);

  // Add word count overlay
  const wordCount = document.body.innerText.split(/\\s+/).filter(w => w).length;
  const countDiv = document.createElement('div');
  countDiv.textContent = 'Words: ' + wordCount;
  countDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; padding: 8px 12px; background: rgba(0,0,0,0.7); color: white; border-radius: 5px; font-size: 12px;';
  document.body.appendChild(countDiv);

  const result = {
    wordCount: wordCount,
    scrollButton: scrollBtn,
    wordCountDisplay: countDiv
  };
  
  console.log('Page enhanced!', result);
  console.log('Word count: ' + wordCount);
  
  return result;
})();`,
};
