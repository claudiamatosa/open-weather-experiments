<nav class="city-list-navigation"
		 ng-controller="CityListCtrl">
		     
  <p class="order-links">
  		Order city list by temperature:
  		
			<button ng-click="predicate = 'main.temp'; reverse=false">
				Ascending
			</button>
			
			<button ng-click="predicate = 'main.temp'; reverse=true">
				Descending
			</button>
			
			<button ng-click="predicate = ''">
				Default
			</button>
	</p>
	
	<ul class="city-list">
		<li class="city"
				ng-repeat="city in weatherInfo | orderBy:predicate:reverse">
				
			<a ng-href="#/weather/{{ city.id }}/{{ city.name }}">
				{{ city.name }}
			</a> - {{ city.main.temp }} °C
		 
		</li>
	</ul>
</nav>