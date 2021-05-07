<template>
  <div class="index">
    <Navbar />
    <!--Hero section-->
    <Hero />
    <div class="m-0 bg-dark h-72"></div>
    <div class="m-0 bg-darkGrey py-24">
      <div class="mx-5 lg:w-6/12 bg-dark shadow-xl rounded-lg overflow-hidden">
        <div id="header-buttons" class="py-3 px-4 flex">
          <div class="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
          <div class="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
          <div class="rounded-full w-3 h-3 bg-green-500"></div>
        </div>
        <div id="code-area" class="py-4 px-4 text-white text-lg">
          <div class="">
            <span>always:</span>
          </div>
          <div class="">
            <span class="text-primary">try </span>
            <span>{</span>
          </div>
          <div class="">
            <div class="ml-6">
              <span>your best and;</span>
            </div>
            <div class="ml-6">
              <span class="text-primary">do </span>
              <span>{</span>
            </div>
            <div class="ml-12">
              <span>what you need to do;</span>
            </div>
            <div class="ml-6">
              <span>} </span>
              <span class="text-primary">while</span>
              <span> (you still have the time);</span>
            </div>
            <div class="mt-4">
              <div class="ml-6">
                <span class="text-primary">for </span>
                <span>(opportunity; comes; only once) {</span>
              </div>
              <div class="ml-12">
                <span>so grab the chance;</span>
              </div>
              <div class="ml-6">
                <span>}</span>
              </div>
            </div>
            <div class="mt-4">
              <div class="ml-6">
                <span class="text-primary">if </span>
                <span>(your fail)</span>
              </div>
              <div class="ml-12">
                <span class="text-primary">throw </span>
                <span>"</span>
                <span class="text-secondary">all your worries</span>
                <span>";</span>
              </div>
            </div>
            <div>
              <span>} </span>
              <span class="text-primary">catch </span>
              <span>(yourself) {</span>
            </div>
            <div class="ml-6">
              <span>everytime you fail</span>
            </div>
            <div class="ml-6">
              <span>and you know to whom</span>
            </div>
            <div class="ml-6">
              <span>you should goto always;</span>
            </div>
            <div>
              <span>}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/core/Navbar.vue';
import Footer from '@/components/core/Footer.vue';
import Hero from '@/components/section/Hero.vue';

export default defineComponent({
  name: 'Index',
  components: {
    Navbar,
    Footer,
    Hero,
  },
});
</script>

<style scoped>
.one:hover span:last-child {
  width: 100%;
}
.docker {
  color: #0091e2;
}
</style>
