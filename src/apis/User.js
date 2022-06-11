import Api from "./Api";
import BearerToken from "./BearerToken";

export default {
  async register(form) {
    return Api.post("signup", form);
  },

  async login(form) {
    return Api.post("auth", form);
  },

  async logout() {
    return Api.post("logout",{}, {
      headers: { Authorization: `Bearer ${BearerToken.getToken()}`}
    });
  },

  auth() {
    return Api.get("me", {
      headers: { Authorization: `Bearer ${BearerToken.getToken()}`}
    });
  }
};
