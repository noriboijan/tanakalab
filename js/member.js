$(function(){
  $.get('member.csv',function(data){
    var csv = $.csv()(data);
    var list
    var cont = false;
    var cap = false;
    $(csv).each(function(){
      if(!cap){
        list += '<thead ><tr><th class="text-center">'+this[0]+'</th><th class="text-center">'+this[1]+'</th></tr></thead><tbody>';
        cap = true;
      }else if(!this[0]){
        list += '</p>'+this[1]
      }else if (this[0] && this[1]){
        if(cont){
          list += '</td></tr>';
          cont = false;
        }
        list += '<tr><td class="text-center">'+this[0]+'</td><td  class="text-center">'+this[1];
        cont = true;
      }
        if(this[3]){
          list += ' <a href="'+this[3]+'"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a>';
        }
        else{
          list += '<span>　</span>';
        }
    })
    list += '</td></tr></tbody>';
    $('#csv').prepend(list);
  })
})