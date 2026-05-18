<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Hobby } from '@/types/portfolio';
import AnimateOnShow from './AnimateOnShow.vue';
import * as Icons from 'lucide-vue-next';
import { defineComponent, h } from 'vue';

const props = defineProps<{
    hobbies: Hobby[];
    image?: string;
}>();

const { t } = useI18n();

const DynamicIcon = defineComponent({
    props: ['icon'],
    render() {
        const iconName = this.icon as keyof typeof Icons;
        const icon = Icons[iconName] || Icons.Heart;
        return h(icon as any, { class: 'h-6 w-6' });
    }
});
</script>

<template>
    <section id="hobbies" class="py-20 relative">
        <!-- Background decorative elements -->
        <div class="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <AnimateOnShow>
            <div class="mb-16 text-center relative z-10">
                <h2 class="text-3xl font-bold tracking-tight sm:text-5xl text-gradient-purple inline-block">
                    {{ t('hobbies.title') }}
                </h2>
                <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {{ t('hobbies.subtitle') }}
                </p>
            </div>
        </AnimateOnShow>

        <div class="container mx-auto px-4 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <!-- Image Side -->
                <div v-if="image" class="lg:col-span-5 order-2 lg:order-1">
                    <AnimateOnShow direction="right">
                        <div class="relative group">
                            <!-- Decorative glow -->
                            <div class="absolute -inset-4 bg-linear-to-tr from-blue-accent/20 to-purple-accent/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
                            
                            <div class="relative aspect-3/4 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                                <img 
                                    :src="image" 
                                    alt="Hobbies" 
                                    class="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </AnimateOnShow>
                </div>

                <!-- Hobbies Grid Side -->
                <div :class="[image ? 'lg:col-span-7' : 'lg:col-span-12', 'order-1 lg:order-2']">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <AnimateOnShow 
                            v-for="(hobby, index) in hobbies" 
                            :key="hobby.name"
                            :delay="index * 100"
                            direction="left"
                        >
                            <div class="group relative p-6 rounded-2xl border border-white/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md hover:border-purple-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-accent/5">
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0 p-3 rounded-xl bg-purple-accent/10 text-purple-accent group-hover:scale-110 group-hover:bg-purple-accent/20 transition-all duration-300">
                                        <DynamicIcon :icon="hobby.icon" />
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold tracking-tight text-foreground/90">{{ hobby.name }}</h3>
                                        <p v-if="hobby.description" class="mt-1 text-sm text-muted-foreground leading-relaxed">
                                            {{ hobby.description }}
                                        </p>
                                    </div>
                                </div>
                                
                                <!-- Subtle hover indicator -->
                                <div class="absolute bottom-0 left-6 right-6 h-0.5 bg-linear-to-r from-purple-accent to-blue-accent transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 rounded-full"></div>
                            </div>
                        </AnimateOnShow>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
