<template>
  <section class="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-pattern">
    
    <!-- Floating Ambient Glow Orbs -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-gradient-to-tr from-brand-600/20 via-indigo-500/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
    <div class="absolute top-10 right-4 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-pink-500/15 dark:bg-pink-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
    <div class="absolute bottom-10 left-4 sm:left-16 w-60 sm:w-96 h-60 sm:h-96 bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-float-reverse"></div>

    <!-- Floating Tech Particles (Decorative Floating Badges) -->
    <div class="hidden lg:block absolute top-28 left-[8%] px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 glass border border-slate-200/80 dark:border-slate-800 shadow-xl text-xs font-mono font-bold text-brand-600 dark:text-brand-400 animate-float pointer-events-none">
      ⚡ Java & Spring Boot
    </div>
    <div class="hidden lg:block absolute top-40 right-[10%] px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 glass border border-slate-200/80 dark:border-slate-800 shadow-xl text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 animate-float-slow pointer-events-none">
      🌐 TCP / UDP Sockets
    </div>
    <div class="hidden lg:block absolute bottom-36 left-[12%] px-3.5 py-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 glass border border-slate-200/80 dark:border-slate-800 shadow-xl text-xs font-mono font-bold text-purple-600 dark:text-purple-400 animate-float-reverse pointer-events-none">
      🤖 AI & Blockchain Web3
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Mobile Profile Card & Header Layout -->
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-8">
        
        <!-- Left: Text content with Stagger Animation -->
        <div class="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 w-full animate-fade-in-up">
          
          <!-- Status Pill with Glow Pulse -->
          <div v-if="personal.openToWork" class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shadow-sm hover:shadow-emerald-500/20 transition-all">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{{ personal.workStatusText || 'Sẵn sàng nhận dự án mới' }}</span>
          </div>

          <!-- Main Title & Animated Typing Role -->
          <div class="space-y-1 sm:space-y-2">
            <h2 class="text-xs sm:text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
              Xin chào, tôi là
            </h2>
            
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              <span class="bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient-flow">
                {{ personal.fullName }}
              </span>
            </h1>

            <!-- Dynamic Animated Typing Text -->
            <div class="h-8 sm:h-10 flex items-center justify-center lg:justify-start gap-1">
              <span class="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-200">
                {{ currentRoleText }}
              </span>
              <span class="w-0.5 h-6 bg-brand-500 animate-pulse"></span>
            </div>
          </div>

          <!-- Short Subtitle -->
          <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0">
            {{ personal.subtitle }}
          </p>

          <!-- Mobile Quick Action Strip (Call / Mail / Location) -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:scale-105 transition-transform">
              <MapPin class="w-3.5 h-3.5 text-brand-500" />
              {{ personal.location }}
            </span>
            <a :href="`mailto:${personal.email}`" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-brand-500 hover:scale-105 active:scale-95 transition-all shadow-sm">
              <Mail class="w-3.5 h-3.5 text-brand-500" />
              <span class="hidden xs:inline">{{ personal.email }}</span>
              <span class="xs:hidden">Email</span>
            </a>
            <a :href="`tel:${personal.phone}`" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-brand-500 hover:scale-105 active:scale-95 transition-all shadow-sm">
              <Phone class="w-3.5 h-3.5 text-brand-500" />
              {{ personal.phone }}
            </a>
          </div>

          <!-- Call to Action Buttons -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
            <a 
              href="#contact" 
              class="card-shimmer inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <Send class="w-4 h-4" />
              <span>Liên hệ hợp tác</span>
            </a>

            <div class="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3">
              <a 
                href="#projects" 
                class="card-shimmer inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm"
              >
                <FolderGit2 class="w-4 h-4 text-brand-500" />
                <span>Xem dự án</span>
              </a>

              <button 
                type="button"
                @click="$emit('open-cv')"
                class="card-shimmer inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
              >
                <FileDown class="w-4 h-4 text-brand-500" />
                <span>Bản in CV</span>
              </button>
            </div>
          </div>

          <!-- Social Links on Mobile -->
          <div class="flex items-center justify-center lg:justify-start gap-3 pt-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Mạng xã hội:</span>
            <a 
              v-if="personal.github" 
              :href="personal.github" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 active:scale-90 shadow-sm transition-all"
              title="GitHub"
            >
              <Github class="w-4 h-4" />
            </a>
            <a 
              v-if="personal.linkedin" 
              :href="personal.linkedin" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 active:scale-90 shadow-sm transition-all"
              title="LinkedIn"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a 
              v-if="personal.facebook" 
              :href="personal.facebook" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 active:scale-90 shadow-sm transition-all"
              title="Facebook"
            >
              <Facebook class="w-4 h-4" />
            </a>
          </div>

        </div>

        <!-- Right / Mobile Top: Avatar Image (Click to Zoom in with Floating Badges) -->
        <div class="flex-shrink-0 relative my-2 sm:my-0">
          <div class="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
            
            <!-- Glow background spinning halo -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-600 via-indigo-500 to-purple-500 blur-2xl opacity-50 dark:opacity-70 animate-pulse-glow pointer-events-none"></div>
            
            <!-- Interactive Avatar Container -->
            <div 
              role="button"
              tabindex="0"
              @click="$emit('open-avatar')"
              @keydown.enter="$emit('open-avatar')"
              class="relative w-full h-full rounded-full p-2 sm:p-2.5 bg-gradient-to-tr from-brand-500 via-indigo-400 to-purple-500 shadow-2xl group cursor-pointer focus:outline-none focus:ring-4 focus:ring-brand-500/40 hover:scale-105 active:scale-95 transition-all duration-300 z-20"
              title="Nhấn vào để xem ảnh đại diện phóng to"
            >
              <div class="relative w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-4 border-white dark:border-slate-950 shadow-inner">
                <img 
                  :src="personal.avatar" 
                  :alt="personal.fullName" 
                  class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 select-none"
                />
                <!-- Hover Overlay with Zoom Icon -->
                <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300 pointer-events-none backdrop-blur-[2px]">
                  <ZoomIn class="w-7 h-7 sm:w-10 sm:h-10 text-white drop-shadow-md group-hover:scale-110 transition-transform" />
                  <span class="text-[10px] sm:text-xs font-bold mt-1 bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-white/20">Xem to</span>
                </div>
              </div>
            </div>

            <!-- Floating Badge: Experience (Floating animation 1) -->
            <div class="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white/95 dark:bg-slate-900/95 glass border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl flex items-center gap-2 sm:gap-3 animate-float pointer-events-none z-30">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold shadow-inner">
                <Sparkles class="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
              </div>
              <div>
                <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Học vấn</p>
                <p class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">GPA 3.1 / 4.0</p>
              </div>
            </div>

            <!-- Floating Badge: FPT Software Certificate (Floating animation 2) -->
            <div class="absolute top-1 -right-2 sm:top-6 sm:right-0 bg-white/95 dark:bg-slate-900/95 glass border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl flex items-center gap-2 sm:gap-3 animate-bounce-soft pointer-events-none z-30">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shadow-inner">
                <CheckCircle2 class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
              </div>
              <div>
                <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">FPT Software</p>
                <p class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">Java Web Pass</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Quick Stats Counter Row with Card Shimmer & Hover Lift -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200/70 dark:border-slate-800/70">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="card-shimmer p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-center hover:border-brand-500/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm group"
        >
          <span class="block text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-600 group-hover:scale-110 transition-transform">
            {{ stat.value }}
          </span>
          <span class="block mt-1 text-[11px] sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {{ stat.label }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  MapPin, Mail, Phone, Send, FolderGit2, FileDown, 
  Sparkles, CheckCircle2, Github, Linkedin, Facebook, ZoomIn 
} from 'lucide-vue-next'

defineProps({
  personal: {
    type: Object,
    required: true
  },
  stats: {
    type: Array,
    default: () => []
  }
})

defineEmits(['open-cv', 'open-avatar'])

// Typing Role Animation
const roles = [
  "Software Engineer",
  "Java & Spring Boot Developer",
  "TCP / UDP Socket Realtime Multi-threading",
  "AI Face Recognition & Blockchain Web3"
]

const currentRoleText = ref(roles[0])
let roleIndex = 0
let charIndex = roles[0].length
let isDeleting = false
let typingInterval = null

const updateTyping = () => {
  const currentFullRole = roles[roleIndex]
  
  if (isDeleting) {
    charIndex--
    currentRoleText.value = currentFullRole.substring(0, charIndex)
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  } else {
    charIndex++
    currentRoleText.value = currentFullRole.substring(0, charIndex)
    if (charIndex === currentFullRole.length) {
      isDeleting = true
      clearInterval(typingInterval)
      setTimeout(() => {
        typingInterval = setInterval(updateTyping, 40)
      }, 1500)
      return
    }
  }
}

onMounted(() => {
  typingInterval = setInterval(updateTyping, 60)
})

onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval)
})
</script>
