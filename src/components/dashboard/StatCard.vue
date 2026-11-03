
<script setup>
defineProps({
  title: String,
  value: String,
  percentage: String,
  icon: Object,
  color: String,
  positive: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">

    <!-- Card Header -->
    <div class="flex items-center justify-between">

      <p class="text-sm font-medium text-gray-500">
        {{ title }}
      </p>

      <div
        class="w-11 h-11 rounded-lg flex items-center justify-center"
        :class="color"
      >
        <component :is="icon" :size="22" />
      </div>

    </div>

    <!-- Value -->
    <h2 class="text-3xl font-bold text-gray-800 mt-4">
      {{ value }}
    </h2>

    <!-- Percentage -->
    <div class="flex items-center gap-2 mt-3">

      <span
        class="text-sm font-semibold"
        :class="positive ? 'text-green-600' : 'text-red-600'"
      >
        {{ percentage }}
      </span>

      <span class="text-sm text-gray-400">
        vs last month
      </span>

    </div>

  </div>
</template>
