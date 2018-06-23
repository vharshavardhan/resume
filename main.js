function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_education(data.education);
});
var div2=document.getElementById("child2");
function fun_education(edu){
  var head=document.createElement("header");
  head.textContent="Education qualification";
  div2.appendChild(head);
var h2=document.createElement("hr");
div2.appendChild(h2);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0;i<edu.length;i++)
{
  var listItem=document.createElement("li");
   listItem.textContent=edu[i].degree;
   list.appendChild(listItem);
}

}
