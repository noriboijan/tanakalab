$(function(){
  $.get('member.csv',function(data){
    var csv = $.csv()(data);
    var list = "";
    var test = true;
    $(csv).each(function(){
      if(this[0] == "-" && test == true){
        list += '<div class="panel panel-default">';
        list += '<div class="panel-heading">';
        list +=  '<h3 class="panel-title">' +this[1]+ '</h3>';
        list += '</div>';
        list += '<div class="panel-body">';
        test = false;
      }
      else if(this[0] == "-"){
        list += '</div></div>';
        list += '<div class="panel panel-default">';
        list += '<div class="panel-heading">';
        list +=  '<h3 class="panel-title">' +this[1]+ '</h3>';
        list += '</div>';
        list += '<div class="panel-body">';
      }
      else if(this[0] == "+"){
        list += '</div><ul class="list-group"><li class="list-group-item">'+this[1]+'</li><div class="panel-body">';
      }
      else{
        list += '<div class="col-xs-12">';
        list += '<div class="col-xs-5 col-ms-5">'+this[0]+'</div>';
        if(this[4]){
          list += '<div class="col-xs-6 col-ms-6">'+this[4]+'</div>';
        }
        else{
          list += '<div class="col-xs-6 col-ms-6">　</div>';
        }
        if(this[3]){
          list += '<div class="col-xs-1 col-ms-1">';
          list += '<a href="'+this[3]+'"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></div>';
        }
        else{
          list += '<div class="col-ms-1">　</div>';
        }
        list += '</div>';
      }
    })
    list += '</div></div>';
    $('#csv').prepend(list);
  })
})