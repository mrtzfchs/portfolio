<script setup lang="ts">
import { useAppearance } from '@/composables/useAppearance';
import { useI18n } from 'vue-i18n';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Monitor } from 'lucide-vue-next';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const { appearance, updateAppearance } = useAppearance();
const { t } = useI18n();
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon" class="hover:text-blue-accent hover:bg-blue-accent/10 transition-colors">
                <Sun v-if="appearance === 'light'" class="h-5 w-5" />
                <Moon v-else-if="appearance === 'dark'" class="h-5 w-5" />
                <Monitor v-else class="h-5 w-5" />
                <span class="sr-only">{{ t('theme.toggle') }}</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem @click="updateAppearance('light')" :class="{ 'bg-accent': appearance === 'light' }">
                <Sun class="mr-2 h-4 w-4" />
                <span>{{ t('theme.light') }}</span>
            </DropdownMenuItem>
            <DropdownMenuItem @click="updateAppearance('dark')" :class="{ 'bg-accent': appearance === 'dark' }">
                <Moon class="mr-2 h-4 w-4" />
                <span>{{ t('theme.dark') }}</span>
            </DropdownMenuItem>
            <DropdownMenuItem @click="updateAppearance('system')" :class="{ 'bg-accent': appearance === 'system' }">
                <Monitor class="mr-2 h-4 w-4" />
                <span>{{ t('theme.system') }}</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
