//vue

const { createApp } = Vue

createApp({
  data() {
    return {
      message: "Sopra la panca la capra campa",
      imageURL: "https://www.filastrocche.it/contenuti/wp-content/uploads/2016/09/capretta-.jpg"
    }
  }
}).mount('#app')