const APIUtil = {

  signup(user){
    return $.ajax({
      method: "POST",
      url: "/api/users",
      data: user,
    });
  },

  login(user){
    return $.ajax({
      method: "POST",
      url: "/api/session",
      data: user,
    });
  },

  logout() {
    return $.ajax({
      method: "DELETE",
      url: "/api/session",
    });
  }

};

export default APIUtil;
