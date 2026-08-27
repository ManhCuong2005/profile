<template>
  <section class="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 overflow-hidden">
    <!-- Ambient Glow Effects -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-brand-500/15 dark:bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/3 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Mobile Profile Card & Header Layout -->
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-8">
        
        <!-- Left: Text content -->
        <div class="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 w-full">
          
          <!-- Status Pill -->
          <div v-if="personal.openToWork" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{{ personal.workStatusText || 'Sẵn sàng nhận dự án mới' }}</span>
          </div>

          <!-- Main Title & Role -->
          <div class="space-y-1 sm:space-y-2">
            <h2 class="text-xs sm:text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
              Xin chào, tôi là
            </h2>
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              <span class="bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {{ personal.fullName }}
              </span>
            </h1>
            <p class="text-lg sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
              {{ personal.title }}
            </p>
          </div>

          <!-- Short Subtitle -->
          <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0">
            {{ personal.subtitle }}
          </p>

          <!-- Mobile Quick Action Strip (Call / Mail / Location) -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800">
              <MapPin class="w-3.5 h-3.5 text-brand-500" />
              {{ personal.location }}
            </span>
            <a :href="`mailto:${personal.email}`" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-brand-500 active:scale-95 transition-all">
              <Mail class="w-3.5 h-3.5 text-brand-500" />
              <span class="hidden xs:inline">{{ personal.email }}</span>
              <span class="xs:hidden">Email</span>
            </a>
            <a :href="`tel:${personal.phone}`" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-brand-500 active:scale-95 transition-all">
              <Phone class="w-3.5 h-3.5 text-brand-500" />
              {{ personal.phone }}
            </a>
          </div>

          <!-- Call to Action Buttons (Full width on small screens) -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
            <a 
              href="#contact" 
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 active:scale-95 transition-all"
            >
              <Send class="w-4 h-4" />
              <span>Liên hệ hợp tác</span>
            </a>

            <div class="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3">
              <a 
                href="#projects" 
                class="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-700 active:scale-95 transition-all shadow-sm"
              >
                <FolderGit2 class="w-4 h-4 text-brand-500" />
                <span>Xem dự án</span>
              </a>

              <button 
                @click="$emit('open-cv')"
                class="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm active:scale-95 transition-all"
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
              class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all"
              title="GitHub"
            >
              <Github class="w-4 h-4" />
            </a>
            <a 
              v-if="personal.linkedin" 
              :href="personal.linkedin" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all"
              title="LinkedIn"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a 
              v-if="personal.facebook" 
              :href="personal.facebook" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 active:scale-90 transition-all"
              title="Facebook"
            >
              <Facebook class="w-4 h-4" />
            </a>
          </div>

        </div>

        <!-- Right / Mobile Top: Avatar Image with Floating Badges -->
        <div class="flex-shrink-0 relative my-2 sm:my-0">
          <div class="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
            <!-- Glow background circle -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-600 via-indigo-500 to-purple-500 blur-2xl opacity-40 dark:opacity-60 animate-pulse-slow"></div>
            
            <!-- Outer Ring Border -->
            <div class="relative w-full h-full rounded-full p-1.5 sm:p-2 bg-gradient-to-tr from-brand-500 via-indigo-400 to-purple-500 shadow-2xl">
              <div class="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-4 border-white dark:border-slate-950">
                <img 
                  :src="personal.avatar" 
                  :alt="personal.fullName" 
                  class="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <!-- Floating Badge: Experience (Responsive sized) -->
            <div class="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white/95 dark:bg-slate-900/95 glass border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl flex items-center gap-2 sm:gap-3 animate-float">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
                <Sparkles class="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Kinh nghiệm</p>
                <p class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">3+ Năm</p>
              </div>
            </div>

            <!-- Floating Badge: Code -->
            <div class="absolute top-1 -right-2 sm:top-6 sm:right-0 bg-white/95 dark:bg-slate-900/95 glass border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl flex items-center gap-2 sm:gap-3">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 class="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Chất lượng</p>
                <p class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">Clean Code</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Quick Stats Counter Row (Mobile Optimized 2x2 Grid) -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200/70 dark:border-slate-800/70">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="p-3.5 sm:p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 text-center hover:border-brand-500/50 transition-all shadow-sm"
        >
          <span class="block text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
            {{ stat.value }}
          </span>
          <span class="block mt-0.5 sm:mt-1 text-[11px] sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {{ stat.label }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { 
  MapPin, Mail, Phone, Send, FolderGit2, FileDown, 
  Sparkles, CheckCircle2, Github, Linkedin, Facebook 
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

defineEmits(['open-cv'])
</script>
