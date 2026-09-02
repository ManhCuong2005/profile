<template>
  <section id="projects" class="py-14 sm:py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-1.5 sm:mb-2">
          {{ t('projects.sectionLabel') }}
        </h2>
        <p class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('projects.sectionTitle') }}
        </p>
        <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <!-- Filter Categories (Mobile Horizontal Scrollable Chips) -->
      <div class="flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 sm:pb-0 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0">
        <button 
          v-for="filter in filterOptions" 
          :key="filter.value"
          @click="activeFilter = filter.value"
          class="flex-shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 whitespace-nowrap cursor-pointer shadow-sm hover:scale-105"
          :class="[
            activeFilter === filter.value 
              ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md shadow-brand-500/30' 
              : 'bg-white/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Projects Grid with Shimmer & Floating Hover Effects -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="card-shimmer rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-2xl hover:border-brand-500/60 hover:-translate-y-2 transition-all duration-500 flex flex-col group"
        >
          <!-- Thumbnail Image Container with Zoom & Gradient Tint -->
          <div class="relative h-48 sm:h-56 overflow-hidden bg-slate-950">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            
            <!-- Category Badge -->
            <span class="absolute top-3 left-3 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-white/90 dark:bg-slate-900/90 text-brand-600 dark:text-brand-400 backdrop-blur-md shadow-lg border border-white/20">
              {{ project.categoryLabel || project.category }}
            </span>
          </div>

          <!-- Project Body -->
          <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-0.5">
                {{ project.tagline }}
              </p>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <!-- Tech Stack Tags with Glow -->
            <div class="pt-1">
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span 
                  v-for="(tag, tIdx) in project.tags" 
                  :key="tIdx"
                  class="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs font-medium border border-slate-200/50 dark:border-slate-700/50 group-hover:border-brand-500/30 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Action Links (Mobile Touch Friendly) -->
              <div class="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <a 
                  v-if="project.liveUrl" 
                  :href="project.liveUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 hover:bg-brand-600 hover:text-white text-brand-600 dark:text-brand-400 text-xs font-bold active:scale-95 transition-all shadow-sm group-hover:shadow-brand-500/20"
                >
                  <ExternalLink class="w-3.5 h-3.5" />
                  <span>{{ t('projects.demoBtn') }}</span>
                </a>
                <a 
                  v-if="project.githubUrl" 
                  :href="project.githubUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:scale-110 active:scale-90 transition-all shadow-sm"
                  title="Source Code GitHub"
                >
                  <Github class="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ExternalLink, Github } from 'lucide-vue-next'
import { t } from '../composables/useLang.js'

const props = defineProps({
  projects: {
    type: Array,
    default: () => []
  }
})

const activeFilter = ref('all')

const filterOptions = computed(() => [
  { label: t('projects.filterAll'), value: 'all' },
  { label: t('projects.filterWeb'), value: 'web' },
  { label: t('projects.filterDesktop'), value: 'desktop' },
  { label: t('projects.filterDesign'), value: 'design' },
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return props.projects
  return props.projects.filter(p => p.category === activeFilter.value)
})
</script>
