<template>
  <section id="projects" class="py-14 sm:py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-1.5 sm:mb-2">
          Dự án tiêu biểu
        </h2>
        <p class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Sản phẩm thực tế & Cá nhân
        </p>
        <div class="w-12 sm:w-16 h-1 bg-brand-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <!-- Filter Categories (Mobile Horizontal Scrollable Chips) -->
      <div class="flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 sm:pb-0 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0">
        <button 
          v-for="filter in filterOptions" 
          :key="filter.value"
          @click="activeFilter = filter.value"
          class="flex-shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 whitespace-nowrap"
          :class="[
            activeFilter === filter.value 
              ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25' 
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl hover:border-brand-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
        >
          <!-- Thumbnail Image -->
          <div class="relative h-44 sm:h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
            
            <!-- Category Badge -->
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-white/90 dark:bg-slate-900/90 text-brand-600 dark:text-brand-400 backdrop-blur-md shadow-sm">
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

            <!-- Tech Stack Tags -->
            <div class="pt-1">
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span 
                  v-for="(tag, tIdx) in project.tags" 
                  :key="tIdx"
                  class="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] sm:text-xs font-medium"
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
                  class="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 hover:bg-brand-100 text-brand-600 dark:text-brand-400 text-xs font-bold active:scale-95 transition-all"
                >
                  <ExternalLink class="w-3.5 h-3.5" />
                  <span>Trải nghiệm Demo</span>
                </a>
                <a 
                  v-if="project.githubUrl" 
                  :href="project.githubUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 active:scale-90 transition-all"
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

const props = defineProps({
  projects: {
    type: Array,
    default: () => []
  }
})

const activeFilter = ref('all')

const filterOptions = [
  { label: 'Tất cả dự án', value: 'all' },
  { label: 'Web Application', value: 'web' },
  { label: 'Mobile App', value: 'mobile' },
  { label: 'UI/UX & Khác', value: 'design' }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return props.projects
  return props.projects.filter(p => p.category === activeFilter.value)
})
</script>
