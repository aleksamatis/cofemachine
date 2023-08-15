import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConfigurationsStore = defineStore('configurations', () => {
  
  const configurations = ref([])

  function addConfiguration(configuration) {
    configurations.value.push(configuration)
  }

  return { configurations, addConfiguration }
})

export function makeConfigurationDescription(configuration) {
  const size = configuration.size === 'small' ? 'Стандартный' : 'Увеличенный'
  return `Количество напитков: ${configuration.count} Размер: ${size}`
}
