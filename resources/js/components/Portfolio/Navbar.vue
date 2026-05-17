<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-vue-next';
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import AnimateOnShow from './AnimateOnShow.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
import ThemeToggle from './ThemeToggle.vue';

defineProps<{
    name: string;
    github: string;
}>();

const { t } = useI18n();

const navItems = computed(() => [
    { title: t('nav.about'), href: '#about' },
    { title: t('nav.projects'), href: '#projects' },
    { title: t('nav.skills'), href: '#skills' },
    { title: t('nav.experience'), href: '#experience' },
    { title: t('nav.hobbies'), href: '#hobbies' },
]);
</script>

<template>
    <header class="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <AnimateOnShow direction="down" :distance="10">
            <div class="container mx-auto flex h-16 items-center justify-between px-4">
                <div class="flex items-center gap-2 group cursor-pointer">
                    <div class="relative">
                        <AppLogoIcon class="relative z-10 size-7 fill-current text-blue-accent group-hover:text-purple-accent transition-colors duration-500" />
                        <div class="absolute inset-0 bg-blue-accent/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span class="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70 group-hover:from-blue-accent group-hover:to-purple-accent transition-all duration-500">{{ name }}</span>
                </div>

                <nav class="hidden md:flex items-center gap-8">
                    <a v-for="item in navItems" :key="item.title" :href="item.href" class="relative text-sm font-medium transition-colors hover:text-blue-accent group">
                        {{ item.title }}
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-accent to-purple-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>

                <div class="flex items-center gap-3">
                    <ThemeToggle />
                    <LanguageSwitcher />
                    <Button variant="ghost" size="icon" as-child class="hidden sm:flex hover:text-purple-accent hover:bg-purple-accent/10 transition-colors">
                        <a :href="github" target="_blank">
                            <Github class="h-5 w-5" />
                            <span class="sr-only">GitHub</span>
                        </a>
                    </Button>
                </div>
            </div>
        </AnimateOnShow>
    </header>
</template>
