<template>
  <v-container grid-list-lg text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md6 lg4 v-for="article in items.articles" :key="article.key">
        <v-card class="card" >
          <v-card-media :src="article.urlToImage" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <h2>{{ article.title }}</h2>
          </v-card-title>
          <v-card-text>
            {{ article.description }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :href="article.url" color="primary" round large>Lire</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'Card',
  props: ['items']
}
</script>
