window.onload = function() {
    function toggleMenu() {
        document.getElementById('primaryNav').classList.toggle('open');
        document.getElementById('hamburgerBtn').classList.toggle('open');
    }

    const x = document.getElementById('hamburgerBtn');
    x.onclick = toggleMenu;

    // Footer
    let lastModified = document.lastModified;
    
    document.getElementById('lastUpdate').textContent = (`Last modification: ${lastModified}`);
    let currentYear = document.querySelector('#currentYear');

    year = new Date().getFullYear();

    currentYear.textContent = year;
}