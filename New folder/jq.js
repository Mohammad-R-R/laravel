// $(document).ready(function(){
//     $("#in").keydown
//      (function(){
//         var value=$(this).val();
//         $('.first').html( `<textarea style="width:100%;position:relative; right:12px;border:none;">${value} </textarea>`);
//     });
// });



$.ajax({
 'url':"https://ipapi.co/json/",
// 'url':"http://HOST:PORT/PATH/athena/INSTANCE/",
 'type':"get",
 'dataType':"json",
 'data':{},

    
    
 beforeSend:function(){
    $(".loading").show();

 },
 success:function(res){
    $(".loading").hide();
    var html ='';
    $.each(res,function(key,value){
        console.log(key,value)
        html+=`<tr> <td class="no"> ${key}</td> <td>${value} </td> </tr>`;
    });
    $('.tt').html(html);

 },error:function(res){
    $(".loading").hide();
    console.log(res);

 }
});