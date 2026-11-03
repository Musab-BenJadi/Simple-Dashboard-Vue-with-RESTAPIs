
<script setup>
import { Line } from 'vue-chartjs'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const chartData = {
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ],

  datasets: [
    {
      label: 'Revenue',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: '#3B82F6',
      borderWidth: 3,
      pointBackgroundColor: '#3B82F6',
      pointRadius: 4,
      fill: true,
      tension: 0.4,
      data: [
        12000, 15000, 13500, 18000,
        17000, 22000, 20000, 25000,
        23000, 28000, 26000, 32000
      ]
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false
    },

    tooltip: {
      backgroundColor: '#1E293B',
      padding: 12
    }
  },

  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: '#F1F5F9'
      },
      ticks: {
        callback: (value) => '$' + value.toLocaleString()
      }
    },

    x: {
      grid: {
        display: false
      }
    }
  }
}
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">

    <div class="flex items-center justify-between mb-6">

      <div>
        <h2 class="text-lg font-semibold text-gray-800">
          Revenue Overview
        </h2>

        <p class="text-sm text-gray-500 mt-1">
          Monthly revenue performance
        </p>
      </div>

      <select class="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600">
        <option>2026</option>
        <option>2025</option>
      </select>

    </div>

    <div class="h-72">
      <Line
        :data="chartData"
        :options="chartOptions"
      />
    </div>

  </div>
</template>
