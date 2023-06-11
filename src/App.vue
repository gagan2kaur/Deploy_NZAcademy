<template>
  <div id="app">
    
    
    <div id="navbar">
      <navigation></navigation>   <!--calling of navigation component-->
     </div>
   
    <div id="academy">
       <academy></academy>   <!--calling of academy component-->
    </div>
    
  
  <h1>{{ heading }}</h1>
  <p>{{ paragraph }}</p> 
  <button class="buttonfreetrial" v-on:click="gotoPage">Book free trial class</button>

  <div id="footer">
       <Footer></Footer>   <!--calling of footer component-->
    </div>
  </div> 
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      heading: 'Welcome to NZ Music Academy',
      paragraph:'NZ Music Academy is a step towards success in Music. It is an institute for all the music lovers to learn Guitar, Piano, Saxophone, Drum Set and many more instruments. NZ Music Academy aims to engage all its students to build their confidence by performing and showcasing their skills in different events held by the institute.NZ Music Academy is one of the renowned academies in NZ with branches in all the four major cities of NZ such as Auckland, Hamilton, Wellington, and Christchurch. Currently, the institute has more than 20 staff and 150 students in total. NZ Music Academy also offer private lessons to students at a very competitive rate.We are also partnered with 10 of the Best Schools in the city to offer Music lessons at the school.Providing our whanau with good skills, the academy helps in building a stronger community. We also encourage our tamariki and whanau to forget their worries and lighten their heart and soul by learning a new skill',
      button:"Book Free Trial class"
      
    }
  },
  methods:{
    gotoPage: function(){
      window.location.href="./Bookfreetrialclass.html"
    }
  }
}
</script>

<style> /*css starts here for this component*/
#app {
  text-align:left;
  width: 80rem;

}

h1, h2 {
  font-weight: normal;
}
.buttonfreetrial {   /* these are the attributes of the button*/

		background-color: #F47A22;
		float: right;
		border: none;
		font-weight: bold;
	}
</style>   

