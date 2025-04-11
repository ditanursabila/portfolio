<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const form = ref(null)
const loading = ref(false)
const formData = ref({
    name: '',
    email: '',
    message: ''
})


emailjs.init("g9IzmOGUt_iqe_2Tm")

const sendEmail = async (e) => {
    e.preventDefault()
    loading.value = true

    try {
        const templateParams = {
            from_name: formData.value.name,
            from_email: formData.value.email,
            message: formData.value.message,
        }

        await emailjs.send(
            'service_ej5ilzp',
            'template_n0l63ve',
            templateParams
        )

        formData.value = {
            name: '',
            email: '',
            message: ''
        }

        await Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Pesan kamu terkirim. Tunggu Dita membalas pesan mu!',
            confirmButtonColor: '#ec4899',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
        })
    } catch (error) {
        console.error('Error:', error)
        await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pesan kamu tidak terkirim. Silahkan coba lagi!',
            confirmButtonColor: '#ec4899',
            confirmButtonText: 'OK'
        })
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="flex items-center justify-center py-8 bg-gradient-to-br from-pink-300 via-pink-300 to-pink-300">
        <div class="max-w-6xl mt-20 mb-20 w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-10">
                <h2 class="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
                    Contact Me</h2>
                <div class="w-20 h-1 bg-pink-500/30 mx-auto rounded-full mt-4"></div>
            </div>

            <form ref="form" @submit="sendEmail" class="space-y-6">
                <div class="grid gap-6 md:gap-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-800">
                                Name
                            </label>
                            <input type="text" id="name" name="name" v-model="formData.name" required class="w-full px-4 py-3 rounded-lg bg-white/60 border border-pink-500/70 text-gray-800
                                focus:border-pink-300 focus:ring-2 focus:ring-pink-300/50 focus:outline-none
                                transition-all duration-300">
                        </div>

                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-800">
                                Email
                            </label>
                            <input type="email" id="email" name="email" v-model="formData.email" required class="w-full px-4 py-3 rounded-lg bg-white/60 border border-pink-500/70 text-gray-800
                                focus:border-pink-300 focus:ring-2 focus:ring-pink-300/50 focus:outline-none
                                transition-all duration-300">
                        </div>
                    </div>

                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-800">
                            Message
                        </label>
                        <textarea id="message" name="message" v-model="formData.message" required rows="4" class="w-full px-4 py-3 rounded-lg bg-white/60 border border-pink-500/70 text-gray-800
                            focus:border-pink-300 focus:ring-2 focus:ring-pink-300/50 focus:outline-none
                            transition-all duration-300 resize-none"></textarea>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button type="submit" :disabled="loading" class="px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg
                        hover:bg-pink-600 focus:outline-none 
                        transform transition-all duration-300 hover:scale-105 shadow-lg
                        disabled:opacity-50 disabled:cursor-not-allowed">
                        {{ loading ? 'Sending...' : 'Send Message' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style setup>
.swal2-popup {
    font-family: 'Inter', sans-serif !important;
    border-radius: 1rem !important;
}

.swal2-title {
    color: #ec4899 !important;

}

.swal2-confirm {
    background-color: #ec4899 !important;


    &:hover {
        background-color: #db2777 !important;
    }
}
</style>