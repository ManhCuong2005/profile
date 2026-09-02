<template>
  <section id="contact" class="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
          {{ t('contact.sectionLabel') }}
        </h2>
        <p class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('contact.sectionTitle') }}
        </p>
        <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
          {{ t('contact.sectionSub') }}
        </p>
        <div class="w-16 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        
        <!-- Left Column: Contact Cards -->
        <div class="lg:col-span-5 space-y-6">
          
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
              <Mail class="w-6 h-6" />
            </div>
            <div class="flex-1">
              <span class="text-xs font-bold uppercase text-slate-400">{{ t('contact.emailLabel') }}</span>
              <a :href="`mailto:${personal.email}`" class="block font-semibold text-slate-900 dark:text-white hover:text-brand-600 transition-colors mt-0.5 break-all">
                {{ personal.email }}
              </a>
              <button 
                @click="copyText(personal.email, 'email')"
                class="text-xs text-brand-600 dark:text-brand-400 font-medium mt-1 hover:underline inline-flex items-center gap-1"
              >
                <Check v-if="copiedField === 'email'" class="w-3.5 h-3.5 text-emerald-500" />
                <Copy v-else class="w-3.5 h-3.5" />
                <span>{{ t(copiedField === 'email' ? 'contact.copied' : 'contact.copyEmail') }}</span>
              </button>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Phone class="w-6 h-6" />
            </div>
            <div class="flex-1">
              <span class="text-xs font-bold uppercase text-slate-400">{{ t('contact.phoneLabel') }}</span>
              <a :href="`tel:${personal.phone}`" class="block font-semibold text-slate-900 dark:text-white hover:text-emerald-600 transition-colors mt-0.5">
                {{ personal.phone }}
              </a>
              <button 
                @click="copyText(personal.phone, 'phone')"
                class="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1 hover:underline inline-flex items-center gap-1"
              >
                <Check v-if="copiedField === 'phone'" class="w-3.5 h-3.5 text-emerald-500" />
                <Copy v-else class="w-3.5 h-3.5" />
                <span>{{ t(copiedField === 'phone' ? 'contact.copied' : 'contact.copyPhone') }}</span>
              </button>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
              <MapPin class="w-6 h-6" />
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-400">{{ t('contact.locationLabel') }}</span>
              <p class="font-semibold text-slate-900 dark:text-white mt-0.5">
                {{ personal.location }}
              </p>
              <p class="text-xs text-slate-500 mt-1">{{ t('contact.locationNote') }}</p>
            </div>
          </div>

        </div>

        <!-- Right Column: Interactive Contact Form -->
        <div class="lg:col-span-7">
          <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            
            <div v-if="isSent" class="py-12 text-center space-y-4">
              <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 class="w-8 h-8" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{{ t('contact.successTitle') }}</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                {{ t('contact.successMessage') }}
              </p>
              <button 
                @click="isSent = false"
                class="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors"
              >
                {{ t('contact.sendAnother') }}
              </button>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                    {{ t('contact.fieldName') }}
                  </label>
                  <input 
                    v-model="form.name"
                    required
                    type="text" 
                    :placeholder="t('contact.fieldNamePlaceholder')" 
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                    {{ t('contact.fieldEmail') }}
                  </label>
                  <input 
                    v-model="form.email"
                    required
                    type="email" 
                    :placeholder="t('contact.fieldEmailPlaceholder')" 
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                  {{ t('contact.fieldSubject') }}
                </label>
                <input 
                  v-model="form.subject"
                  type="text" 
                  :placeholder="t('contact.fieldSubjectPlaceholder')" 
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                  {{ t('contact.fieldMessage') }}
                </label>
                <textarea 
                  v-model="form.message"
                  required
                  rows="4" 
                  :placeholder="t('contact.fieldMessagePlaceholder')" 
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 active:scale-98 transition-all disabled:opacity-50"
              >
                <Send v-if="!isSubmitting" class="w-4 h-4" />
                <span v-if="isSubmitting">{{ t('contact.sending') }}</span>
                <span v-else>{{ t('contact.sendBtn') }}</span>
              </button>
            </form>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Mail, Phone, MapPin, Send, Copy, Check, CheckCircle2 
} from 'lucide-vue-next'
import { t } from '../composables/useLang.js'

defineProps({
  personal: {
    type: Object,
    required: true
  }
})

const copiedField = ref(null)
const isSubmitting = ref(false)
const isSent = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const copyText = (text, field) => {
  navigator.clipboard.writeText(text)
  copiedField.value = field
  setTimeout(() => {
    copiedField.value = null
  }, 2000)
}

const handleSubmit = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    isSent.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 800)
}
</script>
