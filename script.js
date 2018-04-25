$(document).ready(function(){
 
  $("#searchButton").click(function(){
  // pega o valor
  var searchForm = $('#searchForm').val();

  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchForm+ "&format=json&callback=?";

    $.ajax({
type: "GET",
url:url,
async:false,
dataType:"json",
success:function(data){
console.log(data[1][0]);
console.log(data[2][0]);
console.log(data[3][0]);
console.log(data[1][1]);
console.log(data[2][2]);
console.log(data[3][3]);
console.log(data[1]);

$('#output').html('');
for(var i=[0];i<data[1].length;i++){
$('#output').prepend("<div class='frame'><div class='btn btn-primary special result'><a href="+data[3][i]+" target='_blank'><h2>"+data[1][i]+"</h2><p>"+data[2][i]+"</p></a></div></div>");
}
$("#searchForm").val();
},
error:function(errorMessage){
alert("Error")
}
});
$("searchForm").keypress(function(e){
if(e.which==13){
$("searchButton").click();
}

});
    
    
  });


});