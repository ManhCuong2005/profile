<template>
  <section id="experience" class="py-14 sm:py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-1.5 sm:mb-2">
          Hành trình & Kinh nghiệm
        </h2>
        <p class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Kinh nghiệm làm việc & Học vấn
        </p>
        <div class="w-12 sm:w-16 h-1 bg-brand-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <!-- Tab Switcher (Mobile Friendly Width) -->
      <div class="flex justify-center mb-8 sm:mb-12">
        <div class="w-full sm:w-auto inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800">
          <button 
            @click="activeTab = 'work'"
            class="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all"
            :class="[
              activeTab === 'work' 
                ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            ]"
          >
            <Briefcase class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Kinh nghiệm ({{ experiences.length }})</span>
          </button>
          
          <button 
            @click="activeTab = 'education'"
            class="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all"
            :class="[
              activeTab === 'education' 
                ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            ]"
          >
            <GraduationCap class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Học vấn & Bằng cấp</span>
          </button>
        </div>
      </div>

      <!-- Work Experience Timeline -->
      <div v-show="activeTab === 'work'" class="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-slate-200 dark:before:bg-slate-800">
        
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="relative flex flex-col sm:flex-row items-start group"
          :class="[index % 2 === 0 ? 'sm:flex-row-reverse' : '']"
        >
          <!-- Timeline Indicator Dot -->
          <div class="absolute left-3 sm:left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-brand-500 shadow-md z-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-500"></span>
          </div>

          <!-- Content Card -->
          <div class="w-full sm:w-1/2 pl-8 sm:pl-0" :class="[index % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8']">
            <div class="p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm group-hover:shadow-xl group-hover:border-brand-500/40 transition-all duration-300">
              
              <!-- Period Badge -->
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-[11px] sm:text-xs font-bold mb-2 sm:mb-3">
                <Calendar class="w-3 h-3" />
                {{ exp.period }}
              </span>

              <!-- Role & Company -->
              <h3 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                {{ exp.role }}
              </h3>
              <p class="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1 flex flex-wrap items-center gap-1.5">
                <Building2 class="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                <span>{{ exp.company }}</span>
                <span class="text-slate-400">·</span>
                <span class="text-xs text-slate-500">{{ exp.location }}</span>
              </p>

              <!-- Description -->
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                {{ exp.description }}
              </p>

              <!-- Achievements -->
              <div v-if="exp.achievements && exp.achievements.length" class="mt-3.5 space-y-1.5">
                <p class="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Thành tích nổi bật:</p>
                <ul class="space-y-1">
                  <li 
                    v-for="(achieve, aIdx) in exp.achievements" 
                    :key="aIdx"
                    class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                  >
                    <CheckCircle class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{{ achieve }}</span>
                  </li>
                </ul>
              </div>

              <!-- Tech Stack Tags -->
              <div v-if="exp.techStack" class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1">
                <span 
                  v-for="(tech, tIdx) in exp.techStack" 
                  :key="tIdx"
                  class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] sm:text-xs font-medium"
                >
                  {{ tech }}
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>

      <!-- Education & Certifications Tab -->
      <div v-show="activeTab === 'education'" class="max-w-4xl mx-auto space-y-8">
        
        <!-- Education List -->
        <div class="space-y-4 sm:space-y-6">
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap class="w-5 h-5 sm:w-6 sm:h-6 text-brand-500" />
            <span>Trình độ Học vấn</span>
          </h3>

          <div 
            v-for="(edu, index) in education" 
            :key="index"
            class="p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 sm:space-y-3"
          >
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                {{ edu.period }}
              </span>
              <span v-if="edu.grade" class="text-xs font-semibold px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                {{ edu.grade }}
              </span>
            </div>

            <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {{ edu.degree }}
            </h4>
            <p class="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
              {{ edu.school }}
            </p>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ edu.description }}
            </p>
          </div>
        </div>

        <!-- Certifications List -->
        <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award class="w-5 h-5 sm:w-6 sm:h-6 text-brand-500" />
            <span>Chứng chỉ Chuyên môn</span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div 
              v-for="(cert, index) in certifications" 
              :key="index"
              class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/50 hover:shadow-md transition-all"
            >
              <div>
                <span class="text-xs font-bold text-brand-600 dark:text-brand-400">{{ cert.year }}</span>
                <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
                  {{ cert.name }}
                </h5>
                <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {{ cert.issuer }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Briefcase, GraduationCap, Calendar, Building2, 
  CheckCircle, Award 
} from 'lucide-vue-next'

const activeTab = ref('work')

defineProps({
  experiences: {
    type: Array,
    default: () => []
  },
  education: {
    type: Array,
    default: () => []
  },
  certifications: {
    type: Array,
    default: () => []
  }
})
</script>
