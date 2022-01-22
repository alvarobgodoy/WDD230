window.onload = function() {
    let lastModified = document.lastModified;
    
    document.getElementById('lastUpdate').textContent = (`Last update: ${lastModified}`);
    let currentYear = document.querySelector('#currentYear');

    year = new Date().getFullYear();

    currentYear.textContent = year;
}

