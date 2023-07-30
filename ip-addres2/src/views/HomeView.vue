<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import locationIcon from "../assets/svgs/icon-location.svg";
import Map from "../components/Map.vue";
const ip = ref("");
const data = ref(null);
const fisrtIp = async () => {
  try {
    const res = await axios.get("https://ipapi.co/json");
    if (res.status === 200) {
      data.value = res.data;
    }
  } catch (e) {
    console.log(e);
  }
};
onMounted(() => fisrtIp());
const searchByIp = async () => {
  const res = await axios.get(`https://ipapi.co/${ip.value}/json`);
  data.value = res.data;
};
</script>
<template>
  <main>
    <section class="header">
      <h1>IP Address Tracker</h1>
      <form v-on:submit.prevent="searchByIp">
        <fieldset>
          <label for="search-box" id="search-label">Search</label>
          <input
            type="text"
            id="search-box"
            :placeholder="data?.ip"
            v-model="ip"
          />
          <button type="submit"></button>
        </fieldset>
      </form>
    </section>
    <section class="location-details">
      <div>
        <h4>IP ADDRESS</h4>
        <h2>{{ data ? data.ip : "Loading" }}</h2>
      </div>
      <div>
        <h4>LOCATION</h4>
        <h2>{{ data ? data.city : "loading" }}</h2>
      </div>
      <div>
        <h4>TIMEZONE</h4>
        <h2>UTC {{ data ? data.timezone : "loading" }}</h2>
      </div>
      <div>
        <h4>ISP</h4>
        <h2>{{ data ? data.org : "loading" }}</h2>
      </div>
    </section>
    <Map :data="data"  />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

main {
  font-family: "Rubik", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: hsl(0, 0%, 17%);
}

.header {
  background-image: url(../assets/images/pattern-bg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
  padding-bottom: 10rem;
}

#search-box {
  padding: 1.125rem;
  outline: none;
  flex: 1;
  border-radius: 10px 0px 0px 10px;
  border: none;
  font-size: 18px;
  font-weight: 400;
  font-family: "Rubik", sans-serif;
}

form {
  width: 100%;
  display: flex;
  justify-content: center;
}

fieldset {
  border: none;
  width: 80%;
  display: flex;
  margin: 0;
  padding: 0;
}

#search-label {
  display: none;
}

input:active {
  border: none;
}

button {
  width: 50px;
  border: none;
  border-radius: 0px 10px 10px 0px;
  color: white;
  background: url(../assets/svgs/icon-arrow.svg) no-repeat center black;
}

.location-details {
  background-color: white;
  border-radius: 10px 10px 10px 10px !important;
  width: 80%;
  position: absolute;
  top: 11rem;
  z-index: 9999;
}

h4 {
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: hsl(0, 0%, 59%);
}

h1,
h2 {
  margin-top: 0.125rem;
  font-weight: 500;
}

h1 {
  color: white;
}

#map {
  flex: 1;
  width: 100%;
}

@media screen and (min-width: 1008px) {
  .location-details {
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0;
    top: 14rem;
    text-align: initial;
  }

  .location-details > div {
    border-left: 1px solid hsla(0, 0%, 17%, 0.1);
    padding-left: 1.5rem;
  }

  .location-details > div:first-child {
    border: none;
    padding: 0;
  }

  fieldset {
    width: 30%;
  }
}
</style>