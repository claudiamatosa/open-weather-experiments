<section class="weather">
	<div city-weather
			 ng-repeat="city in weatherInfo | filter:cityId:id"
			 ng-hide="errorMessage">
  </div>
			 
	<p class="error" ng-show="errorMessage">
    {{ errorMessage }}
  </p>
</section>
