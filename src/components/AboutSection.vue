<template>
  <section id="about" class="py-14 sm:py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-1.5 sm:mb-2">
          Về bản thân
        </h2>
        <p class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Đam mê lập trình hệ thống & công nghệ mới
        </p>
        <div class="w-12 sm:w-16 h-1 bg-brand-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <!-- Main Grid: Bio & Services -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <!-- Left: Detailed Bio & Info -->
        <div class="lg:col-span-5 space-y-6">
          <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck class="w-5 h-5 text-brand-500" />
              <span>Tóm tắt năng lực</span>
            </h3>
            
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              {{ personal.summary }}
            </p>

            <div class="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm">
              <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span class="text-slate-500 dark:text-slate-400">Họ và tên:</span>
                <span class="font-semibold text-slate-800 dark:text-slate-200">{{ personal.fullName }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span class="text-slate-500 dark:text-slate-400">Năm sinh:</span>
                <span class="font-semibold text-slate-800 dark:text-slate-200">{{ personal.dateOfBirth }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span class="text-slate-500 dark:text-slate-400">Khu vực:</span>
                <span class="font-semibold text-slate-800 dark:text-slate-200">{{ personal.location }}</span>
              </div>
              <div class="flex justify-between py-1">
                <span class="text-slate-500 dark:text-slate-400">Email:</span>
                <span class="font-semibold text-brand-600 dark:text-brand-400 break-all">{{ personal.email }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Services / Core Capabilities -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                <component :is="getIcon(service.icon)" class="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {{ service.title }}
              </h4>
              <p class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
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
import { 
  UserCheck, Layout, Server, Smartphone, Cloud, Code, Database,
  Network, Cpu, Coins, CreditCard
} from 'lucide-vue-next'

const iconMap = {
  Layout,
  Server,
  Smartphone,
  Cloud,
  Code,
  Database,
  Network,
  Cpu,
  Coins,
  CreditCard
}

const getIcon = (iconName) => {
  return iconMap[iconName] || Server
}

defineProps({
  personal: {
    type: Object,
    required: true
  },
  services: {
    type: Array,
    default: () => []
  }
})
</script>
