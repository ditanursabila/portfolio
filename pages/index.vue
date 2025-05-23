<script setup>
useHead({
    title: "Ditanrs",
    meta: [
        {
            name: "description",
            content: "ditanrs",
        },
    ],
});
</script>

<template>
    <Hero />
    <About />
    <div class="bg-base-300 w-full min-h-screen flex items-center justify-center py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-5 ">
                <h2 class="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
                    My Projects</h2>
                <div class="w-20 h-1 bg-pink-500/30 mx-auto rounded-full mt-4"></div>
            </div>

            <Project :limit="3" />

            <div class="text-center mt-12">
                <nuxt-link to="/project" class="inline-flex items-center px-6 py-3 rounded-full text-base-content border border-pink-500 
                    backdrop-blur-sm bg-white/10 hover:bg-pink-400 transition-all duration-300">
                    View All Projects
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </nuxt-link>
            </div>
        </div>
    </div>

    <div class="bg-secondary w-full min-h-screen flex items-center justify-center py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-5 ">
                <h2 class="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
                    My Certificates</h2>
                <div class="w-20 h-1 bg-pink-500/30 mx-auto rounded-full mt-4"></div>
            </div>

            <Sertifikat :limit="3" />

            <div class="text-center mt-12">
                <nuxt-link to="/sertifikat" class="inline-flex items-center px-6 py-3 rounded-full text-base-content border border-pink-500 
                    backdrop-blur-sm bg-white/10 hover:bg-pink-400 transition-all duration-300">
                    View All Certificates
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </nuxt-link>
            </div>
        </div>
    </div>
    <Contact />
</template>