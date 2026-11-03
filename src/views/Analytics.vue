
<script setup>
import DashboardLayout from '../layouts/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>

    <div class="space-y-6">

      <div>
        <h1 class="text-2xl font-bold text-gray-800">
          Analytics
        </h1>

        <p class="text-gray-500 mt-1">
          Monitor your business performance and analytics.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 class="text-lg font-semibold text-gray-800">
            Total Visitors
          </h2>

          <p class="text-3xl font-bold text-blue-600 mt-4">
            12,450
          </p>

          <p class="text-sm text-green-600 mt-2">
            +12.5% compared to last month
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 class="text-lg font-semibold text-gray-800">
            Conversion Rate
          </h2>

          <p class="text-3xl font-bold text-purple-600 mt-4">
            8.45%
          </p>

          <p class="text-sm text-green-600 mt-2">
            +5.2% compared to last month
          </p>
        </div>

      </div>

    </div>

  </DashboardLayout>
</template>
