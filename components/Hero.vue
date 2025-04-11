<script>
export default {
    data() {
        return {
            shapes: [
                { color: 'bg-pink-300' },
                { color: 'bg-pink-500' },
                { color: 'bg-pink-600' },
                { color: 'bg-pink-700' },
                { color: 'bg-purple-400' },
                { color: 'bg-purple-500' }
            ],
            cubeRotation: {
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0
            },
            colors: [
                'bg-pink-400', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700',
                'bg-purple-400', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700',
                'bg-blue-400', 'bg-teal-400', 'bg-indigo-400'
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

<template>
    <div
        class="bg-gradient-to-br from-rose-200 via-pink-300 to-pink-400 w-full min-h-screen flex items-center justify-center py-8">
        <div
            class="border border-pink-600 backdrop-blur-lg rounded-lg shadow-xl mt-10  w-11/12 md:w-10/12 py-8 sm:py-15 md:py-12 flex items-center justify-center px-4  sm:px-6 md:px-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                <div class="text-white flex flex-col items-center md:items-start space-y-4 md:space-y-6">
                    <h1 class="text-3xl sm:text-4xl font-bold">
                        <span class="text-pink-600">Hello, I'm</span>
                    </h1>
                    <h1 class="text-4xl sm:text-5xl font-bold text-gray-800 ">
                        <span>Dita Nur Sabila</span>
                    </h1>
                    <p class="text-xl md:text-2xl text-gray-800 text-center md:text-left">
                        Software Engineer
                    </p>
                    <div class="flex space-x-4">

                        <a href="/about" class="px-6 py-3 bg-transparent hover:bg-white/10 text-pink-600 font-semibold rounded-lg 
            transition-all duration-300 ease-in-out transform hover:scale-105 
            border-2 border-pink-400 hover:border-pink-400 shadow-lg hover:shadow-pink-500/50">
                            About Me
                        </a>
                    </div>
                </div>

                <!-- 3D cube -->
                <div class="flex flex-col items-center justify-center space-y-4 mt-6 md:mt-0">
                    <div class="cube-container w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 sm:mb-8 md:mb-16">
                        <div class="cube" :style="{
                            transform: `rotateX(${cubeRotation.rotateX}deg) rotateY(${cubeRotation.rotateY}deg) rotateZ(${cubeRotation.rotateZ}deg)`
                        }" @click="transformCube">
                            <div class="cube-face cube-face-front" :class="shapes[0].color">
                                <img src="https://nuxt.com/assets/design-kit/icon-green.svg" alt="Nuxt 3"
                                    class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 filter brightness-[1.2]" />
                            </div>
                            <div class="cube-face cube-face-back" :class="shapes[1].color">
                                <img src="https://cdn.worldvectorlogo.com/logos/vue-9.svg" alt="Vue"
                                    class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                            </div>
                            <div class="cube-face cube-face-right" :class="shapes[2].color">
                                <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python"
                                    class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                            </div>
                            <div class="cube-face cube-face-left" :class="shapes[3].color">
                                <img src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" alt="Supabase"
                                    class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                            </div>
                            <div class="cube-face cube-face-top" :class="shapes[4].color">
                                <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="JavaScript"
                                    class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                            </div>
                            <div class="cube-face cube-face-bottom" :class="shapes[5].color">
                                <img src="https://cdn.worldvectorlogo.com/logos/c--4.svg" alt="C#"
                                    class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                            </div>
                        </div>
                    </div>
                    <h2 class="text-gray-700 text-md md:text-xl font-semibold animate-pulse">Click on my skill!</h2>
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
    border: 2px solid rgba(255, 255, 255, 0.81);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: background-color 0.5s ease-in-out;
    width: 100%;
    height: 100%;
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