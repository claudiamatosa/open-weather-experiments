<div class="city-weather">
  <h2>{{ city.name }}</h2>

	<ul class="city-weather-info">
	  <li class="location">
	    <b>lat</b> {{ city.coord.lat }}, <b>lon</b> {{ city.coord.lon }}
	  </li>
	  
	  <li class="weather-conditions">
  	  {{ city.weather[0].main }}
  	
  	  <img ng-src="http://openweathermap.org/img/w/{{ city.weather[0].icon }}.png"
  	       alt="{{ city.weather[0].description }}">
    </li>
    
    <li class="temperature">
      {{ city.main.temp }} °C
      <b>min</b> {{ city.main.temp_min }} °C
      <b>max</b> {{ city.main.temp_max }} °C
    </li>
    
    <li class="atmospheric-pressure">
      <b>atmospheric pressure</b> {{ city.main.pressure }} hPa
    </li>
  
    <li class="humidity">
      <b>humidity</b> {{ city.main.humidity }} %
    </li>
	</ul>
</div>