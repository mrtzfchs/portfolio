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
    <Card class="flex flex-col overflow-hidden transition-all hover:shadow-lg">
        <div v-if="project.image" class="aspect-video w-full overflow-hidden">
            <img :src="project.image" :alt="project.title" class="h-full w-full object-cover transition-transform hover:scale-105" />
        </div>
        <div v-else class="aspect-video w-full bg-muted flex items-center justify-center">
            <span class="text-muted-foreground">No image available</span>
        </div>
        <CardHeader>
            <CardTitle>{{ project.title }}</CardTitle>
            <CardDescription>{{ project.description }}</CardDescription>
        </CardHeader>
        <CardContent class="flex-grow">
            <div class="flex flex-wrap gap-2">
                <Badge v-for="tag in project.tech" :key="tag" variant="secondary">
                    {{ tag }}
                </Badge>
            </div>
        </CardContent>
        <CardFooter class="gap-2">
            <Button v-if="project.github" variant="outline" size="sm" as-child>
                <a :href="project.github" target="_blank">
                    <Github class="mr-2 h-4 w-4" />
                    Code
                </a>
            </Button>
            <Button v-if="project.link" size="sm" as-child>
                <a :href="project.link" target="_blank">
                    <ExternalLink class="mr-2 h-4 w-4" />
                    Live Demo
                </a>
            </Button>
        </CardFooter>
    </Card>
</template>
