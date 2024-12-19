<script setup lang="ts">
onMounted(() => {
   const slides = document.querySelectorAll(
      ".gallery__container .gallery__slider__container .gallery__slider img"
   );
   const slideInterval = 3000;

   let currentIndex = 0;
   function changeSlide() {
      (slides[currentIndex]! as HTMLDivElement).style.opacity = '0';
      currentIndex = (currentIndex + 1) % slides.length;
      (slides[currentIndex]! as HTMLDivElement).style.opacity = '1';
   }

   setInterval(changeSlide, slideInterval);
})

await useFetch('/api/portfolio')
</script>

<template>
   <div>
      <div class="hero__container">
         <div class="hero__main">
            <img class="hero__image" src="/hero.png" />
            <p class="hero__title">DECHHI</p>
         </div>
         <div class="hero__links">
            <div class="hero__links__title">
               <p>Digital Artist</p>
            </div>
            <div class="hero__links__container">
               <div class="hero__links__list">
                  <a href="https://ych.commishes.com/user/dech" target="_blank">
                     YCH.Commishes
                  </a>
                  <a href="https://vk.com/dechhi" target="_blank"> VK </a>
                  <a href="https://hipolink.me/dech/tips" target="_blank">
                     Hipolink
                  </a>
               </div>
               <img class="hero__links__decor" src="/fon.png" />
               <img class="hero__links__decor mobile" src="/fon-horizontal.png" />
            </div>
         </div>
      </div>

      <div class="gallery__container">
         <div class="gallery__title">
            <p>Gallery and price list</p>
         </div>
         <div class="gallery__slider__container">
            <img class="gallery__slider__decor" src="/fon.png" />
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
                  <img src="/1.png" class="slide" />
                  <img src="/2.png" class="slide" />
                  <img src="/3.png" class="slide" />
                  <img src="/4.png" class="slide" />
                  <img src="/5.png" class="slide" />
               </div>
            </div>
            <img class="gallery__slider__decor mobile" src="/fon-horizontal.png" />
         </div>
      </div>
   </div>
</template>

<style scoped></style>