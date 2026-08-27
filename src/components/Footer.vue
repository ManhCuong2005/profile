<template>
  <footer class="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 no-print transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <!-- Left: Brand & Copyright -->
        <div class="text-center sm:text-left space-y-1">
          <p class="font-bold text-slate-800 dark:text-white">
            {{ personal.fullName }}
          </p>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            © {{ currentYear }} Bản quyền thuộc về tác giả. Thiết kế với Vue 3 + Tailwind CSS.
          </p>
        </div>

        <!-- Middle: Social Links -->
        <div class="flex items-center gap-3">
          <a 
            v-if="personal.github" 
            :href="personal.github" 
            target="_blank" 
            class="p-2 rounded-xl text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Github class="w-4 h-4" />
          </a>
          <a 
            v-if="personal.linkedin" 
            :href="personal.linkedin" 
            target="_blank" 
            class="p-2 rounded-xl text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Linkedin class="w-4 h-4" />
          </a>
          <a 
            v-if="personal.facebook" 
            :href="personal.facebook" 
            target="_blank" 
            class="p-2 rounded-xl text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Facebook class="w-4 h-4" />
          </a>
        </div>

        <!-- Right: Scroll to top -->
        <div>
          <button 
            @click="scrollToTop"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors"
          >
            <ArrowUp class="w-3.5 h-3.5" />
            <span>Về đầu trang</span>
          </button>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Github, Linkedin, Facebook, ArrowUp } from 'lucide-vue-next'

defineProps({
  personal: {
    type: Object,
    required: true
  }
})

const currentYear = computed(() => new Date().getFullYear())

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
