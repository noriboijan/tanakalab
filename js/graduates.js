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
          list += '</div></div>'; // <div class="panel-body"><div class="panel">
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
          list += '</div>'; // <div class="panel-body">
        }
        list += '<ul class="list-group"><li class="list-group-item well well-sm">'+this[jpPosit]+'</li></ul>';
        list += '<div class="panel-body">';
      }
      else{
        list += '<div class="row"><div class="col-xs-12">';
        list += '<div class="col-xs-4">'+this[enName]+'</div>';
        list += '<div class="col-xs-8">';
        list += this[jpTitle];
        list += this[enTitle];
        list += '</div></div></div>'; // <div class="panel-body"><div class="panel"><div class="row">
      }
    })
    list += '</div></div>'; // <div class="panel-body"><div class="panel">
    $('#graduates').prepend(list);
  })
})