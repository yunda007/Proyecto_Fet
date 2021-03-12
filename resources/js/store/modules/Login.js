import axios from 'axios';

const state = {
    user: {},
    permissions: {},
    msg: 'BIENVENIDO AL DASHBOARD!',
    message: ''
};

const getters = {};
const actions = {
    login({ commit }, user) {
        axios.post('http://localhost/Proyect_Fet/public/api/user/login', {
            email: user.email,
            password: user.password
        }).then(response => {
            console.log(response.data.access_token)
            if (!response.data.access_token) {
                alert('entro')
                localStorage.setItem('blog_token', response.data.access_token);
                window.location.replace('home');
            }
            if (response.data.access_token) {
                commit('SetMessage', response.data.message)
            }
        })
    },

    logout() {
        localStorage.removeItem('blog_token');
        window.location.replace('home')
    },

    getCurrent({ commit }) {
        axios.get('http://localhost/Proyect_Fet/public/api/user/currents')
            .then(response => {
                commit('SET_USER', response.data)
            });
    },

    getPermission({ commit }) {
        axios.get('http://localhost/Proyect_Fet/public/api/user/permissions')
            .then(response => {
                commit('SET_PERMISSIONS', response.data.permissions)
            });
    }
};

const mutations = {
    SET_USER(state, data) {
        state.user = data;
    },

    SET_PERMISSIONS(state, data) {
        state.permissions = data;
    },

    SET_MESSAGE(state, data) {
        state.message = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}