

<script setup lang="ts">

import { inject, computed, ref } from 'vue';
import {DialogState} from "@/types/DialogState";
import Senior from "@/models/Senior";
import {useDataStore} from "@/store/data";

const eventPageDialogState = inject<DialogState>('eventPageDialogState', { showDialog: false });

const dataStore = useDataStore();

const props  = defineProps<{ senior: Senior; }>();

const isEditing = ref(false);

const servicesOptions = ["Healthcare", "Meal Delivery", "Physical Therapy", "Housekeeping", "Housing Navigation"]
function toggleEdit() {
  isEditing.value = true;
}

function saveSenior() {
  isEditing.value = false;
  dataStore.updateSenior(props.senior);
}
function closeDialog() {
  isEditing.value = false;
  eventPageDialogState.showDialog = false;
}

</script>

<template>
<!--  <v-sheet v-if="eventPageDialogState.showDialog" height="200" width="200">-->
<!--    <v-card title="Senior Profile Management System" color="success"></v-card>-->

  <v-dialog v-model="eventPageDialogState.showDialog" persistent>
    <v-card class="mx-auto" color="surface">
      <v-img :src="senior.photo" cover> </v-img>
      <v-card-title>
        <span>{{ senior.firstName }} {{ senior.lastName }}</span>
      </v-card-title>
      <v-card-text>
        <!-- Photo -->

        <!-- First Name -->
        <div>
          <template v-if="isEditing">
            <v-text-field v-model="senior.firstName" label="Edit First Name"></v-text-field>
          </template>
        </div>

        <!-- Last Name -->
        <div>
          <template v-if="isEditing">
            <v-text-field v-model="senior.lastName" label="Edit Last Name"></v-text-field>
          </template>
        </div>
        <!-- Date of Birth -->
        <div v-if="senior.dob">
          <v-icon left>mdi-calendar-today</v-icon>
          <span>Date of Birth:</span>
          <template v-if="isEditing">
            <v-text-field v-model="senior.dob" type="date" label="Edit Date of Birth"></v-text-field>
          </template>
          <template v-else>
            {{ new Date(senior.dob).toLocaleDateString() }}
          </template>
        </div>

        <!-- Address -->
        <div v-if="senior.address">
          <v-icon left>mdi-home-map-marker</v-icon>
          <span>Address:</span>
          <template v-if="isEditing">
            <v-text-field v-model="senior.address" label="Edit Address"></v-text-field>
          </template>
          <template v-else>
            {{ senior.address }}
          </template>
        </div>

        <!-- Phone Number -->
        <div v-if="senior.phoneNumber">
          <v-icon left>mdi-phone</v-icon>
          <span>Phone Number:</span>
          <template v-if="isEditing">
            <v-text-field v-model="senior.phoneNumber" label="Edit Phone Number"></v-text-field>
          </template>
          <template v-else>
            {{ senior.phoneNumber }}
          </template>
        </div>

        <!-- Email -->
        <div v-if="senior.email">
          <v-icon left>mdi-email</v-icon>
          <span>Email:</span>
          <template v-if="isEditing">
            <v-text-field v-model="senior.email" label="Edit Email"></v-text-field>
          </template>
          <template v-else>
            {{ senior.email }}
          </template>
        </div>

        <!-- Services Received -->
        <div v-if="senior.servicesReceived">
          <v-icon left>mdi-hand-heart</v-icon>
          <span>Services Received:</span>
          <template v-if="isEditing">
            <!-- Assume servicesReceived is an array of strings; adjust if it's different -->
            <v-select v-model="senior.servicesReceived" :items="servicesOptions" label="Edit Services Received" multiple></v-select>
          </template>
          <template v-else>
            <div>
              <v-chip-group>
                <v-chip v-for="(service, index) in senior.servicesReceived" :key="index" small outlined>
                  {{ service }}
                </v-chip>
              </v-chip-group>
            </div>
          </template>
        </div>

        <!-- Additional fields... -->
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if="!isEditing" text="Edit" @click="toggleEdit"></v-btn>
        <v-btn v-if="isEditing" text="Save" @click="saveSenior"></v-btn>
        <v-btn text="Close" @click="closeDialog"></v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>

<!--  </v-sheet>-->

</template>

<style scoped>

</style>
