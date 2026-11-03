
<script setup>
import { RouterLink } from 'vue-router'

import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  ShoppingCart,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  X
} from 'lucide-vue-next'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Users', icon: Users, path: '/users' },
  { name: 'Products', icon: ShoppingBag, path: '/products' },
  { name: 'Orders', icon: ShoppingCart, path: '/orders' },
  { name: 'Analytics', icon: BarChart3, path: '/analytics' },
  { name: 'Settings', icon: Settings, path: '/settings' },
]
</script>

<template>
  <!-- Mobile backdrop -->
  <div
    v-if="isOpen"
    @click="$emit('close')"
    class="fixed inset-0 bg-black/50 z-40 lg:hidden"
  ></div>

  <!-- Sidebar -->
  <aside
    class="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white
           flex flex-col transform transition-transform duration-300
           lg:static lg:translate-x-0 lg:shrink-0"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >

    <!-- Logo -->
    <div class="h-20 px-6 flex items-center justify-between border-b border-slate-800">
      <h1 class="text-xl font-bold">
        Admin<span class="text-blue-400">Panel</span>
      </h1>

      <button
        @click="$emit('close')"
        class="lg:hidden text-slate-300 hover:text-white"
      >
        <X :size="22" />
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4 overflow-y-auto">
      <p class="text-xs uppercase tracking-wider text-slate-500 mb-4 px-3">
        Main Menu
      </p>

      <div class="space-y-2">
        <RouterLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          @click="$emit('close')"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition"
          :class="$route.path === item.path
            ? 'bg-blue-600 text-white'
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'"
        >
          <component :is="item.icon" :size="20" />
          <span>{{ item.name }}</span>
        </RouterLink>
      </div>
    </nav>

    <!-- Bottom links -->
    <div class="p-4 border-t border-slate-800 space-y-2">
      <button class="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg text-sm">
        <HelpCircle :size="20" />
        Help & Support
      </button>

      <button class="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg text-sm">
        <LogOut :size="20" />
        Logout
      </button>
    </div>

  </aside>
</template>
