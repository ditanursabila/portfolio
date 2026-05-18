<script>
export default {
    data() {
        return {
            shapes: [
                { color: 'bg-[#D1CCD0]' },
                { color: 'bg-[#62C2C1]' },
                { color: 'bg-[#F198AF]' },
                { color: 'bg-[#D1CCD0]' },
                { color: 'bg-[#62C2C1]' },
                { color: 'bg-[#F198AF]' }
            ],
            cubeRotation: {
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0
            },
            colors: [
                'bg-[#D1CCD0]',
                'bg-[#62C2C1]',
                'bg-[#F198AF]'
            ]
        };
    },
    methods: {
        transformCube() {
            this.cubeRotation = {
                rotateX: Math.floor(Math.random() * 360),
                rotateY: Math.floor(Math.random() * 360),
                rotateZ: Math.floor(Math.random() * 360)
            };
            this.shapes = this.shapes.map(() => ({
                color: this.colors[Math.floor(Math.random() * this.colors.length)]
            }));
        }
    }
};
</script>

<template data-theme="cupcake">
    <div class="bg-loving-light w-full min-h-screen flex items-center justify-center py-8">
        <div
            class="backdrop-blur-lg rounded-lg shadow-xl mt-10 w-11/12 md:w-10/12 py-8 sm:py-15 md:py-12 flex items-center justify-center px-4 sm:px-6 md:px-10 bg-white/40 border border-white/50">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                <div class="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
                    <h2 class="text-3xl sm:text-4xl font-bold">
                        <span class="text-loving-dark">Hello, I'm</span>
                    </h2>
                    <h1 class="text-4xl sm:text-5xl font-extrabold text-black pb-1">
                        <span>Dita Nur Sabila</span>
                    </h1>
                    <p class="text-xl md:text-2xl font-bold text-black text-center md:text-left tracking-wide">
                        IT Project Manager
                    </p>
                    <div class="flex space-x-4">

                        <a href="/about" class="px-6 py-3 bg-transparent hover:bg-loving-dark text-loving-dark hover:text-white font-semibold rounded-lg 
            transition-all duration-300 ease-in-out transform hover:scale-105 
            border-2 border-loving-dark shadow-lg shadow-loving-medium/30 hover:shadow-loving-dark/50">
                            About Me
                        </a>
                    </div>
                </div>

                <!-- 3D cube -->
                <div class="flex flex-col items-center justify-center space-y-4 mt-6 md:mt-0">
                    <div class="cube-container w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 sm:mb-8 md:mb-16">
                        <div class="cube-spinner">
                            <div class="cube" :style="{
                                transform: `rotateX(${cubeRotation.rotateX}deg) rotateY(${cubeRotation.rotateY}deg) rotateZ(${cubeRotation.rotateZ}deg)`
                            }" @click="transformCube">
                                <div class="cube-face cube-face-front" :class="shapes[0].color">
                                    <div class="flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 text-white drop-shadow-lg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                        </svg>
                                        <span class="text-xs sm:text-sm md:text-base font-bold text-center drop-shadow-md text-white uppercase tracking-wider">Agile</span>
                                    </div>
                                </div>
                                <div class="cube-face cube-face-back" :class="shapes[1].color">
                                    <div class="flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 text-white drop-shadow-lg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                        <span class="text-xs sm:text-sm md:text-base font-bold text-center drop-shadow-md text-white uppercase tracking-wider">Scrum</span>
                                    </div>
                                </div>
                                <div class="cube-face cube-face-right" :class="shapes[2].color">
                                    <div class="flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 text-white drop-shadow-lg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
                                        </svg>
                                        <span class="text-xs sm:text-sm md:text-base font-bold text-center drop-shadow-md text-white uppercase tracking-wider">Strategy</span>
                                    </div>
                                </div>
                                <div class="cube-face cube-face-left" :class="shapes[3].color">
                                    <div class="flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 text-white drop-shadow-lg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                        </svg>
                                        <span class="text-xs sm:text-sm md:text-base font-bold text-center drop-shadow-md text-white uppercase tracking-wider">Planning</span>
                                    </div>
                                </div>
                                <div class="cube-face cube-face-top" :class="shapes[4].color">
                                    <div class="flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 text-white drop-shadow-lg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                        </svg>
                                        <span class="text-xs sm:text-sm md:text-base font-bold text-center drop-shadow-md text-white uppercase tracking-wider">Analysis</span>
                                    </div>
                                </div>
                                <div class="cube-face cube-face-bottom" :class="shapes[5].color">
                                    <div class="flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 text-white drop-shadow-lg">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                        </svg>
                                        <span class="text-xs sm:text-sm md:text-base font-bold text-center drop-shadow-md text-white uppercase tracking-wider">Teamwork</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 class="text-loving-dark text-md md:text-xl font-bold animate-pulse mt-4">Click on my skill!</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes cursor {
    0% {
        border-right-color: transparent;
    }

    50% {
        border-right-color: white;
    }

    100% {
        border-right-color: transparent;
    }
}

.bg-opacity-20 {
    background-color: rgba(255, 255, 255, 0.2);
}

.backdrop-blur-lg {
    backdrop-filter: blur(20px);
}

button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cube-container {
    position: relative;
    perspective: 600px;
}

.cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s ease-in-out;
    cursor: pointer;
}

.cube-face {
    position: absolute;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: background-color 0.5s ease-in-out;
    width: 100%;
    height: 100%;
}

.cube-spinner {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: slowSpin 25s infinite linear;
}

@keyframes slowSpin {
    0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
}

.cube-face img {
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.3));
}

.cube-container {
    --cube-size: 8rem;
}

@media (min-width: 640px) {
    .cube-container {
        --cube-size: 10rem;
    }
}

@media (min-width: 768px) {
    .cube-container {
        --cube-size: 12rem;
    }
}

.cube-face-front {
    transform: translateZ(calc(var(--cube-size) / 2));
}

.cube-face-back {
    transform: rotateY(180deg) translateZ(calc(var(--cube-size) / 2));
}

.cube-face-right {
    transform: rotateY(90deg) translateZ(calc(var(--cube-size) / 2));
}

.cube-face-left {
    transform: rotateY(-90deg) translateZ(calc(var(--cube-size) / 2));
}

.cube-face-top {
    transform: rotateX(90deg) translateZ(calc(var(--cube-size) / 2));
}

.cube-face-bottom {
    transform: rotateX(-90deg) translateZ(calc(var(--cube-size) / 2));
}

.animate-pulse {
    animation: pulse 1.5s infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}
</style>