<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Briefcase, GraduationCap } from 'lucide-vue-next';
import type { Experience } from '@/types/portfolio';
import AnimateOnShow from './AnimateOnShow.vue';

defineProps<{
    experience: Experience[];
}>();

const { t } = useI18n();
</script>

<template>
    <section id="experience" class="py-24 overflow-hidden">
        <AnimateOnShow>
            <div class="mb-16 text-center">
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{{ t('experience.title') }}</h2>
                <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {{ t('experience.subtitle') }}
                </p>
            </div>
        </AnimateOnShow>

        <div class="max-w-5xl mx-auto px-4 sm:px-6">
            <div class="relative">
                <!-- Vertical Line -->
                <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

                <div class="space-y-12">
                    <div v-for="(exp, index) in experience" :key="index" class="relative">
                        <AnimateOnShow 
                            :delay="index * 150" 
                            :direction="index % 2 === 0 ? 'right' : 'left'"
                        >
                            <div :class="[
                                'flex flex-col md:flex-row items-start',
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            ]">
                                <!-- Spacer for desktop -->
                                <div class="hidden md:block w-1/2"></div>

                                <!-- Dot/Icon -->
                                <div class="absolute left-4 md:left-1/2 top-6 w-10 h-10 rounded-full border-4 border-background bg-muted shadow-sm flex items-center justify-center z-10 -translate-x-1/2">
                                    <Briefcase v-if="exp.type === 'work'" class="h-4 w-4 text-primary" />
                                    <GraduationCap v-else class="h-4 w-4 text-primary" />
                                </div>

                                <!-- Content Card -->
                                <div :class="[
                                    'w-full md:w-1/2 pl-12 md:pl-0',
                                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                ]">
                                    <div class="group relative p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50">
                                        <div class="flex flex-col gap-2">
                                            <div class="flex flex-wrap items-center justify-between gap-2">
                                                <span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                                                    {{ exp.period }}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 class="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{{ exp.role }}</h3>
                                                <p class="text-base font-semibold text-foreground/80">{{ exp.company }}</p>
                                            </div>
                                            <p v-if="exp.description" class="mt-2 text-sm text-muted-foreground leading-relaxed">
                                                {{ exp.description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnShow>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
