import axios from 'axios'

const state = {
    listUsers: [],
    currentUser: {},
    title: 'Hola prueba'
}
const actions = {
    getList({ commit }) {
        axios.get('http://localhost/Proyect_Fet/public/api/user/users')
            .then(response => {
                console.log(response)
                    //this.listUsers = response.data.users
            })
    },
    getCurrent({ commit }) {
        axios.get('http://localhost/Proyect_Fet/public/api/user/user/current')
            .then(response => {
                console.log(response.data.user)
                commit('SetCurrentUser', response.data.user)
            })
        console.log(this.currentUser)
    }
}
const mutations = {
    SetUsers(state, data) {
        state.listUsers = data
    },
    setCurrentUser(state, data) {
        state.currentUser = data
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}