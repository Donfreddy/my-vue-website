<template>
  <footer class="bg-dark text-white py-24">
    <div class="content">
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
    <!-- Back to Top -->
    <a
      href="#"
      class="back-to-top fixed hidden w-10 h-10 text-center leading-4 text-xl bottom-8 right-8 transit text-grey hover:text-primary z-10"
      ><i class="fa fa-angle-double-up fa-2x"></i
    ></a>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import $ from 'jquery';

// Back to top button
$(function () {
  $(window).on('scroll', function () {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if ($(this).scrollTop()! > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').on('click', function () {
    $('#top').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // // Smooth scrolling on the navbar links
  // $('.navbar-nav a').on('click', function (event) {
  //   if (this.hash !== '') {
  //     event.preventDefault();

  //     $('html, body').animate(
  //       {
  //         scrollTop: $(this.hash).offset().top - 30,
  //       },
  //       1500,
  //       'easeInOutExpo',
  //     );

  //     if ($(this).parents('.navbar-nav').length) {
  //       $('.navbar-nav .active').removeClass('active');
  //       $(this).closest('a').addClass('active');
  //     }
  //   }
  // });
});

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

<style scoped>
@keyframes loader-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  border-right-color: transparent;
  animation: loader-rotate 10s linear infinite;
}
.back-to-top {
  animation-direction: alternate;
  /* -webkit-animation: action 1s infinite alternate;
  animation: action 1s infinite alternate; */
}
</style>
