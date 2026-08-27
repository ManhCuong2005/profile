<template>
  <div class="min-h-screen flex flex-col selection:bg-brand-500 selection:text-white pb-20 md:pb-0">
    <!-- Navbar (Top Header) -->
    <Navbar 
      :personal="profileData.personal" 
      :is-dark="isDark"
      @toggle-theme="toggleTheme"
      @open-cv="isCvModalOpen = true"
    />

    <!-- Main Content -->
    <main class="flex-1">
      <HeroSection 
        :personal="profileData.personal" 
        :stats="profileData.stats"
        @open-cv="isCvModalOpen = true"
      />

      <AboutSection 
        :personal="profileData.personal" 
        :services="profileData.services" 
      />

      <ExperienceSection 
        :experiences="profileData.experiences"
        :education="profileData.education"
        :certifications="profileData.certifications"
      />

      <SkillsSection 
        :categories="profileData.skillCategories" 
      />

      <ProjectsSection 
        :projects="profileData.projects" 
      />

      <ContactSection 
        :personal="profileData.personal" 
      />
    </main>

    <!-- Footer -->
    <Footer :personal="profileData.personal" />

    <!-- Mobile Bottom Floating Navigation Bar (Mobile-First UX) -->
    <MobileBottomNav 
      @open-cv="isCvModalOpen = true" 
    />

    <!-- Print CV Modal -->
    <PrintCvModal 
      :is-open="isCvModalOpen"
      :profile="profileData"
      @close="isCvModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { profileData } from './data/profileData'

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

const isCvModalOpen = ref(false)
const isDark = ref(false)

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
