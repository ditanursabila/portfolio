<script setup>
const supabase = useSupabaseClient();
const project = ref([]);
const loading = ref(true);


const props = defineProps({
   limit: {
      type: Number,
      default: null
   }
});

const getProject = async () => {
   loading.value = true;
   let query = supabase
      .from("project")
      .select(`id, name, link, img, tech, description`)

   if (props.limit) {
      query = query.limit(props.limit)
   }

   const { data, error } = await query

   if (data) {
      project.value = data;
      console.log(data)
      loading.value = false;
   }
   if (error) throw error;
};

onMounted(() => {
   getProject();
});

</script>

<template>
   <div>
      <div v-if="loading">
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="i in 6" :key="i"
               class="animate-pulse relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 h-full flex flex-col">
               <div class="relative h-48 sm:h-56 md:h-64 p-3 rounded-xl overflow-hidden">
                  <div class="w-full h-full rounded-lg bg-white/10"></div>
               </div>
               <div class="p-6 flex flex-col flex-grow space-y-4">
                  <div class="h-7 bg-white/10 rounded-md w-3/4"></div>
                  <div class="space-y-2 flex-grow">
                     <div class="h-4 bg-white/10 rounded-md w-full"></div>
                     <div class="h-4 bg-white/10 rounded-md w-5/6"></div>
                     <div class="h-4 bg-white/10 rounded-md w-4/6"></div>
                  </div>
                  <div class="flex items-center justify-between pt-4 border-t border-white/10">
                     <div class="flex flex-wrap gap-2">
                        <div class="h-6 bg-white/10 rounded-full w-16"></div>
                        <div class="h-6 bg-white/10 rounded-full w-20"></div>
                        <div class="h-6 bg-white/10 rounded-full w-14"></div>
                     </div>
                     <div class="h-6 bg-white/10 rounded-full w-6"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div v-else>
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="group" v-for="(projek, i) in project" :key="i">
               <div
                  class="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-secondary h-full flex flex-col">
                  <div class="relative h-48 sm:h-56 md:h-64 p-3 rounded-xl overflow-hidden">
                     <div :style="{
                        backgroundImage: `url(${projek.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                     }" class="w-full h-full rounded-lg ">
                     </div>
                  </div>

                  <div class="p-6 flex flex-col flex-grow">
                     <h3 class="text-lg md:text-xl font-semibold text-pink-600 mb-3">{{ projek.name }}</h3>
                     <p class="text-sm md:text-base text-gray-800 mb-2 flex-grow">{{ projek.description }}</p>

                     <a :href="projek.link" target="_blank" rel="noopener noreferrer"
                        class="text-gray-800 hover:text-black transition-colors mb-2">
                        <div class="flex items-center gap-2">
                           <svg class="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                 d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                           </svg>
                        </div>
                     </a>
                     <div class="flex items-center justify-between pt-4 border-t border-white/10">
                        <div class="flex flex-wrap justify-start gap-2 mb-4">
                           <span v-for="(tech, i) in projek.tech" :key="i"
                              class="px-2 md:px-3 py-1 text-xs rounded-full bg-base-100 text-neutral hover:bg-secondary transition-colors">
                              {{ tech }}
                           </span>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.backdrop-blur-md {
   backdrop-filter: blur(12px);
   -webkit-backdrop-filter: blur(12px);
}
</style>