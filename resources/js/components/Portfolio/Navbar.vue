<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-vue-next';
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import AnimateOnShow from './AnimateOnShow.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

defineProps<{
    name: string;
    github: string;
}>();

const { t } = useI18n();

const navItems = computed(() => [
    { title: t('nav.projects'), href: '#projects' },
    { title: t('nav.skills'), href: '#skills' },
    { title: t('nav.experience'), href: '#experience' },
]);
</script>

<template>
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <AnimateOnShow direction="down" :distance="10">
            <div class="container mx-auto flex h-16 items-center justify-between px-4">
                <div class="flex items-center gap-2">
                    <AppLogoIcon class="size-6 fill-current text-primary" />
                    <span class="text-xl font-bold tracking-tight">{{ name }}</span>
                </div>

                <nav class="hidden md:flex items-center gap-6">
                    <a v-for="item in navItems" :key="item.title" :href="item.href" class="text-sm font-medium transition-colors hover:text-primary">
                        {{ item.title }}
                    </a>
                </nav>

                <div class="flex items-center gap-2">
                    <LanguageSwitcher />
                    <Button variant="ghost" size="icon" as-child class="hidden sm:flex">
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
