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
    <section id="skills" class="py-20">
        <AnimateOnShow>
            <div class="mb-12 text-center">
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ t('skills.title') }}</h2>
                <p class="mt-4 text-lg text-muted-foreground">
                    {{ t('skills.subtitle') }}
                </p>
            </div>
        </AnimateOnShow>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimateOnShow 
                v-for="(category, index) in categories" 
                :key="category"
                :delay="index * 100"
            >
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold">{{ category }}</h3>
                    <div class="flex flex-wrap gap-2">
                        <Badge v-for="skill in getSkillsByCategory(category)" :key="skill.name" variant="outline" class="text-sm py-1">
                            {{ skill.name }}
                        </Badge>
                    </div>
                </div>
            </AnimateOnShow>
        </div>
    </section>
</template>
