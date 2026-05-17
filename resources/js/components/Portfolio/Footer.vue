<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps<{
    name: string;
}>();

const { t } = useI18n();
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="border-t py-12 md:py-16 relative overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
            <p class="text-sm text-muted-foreground font-mono uppercase tracking-widest">
                &copy; {{ currentYear }} <span class="text-blue-accent font-bold">{{ name }}</span>. {{ t('footer.built_with') }}
            </p>
        </div>
    </footer>
</template>
