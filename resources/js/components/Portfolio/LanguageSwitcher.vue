<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-vue-next';

const { locale, t } = useI18n();

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

const setLanguage = (lang: string) => {
    locale.value = lang;
    localStorage.setItem('locale', lang);
};
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon" class="hover:text-blue-accent hover:bg-blue-accent/10 transition-colors">
                <Languages class="h-5 w-5" />
                <span class="sr-only">{{ t('nav.switch_language') }}</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem
                v-for="lang in languages"
                :key="lang.code"
                @click="setLanguage(lang.code)"
                :class="{ 'bg-accent': locale === lang.code }"
            >
                <span class="mr-2">{{ lang.flag }}</span>
                {{ lang.name }}
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
