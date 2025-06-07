 // Digital Clock
        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'

            document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
            setTimeout(updateClock, 1000);
        }
        updateClock();

        // Sidebar Toggle
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('sidebar');
        const main = document.querySelector('main');
        let sidebarOpen = window.innerWidth >= 768;

        function updateSidebar() {
            if (sidebarOpen) {
                sidebar.classList.remove('-translate-x-full');
                if (window.innerWidth >= 768) {
                    main.classList.remove('ml-0');
                    main.classList.add('ml-64');
                }
            } else {
                sidebar.classList.add('-translate-x-full');
                main.classList.remove('ml-64');
                main.classList.add('ml-0');
            }
        }

        if (window.innerWidth < 768) {
            sidebarOpen = false;
            updateSidebar();
        }

        sidebarToggle.addEventListener('click', () => {
            sidebarOpen = !sidebarOpen;
            updateSidebar();
        });

        // Content Section Navigation
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        const contentSections = document.querySelectorAll('.content-section');

        sidebarItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove active class from all sidebar items
                sidebarItems.forEach(i => i.classList.remove('active'));

                // Add active class to clicked item
                item.classList.add('active');

                // Hide all content sections
                contentSections.forEach(section => {
                    section.classList.remove('active');
                });

                // Show the selected content section
                const sectionId = item.getAttribute('data-section');
                const targetSection = document.getElementById(sectionId);

                setTimeout(() => {
                    targetSection.classList.add('active');
                }, 100);

                // Close sidebar on mobile after selection
                if (window.innerWidth < 768) {
                    sidebarOpen = false;
                    updateSidebar();
                }
            });
        });

        // File input handling
        const fileInput = document.getElementById('file-upload');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                if (e.target.files.length > 0) {
                    // You would typically upload the files here
                    alert(`Selected ${e.target.files.length} file(s)`);
                }
            });
        }

        // Responsive handling
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                if (sidebarOpen) {
                    main.classList.remove('ml-0');
                    main.classList.add('ml-64');
                }
            } else {
                main.classList.remove('ml-64');
                main.classList.add('ml-0');
            }
        });
//admin Name 

function replaceAdminName() {
 document.querySelector('.adminName').innerHTML = localStorage.getItem('adminName').toUpperCase()
            if (localStorage.getItem('adminName') === null) {
    document.querySelector('.adminName').innerHTML = 'ADMIN';
  }
} replaceAdminName();
