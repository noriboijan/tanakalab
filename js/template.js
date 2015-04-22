$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: "/header.html",
    dataType: 'html',
    success: function(data){
      $('body').prepend(data);
      var loc = location.href;
      var file = loc.substring(loc.lastIndexOf("/")+1,loc.length);
      var $dir = location.href.split("/");
      var $dir2 = $dir[$dir.length -2];
      if($dir2 == 'jpn'){
        $("#navbar li.jpn").addClass("active");
      }else{
        $("#navbar li.eng").addClass("active");
      }
      if(file ==  'index.html'){
        $("#navbar li.home").addClass("active");
      }
      else if(file == 'research.html'){
        $("#navbar li.research").addClass("active");
      }
      else if(file == 'thesis.html'){
        $("#navbar li.thesis").addClass("active");
      }
      else if(file == 'access.html'){
        $("#navbar li.access").addClass("active");
      }
      else if(file == 'member.html'){
        $("#navbar li.member").addClass("active");
      }
      else if(file == 'entrance.html'){
        $("#navbar li.entrance").addClass("active");
      }
    }
  });
  $.ajax({
    type: 'GET',
    url: "/footer.html",
    dataType: 'html',
    success: function(data){
      $('body').prepend(data);
    }
  });
});
