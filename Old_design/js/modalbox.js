var triggers = $(".modalInput").overlay({
 
	// ��������� �����
	mask: {
		color: '#000000',
		loadSpeed: 200,
		opacity: 0.7
	},
 
	closeOnClick: true
});

var city = $("#city div").click(function(e) {
 
	// ���� ������������
	var city_int = city.index(this);
	var city_string;
	
	switch(city_int) {
  		case 1: {
    		$city_string = "�����-���������"
    		break;
  		}
  		case 2: {
    		$city_string = "������������"
    		break;
  		}
  		case 3: {
    		$city_string = "������ ��������"
    		break;
  		}
  		case 4: {
    		$city_string = "������"
    		break;
  		}
  		case 5: {
    		$city_string = "������"
    		break;
  		}
  		case 6: {
    		$city_string = "������"
    		break;
  		}
  		default: {
  		}
} 
	// ���-�� ������ � ������� ������������
	triggers.eq(0).html(($city_string));
});

$("#login form").submit(function(e) {
 
	// �����������
});

$("#register form").submit(function(e) {
 
	// �����������
});