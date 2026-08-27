<template>
  <section id="skills" class="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
          Kỹ năng & Chuyên môn
        </h2>
        <p class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Công nghệ & Năng lực kỹ thuật
        </p>
        <div class="w-16 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Skills Matrix Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(category, cIdx) in categories" 
          :key="cIdx"
          class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
        >
          <!-- Category Header -->
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
              {{ category.name }}
            </h3>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              {{ category.skills.length }} Kỹ năng
            </span>
          </div>

          <!-- Skill Progress List -->
          <div class="space-y-4">
            <div 
              v-for="(skill, sIdx) in category.skills" 
              :key="sIdx"
              class="space-y-1.5"
            >
              <div class="flex justify-between text-sm">
                <span class="font-semibold text-slate-700 dark:text-slate-200">
                  {{ skill.name }}
                </span>
                <span class="font-mono text-xs font-bold text-brand-600 dark:text-brand-400">
                  {{ skill.level }}%
                </span>
              </div>

              <!-- Bar -->
              <div class="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  class="h-full rounded-full bg-gradient-to-r from-brand-600 to-indigo-500 transition-all duration-1000 ease-out"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    default: () => []
  }
})
</script>
