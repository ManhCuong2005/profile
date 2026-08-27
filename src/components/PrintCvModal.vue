<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
    @click.self="$emit('close')"
  >
    <div class="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full sm:h-auto sm:max-h-[90vh]">
      
      <!-- Modal Top Bar -->
      <div class="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/80 no-print flex-shrink-0">
        <div class="flex items-center gap-2">
          <FileText class="w-5 h-5 text-brand-600 dark:text-brand-400" />
          <h3 class="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-base">
            Bản xem trước CV (A4 / PDF)
          </h3>
        </div>

        <div class="flex items-center gap-2 sm:gap-3">
          <button 
            @click="triggerPrint"
            class="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all"
          >
            <Printer class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>In / Lưu PDF</span>
          </button>
          
          <button 
            @click="$emit('close')"
            class="p-2 rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-90 transition-all"
            aria-label="Đóng"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Printable CV Content -->
      <div class="overflow-y-auto p-4 sm:p-10 bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 flex-1" id="cv-print-area">
        
        <!-- CV Header -->
        <div class="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-slate-200 dark:border-slate-800">
          <div class="text-center sm:text-left space-y-1 w-full">
            <h1 class="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
              {{ profile.personal.fullName }}
            </h1>
            <p class="text-sm sm:text-base font-bold text-brand-600 dark:text-brand-400">
              {{ profile.personal.title }}
            </p>
            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 pt-1.5">
              <span>📍 {{ profile.personal.location }}</span>
              <span>📧 {{ profile.personal.email }}</span>
              <span>📞 {{ profile.personal.phone }}</span>
            </div>
          </div>

          <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-brand-500 flex-shrink-0 shadow-md">
            <img :src="profile.personal.avatar" :alt="profile.personal.fullName" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Section: Professional Summary -->
        <div class="py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800">
          <h4 class="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1.5">
            Mục tiêu & Tóm tắt nghề nghiệp
          </h4>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {{ profile.personal.summary }}
          </p>
        </div>

        <!-- Section: Work Experience -->
        <div class="py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800 space-y-3.5">
          <h4 class="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Kinh nghiệm làm việc
          </h4>

          <div 
            v-for="(exp, idx) in profile.experiences" 
            :key="idx"
            class="space-y-1"
          >
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {{ exp.role }} - <span class="text-brand-600 dark:text-brand-400 font-semibold">{{ exp.company }}</span>
              </h5>
              <span class="text-[11px] sm:text-xs font-mono font-medium text-slate-500">{{ exp.period }}</span>
            </div>
            <p class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">{{ exp.description }}</p>
            
            <ul v-if="exp.achievements" class="list-disc list-inside space-y-0.5 text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 pl-1">
              <li v-for="(achieve, aIdx) in exp.achievements" :key="aIdx">
                {{ achieve }}
              </li>
            </ul>

            <p v-if="exp.techStack" class="text-[10px] sm:text-[11px] text-slate-500 font-medium pt-0.5">
              Công nghệ: {{ exp.techStack.join(', ') }}
            </p>
          </div>
        </div>

        <!-- Two Columns: Skills & Education -->
        <div class="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <!-- Skills Column -->
          <div class="space-y-2.5">
            <h4 class="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Kỹ năng công nghệ
            </h4>
            <div 
              v-for="(cat, cIdx) in profile.skillCategories" 
              :key="cIdx"
              class="text-[11px] sm:text-xs space-y-0.5"
            >
              <span class="font-bold text-slate-800 dark:text-slate-200">{{ cat.name }}:</span>
              <p class="text-slate-600 dark:text-slate-400">
                {{ cat.skills.map(s => s.name).join(', ') }}
              </p>
            </div>
          </div>

          <!-- Education & Certifications Column -->
          <div class="space-y-3.5">
            <div>
              <h4 class="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
                Học vấn
              </h4>
              <div v-for="(edu, eIdx) in profile.education" :key="eIdx" class="text-[11px] sm:text-xs">
                <p class="font-bold text-slate-900 dark:text-white">{{ edu.degree }}</p>
                <p class="text-slate-600 dark:text-slate-400">{{ edu.school }} ({{ edu.period }})</p>
                <p class="text-slate-500">{{ edu.grade }}</p>
              </div>
            </div>

            <div>
              <h4 class="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
                Chứng chỉ
              </h4>
              <ul class="text-[11px] sm:text-xs space-y-0.5 text-slate-700 dark:text-slate-300">
                <li v-for="(cert, cIdx) in profile.certifications" :key="cIdx">
                  • <strong>{{ cert.name }}</strong> ({{ cert.issuer }} - {{ cert.year }})
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { FileText, Printer, X } from 'lucide-vue-next'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  profile: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])

const triggerPrint = () => {
  window.print()
}
</script>
