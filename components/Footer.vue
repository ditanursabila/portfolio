<template>
    <footer class="bg-base-300 border-t border-neutral-content">
        <div class="max-w-[85rem] px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div class="col-span-1 text-center md:text-left">
                    <a class="flex items-center justify-center md:justify-start mb-4" href="#">
                        <span class="text-2xl font-bold text-pink-600">Dita Nur Sabila</span>
                    </a>
                    <p class="text-gray-800  mb-4">
                        Hello, I am Dita Nur Sabila, a IT Project Manager and I am also good at Frontend Web
                        Developer and UI/UX Design
                    </p>
                </div>

                <div class="col-span-1 text-center md:text-left">
                    <h3 class="font-semibold text-pink-600 mb-4">Quick Links</h3>
                    <ul class="space-y-3">
                        <li>
                            <nuxt-link to="/about" class="text-gray-800 hover:text-pink-500 transition">About
                                Me</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link to="/project" class="text-gray-800 hover:text-pink-500 transition">Project
                            </nuxt-link>
                        </li>

                        <li>
                            <nuxt-link to="/sertifikat"
                                class="text-gray-800 hover:text-pink-500 transition">Certificates
                            </nuxt-link>
                        </li>

                        <li>
                            <nuxt-link to="/contact"
                                class="text-gray-800 hover:text-pink-500 transition">Contact</nuxt-link>
                        </li>
                    </ul>
                </div>

                <div class="col-span-1 text-center md:text-left">
                    <h3 class="font-semibold text-pink-600 mb-4">Services</h3>
                    <ul class="space-y-3">
                        <li>
                            <span class="text-gray-800">Project Manager</span>
                        </li>
                        <li>
                            <span class="text-gray-800">Web Developer</span>
                        </li>
                        <li>
                            <span class="text-gray-800">Frontend Web Developer</span>
                        </li>
                        <li>
                            <span class="text-gray-800">UI/UX Design</span>
                        </li>
                    </ul>
                </div>

                <div class="col-span-1 text-center md:text-left">
                    <h3 class="font-semibold text-pink-600 mb-4">Connect With Me</h3>
                    <div class="mb-6">
                        <p class="text-gray-800 mb-3 flex items-center justify-center md:justify-start">
                            <svg class="size-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.25 4.5h-16.5c-1.241 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.009 2.25 2.25 2.25h16.5c1.241 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.009-2.25-2.25-2.25zm0 1.5l-8.25 5.25-8.25-5.25v-1.5l8.25 5.25 8.25-5.25v1.5z" />
                            </svg>
                            ditanrsabila@gmail.com
                        </p>
                        <p class="text-gray-800 mb-3 flex items-center justify-center md:justify-start">
                            <svg class="size-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                            </svg>
                            Indonesia
                        </p>
                    </div>
                    <div class="flex justify-center md:justify-start space-x-5">
                        <a href="https://www.instagram.com/ditanrsabilaa/" target="_blank"
                            class="text-gray-800 hover:text-pink-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                            <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/ditanrs/" target="_blank"
                            class="text-gray-800 hover:text-pink-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                            <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://github.com/ditanursabila" target="_blank"
                            class="text-gray-800 hover:text-pink-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                            <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <hr class="my-8 border-gray-200/30">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div class="text-center md:text-left">
                    <p class="text-gray-800">
                        © {{ new Date().getFullYear() }} Dita Nur Sabila. All rights reserved.
                    </p>
                </div>
                <div class="text-center md:text-right">
                    <a href="resume.pdf" target="_blank"
                        class="inline-flex items-center px-4 py-2 border border-pink-600 text-sm font-medium rounded-md text-pink-600 hover:bg-white hover:text-pink-600 transition">
                        Resume
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>


<style scoped>
.transform {
    transition: transform 0.2s;
}
</style>