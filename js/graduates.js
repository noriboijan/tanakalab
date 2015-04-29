$(function(){
  $.get('graduates.csv',function(data){
    var csv = $.csv()(data);
    const punc = 0;
    const jpName = 0;
    const enName = 1;
    const year = 1;
    const jpPosit = 1;
    const enTitle = 2;
    const jpTitle = 3;
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
        list += '<h1><span id='+this[year]+'></span></h1>';
        list += '<div class="panel panel-primary">';
        list += '<div class="panel-heading"><h3 class="panel-title">'+this[year]+'年度</h3></div>';
      }
      else if(this[punc] == "+"){
        if(first){
          first = false;
        }else{
          list += '</table>'; // <div class="panel-body">
        }
        list += '<ul class="list-group"><li class="list-group-item list-group-item-warning">'+this[jpPosit]+'</li></ul>';
        list += '<table class="table table-hover table-bordered">';
      }
      else{
        list += '<tr><td width="170" class="text-center">';
//        if(this[jpName].match(/\S/g)){
        if(!this[jpName] == ""){
          list += this[jpName];
        }else{
          list += this[enName];
        }
        list += '</td>';
        list += '<td width="500">';
//        if(this[jpTitle].match(/\S/g)){
        if(!this[jpTitle] == "" && !this[enTitle] == ""){
          list += this[jpTitle] + '</br>' + this[enTitle];
        }else if(!this[jpTitle] == ""){
          list += this[jpTitle];
        }else{
          list += this[enTitle];
        }
        list += '</td></tr>';
      }
    })
    list += '</table></div>'; // <div class="panel-body"><div class="panel">
    $('#graduates').prepend(list);
  })
})