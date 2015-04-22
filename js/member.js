$(function(){
  $.get('member.csv',function(data){
    var csv = $.csv()(data);
    const punc = 0;
    const jpName = 0;
    const jpPosit = 1;
    const hasHp = 3;
    const jpAff = 4;
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
        list += '<div class="panel-heading"><h3 class="panel-title">' +this[jpPosit]+ '</h3></div>';
      }
      else if(this[punc] == "+"){
        if(first){
          first = false;
        }
        else{
          list += '</table>'; // <div class="panel-body">
        }
        list += '<ul class="list-group"><li class="list-group-item list-group-item-warning">'+this[jpPosit]+'</li></ul>';
        list += '<table class="table">';
      }
      else{
        list += '<tr><td width="220" class="text-center">';
        list += this[jpName];
        if(this[jpAff]){
          list += '<td width="500">'+this[jpAff]+'</td>';
        }else{
          list += '<td width="500">　</td>';
        }
        if(this[hasHp]){
          list += '<td><a href="'+this[hasHp]+'">Homepage</a></td>';
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