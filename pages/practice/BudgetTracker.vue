<template>
  <div id="budget" class="mt-4 py-8 overflow-auto">
    <table class="mt-4 budget-tracker w-full rounded-lg shadow">
      <thead class="bg-gray-50 border-b-2 border-gray-200">
        <tr class="flex w-full">
          <th class="w-40 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
          <th class="grow p-3 text-sm font-semibold tracking-wide text-left">Description</th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Type</th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Amount</th>
          <th class="w-12 p-3 text-sm font-semibold tracking-wide text-left"></th>
        </tr>
      </thead>
      <tbody class="entries divide-y divide-gray-100">
        <tr class="flex w-full">
          <td class="w-40 p-3 text-sm text-gray-700 whitespace-nowrap">
            <input type="date" name="" value="" class="input input-date h-8 box-border border border-gray-100 rounded-sm focus:outline-none">
          </td>
          <td class="grow p-3 text-sm text-gray-700 whitespace-nowrap">
            <input type="text" name="" value="" class="w-full input input-description h-8 box-border border border-gray-100 rounded-sm focus:outline-none" placeholder="Add a description">
          </td>
          <td class="w-24 p-3 text-sm text-gray-700 whitespace-nowrap">
            <select class="input input-type h-8 box-border border border-gray-100 rounded-sm focus:outline-none bg-transparent" name="">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </td>
          <td class="w-24 p-3 text-sm text-gray-700 whitespace-nowrap">
            <input type="number" name="" value="" class="input input-amount h-8 box-border border border-gray-100 rounded-sm focus:outline-none w-20">
          </td>
          <td class="w-12 p-3 text-sm text-gray-700 whitespace-nowrap">
            <button type="button" name="button" class="delete-entry h-8 box-border flex justify-center items-center text-red-500 text-2xl cursor-pointer hover:bg-red-50 hover:rounded-full px-1 focus:outline-none">&#10005;</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <div class="flex justify-between items-center">
          <!-- BUTTON -->
          <div class="mt-2 flex justify-end control">
            <button type="button" class="new-entry inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">New Entry</button>
          </div>

          <!-- TOTAL -->
          <div class="">
            <strong>Total:</strong>
            <span class="total ml-2">$0.00</span>
          </div>
        </div>

      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
// import BudgetTracker from "../../assets/BudgetTracker";

  // new BudgetTracker("#budget")

  onMounted(() => {
    const entries = JSON.parse(localStorage.getItem("budget-tracker-data") || "[]")
  })
</script>
