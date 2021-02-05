<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <v-card>
<v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">가져오기(GET_)</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model='getModel'>
            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="green" @click="getReq">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">저장(POST_)</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model='postModel'>
            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="blue" @click="postReq">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">수정(PUT_)</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model='putModel'>
            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="orange" @click="putReq">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">삭제(DELETE_)</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-textarea v-model='delModel'>
            </v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="red" @click="delReq">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout fill-width>
      <v-flex xs12 sm3  style="width:100%">
        <video-embed style="width:100%" css="embed-responsive-1by1" src="https://www.youtube.com/watch?v=AAOOKbk-knM"></video-embed>
        <!-- <youtube :video-id="AAOOKbk-knM"></youtube> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      users: [],
      getModel: '',
      postModel: '',
      putModel: '',
      delModel: ''
    }
  },
  mounted () {
    // axios.get('http://localhost:3000/api/cards').then((r) => {
    //   this.users = r.data.cards
    //   console.log(r)
    // }).catch((e) => {
    //   console.log(e.message)
    // })
  },
  methods: {
    getReq () {
      axios.get('http://localhost:3000/api/cards', {
        user: 'getMan'
      }).then((r) => {
        this.getModel = JSON.stringify(r.data)
      }).catch((e) => {
        console.error(e.message)
      })
    },
    postReq () {
      axios.post('http://localhost:3000/api/cards', {
        user: 'postMan'
      }).then((r) => {
        this.postModel = JSON.stringify(r.data)
      }).catch((e) => {
        console.error(e.message)
      })
    },
    putReq () {
      axios.put('http://localhost:3000/api/cards', {
        user: 'putMan'
      }).then((r) => {
        this.putModel = JSON.stringify(r.data)
      }).catch((e) => {
        console.error(e.message)
      })
    },
    delReq () {
      axios.delete('http://localhost:3000/api/cards', {
        user: 'delMan'
      }).then((r) => {
        this.delModel = JSON.stringify(r.data)
      }).catch((e) => {
        console.error(e.message)
      })
    }
  }
}
</script>
