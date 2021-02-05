<template>
  <div>
    <h1>{{title}}</h1>
    <button @click="condition_test">click me!!</button><br />
    <v-btn :color="btnColor" @click="click_test">주문!!</v-btn><br />
    <v-chip close v-for="chip in chips" :color="chip.cl" v-bind:key="chip.cl">{{chip.name}}</v-chip>
    <v-chip close color="primary">Example Chip</v-chip><br /><br /><br />
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 v-for="chip in chips" v-bind:key="chip.cl">
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{chip.name}}</h3>
                <div> {{ chip.cl }} </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    <div>
      <v-btn @click="test">test</v-btn>
      <v-btn @click="testVar">testVar</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'help',
  data () {
    return {
      title: '개소리!!',
      btnColor: 'info',
      chips: [
        {
          cl: 'primary',
          name: 'cho'
        },
        {
          cl: 'secondary',
          name: 'lee'
        },
        {
          cl: 'third',
          name: 'kim'
        },
        {
          cl: 'orange',
          name: '上記日時でミライト様との打合せを設定する場合、ご参加は可能でしょうか？'
        }
      ]
    }
  },
  methods: {
    click_test () {
      console.log('click test done!!')
      this.title = '아 \r\n<br />짜증나!!!!!!'
      this.btnColor = 'success'
    },
    condition_test () {
      var a = 3
      var b = 4
      console.log(a < b)
      if (a < b) console.log('a가 작어!')
      a = {}
      if (a) console.log('비었는데 오브젝트 참이네')
      a = []
      if (a) console.log('비었는데 어레이 참이네')
      a = 0
      if (a) console.log('0 참')
      else console.log('0 거짓')
      a = ''
      if (a) console.log('빈문 참')
      else console.log('0 거짓')
    },
    test () {
      const args = [
        'UUU', 'ZZZ', 'SSS', 'TTTT', ' AAA'
      ]

      console.log(args)
      args.forEach(
        (v, i) => console.log(v)
      )
      const sdObj = {
        a: 'SSSS',
        b: 'OOOO',
        c: 'RRRR'
      }
      console.log(sdObj)
      for (var k in sdObj) {
        console.log(k)
        console.log(sdObj[k])
      }
    },
    testVar () {
      // have to let is reasign
      let sddsdd = 3
      sddsdd = 43
      console.log(sddsdd)
      const v = {
        a: 1,
        b: (x) => {
          return x + 3
        },
        c: ['1', 33]
      }
      console.log(v.b(4))
    }
  }
}
</script>
