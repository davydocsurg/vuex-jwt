<template>
    <div class="card p-5 shadow-lg">
        <h1>Hi {{account.user.firstName}}!</h1>
        <p>You're logged in with Vue + Vuex & JWT!!</p>
        <h3>Users from secure api end point:</h3>
        <em v-if="users.loading">Loading users...</em>
        <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
        <div v-if="">
        <ol v-if="users.items">
            <li v-for="user in users.items" :key="user.id">
               <b>Name: </b> <b class="text-primary ">{{user.firstName + ' ' + user.lastName}}</b>
               <br>
               <b>Username: </b> <i class="text-success">{{user.username}}</i>
               <br>
               <b>Password: </b> <small class="text-muted"> "{{user.password}}" </small>
               <br>
                <span v-if="user.deleting"><em> - Deleting...</em></span>
                <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                <span v-else> - <a @click="deleteUser(user.id)" class="text-danger">Delete {{user.username}} <i class="fa fa-trash"></i></a></span>
                <hr>
            </li>
        </ol>
        </div>
        <p>
            <router-link to="/login" class="btn btn-danger">Sign Out <i class="fas fa-sign-out-alt"></i></router-link>
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
};
</script>