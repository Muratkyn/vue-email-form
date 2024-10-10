<template>
  <div class=summary>
    <h1>Summary</h1>
   
    <p> <strong>Name:</strong> {{store.customerData.customerName}}</p>
    <p> <strong>LastName:</strong> {{store.customerData.customerLastName}}</p>
    <p> <strong>Email:</strong> {{store.customerData.customerEmail}}</p>
    <p> <strong>Zip Code:</strong> {{store.customerData.customerZipCode}}</p>
    <p> <strong>Request Type:</strong> {{store.requestType}}</p>
    <p> <strong>Specific:</strong> {{store.requestSpecific}}</p>
    <p> <strong>Store:</strong> {{store.preferredStore}}</p>
    <p> <strong>Message:</strong> {{store.customerMessage}}</p>

  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/store";


const store = useAppStore();


</script>

<style scoped>
.summary { 
  padding: 3rem;
}
h1 {
  font-size: 3rem;
}
p {
  font-size: 1.5rem
}
</style>
