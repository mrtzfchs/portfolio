<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AnimateOnShow from './AnimateOnShow.vue';

defineProps<{
    image?: string;
    bio?: string;
}>();

const { t } = useI18n();
</script>

<template>
    <section id="about" class="py-24 relative">
        <!-- Background Decorations -->
        <div class="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <!-- Image Side -->
                <div v-if="image" class="lg:col-span-6">
                    <AnimateOnShow direction="right">
                        <div class="relative group">
                            <!-- Decorative glow -->
                            <div class="absolute -inset-4 bg-linear-to-tr from-blue-accent/20 to-purple-accent/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
                            
                            <div class="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                                <img 
                                    :src="image" 
                                    alt="About Me" 
                                    class="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-40"></div>
                            </div>
                        </div>
                    </AnimateOnShow>
                </div>

                <!-- Text Side -->
                <div :class="[image ? 'lg:col-span-6' : 'lg:col-span-12']">
                    <AnimateOnShow direction="left">
                        <div class="space-y-8">
                            <div>
                                <h2 class="text-3xl font-extrabold tracking-tight sm:text-5xl text-gradient inline-block">
                                    {{ t('about.title') }}
                                </h2>
                                <p class="mt-4 text-xl text-muted-foreground font-medium">
                                    {{ t('about.subtitle') }}
                                </p>
                            </div>

                            <div v-if="bio" class="relative p-8 rounded-3xl border border-white/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-xl">
                                <p class="text-lg leading-relaxed text-foreground/80 italic">
                                    "{{ bio }}"
                                </p>
                                
                                <!-- Subtle accent line -->
                                <div class="absolute left-0 top-1/4 bottom-1/4 w-1 bg-linear-to-b from-blue-accent to-purple-accent rounded-full opacity-50"></div>
                            </div>

                            <div class="flex flex-wrap gap-4">
                                <div class="px-4 py-2 rounded-full border border-blue-accent/20 bg-blue-accent/5 text-blue-accent text-sm font-mono">
                                    #Community
                                </div>
                                <div class="px-4 py-2 rounded-full border border-purple-accent/20 bg-purple-accent/5 text-purple-accent text-sm font-mono">
                                    #Laracon
                                </div>
                                <div class="px-4 py-2 rounded-full border border-blue-accent/20 bg-blue-accent/5 text-blue-accent text-sm font-mono">
                                    #FullStack
                                </div>
                            </div>
                        </div>
                    </AnimateOnShow>
                </div>
            </div>
        </div>
    </section>
</template>
