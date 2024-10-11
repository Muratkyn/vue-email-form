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

  const errors = ref({
    customerEmailError: "",
    customerZipCodeError: "",
  });

  const validateEmail = () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(customerData.value.customerEmail)) {
      errors.value.customerEmailError = "Formato non valido.";
    } else {
      errors.value.customerEmailError = "";
    }
  };

  const validateZipCode = () => {
    const validZipCode = /^[0-9]{5}$/;
    if (!validZipCode.test(customerData.value.customerZipCode)) {
      errors.value.customerZipCodeError = "Formato non valido.";
    } else {
      errors.value.customerZipCodeError = "";
    }
  };

  const handleValidation = (fieldName: string) => {
    if (fieldName === "customerEmail") {
      validateEmail();
    }
    if (fieldName === "customerZipCode") {
      validateZipCode();
    }
  };

  return {
    customerData,
    requestType,
    requestSpecific,
    preferredStore,
    customerMessage,
    errors,
    validateEmail,
    validateZipCode,
    handleValidation,
  };
});
