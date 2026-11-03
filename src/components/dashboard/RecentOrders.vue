
<script setup>
const orders = [
  {
    id: '#ORD-1001',
    customer: 'John Smith',
    product: 'Laptop',
    date: 'Nov 01, 2026',
    amount: '$1,200',
    status: 'Completed'
  },
  {
    id: '#ORD-1002',
    customer: 'Sarah Johnson',
    product: 'Smartphone',
    date: 'Nov 02, 2026',
    amount: '$850',
    status: 'Pending'
  },
  {
    id: '#ORD-1003',
    customer: 'Michael Brown',
    product: 'Headphones',
    date: 'Nov 02, 2026',
    amount: '$150',
    status: 'Completed'
  },
  {
    id: '#ORD-1004',
    customer: 'Emily Davis',
    product: 'Keyboard',
    date: 'Nov 03, 2026',
    amount: '$90',
    status: 'Cancelled'
  },
  {
    id: '#ORD-1005',
    customer: 'David Wilson',
    product: 'Monitor',
    date: 'Nov 03, 2026',
    amount: '$450',
    status: 'Pending'
  }
]

const statusClasses = {
  Completed: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Cancelled: 'bg-red-100 text-red-700'
}
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 shadow-sm">

    <!-- Header -->
    <div class="p-6 flex items-center justify-between">

      <div>
        <h2 class="text-lg font-semibold text-gray-800">
          Recent Orders
        </h2>

        <p class="text-sm text-gray-500 mt-1">
          Latest customer transactions
        </p>
      </div>

      <button class="text-sm text-blue-600 font-medium hover:text-blue-800">
        View All
      </button>

    </div>

    <!-- Table -->
    <div class="overflow-x-auto">

      <table class="w-full text-sm text-left">

        <thead class="bg-gray-50 text-gray-500 uppercase text-xs">
          <tr>
            <th class="px-6 py-4">Order ID</th>
            <th class="px-6 py-4">Customer</th>
            <th class="px-6 py-4">Product</th>
            <th class="px-6 py-4">Date</th>
            <th class="px-6 py-4">Amount</th>
            <th class="px-6 py-4">Status</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-100">

          <tr
            v-for="order in orders"
            :key="order.id"
            class="hover:bg-gray-50 transition"
          >

            <td class="px-6 py-4 font-medium text-blue-600">
              {{ order.id }}
            </td>

            <td class="px-6 py-4 font-medium text-gray-800">
              {{ order.customer }}
            </td>

            <td class="px-6 py-4 text-gray-500">
              {{ order.product }}
            </td>

            <td class="px-6 py-4 text-gray-500 whitespace-nowrap">
              {{ order.date }}
            </td>

            <td class="px-6 py-4 font-semibold text-gray-800">
              {{ order.amount }}
            </td>

            <td class="px-6 py-4">

              <span
                class="px-3 py-1 rounded-full text-xs font-medium"
                :class="statusClasses[order.status]"
              >
                {{ order.status }}
              </span>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>
</template>
