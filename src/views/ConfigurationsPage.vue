<script setup>
import {useConfigurationsStore, makeConfigurationDescription} from '@/stores'
const store = useConfigurationsStore();
</script>
<template>
  <div class="configurations">
    <h2>Сохранённые конфигурации</h2>
    <div>
      <div v-for="configuration, idx in store.configurations" :key="idx">
        {{ makeConfigurationDescription(configuration) }}
      </div>
    </div>
  </div>
</template>

<style>
</style>
