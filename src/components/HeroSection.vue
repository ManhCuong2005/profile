<template>
  <section class="relative pt-20 pb-10 sm:pt-28 sm:pb-14 overflow-hidden bg-grid-pattern">

    <!-- Ambient Glow Orbs -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-gradient-to-tr from-brand-600/20 via-indigo-500/15 to-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
    <div class="absolute top-8 right-0 w-52 h-52 bg-pink-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
    <div class="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-float-reverse"></div>

    <!-- Floating Tech Badges (Desktop only) -->
    <div class="hidden lg:block absolute top-28 left-[6%] px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900/80 glass border border-slate-200/80 dark:border-slate-800 shadow-lg text-xs font-mono font-bold text-brand-600 dark:text-brand-400 animate-float pointer-events-none">⚡ Java & Spring Boot</div>
    <div class="hidden lg:block absolute top-44 right-[8%] px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900/80 glass border border-slate-200/80 dark:border-slate-800 shadow-lg text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 animate-float-slow pointer-events-none">🌐 TCP / UDP Sockets</div>
    <div class="hidden lg:block absolute bottom-28 left-[10%] px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900/80 glass border border-slate-200/80 dark:border-slate-800 shadow-lg text-xs font-mono font-bold text-purple-600 dark:text-purple-400 animate-float-reverse pointer-events-none">🤖 AI & Blockchain</div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- ===== MOBILE HERO CARD (stacked vertical) ===== -->
      <div class="flex flex-col items-center gap-5 animate-fade-in-up">

        <!-- Avatar + Status (centered on mobile) -->
        <div class="relative flex-shrink-0">
          <!-- Glow halo -->
          <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-600 via-indigo-500 to-purple-500 blur-xl opacity-40 animate-pulse-glow pointer-events-none scale-110"></div>

          <!-- Avatar -->
          <div
            role="button"
            tabindex="0"
            @click="$emit('open-avatar')"
            @keydown.enter="$emit('open-avatar')"
            class="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full p-[3px] bg-gradient-to-tr from-brand-500 via-indigo-400 to-purple-500 shadow-2xl group cursor-pointer focus:outline-none focus:ring-4 focus:ring-brand-500/40 hover:scale-105 active:scale-95 transition-all duration-300 z-10"
            title="Nhấn để xem ảnh phóng to"
          >
            <div class="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-slate-950">
              <img
                :src="personal.avatar"
                :alt="personal.fullName"
                class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 select-none"
              />
              <div class="absolute inset-0 rounded-full bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                <ZoomIn class="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <!-- Open to work badge -->
          <div v-if="personal.openToWork" class="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] sm:text-xs font-bold shadow-lg shadow-emerald-500/30 z-20">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
            {{ t('hero.openToWork') }}
          </div>
        </div>

        <!-- Name + Role + Meta -->
        <div class="text-center w-full space-y-3">

          <!-- Greeting + Name -->
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">{{ t('hero.greeting') }}</p>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span class="bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient-flow">
                {{ personal.fullName }}
              </span>
            </h1>
          </div>

          <!-- Animated typing role -->
          <div class="h-7 sm:h-9 flex items-center justify-center gap-1">
            <span class="text-base sm:text-xl font-bold text-slate-700 dark:text-slate-200">{{ currentRoleText }}</span>
            <span class="w-0.5 h-5 bg-brand-500 animate-pulse ml-0.5"></span>
          </div>

          <!-- Identity pills row -->
          <div class="flex flex-wrap items-center justify-center gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400 text-[11px] font-bold border border-brand-200/50 dark:border-brand-800">
              {{ t('hero.pillDegree') }}
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 text-[11px] font-bold border border-amber-200/50 dark:border-amber-800">
              {{ t('hero.pillGpa') }}
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold border border-emerald-200/50 dark:border-emerald-800">
              {{ t('hero.pillCert') }}
            </span>
          </div>

          <!-- Contact strip -->
          <div class="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
            <span class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm">
              <MapPin class="w-3 h-3 text-brand-500" />{{ personal.location }}
            </span>
            <a :href="`tel:${personal.phone}`" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-brand-500 active:scale-95 transition-all">
              <Phone class="w-3 h-3 text-brand-500" />{{ personal.phone }}
            </a>
            <a :href="`mailto:${personal.email}`" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-brand-500 active:scale-95 transition-all">
              <Mail class="w-3 h-3 text-brand-500" />
              <span class="hidden sm:inline">{{ personal.email }}</span>
              <span class="sm:hidden">Email</span>
            </a>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 pt-1">
            <a
              href="#contact"
              class="card-shimmer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-brand-500/25 hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <Send class="w-4 h-4" />{{ t('hero.contactBtn') }}
            </a>
            <div class="grid grid-cols-2 gap-2 sm:flex sm:gap-2">
              <a href="#projects" class="card-shimmer inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm">
                <FolderGit2 class="w-4 h-4 text-brand-500" />{{ t('hero.projectsBtn') }}
              </a>
              <button type="button" @click="$emit('open-cv')" class="card-shimmer inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer">
                <FileDown class="w-4 h-4 text-brand-500" />{{ t('hero.cvBtn') }}
              </button>
            </div>
          </div>

          <!-- Social links -->
          <div class="flex items-center justify-center gap-2.5 pt-1">
            <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{{ t('hero.followLabel') }}</span>
            <a v-if="personal.github" :href="personal.github" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 active:scale-90 shadow-sm transition-all" title="GitHub">
              <Github class="w-4 h-4" />
            </a>
            <a v-if="personal.facebook" :href="personal.facebook" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 active:scale-90 shadow-sm transition-all" title="Facebook">
              <Facebook class="w-4 h-4" />
            </a>
            <a v-if="personal.telegram" :href="personal.telegram" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 active:scale-90 shadow-sm transition-all" title="Telegram">
              <MessageCircle class="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      <!-- ===== STATS ROW ===== -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 sm:mt-10 pt-6 border-t border-slate-200/70 dark:border-slate-800/70">
        <div
          v-for="(stat, i) in stats" :key="i"
          class="card-shimmer p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-center hover:border-brand-500/50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shadow-sm group"
        >
          <span class="block text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-600">
            {{ stat.value }}
          </span>
          <span class="block mt-1 text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 leading-tight">
            {{ stat.label }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { MapPin, Mail, Phone, Send, FolderGit2, FileDown, Github, Facebook, MessageCircle, ZoomIn } from 'lucide-vue-next'
import { t, lang } from '../composables/useLang.js'

defineProps({
  personal: { type: Object, required: true },
  stats: { type: Array, default: () => [] }
})
defineEmits(['open-cv', 'open-avatar'])

const currentRoleText = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typingInterval = null

const updateTyping = () => {
  const currentFullRole = t('hero.roles')[roleIndex]
  if (!currentFullRole) return
  if (isDeleting) {
    charIndex--
    currentRoleText.value = currentFullRole.substring(0, charIndex)
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % t('hero.roles').length
    }
  } else {
    charIndex++
    currentRoleText.value = currentFullRole.substring(0, charIndex)
    if (charIndex === currentFullRole.length) {
      isDeleting = true
      clearInterval(typingInterval)
      setTimeout(() => { typingInterval = setInterval(updateTyping, 40) }, 1500)
      return
    }
  }
}

watch(lang, () => {
  if (typingInterval) clearInterval(typingInterval)
  roleIndex = 0
  charIndex = 0
  isDeleting = false
  currentRoleText.value = ''
  setTimeout(() => { typingInterval = setInterval(updateTyping, 60) }, 100)
})

onMounted(() => { 
  currentRoleText.value = t('hero.roles')[0] || ''
  charIndex = currentRoleText.value.length
  isDeleting = true
  setTimeout(() => { typingInterval = setInterval(updateTyping, 40) }, 1500)
})
onUnmounted(() => { if (typingInterval) clearInterval(typingInterval) })
</script>
