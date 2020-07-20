<template>
  <div class="container">
		<div class="card shadow-lg mb-5 ">
			<div class="mt-3 text-center"><h3>Sign Up</h3></div>
				<div class="card-body">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" v-model="user.firstName" v-validate="'required'" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" autofocus placeholder="enter first name"/>
                <div v-if="submitted && errors.has('firstName')" class="invalid-feedback text-danger">{{ errors.first('firstName') }}</div>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }"  placeholder="enter last name"/>
                <div v-if="submitted && errors.has('lastName')" class="invalid-feedback text-danger">{{ errors.first('lastName') }}</div>
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="user.username" v-validate="'required'" name="username" class="form-control" :class="{ 'is-invalid': submitted && errors.has('username') }"  required placeholder="enter username" />
                <div v-if="submitted && errors.has('username')" class="invalid-feedback text-danger">{{ errors.first('username') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="user.password" v-validate="{ required: true, min: 8 }" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" placeholder="enter password" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback text-danger">{{ errors.first('password') }}</div>
            </div>
			<div class="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" v-model="user.password" v-validate="{ required: true, min: 8 }" name="confirm_password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" placeholder="confirm password" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback text-danger">{{ errors.first('password') }}</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="status.registering">Sign Up</button>
                <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                <hr>
                <small class="text-dark">Already have an account?</small>
                <router-link to="/login" class="btn btn-link log">Sign In</router-link>
            </div>
        </form>
		</div>
		</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
				confirm_password: ''
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
        }
    }
};
</script>

<style lang="css">

  input::placeholder {
    color: black !important;
    text-transform: lowercase !important;
    font-size: .8rem;
    font-style: italic;
    font-family: cursive;
  }

.log:hover {
    font-style: italic !important;
    font-family: cursive !important;
}

</style>

