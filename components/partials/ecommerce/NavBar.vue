<template>
  <nav id="header" class="w-full z-30 top-0 py-1">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

      <label for="menu-toggle" class="cursor-pointer md:hidden block">
        <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <RouterLink to="/" class="inline-block hover:text-black py-2 px-4">
                <icon name="home2" class="w-6 h-6 fill-current text-gray-700" />
              </RouterLink>
            </li>
              <li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Shop</a></li>
              <li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">About</a></li>
          </ul>
        </nav>
      </div>

      <div class="order-1 md:order-2">
        <a class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
          <icon name="shopping" class="" />
          NORDICS
        </a>
      </div>

      <div class="order-2 md:order-3 flex items-center" id="nav-content">

        <a class="inline-block no-underline hover:text-black" href="#">
          <icon name="person" class="w-6 h-6 fill-current text-gray-700" />
        </a>

        <RouterLink to="/ecommerce/cart" class="pl-3 inline-block no-underline hover:text-black" >
          <icon name="cart2" class="" />
        </RouterLink>

      </div>
    </div>
  </nav> <!--Nav-->
</template>

<script setup>
import { ref } from "vue"

</script>

<style scoped>

  #menu-toggle:checked + #menu {
      display: block;
  }
</style>
