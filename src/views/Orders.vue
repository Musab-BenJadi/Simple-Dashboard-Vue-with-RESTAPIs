
<script setup>
import DashboardLayout from '../layouts/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>

    <div class="space-y-6">

      <div>
        <h1 class="text-2xl font-bold text-gray-800">
          Orders Management
        </h1>

        <p class="text-gray-500 mt-1">
          Track and manage customer orders.
        </p>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <h2 class="text-lg font-semibold text-gray-800">
          All Orders
        </h2>

        <p class="text-gray-500 mt-2">
          Your orders list and management tools will appear here.
        </p>
      </div>

    </div>

  </DashboardLayout>
</template>
