window.onload = function() {
    function toggleMenu() {
        document.getElementById('primaryNav').classList.toggle('open');
        document.getElementById('hamburgerBtn').classList.toggle('open');
    }

    const btn = document.getElementById('hamburgerBtn');
    btn.onclick = toggleMenu;

    // Footer
    let lastModified = document.lastModified;
    
    document.getElementById('lastUpdate').textContent = (`Last modification: ${lastModified}`);
    let currentYear = document.querySelector('#currentYear');

    year = new Date().getFullYear();

    currentYear.textContent = year;

    // Header date
    const now = new Date();
    const currentDate = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(now);

    document.getElementById('currentDate').textContent = currentDate;

    function toogleAnnouncement() {
        document.querySelector('.announcement').classList.toggle('visible');
    }

    const today = now.getDay()
    if (today == 1 || today == 2) {
        document.querySelector('.announcement').classList.toggle('visible');
        const annBtn = document.getElementById('annBtn');
        annBtn.onclick = toogleAnnouncement;
    }
}