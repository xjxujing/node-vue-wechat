<template>
  <div class="mine">
    <Header title="我"></Header>
    <div class="container">
      <div class="cell-wrapper" v-if="user">
        <img :src="user.avatar" alt />
        <span>{{ user.name }}</span>
      </div>
      <div class="btn-wrapper">
        <YButton @click="logout">退出登录</YButton>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import jwt_decode from "jwt-decode";
import YButton from "../components/YButton";

export default {
  name: "mine",
  components: {
    Header,
    YButton
  },
  computed: {
    user() {
      const token = localStorage.wxToken;
      // 解析token
      const decode = jwt_decode(token);
      return decode;
    }
  },

  methods: {
    logout() {
      localStorage.removeItem("wxToken");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.cell-wrapper {
  margin-top: 100px;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 20px;
}

.cell-wrapper img {
  width: 50px;
  margin-right: 20px;
}
</style>