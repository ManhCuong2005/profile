<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[999] overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 no-print"
        @click.self="$emit('close')"
      >
        <!-- Modal Card -->
        <div 
          class="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden flex flex-col items-center p-6 sm:p-8 animate-fade-in"
          @click.stop
        >
          
          <!-- Close Button (Top Right) -->
          <button 
            type="button"
            @click="$emit('close')"
            class="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-90 transition-all cursor-pointer z-10"
            title="Đóng (Esc)"
            aria-label="Đóng"
          >
            <X class="w-5 h-5" />
          </button>

          <!-- Header Info -->
          <div class="text-center mb-6">
            <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
              {{ personal.fullName }}
            </h3>
            <p class="text-xs sm:text-sm text-brand-600 dark:text-brand-400 font-semibold mt-0.5">
              {{ personal.title }}
            </p>
          </div>

          <!-- Large Avatar Container -->
          <div class="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-brand-600 via-indigo-500 to-purple-500 shadow-2xl my-2 group">
            <div class="w-full h-full rounded-full overflow-hidden bg-slate-950 border-4 border-white dark:border-slate-900 shadow-inner">
              <img 
                :src="personal.avatar" 
                :alt="personal.fullName" 
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="flex items-center gap-3 mt-6 w-full justify-center">
            <a 
              :href="personal.avatar" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm active:scale-95 transition-all"
            >
              <ExternalLink class="w-4 h-4 text-brand-500" />
              <span>Mở ảnh gốc</span>
            </a>

            <button 
              type="button"
              @click="$emit('close')"
              class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <span>Đóng lại</span>
            </button>
          </div>

        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { X, ExternalLink } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  personal: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>
