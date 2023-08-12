<template>
  <div style="padding: 10dp">
    <n-space vertical :size="12">
      <n-space>
        <n-button @click="getCustomers">Get Customers</n-button>
        <n-button @click="getOrders">Get Orders</n-button>
      </n-space>
      <n-data-table
        ref="dataTableInst"
        :columns="columns"
        :data="data"
        :pagination=true
      />
    </n-space>
  </div>
</template>

<script setup lang="ts">
  import { NButton, NSpace, NDataTable } from 'naive-ui'
  import { Ref, ref } from 'vue';

  var columns = []
  const getCustomers = () => {
    columns = [
      {
        title: 'Customer ID',
        key: 'customer_Id'
      },
      {
        title: 'First Name',
        key: 'first_Name',
        defaultSortOrder: false
      },
      {
        title: 'Last Name',
        key: 'last_Name',
        defaultSortOrder: false
      },
      {
        title: 'Address',
        key: 'address',
        defaultSortOrder: false,
      }
    ]

    apiCall('https://localhost:7004/customers')
  }

  const getOrders = () => {
    columns = [
      {
        title: 'Customer ID',
        key: 'customer_Id'
      },
      {
        title: 'First Name',
        key: 'first_Name',
        defaultSortOrder: false
      },
      {
        title: 'Last Name',
        key: 'last_Name',
        defaultSortOrder: false
      },
      {
        title: 'Address',
        key: 'address',
        defaultSortOrder: false,
      },
      {
        title: 'Order ID',
        key: 'order_Id',
        defaultSortOrder: false,
      },
      {
        title: 'Cost',
        key: 'cost',
        defaultSortOrder: false,
      },
      {
        title: 'Item Name',
        key: 'item_Name',
        defaultSortOrder: false,
      }
    ]

    apiCall('https://localhost:7004/orders')
  }


  var data: Ref<Array<String>> = ref([]);

  const apiCall = async (url:String) => {      
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:5173/');
    await fetch(url, {
        method: 'GET',
        headers: headers
    })
      .then(async (response) => {
        const responseJson = await response.json()
        data.value=responseJson;
      })
      .catch((error) => {return error})
  }
  
</script>
