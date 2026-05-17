<script setup lang="ts">
import { computed } from 'vue';
import { Head } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import Navbar from '@/components/Portfolio/Navbar.vue';
import Hero from '@/components/Portfolio/Hero.vue';
import Projects from '@/components/Portfolio/Projects.vue';
import Skills from '@/components/Portfolio/Skills.vue';
import Experience from '@/components/Portfolio/Experience.vue';
import Footer from '@/components/Portfolio/Footer.vue';
import { Separator } from '@/components/ui/separator';
import { portfolioData } from '@/data/portfolio';

withDefaults(
    defineProps<{
        canRegister: boolean;
    }>(),
    {
        canRegister: true,
    },
);

const { locale } = useI18n();

const currentData = computed(() => {
    return portfolioData[locale.value as 'en' | 'de'] || portfolioData.en;
});
</script>

<template>
    <Head :title="currentData.name + ' - Portfolio'" />
    
    <div class="min-h-screen bg-background text-foreground font-sans antialiased">
        <Navbar :name="currentData.name" :github="currentData.github" />
        
        <main class="container mx-auto px-4">
            <Hero 
                :name="currentData.name"
                :title="currentData.title"
                :bio="currentData.bio"
                :avatar="currentData.avatar"
                :email="currentData.email"
                :github="currentData.github"
                :linkedin="currentData.linkedin"
            />
            
            <Separator />
            
            <Projects :projects="currentData.projects" />
            
            <Separator />
            
            <Skills :skills="currentData.skills" />
            
            <Separator />
            
            <Experience :experience="currentData.experience" />
        </main>
        
        <Footer :name="currentData.name" />
    </div>
</template>

