<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import { Button } from '@/components/ui/button';
import AnimateOnShow from './AnimateOnShow.vue';

defineProps<{
    name: string;
    title: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    xing?: string;
    avatar?: string;
}>();

const { t } = useI18n();
</script>

<template>
    <section class="flex flex-col items-center justify-center py-20 text-center lg:py-32">
        <AnimateOnShow :delay="100">
            <div v-if="avatar" class="relative mb-8 group">
                <div class="absolute inset-0 bg-linear-to-tr from-blue-accent to-purple-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img
                    :src="avatar"
                    :alt="name"
                    class="relative mx-auto h-32 w-32 rounded-full border-4 border-white/10 dark:border-black/10 object-cover shadow-2xl md:h-48 md:w-48 transition-transform duration-500 group-hover:scale-105"
                />
            </div>
        </AnimateOnShow>

        <AnimateOnShow :delay="200">
            <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl">
                {{ t('hero.hi') }} <span class="text-gradient">{{ name }}</span>
            </h1>
        </AnimateOnShow>

        <AnimateOnShow :delay="300">
            <p class="mt-4 text-xl text-muted-foreground sm:text-2xl">
                {{ title }}
            </p>
        </AnimateOnShow>

        <AnimateOnShow :delay="400">
            <p class="mt-6 max-w-2xl text-lg text-muted-foreground">
                {{ bio }}
            </p>
        </AnimateOnShow>

        <AnimateOnShow :delay="500">
            <div class="mt-10 flex flex-wrap justify-center gap-4">
                <Button as-child size="lg" class="bg-blue-accent hover:bg-blue-accent/90 text-white shadow-xl shadow-blue-accent/20 transition-all hover:scale-105">
                    <a :href="'mailto:' + email">
                        <Mail class="mr-2 h-5 w-5" />
                        {{ t('hero.contact') }}
                    </a>
                </Button>
                <Button variant="outline" size="lg" as-child class="border-purple-accent/30 hover:bg-purple-accent/10 transition-all hover:scale-105">
                    <a :href="github" target="_blank">
                        <Github class="mr-2 h-4 w-4" />
                        {{ t('hero.github') }}
                    </a>
                </Button>
                <Button variant="outline" size="lg" as-child class="border-blue-accent/30 hover:bg-blue-accent/10 transition-all hover:scale-105">
                    <a :href="linkedin" target="_blank">
                        <Linkedin class="mr-2 h-4 w-4" />
                        {{ t('hero.linkedin') }}
                    </a>
                </Button>
                <Button v-if="xing" variant="outline" size="lg" as-child class="border-purple-accent/30 hover:bg-purple-accent/10 transition-all hover:scale-105">
                    <a :href="xing" target="_blank">
                        <svg class="mr-2 h-4 w-4 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.45 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.003-.006-.003-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.659-.962-.659H3.648v.016z"/></svg>
                        {{ t('hero.xing') }}
                    </a>
                </Button>
            </div>
        </AnimateOnShow>
    </section>
</template>
