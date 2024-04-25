<!--
  This component displays the details of an senior such as the name, dob, email etc. on a card.
-->
<script setup lang="ts">
import { computed, provide, reactive } from 'vue';
import Senior from '@/models/Senior';
import { useAuthStore } from '../store/auth';
import {DialogState} from "@/types/DialogState";
import SeniorPage from "@/components/SeniorPage.vue";
const userAuthenticated = computed(() => useAuthStore().userAuthenticated);
const userid = computed(() => useAuthStore().userId);



function expandCard() {
  eventPageDialogState.showDialog = true;
}

const eventPageDialogState: DialogState = reactive({ showDialog: false });
provide('eventPageDialogState', eventPageDialogState);

// This is most of the details we need, but some have to be computed
const cardEvent = defineProps<{ senior: Senior; }>();

</script>

<template>
  <v-card class="mx-auto" max-width="300" color="surface" @click="expandCard">
    <SeniorPage :senior="senior"/>
    <v-img :src="senior.photo" cover> </v-img>
    <v-card-title>
      <span>{{ senior.firstName }} {{ senior.lastName }}</span>
    </v-card-title>
    <v-card-text>
      <div v-if="senior.dob">
        <v-icon left>mdi-calendar-today</v-icon>
        <span>Date of Birth:</span> {{ new Date(senior.dob).toLocaleDateString() }}
      </div>
      <div v-if="senior.address">
        <v-icon left>mdi-home-map-marker</v-icon>
        <span>Address:</span> {{ senior.address }}
      </div>
      <div v-if="senior.phoneNumber">
        <v-icon left>mdi-phone</v-icon>
        <span>Phone Number:</span> {{ senior.phoneNumber }}
      </div>
      <div v-if="senior.email">
        <v-icon left>mdi-email</v-icon>
        <span>Email:</span> {{ senior.email }}
      </div>
      <div v-if="senior.servicesReceived && senior.servicesReceived.length > 0">
        <v-icon left>mdi-hand-heart</v-icon>
        <span>Services Received:</span>
        <div>
          <v-chip-group>
            <v-chip v-for="(service, index) in senior.servicesReceived" :key="index" small outlined>
              {{ service }}
            </v-chip>
          </v-chip-group>
        </div>
      </div>
      <!-- Additional fields can be similarly conditionally rendered -->
      <div v-if="senior.medicalRecords">
        <v-icon left>mdi-folder-information-outline</v-icon>
        <span>Medical Records:</span>
        <v-chip-group>
          <v-chip v-for="(record, index) in senior.medicalRecords" :key="index" outlined>
            {{ record.type }} on {{ new Date(record.date).toLocaleDateString() }}
          </v-chip>
        </v-chip-group>
      </div>
      <div v-if="senior.emergencyContactName">
        <v-icon left>mdi-account-alert-outline</v-icon>
        <span>Emergency Contact:</span> {{ senior.emergencyContactName }} ({{ senior.emergencyContactRelation }}) - {{ senior.emergencyContactPhone }}
      </div>

    </v-card-text>
    <v-divider class="mx-4 mb-1"></v-divider>
  </v-card>
</template>

