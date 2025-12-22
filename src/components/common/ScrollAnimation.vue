<template>
  <div ref="containerRef" :class="containerClass">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  containerClass: {
    type: String,
    default: "",
  },
  animationType: {
    type: String,
    default: "fadeUp",
    validator: (value) =>
      ["fadeUp", "fadeIn", "scale", "slideLeft", "slideRight"].includes(value),
  },
  duration: {
    type: Number,
    default: 1,
  },
  delay: {
    type: Number,
    default: 0,
  },
  stagger: {
    type: Number,
    default: 0,
  },
  threshold: {
    type: Number,
    default: 0.1,
  },
  once: {
    type: Boolean,
    default: true,
  },
});

const containerRef = ref(null);
let scrollTriggerInstance = null;

const getAnimationConfig = () => {
  const configs = {
    fadeUp: {
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1 },
    },
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    scale: {
      from: { scale: 0.8, opacity: 0 },
      to: { scale: 1, opacity: 1 },
    },
    slideLeft: {
      from: { x: 100, opacity: 0 },
      to: { x: 0, opacity: 1 },
    },
    slideRight: {
      from: { x: -100, opacity: 0 },
      to: { x: 0, opacity: 1 },
    },
  };

  return configs[props.animationType] || configs.fadeUp;
};

const initializeAnimation = () => {
  if (!containerRef.value) return;

  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }

  const animationConfig = getAnimationConfig();

  // Animate all direct children
  const children = containerRef.value.children;

  if (children.length === 0) return;

  const tl = gsap.fromTo(
    children,
    {
      ...animationConfig.from,
      willChange: "transform, opacity",
    },
    {
      ...animationConfig.to,
      duration: props.duration,
      delay: props.delay,
      stagger: props.stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.value,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: props.once
          ? "play none none none"
          : "play none reverse none",
        markers: false, // Set to true for debugging
        once: props.once,
      },
    }
  );

  scrollTriggerInstance = tl.scrollTrigger;
};

onMounted(() => {
  setTimeout(() => {
    initializeAnimation();
  }, 100);
});

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
});
</script>
