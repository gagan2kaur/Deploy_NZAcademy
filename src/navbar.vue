<template>
   <div>
     <nav class="navbar navbar-expand-lg home-navbar">
    <div class="container-fluid">
      <!--container-fluid is created for a full width container spanning the entire width of the viewport-->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
        aria-controls="navbarToggler" aria-expanded="false"
        aria-label="Toggle navigation"><!--navbar toggler-icon created to show on small screen when collapsed-->
        <span class="navbar-toggler-icon"></span>
      </button><!--navbar toggler button class closed-->
      <div class="collapse navbar-collapse" id="navbarToggler">
        <div><img src="/src/assets/Logo1.png" class="logo image-fluid" alt="Company Logo"></div>
        <!--Logo image inserted in the navbar-->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 home-navbar">
          <li class="nav-item">
            <a class="navbar-a nav-link" aria-current="page"
              href="./Home.html">Home</a><!--navbar items inside the navbar-->
          </li>
          <li class="nav-item">
            <a class="navbar-a nav-link" href="./Our Services.html">Our Services</a>
          </li>
          <li class="nav-item">
            <a class="navbar-a nav-link" href="./Term info & Pricing.html">Term info & Pricing</a>
          </li>
          <li class="nav-item">
            <a class="navbar-a nav-link" href="./About Us.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="navbar-a nav-link" href="./Contact Us.html">Contact Us</a>
          </li>
          
        </ul>

      </div>
    </div>
  </nav>
   </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      msg: 'navigation'
    }
  }
}
</script>
<style>
/*-----------navbar--------------*/

.home-navbar {
	background: #F47A22;/*this will give background color on the navbar*/
	color: white;
	
}

li {
	margin-right: 20px; /*this will give gap between the tabs on the navbar*/
	padding-top: 0rem;
	list-style-type: none;
	display: inline-block;/* this will display the list items horizontally*/
}

.navbar-a {
	color: white;
	padding: 0%;
	text-decoration: none;
	z-index: 100;
	
}
.logo {
  width:30%
}

@media all and (max-width:991px) { /* this will not display the logo in mobile*/
	.logo {
		display:none;

	}
}
	

	.Bookbutton {
		padding-top: -10px;
		background-color: D9D9D9;
		border: none;
		position: relative;
		font-weight: bold;

	}

    .Submit{
		margin-bottom: 10px;
		background-color: #F47A22;
		color: white;
		float: center-left;
		border: none;
		font-weight: bold;
		
	}
	
	.Submitform{
		margin-bottom: 10px;
		
		
	}
	
.carousel > .carousel-inner > .carousel-item > img{
    width:340px; /* you can change the width and height of the carousel*/
    height:460px;
}



.col-lg-8 {
	background-color:D9D9D9;  /*background colour changed for class column-lg-8*/
	
}
</style>
