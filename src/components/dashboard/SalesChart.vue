
<script setup>
import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const chartData = {
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug'
  ],

  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#6366F1',
      borderRadius: 6,
      data: [
        120, 190, 150, 250,
        220, 300, 270, 350
      ],
      barThickness: 22
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false
    }
  },

  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: '#F1F5F9'
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

    <h2 class="text-lg font-semibold text-gray-800">
      Sales Analytics
    </h2>

    <p class="text-sm text-gray-500 mt-1 mb-6">
      Monthly sales performance
    </p>

    <div class="h-72">
      <Bar
        :data="chartData"
        :options="chartOptions"
      />
    </div>

  </div>
</template>
