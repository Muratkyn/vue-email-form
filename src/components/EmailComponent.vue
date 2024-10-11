<template>
  <div class="main-container" v-if="isComponentVisible">
    <div>
      <div class="form-header">
        <p class="form-email__title">Scrivici una e-mail</p>
        <p class="email-subtitle__primary">
          Compila il form per metterti in contatto con noi. I nostri assistenti
          ti risponderanno <strong>entro 48</strong> ore
          <br />
          dall'invio del tuo messaggio.
        </p>
        <p class="email-subtitle__secondary">
          <i>
            È necessario compilare correttamente tutti i campi obbligatori per
            proseguire con l'operazione.
          </i>
        </p>
      </div>
      <p class="form-input__subtitle">Il tuo nominativo</p>
      <div class="form-data__field">
        <div v-for="field in customerData" class="form-data__singleField">
          <p class="field-label">
            {{ field.label }}
            <span class="obligatory-data"> -obbligatorio</span>
          </p>
          <input
            class="form-data__input"
            type="text"
            v-model="store.customerData[field.name as keyof CustomerData]"
          />
        </div>
      </div>
      <p class="form-input__subtitle">Dettagli di richiesta</p>

      <div class="form-data__field">
        <div class="form-request__singleField">
          <p class="field-label">
            {{ customerRequest.label1 }}
            <span class="obligatory-data"> -obbligatorio</span>
          </p>
          <select
            class="request-data__input"
            v-model="store.requestType"
            @change="handleSelectChange(store.requestType)"
          >
            <option disabled selected value>-- Tipo di richiesta --</option>

            <option
              v-for="option in customerRequest.selections"
              :value="option.value"
              :key="option.name"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="form-request__singleField">
          <p class="field-label">
            {{ customerRequest.label2 }}
            <span class="obligatory-data"> -obbligatorio</span>
          </p>
          <select
            :disabled="!enableSelect"
            class="request-data__input"
            v-model="store.requestSpecific"
          >
            >
            <option disabled selected value>-- Specifica --</option>
            <option
              :value="option.value"
              :key="option.name"
              v-for="option in options"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="form-request__singleField">
          <p class="field-label">
            {{ customerRequest.label3 }}
            <span class="obligatory-data"> -obbligatorio</span>
          </p>
          <select class="request-data__input" v-model="store.preferredStore">
            >
            <option disabled selected value>-- Negozio Preferito --</option>
            <option
              v-for="singleStore in sortedEntities"
              :value="singleStore.id"
              :key="singleStore.id"
            >
              {{ singleStore.publicName }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-request__messageField">
        <p class="field-label">
          Il tuo Messaggio
          <span class="obligatory-data"> -obbligatorio</span>
        </p>
        <textarea
          class="message-data__input"
          name="customerMessage"
          id="customerMessage"
          cols="30"
          rows="10"
          maxLength="3000"
          placeholder="(max 3000 caratteri)"
          v-model="store.customerMessage"
        ></textarea>
      </div>
      <div class="request-sending__container">
        <h4>
          Inviando il messaggio dichiaro di aver preso visione dell'
          <br />
          <a href="">
            Informativa ai sensi del Regolamento Generale sulla Protezione dei
            Dati (UE) 2016/679
          </a>
        </h4>
      </div>
      <div class="send-request__button-wrapper">
        <button
          :disabled="!enableButton"
          class="request-button"
          @click="onSendRequest()"
        >
          Invia Richiesta
        </button>
      </div>
    </div>
  </div>
  <SummaryData v-if="!isComponentVisible" />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { useAppStore } from "@/store/store";
import { customerData, entities } from "@/constants";
import { customerRequest } from "@/constants";

import type { CustomerData, Options } from "@/types";
import SummaryData from "@/components/SummaryData.vue";
import "@/components/EmailComponent.css";
import { emailSchema } from "@/schema/index";

const store = useAppStore();
const isComponentVisible = ref<boolean>(true);
const options = ref<Options[]>([]);

const handleSelectChange = (request: string) => {
  options.value = customerRequest.selections.find(
    (el) => el.value === request
  )!.options;

  store.requestSpecific = "";
};

const sortedEntities = computed(() => {
  return [...entities].sort((a, b) => a.publicName.localeCompare(b.publicName));
});

const enableButton = computed(() => {
  const customerDataEntered = Object.values(store.customerData).every(
    (el) => el !== ""
  );
  const otherDataEntered = [
    store.requestType,
    store.requestSpecific,
    store.preferredStore,
    store.customerMessage,
  ].every((el) => el !== "");
  return customerDataEntered && otherDataEntered;
});

const enableSelect = computed(() => {
  return store.requestType !== "" && store.requestType;
});

const onSendRequest = () => {
  isComponentVisible.value = !isComponentVisible;
};
</script>

<style lang="scss" scoped></style>
