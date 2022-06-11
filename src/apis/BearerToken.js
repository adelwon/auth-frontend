export default {
  getToken() {
    if(!localStorage.token)
    {
      this.$router.push('Login')
    }

    return localStorage.token;
  },
  setToken(token){
    localStorage.token = token;
  }
};
