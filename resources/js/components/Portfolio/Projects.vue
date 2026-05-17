<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from './ProjectCard.vue';
import type { Project } from '@/types/portfolio';
import AnimateOnShow from './AnimateOnShow.vue';

defineProps<{
    projects: Project[];
}>();

const { t } = useI18n();
</script>

<template>
    <section id="projects" class="py-20">
        <AnimateOnShow>
            <div class="mb-12 text-center">
                <h2 class="text-3xl font-bold tracking-tight sm:text-5xl text-gradient inline-block">{{ t('projects.title') }}</h2>
                <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {{ t('projects.subtitle') }}
                </p>
            </div>
        </AnimateOnShow>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimateOnShow 
                v-for="(project, index) in projects" 
                :key="index"
                :delay="index * 100"
            >
                <ProjectCard :project="project" />
            </AnimateOnShow>
        </div>
    </section>
</template>
