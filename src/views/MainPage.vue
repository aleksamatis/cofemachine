<script setup>
import {ref, computed} from 'vue'
import {useConfigurationsStore, makeConfigurationDescription} from '@/stores'

const store = useConfigurationsStore()

const slectedCountIndex = ref("6")
const selectedSize = ref('small')

function addConfiguration() {
  store.addConfiguration({size: selectedSize.value, count: slectedCountIndex.value})
}

const configurationDescription = computed(() => {
  return makeConfigurationDescription({size: selectedSize.value, count: slectedCountIndex.value})
})
</script>

<template>
  <main>
    <h2>{{ configurationDescription }}</h2>
    <div class="main-component">
    <div class="main-component-images">
        <img v-if="selectedSize == 'small'" src="@/assets/images/S5affb1a098bf43458af6af674f4c7a6eZ.png" />
        <img v-if="selectedSize == 'big'" src="@/assets/images/f0c4fa5898b9420a92e6ad1e0104c577.png" />
    </div>
    <div class="main-component-drinks">
      <div class="main-component-buttons">
        <el-button el-button @click="selectedSize = 'small'" :type="selectedSize == 'small' ? 'primary' : 'default'">Стандартный</el-button>
        <el-button @click="selectedSize = 'big'" :type="selectedSize == 'big' ? 'primary' : 'default'">Увеличенный</el-button>
      </div>
      <div>Количество напитков:</div>
      <el-radio-group v-model="slectedCountIndex">
        <el-radio-button label="6"></el-radio-button>
        <el-radio-button label="8"></el-radio-button>
        <el-radio-button label="12"></el-radio-button>
      </el-radio-group>
      <div>      
      <el-button class="main-component-drink-button" @click="addConfiguration">Добавить конфиругацию</el-button></div>
    </div>
  </div>
  </main>
</template>
<style scoped>

main {
  width: 100%;
}
.main-component {
  display: flex;
}

.main-component > div {
  width: 50%;
}

@media screen and (max-width: 1024px) {
  .main-component {
    display: block;
  }

  .main-component > div {
  width: 100%;
}
  
}
.main-component-images {
  background: #522119;
  display: flex;
}
.main-component-drink-button {
  margin-top: 30px;
}

.main-component-buttons {
  margin-bottom: 30px;
}

.main-component img {
  background: #522119;
  width: 100%;
  aspect-ratio: 1.2;
  object-fit: cover;
  padding: 10px;
}
.main-component-drinks {
  padding: 10px;
  margin: 10px;
}
</style>
