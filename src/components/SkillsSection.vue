<template>
  <section id="skills" class="py-14 sm:py-20 bg-slate-100/50 dark:bg-slate-900/40 relative overflow-hidden">
    
    <!-- Decorative Orbs -->
    <div class="absolute -top-20 -right-20 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
    <div class="absolute bottom-0 -left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-3 border border-brand-200/50 dark:border-brand-800/50">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
          {{ t('skills.sectionLabel') }}
        </span>
        <p class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('skills.sectionTitle') }}
        </p>
        <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-600 to-purple-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <!-- Skills Matrix Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        <div 
          v-for="(category, cIdx) in categories" 
          :key="cIdx"
          class="card-shimmer p-5 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/40 hover:-translate-y-0.5 transition-all duration-300 space-y-5"
        >
          <!-- Category Header -->
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-brand-500 to-indigo-500"></span>
              {{ category.name }}
            </h3>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200/50">
              {{ category.skills.length }} {{ t('skills.skillCount') }}
            </span>
          </div>

          <!-- Skill Progress List -->
          <div class="space-y-4">
            <div 
              v-for="(skill, sIdx) in category.skills" 
              :key="sIdx"
              class="space-y-1.5 group"
            >
              <div class="flex justify-between text-xs sm:text-sm">
                <span class="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {{ skill.name }}
                </span>
                <span class="font-mono font-bold text-brand-600 dark:text-brand-400">
                  {{ skill.level }}%
                </span>
              </div>

              <!-- Animated Progress Bar -->
              <div class="w-full h-2 sm:h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  class="h-full rounded-full bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-500 transition-all duration-1000 ease-out relative overflow-hidden"
                  :style="{ width: `${skill.level}%` }"
                >
                  <!-- Shimmer on bar -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { t } from '../composables/useLang.js'

defineProps({
  categories: {
    type: Array,
    default: () => []
  }
})
</script>
