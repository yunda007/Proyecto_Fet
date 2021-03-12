<template>
    <div>
       <v-container>
            <v-simple-table dark height="300px">
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">Options</th> 
                    <th class="text-left">Name</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Created_at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in listUsers" :key="item.id">
                    <td>
                        <v-buton>
                                <v-icon
                                color="orange">
                                    mdi-pencil
                            </v-icon>
                        </v-buton>    
                        
                    </td>   
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.created_at }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
       </v-container>
       <v-btn bottom color="green" dark fab fixed right @click="openModal('insert')">
           <v-icon>mdi-plus</v-icon>
       </v-btn>
       <!-- dialog -->
        <v-dialog
        v-model="dialog"
        width="800"
        >
        <v-card>
            <v-card-title class="teal darken-2" style="color: #fff">
                {{ tittle }}
            </v-card-title>

            <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
            >
                I accept
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>       
</template>


<script>
    import {mapState} from 'vuex'
    export default {
        data () {
            return {
                action: '',
                dialog: false
            }
        },
        computed: {
            ...mapState('user', ['listUsers'])
        },
        mounted(){
            this.$store.dispatch('user/getList');
        },
        methods: {
            openModal(action){
                switch(action){
                    case 'insert': {
                        this.dialog = true
                        this.title = 'Nuevo Usuario'
                        break
                    }
                    case 'update': {
                        this.dialog = true
                        this.title = 'Editar Usuario'
                        break
                    }
                }
            }
        }
    }
</script>
