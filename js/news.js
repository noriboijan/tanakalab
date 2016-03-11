$(function(){
  $.ajax({
    url:'/seminar.txt',
    success: function(data){
      var data_array = data.split(/\r\n|\r|\n/);
      var date_array;
      var article = '';// = '<table><tbody>';
      for (var i = 0; i < data_array.length; i++){
        if(data_array[i].match(/Date/)){
          article += data_array[i] + '</p>';
          //article += data_array[i+1] + '</p>';
          //article += data_array[i+2] + '</p>';
          //article += data_array[i+3] + '</p></p>';
          date_array = data_array[i].split(/:|,|/)
          console.log(date_array[1],date_array[2]);
//                console.log(data_array[i], i);
//              console.log(data_array[i+1], i);
//            console.log(data_array[i+2], i);
//          console.log(data_array[i+3], i);
        }
      }
//            article += '</tbody></table>';
      //console.log(article);
      $("#seminar_schedule_text").prepend(article);
    }
  });
});

$(function(){
  $.ajax({
    url:'/news.html',
    success: function(data){
      var data_array = data.split(/\r\n|\r|\n/);
      var date_array;
      var date;
      var len = data_array.length;
      //console.log(len);
      var article = '<table><tbody>';
      //console.log(len);
      for (var i = 0,j = 0; i < 300 && j < 5; i++){
        if(data_array[i].match(993300) && data_array[i].match(20)){
//              console.log(data_array[i].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,''));
          article += "<tr><td style=\"width: 140px\;vertical-align: top\;\">";
//                article += data_array[i].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
          date_array = (data_array[i].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')).split(/年|月|日/);
          //console.log(date_array[0],date_array[1],date_array[2]);
          article += date_array[0] + '年';
          if(date_array[1] < 10){article += '0';}
          article += date_array[1] + '月';
          if(date_array[2] < 10){article += '0';}
          article += date_array[2] + '日';
          article += '　</td><td>';
          article += data_array[i+2].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
          article += '</td></tr>';
          i = i + 2;
          j++;
        }
      }
      article += '</tbody></table>';
      $("#news_text").prepend(article);
    }
  });
});
