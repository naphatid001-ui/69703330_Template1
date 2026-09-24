const clean = s => s.replace(/\.html$/, '');
const currentPage = clean(location.pathname.split('/').pop() || 'index');
function setActiveMenu() {
    document.querySelectorAll('#mainNav .navbar-nav .nav-link').forEach(link => {
        const isCurrent = clean(link.getAttribute('href')) === currentPage;
        link.classList.toggle('active', isCurrent);

        if (isCurrent) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

// menu.html
fetch("menu.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("menu").innerHTML = data;
        setActiveMenu();
    });

// footer.html
fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });