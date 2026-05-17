<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Experience from '@/components/Portfolio/Experience.vue';
import About from '@/components/Portfolio/About.vue';
import Hobbies from '@/components/Portfolio/Hobbies.vue';
import Footer from '@/components/Portfolio/Footer.vue';
import Hero from '@/components/Portfolio/Hero.vue';
import Navbar from '@/components/Portfolio/Navbar.vue';
import Projects from '@/components/Portfolio/Projects.vue';
import Skills from '@/components/Portfolio/Skills.vue';
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

    <div
        class="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased"
    >
        <!-- Background Decorations -->
        <div class="pointer-events-none fixed inset-0 z-0">
            <div
                class="bg-grid-pattern absolute inset-0 opacity-[0.2] dark:opacity-[0.1]"
            ></div>
            <div
                class="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-accent/10 blur-[120px]"
            ></div>
            <div
                class="absolute top-[20%] -right-[10%] h-[35%] w-[35%] rounded-full bg-purple-accent/10 blur-[120px]"
            ></div>
            <div
                class="absolute -bottom-[10%] left-[20%] h-[30%] w-[30%] rounded-full bg-blue-accent/5 blur-[100px]"
            ></div>
        </div>

        <div class="relative z-10">
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
                    :xing="currentData.xing"
                />

                <Separator />

                <Skills :skills="currentData.skills" />

                <Separator />

                <About
                    :image="currentData.aboutImage"
                    :bio="currentData.aboutBio"
                />

                <Separator />

                <Projects :projects="currentData.projects" />

                <Separator />

                <Experience :experience="currentData.experience" />

                <Separator />

                <Hobbies
                    :hobbies="currentData.hobbies"
                    :image="currentData.hobbyImage"
                />
            </main>

            <Footer :name="currentData.name" />
        </div>
    </div>
</template>
