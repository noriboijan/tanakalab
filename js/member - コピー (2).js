$(function(){
  $.get('member.csv',function(data){
    var csv = $.csv()(data);
    var list = "";
    var cont = false;
    var newpanel = true;
    $(csv).each(function(){
      if(newpanel){
        list += '<div class="panel panel-default">';
        list += '<table class="table"><tbody>';
        newpanel = false;
      }
      if(!this[1]){
        list += '</td></tr></tbody></table></div></panel>';
        newpanel = true;
      }
      else if(!this[0] && this[1]){
        list += '</br>'+this[1];
      }else if (this[0] && this[1]){
        if(cont){
          list += '</td></tr>';
          cont = false;
        }
        list += '<tr><td>'+this[0]+'</td><td>'+this[1];
        cont = true;
      }
/*        if(this[3]){
          list += ' <a href="'+this[3]+'"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a>';
        }
        else{
          list += '<span>　</span>';
        }*/
    })
    list += '</td></tr></tbody></table></div>';
    $('#csv').prepend(list);
  })
})