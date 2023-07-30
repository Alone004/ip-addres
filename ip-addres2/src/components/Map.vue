<script setup>
import { ref } from "vue";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
const zoom = ref(3);
const props = defineProps({
  data: {
    typeof: Object,
  },
});
</script>
<template>
  <div  v-if="data" style="width: 100%; height: 600px; padding: 0px; margin: 0px; ">
    <l-map :zoom="zoom" style="" :center="[data?.latitude, data?.longitude]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker :lat-lng="[data?.latitude, data?.longitude]"></l-marker>
    </l-map>
  </div>
</template>