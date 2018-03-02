<template>
  <section>
    <div class="title">
      <h1>Newsfeed</h1>
      <p>Mon fil d'actualité</p>
    </div>
    <app-cards :items="news"/>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Cards from '@/components/Cards'

export default {
  async fetch ({ store, params }) {
    await store.dispatch('GET_NEWS');
  },
  layout: 'default',
  components: {
    'app-cards': Cards
  },
  computed: mapState ([
    'news'
  ]),
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  margin: 2rem 0;
  text-align: center;
}
h1 {
  font-size: 2em;
  margin-bottom: 1rem;
}
h2 {
  margin-bottom: 1rem;
}
</style>
