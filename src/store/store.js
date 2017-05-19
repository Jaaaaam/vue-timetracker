import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  timeEntries: [
    {
      user: {
        firstName: 'Jam',
        lastName: 'Store',
        email: 'jam@gmail.com',
        image: 'http://placehold.it/75x75'
      },
      comment: 'First time entry',
      totalTime: 1.5,
      date: '2016-04-08'
    },
    {
      user: {
        firstName: 'John',
        lastName: 'Franco',
        email: 'jam@gmail.com',
        image: 'http://placehold.it/75x75'
      },
      comment: 'Second time entry',
      totalTime: 1.5,
      date: '2016-04-08'
    }
  ],
  totalTime: 0
}

const getters = {
  allEntries: state => state.timeEntries
}

export default new Vuex.Store({
  state,
  getters
})
