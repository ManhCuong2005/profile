<template>
  <div class="min-h-screen flex flex-col selection:bg-brand-500 selection:text-white pb-20 md:pb-0">
    <!-- Navbar (Top Header) -->
    <Navbar 
      :personal="activeProfile.personal" 
      :is-dark="isDark"
      :lang="lang"
      @toggle-theme="toggleTheme"
      @toggle-lang="toggleLang"
      @open-cv="isCvModalOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-1">
      <HeroSection 
        :personal="activeProfile.personal" 
        :stats="activeProfile.stats"
        @open-cv="isCvModalOpen = true"
        @open-avatar="isAvatarModalOpen = true"
      />

      <AboutSection 
        :personal="activeProfile.personal" 
        :services="activeProfile.services" 
      />

      <ExperienceSection 
        :experiences="activeProfile.experiences"
        :business-experiences="activeProfile.businessExperiences"
        :education="activeProfile.education"
        :certifications="activeProfile.certifications"
      />

      <SkillsSection 
        :categories="activeProfile.skillCategories" 
      />

      <ProjectsSection 
        :projects="activeProfile.projects" 
      />

      <ContactSection 
        :personal="activeProfile.personal" 
      />
    </main>

    <!-- Footer -->
    <Footer :personal="activeProfile.personal" />

    <!-- Mobile Bottom Floating Navigation Bar (Mobile-First UX) -->
    <MobileBottomNav 
      @open-cv="isCvModalOpen = true" 
    />

    <!-- Print CV Modal -->
    <PrintCvModal 
      :is-open="isCvModalOpen"
      :profile="activeProfile"
      @close="isCvModalOpen = false"
    />

    <!-- Avatar Lightbox Modal (Click-to-zoom Avatar) -->
    <AvatarModal
      :is-open="isAvatarModalOpen"
      :personal="activeProfile.personal"
      @close="isAvatarModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { profileData } from './data/profileData'
import { profileData as profileDataEn } from './data/profileData.en.js'
import { lang, toggleLang } from './composables/useLang.js'

// Components
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import MobileBottomNav from './components/MobileBottomNav.vue'
import PrintCvModal from './components/PrintCvModal.vue'
import AvatarModal from './components/AvatarModal.vue'

const isCvModalOpen = ref(false)
const isAvatarModalOpen = ref(false)
const isDark = ref(false)

const activeProfile = computed(() => lang.value === 'vi' ? profileData : profileDataEn)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Check user preferred theme or system setting
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})
</script>
