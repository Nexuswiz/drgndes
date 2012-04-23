var triggers = $(".modalInput").overlay({
 
	// настройки маски
	mask: {
		color: '#000000',
		loadSpeed: 200,
		opacity: 0.7
	},
 
	closeOnClick: true
});

var city = $("#city div").click(function(e) {
 
	// ввод пользователя
	var city_int = city.index(this);
	var city_string;
	
	switch(city_int) {
  		case 1: {
    		$city_string = "Санкт-Петербург"
    		break;
  		}
  		case 2: {
    		$city_string = "Екатеринбург"
    		break;
  		}
  		case 3: {
    		$city_string = "Нижний Новгород"
    		break;
  		}
  		case 4: {
    		$city_string = "Ростов"
    		break;
  		}
  		case 5: {
    		$city_string = "Самара"
    		break;
  		}
  		case 6: {
    		$city_string = "Москва"
    		break;
  		}
  		default: {
  		}
} 
	// что-то делаем с ответом пользователя
	triggers.eq(0).html(($city_string));
});

$("#login form").submit(function(e) {
 
	// авторизация
});

$("#register form").submit(function(e) {
 
	// регистрация
});