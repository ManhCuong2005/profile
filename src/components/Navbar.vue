<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print" :class="[isScrolled ? 'glass shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3' : 'bg-transparent py-5']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-2.5 group">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform">
          {{ brandInitials }}
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-base sm:text-lg tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {{ personal.fullName }}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Digital CV & Portfolio</span>
        </div>
      </a>

      <!-- Desktop Navigation Menu -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2">
        <a 
          v-for="item in navItems" 
          :key="item.href" 
          :href="item.href"
          class="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Action Buttons (Theme Toggle & CV Action) -->
      <div class="hidden sm:flex items-center gap-3">
        <!-- Theme Toggle -->
        <button 
          @click="toggleTheme" 
          class="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
          :title="isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'"
        >
          <Sun v-if="isDark" class="w-5 h-5 text-amber-400" />
          <Moon v-else class="w-5 h-5 text-slate-600" />
        </button>

        <!-- View / Print CV Button -->
        <button 
          @click="$emit('open-cv')"
          class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm hover:shadow-md shadow-brand-600/20 active:scale-95 transition-all"
        >
          <FileText class="w-4 h-4" />
          <span>Xem & In CV</span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2 md:hidden">
        <button 
          @click="toggleTheme" 
          class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Sun v-if="isDark" class="w-5 h-5 text-amber-400" />
          <Moon v-else class="w-5 h-5 text-slate-600" />
        </button>

        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
        >
          <X v-if="isMobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>

    </div>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden glass border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl"
      >
        <a 
          v-for="item in navItems" 
          :key="item.href" 
          :href="item.href"
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-600 transition-colors"
        >
          {{ item.label }}
        </a>

        <div class="pt-3 border-t border-slate-200 dark:border-slate-800">
          <button 
            @click="$emit('open-cv'); isMobileMenuOpen = false"
            class="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm"
          >
            <FileText class="w-4 h-4" />
            <span>Xem & In CV (Bản Chuẩn)</span>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, FileText, Menu, X } from 'lucide-vue-next'

const props = defineProps({
  personal: {
    type: Object,
    required: true
  },
  isDark: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-theme', 'open-cv'])

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Kinh nghiệm', href: '#experience' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Liên hệ', href: '#contact' },
]

const brandInitials = computed(() => {
  if (!props.personal.fullName) return 'CV'
  const names = props.personal.fullName.trim().split(' ')
  if (names.length === 1) return names[0].substring(0, 2).toUpperCase()
  return (names[0][0] + names[names.length - 1][0]).toUpperCase()
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleTheme = () => {
  emit('toggle-theme')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
