
<script setup>
import {
  Search,
  Bell,
  ChevronDown,
  Menu
} from 'lucide-vue-next'

defineEmits(['toggle-sidebar'])
</script>

<template>
  <header class="h-20 bg-white border-b border-gray-200 px-4 sm:px-6 flex items-center justify-between gap-4">

    <div class="flex items-center gap-3 min-w-0">
      <button
        @click="$emit('toggle-sidebar')"
        class="text-gray-600 hover:bg-gray-100 p-2 rounded-lg lg:hidden"
      >
        <Menu :size="24" />
      </button>

      <div class="min-w-0">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800 truncate">
          Dashboard Overview
        </h2>
        <p class="hidden sm:block text-sm text-gray-500">
          Welcome back, John!
        </p>
      </div>
    </div>

    <div class="flex items-center gap-3 sm:gap-5">

      <div class="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
        <Search :size="18" class="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          class="bg-transparent outline-none text-sm w-32 lg:w-48"
        />
      </div>

      <button class="relative text-gray-500 hover:text-gray-800">
        <Bell :size="21" />
        <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <div class="flex items-center gap-2">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="Admin"
          class="w-9 h-9 rounded-full"
        />

        <div class="hidden sm:block">
          <p class="text-sm font-semibold text-gray-800">John Admin</p>
          <p class="text-xs text-gray-500">Administrator</p>
        </div>

        <ChevronDown :size="16" class="hidden sm:block text-gray-400" />
      </div>

    </div>
  </header>
</template>
