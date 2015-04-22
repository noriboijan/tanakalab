$(function(){
  $.get('member.csv',function(data){
    var csv = $.csv()(data);
    var list = "";
    var test = true;
    $(csv).each(function(){
      if(test){
        list += '<div class="panel panel-default">';
        list += '<div class="panel-heading">';
        list +=  '<h3 class="panel-title">' +this[0]+ '</h3>';
        list += '</div>';
        list += '<div class="panel-body">';
        test = false;
      }
      else if(!this[1]){
        list += '</div></div>';
        list += '<div class="panel panel-default">';
        list += '<div class="panel-heading">';
        list +=  '<h3 class="panel-title">' +this[0]+ '</h3>';
        list += '</div>';
        list += '<div class="panel-body">';
      }
      else if(!this[0] && this[1]){
        list += '<div class="col-xs-6"></div>';
        list += '<div class="col-xs-4">'+this[1]+'</div>';
        if(this[3]){
          list += '<div class="col-xs-2">';
          list += '<a href="'+this[3]+'"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></div>';
        }
      }else if (this[0] && this[1]){
        list += '<div class="col-xs-6">'+this[0]+'</div>';
        list += '<div class="col-xs-4">'+this[1]+'</div>';
        if(this[3]){
          list += '<div class="col-xs-2">';
          list += '<a href="'+this[3]+'"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></div>';
        }
      }
    })
    list += '</div></div>';
    $('#csv').prepend(list);
  })
})