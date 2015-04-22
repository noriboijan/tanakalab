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
          list += '</div></div>'; // <div class="panel-body"><div class="panel">
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
          list += '</div>'; // <div class="panel-body">
        }
        list += '<ul class="list-group"><li class="list-group-item well well-sm">'+this[jpPosit]+'</li></ul>';
        list += '<div class="panel-body">';
      }
      else{
        list += '<div class="row"><div class="col-xs-12">';
        list += '<div class="col-xs-11">'+this[jpName];
        if(this[jpAff]){
          list += '（'+this[jpAff]+'）';
        }
        list += '</div>'; // <div class="col-xs-11">
        list += '<div class="col-xs-1 text-center">';
        if(this[3]){
          list += '<a href="'+this[hasHp]+'"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a>';
        }
        list += '</div></div></div>'; // <div class="col-xs-1 text-center"><div class="col-xs-12"><div class="row">
      }
    })
    list += '</div></div>'; // <div class="panel-body"><div class="panel">
    $('#current-members').prepend(list);
  })
})