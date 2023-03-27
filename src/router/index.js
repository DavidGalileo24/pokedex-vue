import { createRouter, createWebHistory } from 'vue-router'
import AllPokemon from '../views/AllPokemon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pokemons',
      component: AllPokemon
    },
  ]
})

export default router
