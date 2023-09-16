<template>
    <h1>
        oklm
    </h1>
</template>

<script>
    export default{
      name: 'Home',
      props:{
          img_url: String
      },
      data() {
      return {
        showTestimony1 : false,
        showTestimony2 : false,
        showTestimony3 : false,
        showTestimony4 : false,
          testimonies:[
              {
                  id: 1, title: 'title 1', date: '15/09/2023', image: 'http://127.0.0.1/basketball/public/images/img4.jpg', preview: 'Bavaria" Bayern are the automatic favorites in every Bundesliga match due to the quality of their squad. Harry Kane also began to make a difference from the first matches: in the game against Werder he scored '
              }

          ],
      }
    },
    mounted: function() {
    this.getTestimony1();
    },
    methods: {
      getTestimony1(){
        this.showTestimony1 = true;
        this.showTestimony2 = false;
        this.showTestimony3 = false;
        this.showTestimony4 = false;
      },
      getTestimony2(){
        this.showTestimony1 =  false;
        this.showTestimony2 = true;
        this.showTestimony3 = false;
        this.showTestimony4 = false;
      },
      getTestimony3(){
        this.showTestimony1 = false;
        this.showTestimony2 = false;
        this.showTestimony3 = true;
        this.showTestimony4 = false;
      },
      getTestimony4(){
        this.showTestimony1 = false;
        this.showTestimony2 = false;
        this.showTestimony3 = false;
        this.showTestimony4 = true;
      },
      getCurrentUserId() {
        return '{{ Auth::id() }}'; // Get the current user ID using the auth helper function
      },
      format(num){
      let res = new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(num);
      return res;
    },
      getImgUrl(pic) {
      return "" + pic;
    },
    viewArticle(id){
      window.location.replace('/article/'+id)
    }
    }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
