<template>
  <section class="mt-24">
    <div class="flex flex-col-reverse md:flex-row items-center mt-10 space-y-0">
      <!-- LEFT / BOTTOM -->
      <div class="flex flex-col space-y-8 md:space-y-12 md:w-1/2">
        <h1 class="max-w-md text-4xl md:text-5xl font-bold text-center md:text-left mt-8 md-mt-0">Bring everything together to build better products</h1>
        <p class="max-w-sm text-center md:text-left text-darkGrayishBlue">A scalable, customizable, dynamic, and self-managed website with content generation and support services for small restaurants.</p>
        <!-- BUTTON -->
        <div class="flex justify-center md:justify-start">
          <MyBtn
            label="Get Started"
          />
        </div>
      </div>
      <!-- RIGHT / TOP: IMAGE -->
      <picture class="md:w-1/2">
        <img src="@/assets/img/illustration-intro.svg" alt="">
      </picture>
    </div>
  </section> <!-- HERO -->
</template>
