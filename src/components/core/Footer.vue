<template>
  <footer class="bg-dark text-white py-24">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 sm:grid-cols-3">
        <div class="md:text-3xl text-2xl col-span-2">
          <p>Faisons ensemble quelque chose d'incroyable.</p>
        </div>
        <div class="">
          <ul>
            <li><p class="text-sm text-grey pb-6">Information</p></li>
            <li>
              <p class="text-grey">Bonaberi, Douala, Comeroun</p>
            </li>
            <li><p class="md:text-xl text-lg">hello@donfreddy.io</p></li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 py-16">
        <div class="md:text-3xl text-2xl col-span-2">
          <p>
            Commencez par dire <span class="text-primary underline cursor-pointer">bonjour</span>
          </p>
        </div>
        <div class="">
          <ul>
            <li class="mb-1">
              <a href="#" class="text-sm font-semibold text-primary transit">
                {{ Services }}
              </a>
            </li>
            <li class="mb-1">
              <a href="#" class="text-sm text-white font-semibold hover:text-primary transit">
                {{ Works }}
              </a>
            </li>
            <li class="mb-1">
              <a href="#" class="text-sm text-white font-semibold hover:text-primary transit">
                {{ Notes }}
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-white font-semibold hover:text-primary transit">
                {{ Contact }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div
          class="flex sm:justify-start md:text-base text-sm text-center justify-center text-grey"
        >
          <p>&copy; {{ year }} Don Freddy. Tous les droits sont réservés</p>
        </div>
        <div class="flex sm:justify-end justify-center pt-2 sm:pt-0">
          <a href="#" class="mr-2">
            <i class="fab fa-twitter text-white hover:text-primary transit mr-2"></i>
          </a>
          <a href="#" class="text-white mr-2">
            <i class="fab fa-github text-white hover:text-primary transit mr-2"></i>
          </a>
          <a href="#" class="mr-2">
            <i class="fab fa-facebook text-white hover:text-primary transit mr-2"></i>
          </a>
          <a href="#" class="text-white">
            <i class="fab fa-instagram text-white hover:text-primary transit"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  data: () => ({
    year: new Date().getFullYear(),
    Services: '< Services >',
    Works: '< Works >',
    Notes: '< Notes >',
    Contact: '< Contact >',
  }),
});
</script>
