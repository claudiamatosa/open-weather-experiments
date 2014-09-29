<section class="home">
  <p ng-hide="errorMessage">
	  Select a city to view current weather conditions.
  </p>
  
  <p class="error" ng-show="errorMessage">
    {{ errorMessage }}
  </p>
</section>
