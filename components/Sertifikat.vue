<script setup>
const supabase = useSupabaseClient();
const sertifikat = ref([]);
const loading = ref(true);


const props = defineProps({
    limit: {
        type: Number,
        default: null
    }
});

const getsertifikat = async () => {
    loading.value = true;
    let query = supabase
        .from("sertifikat")
        .select(`id, name, img`)

    if (props.limit) {
        query = query.limit(props.limit)
    }

    const { data, error } = await query

    if (data) {
        sertifikat.value = data;
        console.log(data)
        loading.value = false;
    }
    if (error) throw error;
};

onMounted(() => {
    getsertifikat();
});

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(certificat, index) in sertifikat" :key="index"
            class="relative aspect-[4/3] rounded-xl shadow-lg overflow-hidden group">
            <div class="w-full h-full">
                <img :src="certificat.img" :alt="certificat.name" class="w-full h-full object-contain bg-gray-100">
            </div>
        </div>
    </div>
</template>

<style scoped>
.group {
    transition: all 0.3s ease;
}

.group:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}
</style>