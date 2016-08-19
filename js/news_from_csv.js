$(function(){
  var target = '#news_text';
  var csv_array;
  var article;
  $.ajax({
    url:'news.csv',
    success: function(data){
      csv_array = $.csv()(data);
      var article = '<table><tbody>';
      for (var i = 1; i < csv_array.length; i++) {
        article += "<tr><td style=\"width: 140px\;vertical-align: top\;\">";
        article += csv_array[i][0]
        article += '</td><td>';
        article += csv_array[i][1]
        article += '</td></tr>'
      }
      article += '</tbody></table>';
      $(target).append(article);
    };
  });
});