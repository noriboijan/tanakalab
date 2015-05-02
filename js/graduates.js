$(function(){
  $.get('/data/graduates.csv',function(data){
    var csv = $.csv()(data);
    const punc = 0;
    const jpName = 0;
    const enName = 1;
    const year = 1;
    const jpPosit = 1;
    const enPosit = 2;
    const enTitle = 2;
    const jpTitle = 3;
        var $dir = location.href.split("/");
    var $dir2 = $dir[$dir.length -2];
    var lang = 0;
    if($dir2 == 'eng'){
      lang = 1;
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
        list += '<table class="table table-hover table-bordered table-condensed">';
      }
      else{
        list += '<tr><td width="170" class="text-center">';
        if(!this[jpName] == "" && lang == 0){
          list += this[jpName];
        }else{
          list += this[enName];
        }
        list += '</td>';
        list += '<td width="500">';
        if(!this[jpTitle] == "" && !this[enTitle] == ""  && lang == 0){
          list += this[jpTitle] + '</br>' + this[enTitle];
        }else if(!this[jpTitle] == ""   && lang == 0){
          list += this[jpTitle];
        }else if(!this[enTitle]){
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