<template>
  <div class="bg-darkGrey" id="top">
    <div class="content">
      <div class="flex justify-between items-center py-6">
        <div class="text-white lg:text-2xl">
          <router-link to="/"
            ><span class="font-extrabold">Don</span>
            <span class="font-medium text-gray-300"> Freddy</span>
          </router-link>
        </div>
        <div class="hidden sm:flex sm:items-center">
          <a href="#" class="text-sm font-semibold text-primary mr-6 transit">
            {{ Services }}
          </a>
          <a href="#" class="text-sm text-white font-semibold hover:text-primary mr-6 transit">
            {{ Works }}
          </a>
          <a href="#" class="text-sm text-white font-semibold hover:text-primary mr-6 transit">
            {{ Notes }}
          </a>
          <a href="#" class="text-sm text-white font-semibold hover:text-primary transit">
            {{ Contact }}
          </a>
        </div>
        <div class="hidden sm:flex sm:items-center">
          <div class="hidden lg:flex lg:items-center">
            <a href="#" class="mr-2">
              <i class="fab fa-twitter text-white hover:text-primary transit mr-2"></i>
            </a>
            <a href="#" class="text-white mr-2">
              <i class="fab fa-github text-white hover:text-primary transit mr-2"></i>
            </a>
            <a href="#" class="mr-2">
              <i class="fab fa-facebook text-white hover:text-primary transit mr-2"></i>
            </a>
            <a href="#" class="text-white mr-8">
              <i class="fab fa-instagram text-white hover:text-primary transit mr-2"></i>
            </a>
          </div>

          <div class="hidden sm:flex sm:items-center">
            <a
              href="#"
              class="w-14 h-14 flex rounded-full shadow-sm bg-bgColor transit inset-0 transform hover:scale-75"
            >
              <i class="far m-auto text-primary fa-lg fa-envelope"></i>
            </a>
          </div>
        </div>

        <div class="sm:hidden cursor-pointer">
          <button
            class="rounded-lg sm:hidden focus:outline-none focus:shadow-outline transit"
            @click="isOpen = !isOpen"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-primary">
              <path
                v-show="!isOpen"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                v-show="isOpen"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- 
           Mobile menu, show/hide based on mobile menu state.
         -->
      <transition
        enter-active-class="transition ease-out duration-500 transform"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-300 transform"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          class="block sm:hidden border-t-2 py-2 border-gray-500 border-opacity-10"
          v-show="isOpen"
        >
          <div class="flex flex-col">
            <a href="#" class="text-sm font-semibold text-primary mb-2 transit">
              {{ Services }}
            </a>
            <a href="#" class="text-sm text-white font-semibold hover:text-primary mb-2 transit">
              {{ Works }}
            </a>
            <a href="#" class="text-sm text-white font-semibold hover:text-primary mb-2 transit">
              {{ Notes }}
            </a>
            <a href="#" class="text-sm text-white font-semibold hover:text-primary mb-2 transit">
              {{ Contact }}
            </a>
            <div
              class="flex justify-between items-center border-t-2 border-gray-500 border-opacity-10 pt-2"
            >
              <div class="">
                <a href="#" class="mr-2">
                  <i class="fab fa-twitter text-white hover:text-primary transit mr-2"></i>
                </a>
                <a href="#" class="text-white mr-2">
                  <i class="fab fa-github text-white hover:text-primary transit mr-2"></i>
                </a>
                <a href="#" class="mr-2">
                  <i class="fab fa-facebook text-white hover:text-primary transit mr-2"></i>
                </a>
                <a href="#" class="text-white mr-8">
                  <i class="fab fa-instagram text-white hover:text-primary transit mr-2"></i>
                </a>
              </div>

              <a
                href="#"
                class="w-14 h-14 flex rounded-full shadow-sm bg-primary bg-opacity-5 transit inset-0 transform hover:scale-75"
              >
                <i class="far m-auto text-primary fa-lg fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  data: () => ({
    isOpen: false,
    Services: '< Services >',
    Works: '< Works >',
    Notes: '< Notes >',
    Contact: '< Contact >',
  }),
});
</script>
