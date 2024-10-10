import type { CustomerData } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("store", () => {
  const customerData = ref<CustomerData>({
    customerName: "",
    customerLastName: "",
    customerEmail: "",
    customerZipCode: "",
  });

  const requestType = ref<string>("");
  const requestSpecific = ref<string>("");
  const preferredStore = ref<string>("");
  const customerMessage = ref<string>("");

  return {
    customerData,
    requestType,
    requestSpecific,
    preferredStore,
    customerMessage,
  };
});
