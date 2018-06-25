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
  fun_career(data.career);
  fun_education(data.education);
  fun_achivements(data.achivements);
  fun_technical(data.technical);
  fun_skills(data.skills);

});
var div2=document.getElementById("child2");
function fun_career(car)
{
  var co=document.createElement("h2");
  co.textContent="Career objective";
  div2.appendChild(co);
  var h2=document.createElement("hr");
  div2.appendChild(h2);
  var p1=document.createElement("p");
  p1.textContent=car.info;
  div2.appendChild(p1);
}
function fun_education(edu){
var head=document.createElement("h2");
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
   var listItem=document.createElement("li");
    listItem.textContent=edu[i].institute;
    list.appendChild(listItem);
    var listItem=document.createElement("li");
     listItem.textContent=edu[i].data;
     list.appendChild(listItem);



}

}
function fun_achivements(ach){
  var a1=document.createElement("h2");
  a1.textContent="Achievements";
  div2.appendChild(a1);
  var h3=document.createElement("hr");
  div2.appendChild(h3);
    var list=document.createElement("ul");
    div2.appendChild(list);
    for(var i=0;i<ach.length;i++)
  {
    var listItem=document.createElement("li");
     listItem.innerHTML=ach[i].name;
     list.appendChild(listItem);
  }
}
  function fun_technical(tech){
    var a1=document.createElement("h2");
    a1.textContent="TECHINICAL";
    div2.appendChild(a1);
    var h3=document.createElement("hr");
    div2.appendChild(h3);
      var list=document.createElement("ul");
      div2.appendChild(list);
      for(var i=0;i<tech.length;i++)
    {
      var listItem=document.createElement("li");
       listItem.innerHTML=tech[i].name;
       list.appendChild(listItem);
    }

}


function fun_skills(skills){
  var a1=document.createElement("h2");

  a1.textContent=" Communication skills";
  div2.appendChild(a1);
  var h3=document.createElement("hr");
  div2.appendChild(h3);
  var tr="";
  var table=document.createElement("table");
  div2.appendChild(table);
  for(var i=0;i<skills.length;i++)
  {
    tr+="<tr><td>"+skills[i].name+"</td><td>"+skills[i].data+"</td></tr>";
  }
  table.innerHTML=tr;
  table.border="1";





}
