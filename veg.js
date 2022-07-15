                      //unique=[];
               
             var xhttp=new XMLHttpRequest();
             xhttp.onreadystatechange=function(e){
                if(this.readyState==4&&this.status==200){
                     response=JSON.parse(this.responseText);
                     buildTable(response);
                    

                     getvalue(response);
                              
                      console.log(response);
                      
                      for(i=0;i<response.length;i++){
                      
                        if(unique.includes(response[i].Department)){
        
                        }
                        else
                        unique.push(response[i].Department)
        
                      }
                      console.log(unique);
                
                     
        }
                      

            }
            xhttp.open("get","veg.json",true);
            xhttp.send();
            


            function buildTable(data){
                var table = document.getElementById('myTable')
                
                for (var i = 0; i < data.length; i++)
                {
                   
                    var row = `<tr>
                
                                    <td>${data[i].SerialNumber}</td>
                                    <td>${data[i].Item}</td>
                                    <td>${data[i].unit}</td>
                                    <td>${data[i].Quantity}</td>
                                    <td>${data[i].Note}</td>
                                    <td>${data[i].Department}</td>
                              </tr>`
                             
                              table.innerHTML += row
              }
            
      }
          
         

                 function getvalue(data){

                                  unique=[];
                                  var response=data;
                                 
                                  for(var i=0;i<response.length;i++){
                                  
                                    if(unique.includes(response[i].Department)){
                    
                                    }
                                    else
                                    unique.push(response[i].Department)
                    
                                  }
                                  console.log(unique);
                                  for (i=0;i<unique.length;i++){

                                    var select = document.getElementById("arr");
                                    //var options = ["1", "2", "3", "4", "5"];
                                    
                                     
                                        var opt = unique[i];
                                        var el = document.createElement("option");
                                        el.textContent = opt;
                                        el.value = opt;
                                        select.appendChild(el);
                                    
                          
                                  }
                          
                 }


              
             function deptTable(data){
              var depttable = document.getElementById('depttable')
              
              for (var i = 0; i < data.length; i++)
              {
                 
                  var row = `<tr>
              
                                  <td>${data[i].SerialNumber}</td>
                                  <td>${data[i].Item}</td>
                                  <td>${data[i].unit}</td>
                                  <td>${data[i].Quantity}</td>
                                  <td>${data[i].Note}</td>
                                  <td>${data[i].Department}</td>
                            </tr>`
                           
                           depttable.innerHTML += row;
            }
          
    }
                  

        
           function filtering() {
            var table = document.getElementById('myTable');
            var depttable = document.getElementById('myTable')
            var value=document.getElementById("arr").value;
          
            if(value==='All'){
            
             table.setAttribute("hidden","true");
              deptTable(response);
              
            }
           
                 var output=response.filter(function (e) {
            
                var x= e.Department.includes(value);
                return x;
         })
             
         console.table(output);
         table.setAttribute("hidden","true");
     
         deptTable(output); 

 }




        
                  
    
        
        
                
              