// Select all paragraph elements in the footer
let footerParagraphs = document.querySelectorAll('footer p');

// 1. Dynamically set the copyright year in the first paragraph
let currentYear = new Date().getFullYear(); // Get the current year
if (footerParagraphs[0]) {
  footerParagraphs[0].textContent = '© ${currentYear} 👌 Isaiah Wambani Mutambo';
}

// 2. Dynamically set the document's last modified date in the second paragraph
let lastModified = document.lastModified; // Get the document's last modified date
if (footerParagraphs[1]) {
  footerParagraphs[1].textContent =' Last modified: ${lastModified}';
}