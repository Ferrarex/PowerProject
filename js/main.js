document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-container');

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const logo = document.createElement('div');
    const logoLink = document.createElement('a');
    logoLink.href = 'index.html';
    logoLink.innerHTML = '<p><img src="images/logo.png" class="logo inline-image"><span class="inline-text">Discord Armazenamento</span></p>';
    logo.classList.add('nav-links');
    
    const navLinks = document.createElement('ul');
    navLinks.classList.add('nav-links');

    logo.appendChild(logoLink);

    const links = [
        { href: "faq.html", name: 'FAQ', img: "images/faq.png", f:function(e){}},
        { href: "instalador.html", name: 'Instalador', img: "images/download.png", f:function(e){}},
        { href: "contatar.html", name: 'Contatar', img: "images/email.png", f:function(e){}}
    ];
    links.forEach(linkText => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = linkText.href;
        link.innerHTML = "<p><img class='bar-icon inline-image' src='" + linkText.img + "'><span class='inline-text'>" + linkText.name + "</span></p>";
        linkText.f(link);
        li.appendChild(link);
        navLinks.appendChild(li);
    });

    navbar.appendChild(logo);
    navbar.appendChild(navLinks);

    navbarContainer.appendChild(navbar);
});
  