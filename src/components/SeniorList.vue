<!--
This file handles displaying SeniorCard components based on the current view in the UI store.
It watches the currentView value from the UI store and filters the list of events appropriately,
showing create senior, all seniors, or search and sort.
The filtered list of events is kept in eventsToShow and passed to the SeniorCard components for display.
-->

<script setup lang="ts">
import SeniorCard from './SeniorCard.vue';
import { onMounted, watch, computed, ref } from 'vue';

import { useUIStore } from '../store/ui';
import { useDataStore } from '../store/data';

const data = useDataStore();
const allEvents = computed(() => data.seniors);
let eventsToShow = ref<Senior[]>([]);

const ui = useUIStore();
const currentView = computed(() => ui.currentView);

import { useAuthStore } from '../store/auth';
import Senior from "@/models/Senior";
const auth = useAuthStore();
const userId = computed(() => auth.userId);
const userAuthenticated = computed(() => useAuthStore().userAuthenticated);

onMounted(() => {
  refreshEventsToShow();
});

watch(currentView, () => {
  // currentView changed
  refreshEventsToShow();
});

watch(allEvents, () => {
  refreshEventsToShow();
});

function refreshEventsToShow() {
  // if (currentView.value === 'upcoming-events') {
  //   eventsToShow.value = (allEvents.value as EventDetails[]).filter(e => e.event_datetime_start < new Date());
  //   return;
  // }
  //
  // if (currentView.value === 'past-events') {
  //   eventsToShow.value = (allEvents.value as EventDetails[]).filter(e => e.event_datetime_end >= new Date());
  //   return;
  // }
  //
  // if (currentView.value === 'my-tickets') {
  //   eventsToShow.value = (allEvents.value as EventDetails[]).filter(e => e.tickets.includes(userId.value));
  //   return;
  // }
  // return all events, this is unexpected behaviour, it means an unhandled currentView...

  eventsToShow.value = (allEvents.value as Senior[]);
  console.log("eventlist"+eventsToShow.value);
}

</script>

<template>
  <v-container>
    <v-row>
<!--      <v-row v-if="userAuthenticated">-->
      <v-col v-for="event in eventsToShow" :key="event.id">
        <SeniorCard :senior="event"></SeniorCard>
      </v-col>
    </v-row>
  </v-container>
</template>
