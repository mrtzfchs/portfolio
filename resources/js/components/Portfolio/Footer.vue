<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps<{
    name: string;
}>();

const { t } = useI18n();
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="border-t py-12 md:py-16">
        <div class="container mx-auto px-4 text-center">
            <p class="text-sm text-muted-foreground">
                &copy; {{ currentYear }} {{ name }}. {{ t('footer.built_with') }}
            </p>
        </div>
    </footer>
</template>
