<template>
  <div class="index">
    <Navbar />
    <!--Hero section-->
    <Hero />
    <div class="bg-dark py-24 text-white">
      <div class="content">
        <div class="flex flex-col md:flex-row">
          <div class="flex-1">
            <Services />
          </div>
          <div class="flex-1">
            <div class="w-full md:w-2/3 flex flex-col">
              <span class="text-sm text-grey">Présentation</span>
              <h1 class="text-5xl font-bold leading-tight mt-4">Salut! Je suis Don Freddy</h1>
              <div class="my-8 text-lg">
                Lorem ipsum dolor si h f ioasdif sd sd fsdt amet consectetur adipisicing
              </div>
              <p class="text-grey text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat assumenda
                quidem. Amet numquam labore expedita sunt pariatur! Repudiandae libero at fugit nemo
                aut dignissimos labore veniam officia eveniet maiores. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Sequi, fugiat vel. Illum at voluptatum, optio aliquam
                vel ducimus eos, sequi modi veritatis libero et similique eveniet odio! Aut, eveniet
                reiciendis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-darkGrey py-24 text-white">
      <div class="content">
        <div class="flex flex-col md:flex-row">
          <div class="flex-1"><Education /></div>
          <div class="flex-1"><Education /></div>
        </div>
      </div>
    </div>
    <div class="bg-dark py-24">
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
import Services from '@/components/Services.vue';
import Education from '@/components/Education.vue';

export default defineComponent({
  name: 'Index',
  components: {
    Navbar,
    Footer,
    Hero,
    Services,
    Education,
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
