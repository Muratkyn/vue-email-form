<template>
  <div class="main-container">
    <div class="form-container">
      <div class="form-header">
        <p class="form-email__title">Scrivici una e-mail</p>
        <!-- <div class="form-email__paragraph"> -->
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
        <!-- </div> -->
      </div>
      <div class="form-data__field">
        <p>Il tuo nominativo</p>
        <div v-for="field in customerData">
          <p>{{ field.label }}</p>
          <input class="form-data__field-input" type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/components/EmailComponent.css";
import { customerData } from "@/constants";
</script>

<style lang="scss" scoped></style>
