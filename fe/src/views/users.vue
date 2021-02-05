<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="u in users" v-bind:key="u.name">
          <v-chip close>{{u.name}}</v-chip>
          <v-card>
            <v-img
              src="https://images.chosun.com/resizer/kpSz-wgp493vmqfSEETldoxPQWY=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/Y3G4QI4XJ66PUOZRL53A6JNPFQ.jpg"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{u.name}}</h3>
                <div>{{u.age}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
/// https://v-phinf.pstatic.net/20210107_250/1609990063094JaolI_GIF/vlive_photo_1608987583490.gif?type=w1000
export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/api/cards').then((r) => {
      this.users = r.data.cards
      console.log(r)
    }).catch((e) => {
      console.log(e.message)
    })
  }
}
</script>
