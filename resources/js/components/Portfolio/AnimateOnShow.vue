<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

interface Props {
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
}

const props = withDefaults(defineProps<Props>(), {
    delay: 0,
    duration: 700,
    direction: 'up',
    distance: 20,
});

const target = ref<HTMLElement | null>(null);
const isVisible = ref(false);

useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
        if (isIntersecting && !isVisible.value) {
            isVisible.value = true;
        }
    },
    { threshold: 0.1 },
);

const getInitialTransform = () => {
    if (props.direction === 'none') return '';
    
    switch (props.direction) {
        case 'up': return `translateY(${props.distance}px)`;
        case 'down': return `translateY(-${props.distance}px)`;
        case 'left': return `translateX(${props.distance}px)`;
        case 'right': return `translateX(-${props.distance}px)`;
        default: return '';
    }
};
</script>

<template>
    <div
        ref="target"
        :style="{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay}ms`,
            transform: isVisible ? 'none' : getInitialTransform(),
            opacity: isVisible ? 1 : 0,
        }"
        class="transition-all ease-out"
    >
        <slot />
    </div>
</template>
