<template>
  <section id="about" class="py-12 sm:py-18 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">

    <div class="absolute bottom-0 right-0 w-64 h-64 bg-brand-500/8 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">

      <!-- Section Label -->
      <div class="text-center">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest border border-brand-200/50 dark:border-brand-800/50 mb-3">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
          {{ t('about.sectionLabel') }}
        </span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{{ t('about.title') }}</h2>
        <div class="w-10 h-1 bg-gradient-to-r from-brand-600 to-indigo-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <!-- ===== PROFILE SUMMARY CARD ===== -->
      <div class="card-shimmer p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-brand-500/40 hover:shadow-lg transition-all duration-300">
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {{ personal.summary }}
        </p>

        <!-- Info grid -->
        <div class="grid grid-cols-2 gap-x-4 gap-y-3 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm">
          <div>
            <p class="text-slate-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">{{ t('about.fieldName') }}</p>
            <p class="font-bold text-slate-800 dark:text-slate-100">{{ personal.fullName }}</p>
          </div>
          <div>
            <p class="text-slate-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">{{ t('about.fieldDob') }}</p>
            <p class="font-bold text-slate-800 dark:text-slate-100">{{ personal.dateOfBirth }}</p>
          </div>
          <div>
            <p class="text-slate-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">{{ t('about.fieldLocation') }}</p>
            <p class="font-bold text-slate-800 dark:text-slate-100">{{ personal.location }}</p>
          </div>
          <div>
            <p class="text-slate-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">{{ t('about.fieldEmail') }}</p>
            <p class="font-bold text-brand-600 dark:text-brand-400 break-all text-[11px] sm:text-xs">{{ personal.email }}</p>
          </div>
        </div>
      </div>

      <!-- ===== 2-COLUMN EXPERTISE SPLIT ===== -->
      <div class="space-y-4">
        <h3 class="text-base sm:text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <span class="w-1 h-5 rounded-full bg-gradient-to-b from-brand-600 to-indigo-500"></span>
          {{ t('about.expertiseTitle') }}
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div
            v-for="(service, i) in services" :key="i"
            class="card-shimmer p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group flex gap-3.5 items-start"
          >
            <!-- Icon -->
            <div class="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-brand-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <component :is="getIcon(service.icon)" class="w-5 h-5 text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors" />
            </div>
            <!-- Text -->
            <div class="min-w-0">
              <h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug mb-1">
                {{ service.title }}
              </h4>
              <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Server, Cpu, Coins, Video, Code, Database, Network, CreditCard, TrendingUp, Lightbulb, ShoppingBag } from 'lucide-vue-next'
import { t } from '../composables/useLang.js'

const iconMap = { Server, Cpu, Coins, Video, Code, Database, Network, CreditCard, TrendingUp, Lightbulb, ShoppingBag }
const getIcon = (name) => iconMap[name] || Server

defineProps({
  personal: { type: Object, required: true },
  services: { type: Array, default: () => [] }
})
</script>
