
<script setup>
import { ref } from 'vue'
import Sidebar from '../components/layout/Sidebar.vue'
import Navbar from '../components/layout/Navbar.vue'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex">

    <Sidebar
      :is-open="sidebarOpen"
      @close="sidebarOpen = false"
    />

    <div class="flex-1 min-w-0 flex flex-col">
      <Navbar @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
        <slot />
      </main>
    </div>

  </div>
</template>
