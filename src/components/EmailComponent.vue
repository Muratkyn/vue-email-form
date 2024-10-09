<template>
  <div class="main-container">
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
            >
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
          <select class="request-data__input" v-model="store.requestSpecific">
            >
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
            <option
              v-for="store in preferredStore"
              :value="store.value"
              :key="store.value"
            >
              {{ store.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-request__messageField">
        <p class="field-label">
          Il tuo Messaggio
          <span class="obligatory-data"> -obbligatorio</span>
        </p>
        <input class="message-data__input" type="text" />
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
        <button class="request-button">Invia Richiesta</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/components/EmailComponent.css";
import { customerData, preferredStore } from "@/constants";
import { customerRequest } from "@/constants";
import { useAppStore } from "@/store/store";
import type { CustomerData, Options } from "@/types";
import { ref } from "vue";

const options = ref<Options[]>([]);

const handleSelectChange = (request: string) => {
  options.value = customerRequest.selections.find(
    (el) => el.value === request
  )!.options;
  console.log(options, "......");
};

const store = useAppStore();
</script>

<style lang="scss" scoped></style>
