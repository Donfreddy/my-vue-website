<template>
  <div
    class="bg-darkGrey service hover:shadow-2xl transition duration-500 p-8 rounded-lg w-full md:w-5/6 mb-3"
  >
    <div class="flex flex-row items-center justify-between mb-2">
      <h3 class="text-2xl font-bold">Développement web</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    </div>
    <p class="text-grey text-sm mb-6">
      Des sites Web réactifs conçus pour une expérience utilisateur optimale qui atteint vos
      objectifs commerciaux.
    </p>
    <div class="relative w-max">
      <span class="text-xs font-semibold uppercase">04 Projects</span>
      <span class="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-white"></span>
    </div>
  </div>
  <div
    class="bg-darkGrey service hover:shadow-2xl transition duration-500 p-8 rounded-lg w-full md:w-5/6 mb-3"
  >
    <div class="flex flex-row items-center justify-between mb-2">
      <h3 class="text-2xl font-bold">Développement Mobile</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    </div>
    <p class="text-grey text-sm mb-6">je developper le front end ...</p>

    <div class="relative w-max">
      <span class="text-xs font-semibold uppercase">04 Projects</span>
      <span class="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-white"></span>
    </div>
  </div>
  <div
    class="bg-darkGrey service hover:shadow-2xl transition duration-500 p-8 rounded-lg w-full md:w-5/6 mb-3"
  >
    <div class="flex flex-row items-center justify-between mb-2">
      <h3 class="text-2xl font-bold">Sites Web WordPress</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>
    <p class="text-grey text-sm mb-6">
      Gérez votre site Web à l'aide du système de gestion de contenu le plus populaire du Web.
    </p>
    <div class="relative w-max">
      <span class="text-xs font-semibold uppercase">04 Projects</span>
      <span class="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-white"></span>
    </div>
  </div>
  <div
    class="bg-darkGrey service hover:shadow-2xl transition duration-500 p-8 rounded-lg w-full md:w-5/6 mb-3"
  >
    <div class="flex flex-row items-center justify-between mb-2">
      <h3 class="text-2xl font-bold">Performance Et Référencement</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <p class="text-grey text-sm mb-6">
      Rendez votre site Web rapide, facile à trouver et atteignez le public le plus large possible.
    </p>
    <div class="relative w-max">
      <span class="text-xs font-semibold uppercase">04 Projects</span>
      <span class="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-white"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Services',
  methods: {},
});
</script>

<style lang="postcss" scoped>
.service:hover h3 {
  @apply text-primary transition duration-500 ease-in-out;
}
.service:hover span:last-child {
  @apply w-full;
}
</style>
