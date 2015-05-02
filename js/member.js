$(function(){
  $.get('/data/member.csv',function(data){
    var csv = $.csv()(data);
    const punc = 0;
    const jpName = 0;
    const enName = 1;
    const jpPosit = 1;
    const enPosit = 2;
    const hasHp = 3;
    const jpAff = 4;
    const enAff =5;
    var Posit = 0;
    var Name = 0;
    var Aff = 0;
    var $dir = location.href.split("/");
    var $dir2 = $dir[$dir.length -2];
    if($dir2 == 'jpn'){
      Name = jpName;
      Posit = jpPosit;
      Aff = jpAff;
    }else{
      Name = enName;
      Posit = enPosit;
      Aff = enAff;
    }
    var list = "";
    var init = true;
    var first = true;
    $(csv).each(function(){
      if(this[punc] == "-"){
        if(init){
          init = false;
        }else{
          list += '</table></div>'; // <div class="panel-body"><div class="panel">
        }
        first = true;
        list += '<div class="panel panel-primary">';
        list += '<div class="panel-heading"><h3 class="panel-title">' +this[Posit]+ '</h3></div>';
      }
      else if(this[punc] == "+"){
        if(first){
          first = false;
        }
        else{
          list += '</table>'; // <div class="panel-body">
        }
        list += '<ul class="list-group"><li class="list-group-item list-group-item-warning">'+this[Posit]+'</li></ul>';
        list += '<table class="table table-condensed">';
      }
      else{
        list += '<tr><td width="220" class="text-center">';
        list += this[Name];
        if(this[Aff]){
          list += '<td width="500">'+this[Aff]+'</td>';
        }else{
          list += '<td width="500">　</td>';
        }
        if(this[hasHp]){
          list += '<td><a href="'+this[hasHp]+'" class="btn btn-default btn-xs">Homepage</a></td>';
        }else{
          list += '<td>　</td>';
        }

        list += '</td></tr>'; // <div class="col-xs-12 or 4"><div class="row">
      }
    })
    list += '</table></div>'; // <div class="panel-body"><div class="panel">
    $('#current-members').prepend(list);
  })
})