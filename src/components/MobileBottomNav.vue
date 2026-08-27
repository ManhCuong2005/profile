<template>
  <div class="md:hidden fixed bottom-3 left-3 right-3 z-50 no-print">
    <div class="glass border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-1.5 shadow-2xl flex items-center justify-around">
      
      <!-- Home -->
      <a 
        href="#" 
        class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all"
        :class="{ 'text-brand-600 dark:text-brand-400 font-bold bg-brand-50/80 dark:bg-brand-950/60': currentHash === '' || currentHash === '#' }"
      >
        <Home class="w-5 h-5" />
        <span class="text-[10px] mt-0.5">Trang chủ</span>
      </a>

      <!-- Experience -->
      <a 
        href="#experience" 
        class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all"
        :class="{ 'text-brand-600 dark:text-brand-400 font-bold bg-brand-50/80 dark:bg-brand-950/60': currentHash === '#experience' }"
      >
        <Briefcase class="w-5 h-5" />
        <span class="text-[10px] mt-0.5">Kinh nghiệm</span>
      </a>

      <!-- Center CV Action Button -->
      <button 
        @click="$emit('open-cv')"
        class="flex flex-col items-center justify-center -mt-5 p-3 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-500/40 active:scale-90 transition-all"
        title="Xem CV"
      >
        <FileText class="w-5 h-5" />
      </button>

      <!-- Projects -->
      <a 
        href="#projects" 
        class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all"
        :class="{ 'text-brand-600 dark:text-brand-400 font-bold bg-brand-50/80 dark:bg-brand-950/60': currentHash === '#projects' }"
      >
        <FolderGit2 class="w-5 h-5" />
        <span class="text-[10px] mt-0.5">Dự án</span>
      </a>

      <!-- Contact -->
      <a 
        href="#contact" 
        class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all"
        :class="{ 'text-brand-600 dark:text-brand-400 font-bold bg-brand-50/80 dark:bg-brand-950/60': currentHash === '#contact' }"
      >
        <Send class="w-5 h-5" />
        <span class="text-[10px] mt-0.5">Liên hệ</span>
      </a>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Home, Briefcase, FolderGit2, Send, FileText } from 'lucide-vue-next'

defineEmits(['open-cv'])

const currentHash = ref(window.location.hash)

const updateHash = () => {
  currentHash.value = window.location.hash
}

onMounted(() => {
  window.addEventListener('hashchange', updateHash)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', updateHash)
})
</script>
