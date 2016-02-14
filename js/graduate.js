$(function(){
  $.get('/data/graduate.csv',function(data){
    var csv = $.csv()(data);
    var punc = 0;
    var jpName = 0;
    var enName = 1;
    var year = 1;
    var jpPosit = 1;
    var enPosit = 2;
    var $dir = location.href.split("/");
    var $dir2 = $dir[$dir.length -2];
    var lang = 0;
    var count = 0;
    var Posit = jpPosit;
    if($dir2 == 'eng'){
      Posit = enPosit;
      lang = 1;
    }
    var currentPosit = '';
    positPrinted = false;
    var list = "";
    var init = true;
    var first = true;
    $(csv).each(function(){
      if(this[punc] == "-"){
        if(init){
          init = false;
          list += '<div class="panel panel-primary">';
          list += '<div class="panel-heading"><h3 class="panel-title">卒業生</h3></div>';
          list += '<table class="table table-condensed table-bordered">';
          list += '<thead><tr><th class="text-center">年度</th><th class="text-center">学位</th><th class="text-center">名前</th></tr></thead>';
        }
        first = true;
        list += '<tr>';
        list += '<td width="250" class="text-center" rowspan="'+this[2]+'"><h1><span id="'+this[year]+'"></span></h1>'+this[year]+'年度（'+this[2]+'名）</td>';
        list += '';
      }
      else if(this[punc] == "+"){
        count = this[3];
        currentPosit = this[Posit];
        positPrinted = false;
      }
      else{
        if(positPrinted == false)
        {
          list += '<td width="250" class="text-center" rowspan="'+count+'">'+currentPosit+'</td>';
          positPrinted = true;
        }
        list += '<td width="500" class="text-center">';
        if(!this[jpName] == "" && lang == 0){
          list += this[jpName];
        }else{
          list += this[enName];
        }
        list += '</td></tr>';
      }
    })
    list += '</table></div>';
    $('#graduate').prepend(list);
  })
})