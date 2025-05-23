<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUnmount } from "vue";
import { initDropdowns } from "flowbite";

const scrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref('');

const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
    const sections = ['#home', '#about', '#project', '#contact'];
    const currentSection = sections
        .map(id => document.querySelector(id))
        .find(section => {
            if (!section) return false;
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
        });
};


const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    initDropdowns();
    handleScroll();
});

onBeforeMount(() => {
    initDropdowns();
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template data-theme="cupcake">
    <nav :class="['fixed top-0 w-full z-50 transition-all duration-300 border-gray-200',
        scrolled ? 'backdrop-blur-lg shadow-md bg-pink-600/20' : 'bg-transparent']">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <nuxt-link to="/" class="transition-transform hover:scale-105">
                <img src="assets/img/dita-logo.png" class="h-8 md:h-10" alt="Logo" />
            </nuxt-link>

            <button @click="toggleMobileMenu"
                class="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-800 rounded-lg hover:bg-white">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="w-full md:block md:w-auto" :class="[isMobileMenuOpen ? 'block' : 'hidden']"
                id="navbar-dropdown">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-pink-400/95 md:bg-transparent
                           md:flex-row md:space-x-8 md:mt-0 md:border-0 backdrop-blur-md md:backdrop-blur-none">
                    <li>
                        <nuxt-link to="/" class="block py-3 px-4 rounded transition-all duration-300" :class="[
                            'hover:bg-pink-500/20 md:hover:bg-transparent md:border-0 md:p-0',
                            activeSection === 'home' ? 'text-gray-800 font-bold' : 'text-gray-800 hover:text-black'
                        ]">
                            Home
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link to="/about" class="block py-3 px-4 rounded transition-all duration-300" :class="[
                            'hover:bg-pink-500/20 md:hover:bg-transparent md:border-0 md:p-0',
                            activeSection === 'about' ? 'text-gray-800 font-bold' : 'text-gray-800 hover:text-black'
                        ]">
                            About Me
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link to="/project" class="block py-3 px-4 rounded transition-all duration-300" :class="[
                            'hover:bg-pink-500/20 md:hover:bg-transparent md:border-0 md:p-0',
                            activeSection === 'project' ? 'text-gray-800 font-bold' : 'text-gray-800 hover:text-black'
                        ]">
                            Project
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link to="/sertifikat" class="block py-3 px-4 rounded transition-all duration-300" :class="[
                            'hover:bg-pink-500/20 md:hover:bg-transparent md:border-0 md:p-0',
                            activeSection === 'project' ? 'text-gray-800 font-bold' : 'text-gray-800 hover:text-black'
                        ]">
                            Certificates
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link to="/contact" class="block py-3 px-4 rounded transition-all duration-300" :class="[
                            'hover:bg-pink-400/20 md:hover:bg-transparent md:border-0 md:p-0',
                            activeSection === 'contact' ? 'text-gray-800 font-bold' : 'text-gray-800 hover:text-black'
                        ]">
                            Contact
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style scoped>
.backdrop-blur-lg {
    backdrop-filter: blur(8px);
}

a {
    position: relative;
}

a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: theme('colors.pink.500');
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

a:hover::after,
a.text-pink-200::after {
    width: 100%;
}

@media (max-width: 768px) {
    #navbar-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        padding: 0.5rem;
        transition: all 0.3s ease;
    }

    #navbar-dropdown ul {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    a::after {
        bottom: 0;
        left: 0;
        width: 4px;
        height: 0;
        transform: none;
    }

    a:hover::after,
    a.text-pink-200::after {
        width: 4px;
        height: 100%;
    }

    .block {
        animation: slideDown 0.3s ease-out forwards;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>