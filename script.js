
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const submenuIcon = document.getElementById('submenu-icon');
const submenu = document.querySelector('.submenu');
const infoSubmenuIcon = document.getElementById('info-submenu-icon');
const infoSubmenu = document.querySelector('.info-submenu');
const servicesSubmenuIcon = document.getElementById('services-submenu-icon');
const servicesSubmenu = document.querySelector('.services-submenu');
const aboutusSubmenuIcon = document.getElementById('aboutus-submenu-icon');
const aboutusSubmenu = document.querySelector('.aboutus-submenu');


    submenuIcon.addEventListener('click', function() {
        toggleSubmenu(submenu, submenuIcon);
    });


    infoSubmenuIcon.addEventListener('click', function() {
        toggleSubmenu(infoSubmenu, infoSubmenuIcon);
    });


    servicesSubmenuIcon.addEventListener('click', function() {
        toggleSubmenu(servicesSubmenu, servicesSubmenuIcon);
    });

    aboutusSubmenuIcon.addEventListener('click', function() {
        toggleSubmenu(aboutusSubmenu, aboutusSubmenuIcon);
    });                

        function toggleSubmenu(submenu, icon) {
            submenu.classList.toggle('hidden'); 
            submenu.classList.toggle('opacity-0');  
            submenu.classList.toggle('opacity-100');  
            submenu.classList.toggle('max-h-0');  
            submenu.classList.toggle('max-h-screen');  

            if (submenu.classList.contains('opacity-100')) {
                icon.textContent = '−';  
            } else {
                icon.textContent = '+';  
            }
            
        }
        const pagesLink = document.querySelector('.group');
        const dropdown = pagesLink.querySelector('div');
        const closeDistance = 300; 

        let mouseX = 0;
        let mouseY = 0;

        pagesLink.addEventListener('mouseenter', () => {
            dropdown.classList.remove('opacity-0', 'invisible', 'translate-y-2');
            dropdown.classList.add('opacity-100', 'visible', 'translate-y-0');
        });

        pagesLink.addEventListener('mouseleave', () => {
          
        });

        document.addEventListener('mousemove', (event) => {
            mouseX = event.pageX;
            mouseY = event.pageY;

            const pagesLinkRect = pagesLink.getBoundingClientRect();
            const pagesLinkCenterX = pagesLinkRect.left + pagesLinkRect.width / 2;
            const pagesLinkCenterY = pagesLinkRect.top + pagesLinkRect.height / 2;

            const distance = Math.sqrt(Math.pow(mouseX - pagesLinkCenterX, 2) + Math.pow(mouseY - pagesLinkCenterY, 2));

            if (distance > closeDistance) {
                dropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
                dropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
            }
        });

   
            const infoLink = document.querySelector('.group + li');  
            const pagesDropdown = pagesLink.querySelector('div');  

            infoLink.addEventListener('mouseenter', () => {
            
                pagesDropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
                pagesDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
            });



            document.addEventListener('contextmenu', event => {
                   event.preventDefault();
                  alert("Right-click is disabled on this page.");
                 });