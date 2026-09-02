<template>
  <section id="experience" class="py-14 sm:py-20 relative overflow-hidden">

    <!-- Decorative Background Orbs -->
    <div class="absolute top-20 left-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
    <div class="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-float-reverse"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-3 border border-brand-200/50 dark:border-brand-800/50">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
          {{ t('experience.sectionLabel') }}
        </span>
        <p class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('experience.sectionTitle') }}
        </p>
        <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-brand-600 to-purple-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <!-- ===== MAIN TAB SWITCHER (3 tabs) ===== -->
      <div class="flex justify-center mb-8 sm:mb-12">
        <div class="w-full sm:w-auto flex p-1 sm:p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 gap-1 shadow-inner overflow-x-auto no-scrollbar">
          
          <button 
            @click="activeTab = 'tech'"
            class="flex-1 sm:flex-none whitespace-nowrap flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer"
            :class="activeTab === 'tech' ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'"
          >
            <Code class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{{ t('experience.tabTech') }}</span>
          </button>

          <button 
            @click="activeTab = 'business'"
            class="flex-1 sm:flex-none whitespace-nowrap flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer"
            :class="activeTab === 'business' ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md shadow-orange-500/20' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'"
          >
            <TrendingUp class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{{ t('experience.tabBusiness') }}</span>
          </button>

          <button 
            @click="activeTab = 'education'"
            class="flex-1 sm:flex-none whitespace-nowrap flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer"
            :class="activeTab === 'education' ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'"
          >
            <GraduationCap class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{{ t('experience.tabEducation') }}</span>
          </button>

        </div>
      </div>

      <!-- ===== TAB: LẬP TRÌNH & CNTT ===== -->
      <transition name="tab-fade" mode="out-in">
      <div v-if="activeTab === 'tech'" class="max-w-4xl mx-auto" key="tech">
        
        <!-- IT Timeline Header Banner -->
        <div class="mb-8 p-4 rounded-2xl bg-gradient-to-r from-brand-50 to-indigo-50 dark:from-brand-950/40 dark:to-indigo-950/40 border border-brand-200/60 dark:border-brand-800/50 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center text-lg flex-shrink-0">
            💻
          </div>
          <div>
            <p class="font-bold text-slate-900 dark:text-white text-sm">{{ t('experience.itBannerTitle') }}</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">{{ t('experience.itBannerSub') }}</p>
          </div>
        </div>

        <!-- IT Milestone Cards -->
        <div class="relative space-y-6 before:absolute before:left-4 sm:before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-brand-500 before:via-indigo-500 before:to-purple-500">
          
          <!-- Milestone: 2023-2028 (University) -->
          <div class="relative flex gap-4 sm:gap-6 group">
            <div class="relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center text-[9px] sm:text-xs font-extrabold shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform mt-1">
              🎓
            </div>
            <div class="card-shimmer flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span class="px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-200/50">{{ t('experience.univBadge') }}</span>
                <span class="px-2.5 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-[11px] font-bold border border-amber-200/50">{{ t('experience.univGpa') }}</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">{{ t('experience.univTitle') }}</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">{{ t('experience.univDesc') }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="t in ['Algorithms & DS', 'Network Programming', 'AI Fundamentals', 'Database Systems', 'OOP & Design Patterns']" :key="t" class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-medium">{{ t }}</span>
              </div>
            </div>
          </div>

          <!-- Milestone: 2023 — Project 1: Food Ordering App (OOP) -->
          <div class="relative flex gap-4 sm:gap-6 group">
            <div class="relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform mt-1">
              23
            </div>
            <div class="card-shimmer flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/50 hover:-translate-y-0.5 transition-all duration-300">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span class="px-3 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-[11px] font-bold border border-brand-200/50">{{ t('experience.m23p1Badge') }}</span>
                <span class="text-[11px] font-semibold px-2 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50">{{ t('experience.m23p1Type') }}</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">{{ t('experience.m23p1Title') }}</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">{{ t('experience.m23p1Desc') }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="t in ['Java Core', 'OOP', 'JavaSwing / JavaFX', 'MySQL', 'MVC Pattern']" :key="t" class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-[10px] font-medium border border-blue-100 dark:border-blue-900">{{ t }}</span>
              </div>
            </div>
          </div>

          <!-- Milestone: 2023 — Project 2: Basic Messaging App (Java Thread) -->
          <div class="relative flex gap-4 sm:gap-6 group">
            <div class="relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-500 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform mt-1">
              23
            </div>
            <div class="card-shimmer flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-300">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span class="px-3 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 text-[11px] font-bold border border-cyan-200/50">{{ t('experience.m23p2Badge') }}</span>
                <span class="text-[11px] font-semibold px-2 py-0.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200/50">{{ t('experience.m23p2Type') }}</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">{{ t('experience.m23p2Title') }}</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">{{ t('experience.m23p2Desc') }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="t in ['Java Thread', 'Multithreading', 'Socket cơ bản', 'I/O Streams', 'JavaSwing']" :key="t" class="px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 text-[10px] font-medium border border-cyan-100 dark:border-cyan-900">{{ t }}</span>
              </div>
            </div>
          </div>

          <!-- Milestone: 2025 — Advanced Messaging App -->
          <div class="relative flex gap-4 sm:gap-6 group">
            <div class="relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-violet-600 to-purple-500 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform mt-1">
              25
            </div>
            <div class="card-shimmer flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-violet-500/50 hover:-translate-y-0.5 transition-all duration-300">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span class="px-3 py-0.5 rounded-full bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 text-[11px] font-bold border border-violet-200/50">{{ t('experience.m25p1Badge') }}</span>
                <span class="text-[11px] font-semibold px-2 py-0.5 rounded-lg bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 border border-violet-200/50">{{ t('experience.m25p1Type') }}</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">{{ t('experience.m25p1Title') }}</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">{{ t('experience.m25p1Desc') }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="t in ['Java Advanced', 'TCP/UDP Sockets', 'Multi-threading', 'Network Audio/Video', 'MySQL', 'Client-Server']" :key="t" class="px-2 py-0.5 rounded-md bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 text-[10px] font-medium border border-violet-100 dark:border-violet-900">{{ t }}</span>
              </div>
            </div>
          </div>

          <!-- Milestone: 2025 — FPT Software Contest -->
          <div class="relative flex gap-4 sm:gap-6 group">
            <div class="relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center text-[10px] sm:text-xs font-extrabold shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform mt-1">
              🏆
            </div>
            <div class="card-shimmer flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-orange-500/50 hover:-translate-y-0.5 transition-all duration-300">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span class="px-3 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 text-[11px] font-bold border border-orange-200/50">{{ t('experience.m25p2Badge') }}</span>
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-200/50">
                  {{ t('experience.m25p2Pass') }}
                </span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">{{ t('experience.m25p2Title') }}</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">
                {{ t('experience.m25p2Desc1') }}<strong class="text-orange-600 dark:text-orange-400">{{ t('experience.m25p2Highlight1') }}</strong>{{ t('experience.m25p2Desc2') }}<strong class="text-orange-600 dark:text-orange-400">{{ t('experience.m25p2Highlight2') }}</strong>{{ t('experience.m25p2Desc3') }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="t in ['Spring Boot', 'Java Web', 'MVC', 'Thymeleaf / JSP', 'JPA / Hibernate', 'MySQL', 'Offline Coding']" :key="t" class="px-2 py-0.5 rounded-md bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 text-[10px] font-medium border border-orange-100 dark:border-orange-900">{{ t }}</span>
              </div>
            </div>
          </div>

          <!-- Milestone: 2026 -->
          <div class="relative flex gap-4 sm:gap-6 group">
            <div class="relative z-10 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-rose-500 via-orange-500 to-amber-500 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform mt-1">
              26
            </div>
            <div class="card-shimmer flex-1 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-rose-500/50 hover:-translate-y-0.5 transition-all duration-300">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span class="px-3 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-[11px] font-bold border border-rose-200/50">{{ t('experience.m26Badge') }}</span>
                <span class="px-2.5 py-0.5 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-[11px] font-bold border border-brand-200/50">{{ t('experience.m26Featured') }}</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">{{ t('experience.m26Title') }}</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">{{ t('experience.m26Desc') }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="t in ['Spring Boot', 'Python AI/OpenCV', 'Blockchain/Web3', 'ZaloPay Sandbox', 'PostgreSQL', 'Vue.js', 'Docker']" :key="t" class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-medium">{{ t }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      </transition>

      <!-- ===== TAB: THƯƠNG MẠI ĐIỆN TỬ & KINH DOANH ===== -->
      <transition name="tab-fade" mode="out-in">
      <div v-if="activeTab === 'business'" class="max-w-4xl mx-auto" key="business">

        <!-- Business Tab Header Banner -->
        <div class="mb-8 p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-950/30 dark:to-pink-950/30 border border-orange-200/60 dark:border-orange-800/50 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-pink-500 text-white flex items-center justify-center text-lg flex-shrink-0">
            🛒
          </div>
          <div>
            <p class="font-bold text-slate-900 dark:text-white text-sm">{{ t('experience.bizBannerTitle') }}</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">{{ t('experience.bizBannerSub') }}</p>
          </div>
        </div>

        <!-- Business Cards Grid -->
        <div class="space-y-5">

          <!-- Card: Affiliate Marketing -->
          <div class="card-shimmer p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-orange-500/50 transition-all duration-300 group">
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center text-xl shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                  📣
                </div>
                <div>
                  <h3 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white">{{ t('experience.affTitle') }}</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 font-semibold">{{ t('experience.affCompany') }}</p>
                </div>
              </div>
              <span class="self-start px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 text-xs font-bold border border-orange-200/50 whitespace-nowrap">
                {{ t('experience.affPeriod') }}
              </span>
            </div>

            <!-- Revenue Highlight Badge -->
            <div class="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-200/50 dark:border-amber-800/50 flex items-center gap-3">
              <span class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">~2.5 tỷ</span>
              <div>
                <p class="text-xs font-bold text-amber-700 dark:text-amber-400">{{ t('experience.affRevenueLabel') }}</p>
                <p class="text-[10px] text-slate-500 dark:text-slate-400">{{ t('experience.affRevenueSub') }}</p>
              </div>
            </div>

            <ul class="space-y-2 mb-4">
              <li v-for="a in t('experience.affBullets')" :key="a" class="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle class="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{{ a }}</span>
              </li>
            </ul>

            <!-- 6M View Highlight -->
            <div class="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white text-xs font-bold shadow-md shadow-orange-500/25">
              {{ t('experience.affViewBadge') }}
            </div>

            <div class="flex flex-wrap gap-1.5">
              <span v-for="t in ['TikTok Affiliate', 'Video ngắn TikTok', 'CapCut Pro', 'Nghiên cứu xu hướng']" :key="t" class="px-2.5 py-0.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 text-[10px] sm:text-xs font-medium border border-orange-100 dark:border-orange-900">{{ t }}</span>
            </div>
          </div>

          <!-- Card: TikTok Shop -->
          <div class="card-shimmer p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-pink-500/50 transition-all duration-300 group">
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center text-xl shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                  🛍️
                </div>
                <div>
                  <h3 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white">{{ t('experience.tiktokTitle') }}</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 font-semibold">{{ t('experience.tiktokCompany') }}</p>
                </div>
              </div>
              <span class="self-start px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 text-xs font-bold border border-pink-200/50 whitespace-nowrap">
                {{ t('experience.tiktokPeriod') }}
              </span>
            </div>

            <!-- 3-Metric Achievement Row -->
            <div class="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
              <div class="p-2.5 sm:p-4 rounded-2xl bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900 text-center group-hover:border-pink-400/60 transition-colors">
                <p class="text-lg sm:text-2xl font-extrabold text-pink-600 dark:text-pink-400">500+</p>
                <p class="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{{ t('experience.tiktokOrders') }}</p>
              </div>
              <div class="p-2.5 sm:p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900 text-center group-hover:border-rose-400/60 transition-colors">
                <p class="text-lg sm:text-2xl font-extrabold text-rose-600 dark:text-rose-400">~35tr</p>
                <p class="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{{ t('experience.tiktokRevenue') }}</p>
              </div>
              <div class="p-2.5 sm:p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900 text-center group-hover:border-amber-400/60 transition-colors">
                <p class="text-lg sm:text-2xl font-extrabold text-amber-600 dark:text-amber-400">4.8⭐</p>
                <p class="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{{ t('experience.tiktokRating') }}</p>
              </div>
            </div>

            <!-- Star Shop Badge -->
            <div class="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold shadow-md shadow-orange-500/25">
              {{ t('experience.tiktokStarBadge') }}
            </div>

            <ul class="space-y-2 mb-4">
              <li v-for="a in t('experience.tiktokBullets')" :key="a" class="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle class="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{{ a }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-1.5">
              <span v-for="t in ['TikTok Shop', 'Livestream Bán hàng', 'Order Management', 'Customer Care', 'Video Marketing']" :key="t" class="px-2.5 py-0.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 text-[10px] sm:text-xs font-medium border border-pink-100 dark:border-pink-900">{{ t }}</span>
            </div>
          </div>

          <!-- Card: Video Creator -->
          <div class="card-shimmer p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-violet-500/50 transition-all duration-300 group">
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-500 text-white flex items-center justify-center text-xl shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
                  🎬
                </div>
                <div>
                  <h3 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white">{{ t('experience.videoTitle') }}</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 font-semibold">{{ t('experience.videoCompany') }}</p>
                </div>
              </div>
              <span class="self-start px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 text-xs font-bold border border-violet-200/50 whitespace-nowrap">
                {{ t('experience.videoPeriod') }}
              </span>
            </div>

            <ul class="space-y-2 mb-4">
              <li v-for="a in t('experience.videoBullets')" :key="a" class="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle class="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{{ a }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-1.5">
              <span v-for="t in ['CapCut Pro', 'Quay phim', 'Dựng video']" :key="t" class="px-2.5 py-0.5 rounded-lg bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 text-[10px] sm:text-xs font-medium border border-violet-100 dark:border-violet-900">{{ t }}</span>
            </div>
          </div>

        </div>
      </div>
      </transition>

      <!-- ===== TAB: HỌC VẤN & CHỨNG CHỈ ===== -->
      <transition name="tab-fade" mode="out-in">
      <div v-if="activeTab === 'education'" class="max-w-4xl mx-auto space-y-8" key="education">
        
        <!-- Education Card -->
        <div class="space-y-5">
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <span class="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center">🎓</span>
            {{ t('experience.eduTitle') }}
          </h3>
          <div 
            v-for="(edu, index) in education" 
            :key="index"
            class="card-shimmer p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span class="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200/50">{{ edu.period }}</span>
              <span v-if="edu.grade" class="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-200/50">{{ edu.grade }}</span>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">{{ edu.degree }}</h4>
            <p class="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">{{ edu.school }}</p>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ edu.description }}</p>
          </div>
        </div>

        <!-- Certifications -->
        <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <span class="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center">🏆</span>
            {{ t('experience.certTitle') }}
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div 
              v-for="(cert, index) in certifications" 
              :key="index"
              class="card-shimmer p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span class="text-xs font-bold text-brand-600 dark:text-brand-400 mb-1 block">{{ cert.year }}</span>
              <h5 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{{ cert.name }}</h5>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">{{ cert.issuer }}</p>
            </div>
          </div>
        </div>

      </div>
      </transition>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { GraduationCap, CheckCircle, Code, TrendingUp } from 'lucide-vue-next'
import { t, lang } from '../composables/useLang.js'

const activeTab = ref('tech')

defineProps({
  experiences:        { type: Array, default: () => [] },
  businessExperiences:{ type: Array, default: () => [] },
  education:          { type: Array, default: () => [] },
  certifications:     { type: Array, default: () => [] }
})
</script>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
