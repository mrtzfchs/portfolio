<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Badge } from '@/components/ui/badge';
import type { Skill } from '@/types/portfolio';
import AnimateOnShow from './AnimateOnShow.vue';

const props = defineProps<{
    skills: Skill[];
}>();

const { t } = useI18n();

const categories = computed(() => {
    const cats = [...new Set(props.skills.map(s => s.category))];
    return cats;
});

const getSkillsByCategory = (category: string) => {
    return props.skills.filter(s => s.category === category);
};
</script>

<template>
    <section id="skills" class="py-20 relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        <AnimateOnShow>
            <div class="mb-12 text-center relative z-10">
                <h2 class="text-3xl font-bold tracking-tight sm:text-5xl text-gradient inline-block">{{ t('skills.title') }}</h2>
                <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {{ t('skills.subtitle') }}
                </p>
            </div>
        </AnimateOnShow>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            <AnimateOnShow 
                v-for="(category, index) in categories" 
                :key="category"
                :delay="index * 100"
            >
                <div class="space-y-4 p-6 rounded-2xl border border-white/5 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-sm hover:border-blue-accent/30 transition-colors group">
                    <h3 class="text-xl font-bold tracking-tight group-hover:text-blue-accent transition-colors">{{ category }}</h3>
                    <div class="flex flex-wrap gap-2">
                        <Badge v-for="skill in getSkillsByCategory(category)" :key="skill.name" variant="outline" class="text-xs py-1 border-purple-accent/20 hover:border-purple-accent hover:bg-purple-accent/5 transition-all cursor-default">
                            {{ skill.name }}
                        </Badge>
                    </div>
                </div>
            </AnimateOnShow>
        </div>
    </section>
</template>
