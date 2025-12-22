<template>
  <section class="py-12 md:py-16 lg:p-28">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Left side - Contact Information -->
        <div
          class="space-y-8 rounded-md p-6 shadow-md bg-[#fff4f2] border-black"
        >
          <div class="space-y-2">
            <p class="text-xl uppercase opacity-50">CONTACT</p>
            <h2 class="text-3xl">Our Office</h2>
          </div>

          <div class="space-y-6">
            <h3 class="text-xl capitalize">phnom penh office</h3>

            <!-- Email -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p class="font-medium mb-1">Email</p>
                <a
                  href="mailto:info@example.com"
                  class="opacity-70 hover:opacity-100"
                >
                  admin@techey.tech
                </a>
              </div>
            </div>

            <!-- Address -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p class="font-medium mb-1">Address</p>
                <p class="opacity-70">
                  Phnom Penh<br />
                  <!-- Baltimore, MD, USA 4508 -->
                </p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p class="font-medium mb-1">Phone</p>
                <a
                  href="tel:+1410123456789"
                  class="opacity-70 hover:opacity-100"
                >
                  +855 96 261 2879
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side - Contact Form -->
        <div class="space-y-6">
          <div class="space-y-2">
            <h2 class="text-2xl">Get In Touch</h2>
            <p class="opacity-60">Have questions before making a purchase?</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm mb-1"> Name </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-3 py-2 border rounded"
                placeholder="Your name"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm mb-1"> Email </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-3 py-2 border rounded"
                placeholder="Your email"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="comment" class="block text-sm mb-1"> Message </label>
              <textarea
                id="comment"
                v-model="form.comment"
                rows="4"
                required
                class="w-full px-3 py-2 border rounded"
                placeholder="Your message"
              ></textarea>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="border px-6 py-2 text-sm hover:bg-[var(--color-pink-50)] hover:text-white transition-colors"
            >
              {{ isSubmitting ? "Sending..." : "Send" }}
            </button>

            <!-- Message -->
            <div v-if="submitMessage" class="text-sm">
              {{ submitMessage.text }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  comment: "",
});

const isSubmitting = ref(false);
const submitMessage = ref(null);

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  submitMessage.value = null;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    submitMessage.value = {
      text: "Thank you for your message.",
    };

    form.value = {
      name: "",
      email: "",
      comment: "",
    };

    setTimeout(() => {
      submitMessage.value = null;
    }, 3000);
  } catch {
    submitMessage.value = {
      text: "Error. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>
