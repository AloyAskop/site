<script setup lang="ts">
const slides = ref([
   { path: '/1.webp', alt: '1 slide' },
   { path: '/2.webp', alt: '2 slide' },
   { path: '/3.webp', alt: '3 slide' },
   { path: '/4.webp', alt: '4 slide' },
   { path: '/5.webp', alt: '5 slide' },
])

const activeSlide = ref<number>(0)
const runSlider = (slideInterval: number = 3000) => {
   setInterval(() => activeSlide.value = (activeSlide.value + 1) % slides.value.length, slideInterval)
}

onMounted(() => {
   runSlider()
})

useServerHead({
   link: [
      { rel: 'preload', as: 'image', href: '/hero.webp' }
   ]
})
</script>

<template>
   <div>
      <div class="hero__container">
         <div class="hero__main">
            <img class="hero__image" src="/hero.webp" alt="Dechhi Digital Artist" />
            <p class="hero__title">DECHHI</p>
         </div>
         <div class="hero__links">
            <div class="hero__links__title">
               <p>Digital Artist</p>
            </div>
            <div class="hero__links__container">
               <div class="hero__links__list">
                  <a href="https://ych.commishes.com/user/dech" target="_blank" aria-label="YCH.Commishes link">
                     YCH.Commishes
                  </a>
                  <a href="https://vk.com/dechhi" target="_blank"> VK </a aria-label="VK link">
                  <a href="https://hipolink.me/dech/tips" target="_blank" aria-label="Hipolink link">
                     Hipolink
                  </a>
               </div>
               <img class="hero__links__decor" src="/fon.webp" alt="" />
               <img class="hero__links__decor mobile" src="/fon-horizontal.webp" loading="lazy" alt="" />
            </div>
         </div>
      </div>

      <div class="gallery__container">
         <div class="gallery__title">
            <p>Gallery and price list</p>
         </div>
         <div class="gallery__slider__container">
            <img class="gallery__slider__decor" src="/fon.webp" alt="" />
            <div class="gallery__price">
               <p class="gallery__price__title">Price</p>
               <div class="gallery__price__list">
                  <div class="gallery__price__category">
                     <div class="gallery__price__category__title">
                        <p>Character</p>
                     </div>
                     <div class="gallery__price__category__list">
                        <div class="gallery__price__category__item">
                           <p>Half</p>
                           <div class="dots"></div>
                           <p>15 USD</p>
                        </div>
                        <div class="gallery__price__category__item">
                           <p>Full</p>
                           <div class="dots"></div>
                           <p>30 USD</p>
                        </div>
                     </div>
                  </div>
                  <div class="gallery__price__category">
                     <div class="gallery__price__category__list">
                        <div class="gallery__price__category__item">
                           <p>Additional character</p>
                           <div class="dots"></div>
                           <p>+100%</p>
                        </div>
                     </div>
                  </div>
                  <div class="gallery__price__category">
                     <div class="gallery__price__category__title">
                        <p>Background</p>
                     </div>
                     <div class="gallery__price__category__list">
                        <div class="gallery__price__category__item">
                           <p>Simple</p>
                           <div class="dots"></div>
                           <p>Free</p>
                        </div>
                        <div class="gallery__price__category__item">
                           <p>Complex</p>
                           <div class="dots"></div>
                           <p>5 USD</p>
                        </div>
                     </div>
                  </div>
                  <div class="gallery__price__footer">
                     <p>Prepayment - 30%</p>
                     <p>Deadline - month</p>
                  </div>
               </div>
            </div>
            <div class="gallery__slider__wrapper">
               <div class="gallery__slider">
                  <img :src="slide.path" class="slide" :class="activeSlide === i ? 'opacity-100' : 'opacity-0'"
                     v-for="slide, i in slides" :key="i" loading="lazy" :alt="slide.alt" />
               </div>
            </div>
            <img class="gallery__slider__decor mobile" src="/fon-horizontal.webp" loading="lazy" alt="" />
         </div>
      </div>
   </div>
</template>

<style scoped></style>