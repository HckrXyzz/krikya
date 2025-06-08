function dashBoard(){
const app = document.getElementById('app');
app.innerHTML= `<header class="header fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4">
        <div class="flex items-center">
            <button id="sidebar-toggle" class="mr-4 text-white hover:text-cyan-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </button>
            <h1 class="text-xl font-bold neon-glow">PiNiK<span class="text-cyan-400">Hub</span></h1>
        </div>

        <div class="flex-1 mx-8">
            <div class="relative">
                <input type="text" placeholder="Search..." id="search-input" name="search" autocomplete="off"
                    class="search-bar w-full py-2 px-4 rounded-full text-white outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute right-3 top-2.5 text-cyan-400"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
        </div>

        <div class="flex items-center space-x-6">
            <div id="clock" class="clock text-cyan-400 hidden md:block">11:17:00 PM</div>

            <div class="relative">
                <button type="button" class="text-white hover:text-cyan-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                        </path>
                    </svg>
                    <span
                        class="notification-badge w-4 h-4 flex items-center justify-center rounded-full text-xs">3</span>
                </button>
            </div>


            <div
                class="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center cursor-pointer pulse">
                <span class="text-sm font-bold">JB</span>
            </div>
        </div>
    </header>

    <aside id="sidebar" class="sidebar fixed left-0 top-16 bottom-0 w-64 z-40 transform transition-transform">
        <nav class="py-4">
            <div class="px-4 py-2 text-xs text-gray-400 uppercase">Main Menu</div>
            <a href="#" class="sidebar-item flex items-center px-4 py-3 text-white hover:text-cyan-400"
                data-section="dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
            </a>
            <a href="#" class="sidebar-item flex items-center px-4 py-3 text-white hover:text-cyan-400"
                data-section="projects">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Projects
            </a>

            <a href="#" class="sidebar-item flex items-center px-4 py-3 text-white hover:text-cyan-400"
                data-section="attackPage">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                ATTACK
            </a>

            <a href="#" class="sidebar-item flex items-center px-4 py-3 text-white hover:text-cyan-400"
                data-section="messages">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Messages
            </a>
            <a href="#" class="sidebar-item flex items-center px-4 py-3 text-white hover:text-cyan-400"
                data-section="settings">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
            </a>

            <div class="px-4 py-2 mt-6 text-xs text-gray-400 uppercase">ATTACK PAGE</div>
            <a href="#" class="sidebar-item flex items-center px-4 py-3 text-white hover:text-cyan-400"
                data-section="notes">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                ATTACK
            </a>
            <a href="#" class="sidebar-item flex items-center px-4 py-3 text-white hover:text-cyan-400"
                data-section="uploads">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Uploads
            </a>
        </nav>
    </aside>
<main class="pt-20 pb-8 px-4 md:px-8 ml-0 md:ml-64 transition-all duration-300"></main>`;
}
dashBoard();

// Digital Clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
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
const fileUpload = document.getElementById('fileInput');
if (fileUpload) {
    fileUpload.addEventListener('change', (e) => {
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

function viewMeberDetails() {
    const jsonTableButton = document.getElementById('jsonTable');
    jsonTableButton.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.parentElement.parentElement.firstElementChild.textContent;
            alert('User ID: ' + id);
        });
    });
}
document.addEventListener('DOMContentLoaded', viewMeberDetails);



