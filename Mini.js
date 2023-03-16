var date= document.getElementById('date')
 const button=document.getElementById("generate_Button");
 const themetoggler=document.querySelector(".themeToggler");
 const btnLogin=document.querySelector("login_button");
//  var data=["ProductID 2","productName=shoes","order Date=6/7/2023Sx","recieveddate=4/8.2023"];
//  let data=[
//    {ProductID:"2", productName:"Electronics",OrderDate:"OrderDate",RecievedDate:"ReciebvedDate"},
//    {ProductID:"3", productName:"Electronics",OrderDate:"OrderDate",RecievedDate:"ReciebvedDate"},
//    {ProductID:"4", productName:"Electronics",OrderDate:"OrderDate",RecievedDate:"ReciebvedDate"}

//  ]
//  for(i=0;i<data.length;i++){
//     currentdata=data[i].replace('=',':');
//     console.log=currentdata[i] + "/" + currentdata[i]

//  }

 button.addEventListener("click" ,fnButtonGenerate);
 function fnButtonGenerate()
 {
    document.getElementById("demo").innerHTML= "welcome to simple banking" ;
   
 }
themetoggler.addEventListener("click" , fnToggle);
function fnToggle()
{
   document.body.classList.toggle("dark-theme-variables");
}
// btnLogin.addEventListener("click", fnBtnLogin);
// function fnBtnLogin()
// {
//    document.
// }

let data=[["2","Electronics","OrderDate","RecievedDare"],["3","Electronic","OrderDate","RecievedDare"],["4","bicycle","namedate","hardware"]];
let tablebody= document.getElementById("myTablebody");

for (i=0;i<data.length;i++)
{
   let row=document.createElement("tr");
   tablebody.appendChild(row);

   // get the row values
   let values=data[i];

   for(j=0;j < values.length;j++)
   {
      let value=document.createElement("td");
      value.textContent=values[j];
      row.appendChild(value);

   }
}


 

