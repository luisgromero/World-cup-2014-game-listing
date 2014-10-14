$.get('http://worldcup.sfg.io/matches/today?by_date=ASC', function( data ) {
	  var today_matches= new Array();
	  var home_flag;
	  var away_flag;
	
	  for(var i=0;i<data.length;i++){
		  var af=(data[i].away_team.code).substring(0,2).toLowerCase();
		  var hf=(data[i].home_team.code).substring(0,2).toLowerCase();
		  var m_number="Match: "+(data[i]).match_number;
		  var m_time=(data[i]).datetime;
		  m_time=new Date(m_time);
		  var m_location="Location: "+(data[i]).location;
		  var h_goals=(data[i].home_team.country)+" Goals: "+ (data[i].home_team.goals);
		  var a_goals=(data[i].away_team.country)+" Goals: "+ (data[i].away_team.goals);
		  away_flag="<img src='http://www.geonames.org/flags/m/"+af+".png' />";
		  home_flag="<img src='http://www.geonames.org/flags/m/"+hf+".png' />";
		  today_matches[i]=away_flag+" "+data[i].away_team.country + " V.S." + home_flag + " "+ data[i].home_team.country+"<br>"+ m_number +"<br>" +  m_location + "<br>"+a_goals + "<br>"+h_goals+"<br>"+m_time;
		  $('div.matches').append(today_matches[i]+"</br></br>");
	  }
	  
});
	