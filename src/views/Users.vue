<script setup>
import DashboardLayout from '../layouts/DashboardLayout.vue'
import { ref, computed, onMounted } from 'vue'

const searchQuery = ref('')
const selectedStatus = ref('All')

const showAddUserModal = ref(false)

const isEditing = ref(false)
const editingUserId = ref(null)

const newUser = ref({
    name: '',
    email: '',
    role: 'Customer',
    status: 'Active'
})
// Sample users data
// 


const users = ref([])

const loading = ref(false)
const error = ref('')

async function fetchUsers() {
    loading.value = true
    error.value = ''

    try {
        const response = await fetch('https://dummyjson.com/users')

        if (!response.ok) {
            throw new Error('Failed to fetch users')
        }

        const data = await response.json()

        users.value = data.users.map(user => ({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            role: user.role || 'Customer',
            status: 'Active'
        }))

    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchUsers()
})



const filteredUsers = computed(() => {
    return users.value.filter(user => {
        const search = searchQuery.value.toLowerCase()

        const matchesSearch =
            user.name.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search)

        const matchesStatus =
            selectedStatus.value === 'All' ||
            user.status === selectedStatus.value

        return matchesSearch && matchesStatus
    })
})


function openAddUserModal() {
    showAddUserModal.value = true
}

function closeAddUserModal() {
    showAddUserModal.value = false

    newUser.value = {
        name: '',
        email: '',
        role: 'Customer',
        status: 'Active'
    }
}

function addUser() {
    if (!newUser.value.name || !newUser.value.email) {
        alert("Please enter the user's name and email.")
        return
    }

    users.value.push({
        id: Date.now(),
        ...newUser.value
    })

    closeAddUserModal()
}

function deleteUser(id) {
    const confirmed = confirm('Are you sure you want to delete this user?')

    if (!confirmed) return

    users.value = users.value.filter(user => user.id !== id)
}


function openEditUserModal(user) {
    isEditing.value = true
    editingUserId.value = user.id

    newUser.value = {
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status
    }

    showAddUserModal.value = true
}

function updateUser() {
    const userIndex = users.value.findIndex(
        user => user.id === editingUserId.value
    )

    if (userIndex === -1) return

    users.value[userIndex] = {
        ...users.value[userIndex],
        ...newUser.value
    }

    closeAddUserModal()
    isEditing.value = false
    editingUserId.value = null
}

</script>

<template>
    <DashboardLayout>
        <div class="space-y-6">

            <!-- Page Heading -->

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 class="text-2xl font-bold text-gray-800">
                        Users Management
                    </h1>
                    <p class="text-gray-500 mt-1">
                        Manage your users and their account information.
                    </p>
                </div>

                <button @click="openAddUserModal"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition">
                    + Add New User
                </button>
            </div>


            <!-- Users Table -->
            <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

                <div class="p-6 border-b border-gray-200">

                    <div
                        class="p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h2 class="text-lg font-semibold text-gray-800">
                                All Users
                            </h2>
                            <p class="text-sm text-gray-500 mt-1">
                                A list of all  {{ users.length }} registered users.
                            </p>
                        </div>

                        <input v-model="searchQuery" type="text" placeholder="Search users..."
                            class="w-full sm:w-72 px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />

                        <select v-model="selectedStatus"
                            class="w-full sm:w-40 px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>

                    </div>


                </div>


                <div v-if="loading" class="p-8 text-center text-gray-500">
                    Loading users...
                </div>

                <div v-else-if="error" class="p-8 text-center text-red-600">
                    {{ error }}

                    <button @click="fetchUsers" class="ml-2 text-blue-600 underline">
                        Try again
                    </button>
                </div>

                <div v-else-if="filteredUsers.length === 0" class="p-8 text-center text-gray-500">
                    No users found.
                </div>
                <div v-else class="overflow-x-auto">

                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead class="bg-gray-50">
                            <tr class="text-sm text-gray-500">
                                <th class="px-6 py-4 font-medium">User</th>
                                <th class="px-6 py-4 font-medium">Role</th>
                                <th class="px-6 py-4 font-medium">Status</th>
                                <th class="px-6 py-4 font-medium">Action</th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-100">
                            <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50 transition">
                                <td class="px-6 py-4">
                                    <p class="font-medium text-gray-800">
                                        {{ user.name }}
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        {{ user.email }}
                                    </p>
                                </td>

                                <td class="px-6 py-4 text-sm text-gray-600">
                                    {{ user.role }}
                                </td>

                                <td class="px-6 py-4">
                                    <span :class="user.status === 'Active'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'"
                                        class="px-3 py-1 rounded-full text-xs font-medium">
                                        {{ user.status }}
                                    </span>
                                </td>

                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-4">
                                        <button @click="openEditUserModal(user)"
                                            class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                            Edit
                                        </button>

                                        <button @click="deleteUser(user.id)"
                                            class="text-red-600 hover:text-red-800 text-sm font-medium">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </DashboardLayout>


    <!-- Add User Modal -->
    <div v-if="showAddUserModal" class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">

            <h2 class="text-xl font-bold text-gray-800 mb-6">
                {{ isEditing ? 'Edit User' : 'Add New User' }}
            </h2>

            <form @submit.prevent="isEditing ? updateUser() : addUser()" class="space-y-4">

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                    </label>
                    <input v-model="newUser.name" type="text" placeholder="Enter full name" required
                        class="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input v-model="newUser.email" type="email" placeholder="Enter email address" required
                        class="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Role
                    </label>
                    <select v-model="newUser.role"
                        class="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="Customer">Customer</option>
                    </select>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Status
                    </label>
                    <select v-model="newUser.status"
                        class="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                <div class="flex justify-end gap-3 pt-4">
                    <button type="button" @click="closeAddUserModal"
                        class="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                        Cancel
                    </button>

                    <button type="submit" class="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                        {{ isEditing ? 'Save Changes' : 'Add User' }}
                    </button>
                </div>

            </form>
        </div>
    </div>

</template>
