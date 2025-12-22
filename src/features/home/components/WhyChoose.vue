<template>
  <section class="py-24 lg:py-32 border border-black">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-20 lg:mb-24">
        <h2
          class="text-4xl lg:text-5xl font-light mb-4 text-[var(--color-primary)] tracking-tight"
        >
          {{ translate("wcl") }}<span class="text-[#02CCFE]"> ILLUME ?</span>
        </h2>
        <p
          class="text-base lg:text-lg max-w-xl mx-auto leading-relaxed opacity-70"
        >
          {{ translate("wcd") }}
        </p>
      </div>

      <!-- Content -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 max-w-5xl mx-auto"
      >
        <!-- Images - Clean grid -->
        <div class="grid grid-cols-2 gap-3">
          <div class="aspect-square overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/44/89/46/4489467ccec7d18825b277fa20dfb487.jpg"
              alt="Natural skincare"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="aspect-square overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/8a/54/68/8a5468089864b09ff73e9ac02395ed22.jpg"
              alt="Premium serum"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="aspect-square overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/fb/4f/9f/fb4f9fee0c1bf03113524b6ba8ba4383.jpg"
              alt="Hand holding product"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="aspect-square overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/78/9d/4c/789d4c936c1a26a99cbdd2a89be1ea17.jpg"
              alt="Laboratory testing"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Features - Minimal list -->
        <div class="space-y-10">
          <div class="flex items-start gap-5">
            <div class="text-2xl opacity-30">01</div>
            <div>
              <h3 class="text-lg text-[#02CCFE] mb-1 font-normal">Vegan</h3>
              <p class="text-sm opacity-60 leading-relaxed">
                {{ translate("wc1") }}
              </p>
            </div>
          </div>
          <div class="flex items-start gap-5">
            <div class="text-2xl opacity-30">02</div>
            <div>
              <h3 class="text-lg mb-1 text-[#02CCFE] font-normal">
                Cruelty-Free
              </h3>
              <p class="text-sm opacity-60 leading-relaxed">
                {{ translate("wc2") }}
              </p>
            </div>
          </div>
          <div class="flex items-start gap-5">
            <div class="text-2xl opacity-30">03</div>
            <div>
              <h3 class="text-lg mb-1 text-[#02CCFE] font-normal">
                Safe Ingredients
              </h3>
              <p class="text-sm opacity-60 leading-relaxed">
                {{ translate("wc3") }}
              </p>
            </div>
          </div>
          <div class="flex items-start gap-5">
            <div class="text-2xl opacity-30">04</div>
            <div>
              <h3 class="text-lg mb-1 text-[#02CCFE] font-normal">
                Clinically Approved
              </h3>
              <p class="text-sm opacity-60 leading-relaxed">
                {{ translate("wc4") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from "../../../composables/useLanguage";

const { translate } = useLanguage();
</script>

<style scoped>
/* No additional styles needed */
</style>
