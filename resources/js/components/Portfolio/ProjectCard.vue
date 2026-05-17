<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-vue-next';
import type { Project } from '@/types/portfolio';

defineProps<{
    project: Project;
}>();
</script>

<template>
    <Card class="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-accent/10 hover:-translate-y-1 border-white/5 dark:border-white/10 group">
        <div v-if="project.image" class="relative aspect-video w-full overflow-hidden">
            <img :src="project.image" :alt="project.title" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div v-else class="aspect-video w-full bg-muted/50 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <span class="relative z-10 text-muted-foreground font-mono text-sm uppercase tracking-widest">No Preview</span>
        </div>
        <CardHeader class="relative">
            <div class="absolute top-0 right-4 w-12 h-1 bg-linear-to-r from-blue-accent to-purple-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
            <CardTitle class="group-hover:text-blue-accent transition-colors">{{ project.title }}</CardTitle>
            <CardDescription class="line-clamp-2">{{ project.description }}</CardDescription>
        </CardHeader>
        <CardContent class="flex-grow">
            <div class="flex flex-wrap gap-2">
                <Badge v-for="tag in project.tech" :key="tag" variant="secondary" class="bg-muted/50 text-[10px] font-mono uppercase tracking-tighter hover:bg-blue-accent/20 hover:text-blue-accent transition-colors">
                    {{ tag }}
                </Badge>
            </div>
        </CardContent>
        <CardFooter class="gap-2 pt-0">
            <Button v-if="project.github" variant="ghost" size="sm" as-child class="hover:text-blue-accent hover:bg-blue-accent/10">
                <a :href="project.github" target="_blank">
                    <Github class="mr-2 h-4 w-4" />
                    Code
                </a>
            </Button>
            <Button v-if="project.link" size="sm" as-child class="bg-foreground text-background hover:bg-blue-accent hover:text-white transition-all shadow-lg hover:shadow-blue-accent/20">
                <a :href="project.link" target="_blank">
                    <ExternalLink class="mr-2 h-4 w-4" />
                    Live
                </a>
            </Button>
        </CardFooter>
    </Card>
</template>
