<script setup>
const skillCategories = [
    {
        title: 'Project Management',
        icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>`,
        skills: ['Agile', 'Scrum', 'Planning', 'Strategy', 'Teamwork', 'Analysis'],
        colorClass: 'group-hover:text-pink-600 group-hover:bg-pink-50 border-pink-100'
    },
    {
        title: 'Development',
        icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`,
        skills: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Python', 'C#'],
        colorClass: 'group-hover:text-blue-600 group-hover:bg-blue-50 border-blue-100'
    },
    {
        title: 'UI/UX Design',
        icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-3.879a3 3 0 10-4.242-4.242l-3.879 3.879a15.998 15.998 0 00-4.648 4.764m3.879-3.879l3.879-3.879m0 0l-3.879 3.879m0 0l-3.879 3.879m0 0l-3.879 3.879" /></svg>`,
        skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
        colorClass: 'group-hover:text-amber-600 group-hover:bg-amber-50 border-amber-100'
    },
    {
        title: 'Social Media',
        icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>`,
        skills: ['Canva', 'CapCut', 'Content Strategy', 'Copywriting', 'Creative Direction'],
        colorClass: 'group-hover:text-purple-600 group-hover:bg-purple-50 border-purple-100'
    }
];
</script>

<template>
    <section class="bg-base-100 w-full py-24" id="skills">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20">
                <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                    Expertise
                </h2>
                <div class="w-16 h-1 bg-pink-600 mx-auto rounded-full mt-6"></div>
                <p class="mt-6 text-lg text-gray-500 max-w-2xl mx-auto font-light">
                    A comprehensive overview of my capabilities across management, development, and design.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div 
                    v-for="(category, index) in skillCategories" 
                    :key="index"
                    class="group relative bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
                >
                    <!-- Minimalist background hover transition -->
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    
                    <div class="flex items-center space-x-4 mb-8">
                        <div class="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 text-gray-400 border border-transparent transition-all duration-500"
                             :class="category.colorClass"
                             v-html="category.icon">
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 tracking-tight">{{ category.title }}</h3>
                    </div>
                    
                    <div class="flex flex-wrap gap-2.5 mt-auto">
                        <span 
                            v-for="skill in category.skills" 
                            :key="skill"
                            class="px-4 py-2 bg-gray-50/80 text-gray-600 text-sm font-medium rounded-xl border border-gray-100 hover:bg-white hover:text-gray-900 hover:border-gray-300 hover:shadow-sm transition-all duration-300 cursor-default"
                        >
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Crisp and professional typography adjustments if needed */
</style>
