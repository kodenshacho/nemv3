<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="user in users" :key="user._id">
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{user.name}}</h3>
              <div>{{user.age}}</div>
              <div>ID:[{{user._id}}]</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="putDialog(user)">수정</v-btn>
            <v-btn flat color="error" @click="delUser(user._id)">삭제</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout fill-width>
        <!-- <youtube :video-id="AAOOKbk-knM"></youtube> -->
        <v-btn
              color="orange"
              dark
              absolute
              bottom
              right
              fab
              @click="mdUp"
        ><v-icon>mdi-account-multiple-plus</v-icon>
        </v-btn>
    </v-layout>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template> -->
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="이름을 입력하세요."
                  persistent-hint
                  required
                  v-model="userName"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="userAges"
                  label="Age*"
                  required
                  v-model="userAge"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark color="orange darken-1" flat @click="putUser">수정</v-btn>
          <v-btn dark color="blue darken-1" flat @click="dialog = false">닫기</v-btn>
          <v-btn dark color="green darken-1" flat @click="postUser">저장</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
    >
      {{ sbMsg }}
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <video-embed css="embed-responsive-1by1" src="https://www.youtube.com/watch?v=AAOOKbk-knM"></video-embed>
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
      delModel: '',
      dialog: false,
      userAges: [],
      userAge: 0,
      userName: '',
      snackbar: false,
      sbMsg: '',
      putId: ''
    }
  },
  mounted () {
    for (let i = 20; i <= 60; i++) {
      this.userAges.push(i)
    }
    this.getUsers()
  },
  methods: {
    putDialog (user) {
      this.putId = user._id
      this.dialog = true
      this.userName = user.name
      this.userAge = user.age
    },
    mdUp () {
      console.log('mdUp-Click')
      this.userName = ''
      this.userAge = ''
      this.dialog = true
    },
    postUser () {
      // console.log(this.userName, this.userAge)
      this.dialog = false
      axios.post('http://localhost:3000/api/user', {
        name: this.userName, age: this.userAge // req.body
      }).then((r) => {
        this.pop('사용자 등록 완료')
        this.getUsers()
      }).catch((e) => {
        // console.error(e.message)
        this.pop(e.message)
      })
    },
    getUsers () {
      axios.get('http://localhost:3000/api/user').then((r) => {
        console.log(r.data)
        this.users = r.data.users
      }).catch((e) => {
        // console.error(e.message)
        this.pop(e.message)
      })
    },
    putUser () {
      this.dialog = false
      axios.put(`http://localhost:3000/api/user/${this.putId}`, {
        name: this.userName, age: this.userAge
      }).then((r) => {
        this.pop('사용자 수정 완료')
        this.getUsers()
      }).catch((e) => {
        this.pop(e.message)
      })
    },
    delUser (id) {
      axios.delete(`http://localhost:3000/api/user/${id}`).then((r) => {
        this.pop('사용자 삭제 완료')
        this.getUsers()
      }).catch((e) => {
        this.pop(e.message)
      })
    },
    pop (msg) {
      this.snackbar = true
      this.sbMsg = msg
    }

    // getReq () {
    //   axios.get('http://localhost:3000/api/user', {
    //     user: 'getMan'
    //   }).then((r) => {
    //     this.getModel = JSON.stringify(r.data)
    //   }).catch((e) => {
    //     console.error(e.message)
    //   })
    // },
    // postReq () {
    //   axios.post('http://localhost:3000/api/user', {
    //     name: '오빠', age: 45 // req.body
    //   }).then((r) => {
    //     this.postModel = JSON.stringify(r.data)
    //   }).catch((e) => {
    //     console.error(e.message)
    //   })
    // },
    // putReq () {
    //   axios.put('http://localhost:3000/api/user', {
    //     user: 'putMan'
    //   }).then((r) => {
    //     this.putModel = JSON.stringify(r.data)
    //   }).catch((e) => {
    //     console.error(e.message)
    //   })
    // },
    // delReq () {
    //   axios.delete('http://localhost:3000/api/user', {
    //     user: 'delMan'
    //   }).then((r) => {
    //     this.delModel = JSON.stringify(r.data)
    //   }).catch((e) => {
    //     console.error(e.message)
    //   })
    // }
  }
}
</script>
