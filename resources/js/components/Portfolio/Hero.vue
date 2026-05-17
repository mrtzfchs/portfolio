<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-vue-next';
import AnimateOnShow from './AnimateOnShow.vue';

defineProps<{
    name: string;
    title: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    avatar?: string;
}>();

const { t } = useI18n();
</script>

<template>
    <section class="flex flex-col items-center justify-center py-20 text-center lg:py-32">
        <AnimateOnShow :delay="100">
            <div v-if="avatar" class="mb-8">
                <img 
                    :src="avatar" 
                    :alt="name" 
                    class="mx-auto h-32 w-32 rounded-full border-4 border-muted object-cover shadow-xl md:h-48 md:w-48"
                />
            </div>
        </AnimateOnShow>
        
        <AnimateOnShow :delay="200">
            <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                {{ t('hero.hi') }} <span class="text-primary">{{ name }}</span>
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
                <Button as-child size="lg">
                    <a :href="'mailto:' + email">
                        <Mail class="mr-2 h-5 w-5" />
                        {{ t('hero.contact') }}
                    </a>
                </Button>
                <Button variant="outline" size="lg" as-child>
                    <a :href="github" target="_blank">
                        <Github class="mr-2 h-4 w-4" />
                        {{ t('hero.github') }}
                    </a>
                </Button>
                <Button variant="outline" size="lg" as-child>
                    <a :href="linkedin" target="_blank">
                        <Linkedin class="mr-2 h-4 w-4" />
                        {{ t('hero.linkedin') }}
                    </a>
                </Button>
            </div>
        </AnimateOnShow>
    </section>
</template>
