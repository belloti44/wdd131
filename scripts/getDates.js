// Function to display the current year in the footer's first paragraph
function displayCurrentYear() {
    const currentYear = new Date().getFullYear(); // Get the current year
    const yearElement = document.querySelector('footer p:first-of-type'); // Select the first paragraph in the footer
    if (yearElement) {
        yearElement.textContent = '© ${currentYear} £ Isaiah Wambani'; // Set the content with the current year
    }
}

// Function to display the last modified date and time in the second paragraph
function displayLastModified() {
    const lastModified = new Date(document.lastModified); // Get the last modified date as a Date object
    const formattedDate = lastModified.toLocaleString(); // Format the date and time
    const modifiedElement = document.querySelector('footer p:nth-of-type(2)'); // Select the second paragraph in the footer
    if (modifiedElement) {
        modifiedElement.textContent = 'Last modified: ${formattedDate}';// Set the content with the formatted date and time
    }
}

// Call the functions to display the values
displayCurrentYear();
displayLastModified();