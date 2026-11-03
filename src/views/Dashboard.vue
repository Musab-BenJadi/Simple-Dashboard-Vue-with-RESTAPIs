
<script setup>
import DashboardLayout from '../layouts/DashboardLayout.vue'
import StatCard from '../components/dashboard/StatCard.vue'
import RevenueChart from '../components/dashboard/RevenueChart.vue'
import SalesChart from '../components/dashboard/SalesChart.vue'
import RecentOrders from '../components/dashboard/RecentOrders.vue'

import {
  Users,
  ShoppingCart,
  DollarSign,
  Activity
} from 'lucide-vue-next'

const statistics = [
  {
    title: 'Total Users',
    value: '2,450',
    percentage: '+12.5%',
    icon: Users,
    color: 'bg-blue-100 text-blue-600',
    positive: true
  },
  {
    title: 'Total Orders',
    value: '1,240',
    percentage: '+8.2%',
    icon: ShoppingCart,
    color: 'bg-green-100 text-green-600',
    positive: true
  },
  {
    title: 'Total Revenue',
    value: '$24,500',
    percentage: '+15.3%',
    icon: DollarSign,
    color: 'bg-purple-100 text-purple-600',
    positive: true
  },
  {
    title: 'Growth Rate',
    value: '85.4%',
    percentage: '+5.4%',
    icon: Activity,
    color: 'bg-orange-100 text-orange-600',
    positive: true
  }
]
</script>


<template>
  <DashboardLayout>

    <div class="space-y-8">

      <!-- Page Heading -->
      <div>
        <h1 class="text-2xl font-bold text-gray-800">
          Welcome back, John!
        </h1>

        <p class="text-gray-500 mt-1">
          Here's what's happening with your business today.
        </p>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          v-for="stat in statistics"
          :key="stat.title"
          v-bind="stat"
        />

      </div>

      <!-- Charts -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <RevenueChart />

        <SalesChart />

      </div>

      <!-- Recent Orders -->
      <RecentOrders />

    </div>

  </DashboardLayout>
</template>

