<template>
  <v-main mini-variant.sync>
    <router-view style="background-color:#f3f3f3;" v-slot="{ Component,route }">
      <v-scale-transition origin="top left" :leave-absolute=true>
          <component :is="Component" :key="route.path"></component>
      </v-scale-transition>
    </router-view>
  </v-main>
</template>

