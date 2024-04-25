<!--
  This component defines the bottom navigation bar with buttons to switch between create user, current user, search and sorting.
  It uses Pinia stores to manage UI state and check if user is authenticated before doing above operation.
-->
<script setup lang="ts">
import { useUIStore } from '../store/ui';
import { useAuthStore } from '@/store/auth';
import {computed, inject, provide, reactive} from 'vue';
import {DialogState} from "@/types/DialogState";
import SeniorPage from "@/components/SeniorPage.vue";

const auth = useAuthStore();
const userAuthenticated = computed(() => auth.userAuthenticated);

const ui = useUIStore();

const eventPageDialogState: DialogState = reactive({ showDialog: false });
provide('eventPageDialogState', eventPageDialogState);

function expandCard() {
  console.log(eventPageDialogState.showDialog)
  eventPageDialogState.showDialog = true;
}
</script>

<template>
  <v-bottom-navigation active>
    <!-- bg-color="secondary"    -->
    <v-btn value="past" @click="expandCard">
      <v-icon>mdi-calendar-arrow-left</v-icon>
      <span>Create Profile</span>
    </v-btn>
    <SeniorPage :senior="null"/>
    <v-btn value="mytickets" :disabled="!userAuthenticated" @click="ui.setCurrentView('my-tickets')">
      <v-icon>mdi-ticket</v-icon>
      <span>Profiles</span>
    </v-btn>

    <v-btn value="upcoming" @click="ui.setCurrentView('past-events')">
      <v-icon>mdi-calendar-arrow-right</v-icon>
      <span>Search</span>
    </v-btn>
  </v-bottom-navigation>
</template>
