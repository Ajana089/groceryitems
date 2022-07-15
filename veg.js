  
               
             var xhttp=new XMLHttpRequest();
             xhttp.onreadystatechange=function(e){
                if(this.readyState==4&&this.status==200){
                     response=JSON.parse(this.responseText);
                     buildTable(response);
                     //selectvalue(response) ;    
                    getdata(response);
                     
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
          
         

          
              

               function getvalue(){
                  var selected=document.getElementById("arr").value;
                    return selected;
                }
        
               
             function   getdata(response){
              var data=response;
              return data;
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
              
            var value=document.getElementById("arr").value;
           var table = document.getElementById('myTable');
           var depttable = document.getElementById('myTable')
            if(value==='ALL'){
            
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




        
                  
                 
                  
        
        
                
              