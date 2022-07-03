
          var people=[];
                // creating an object
             var xhttp=new XMLHttpRequest();
             xhttp.onreadystatechange=function(){
                if(this.readyState==4&&this.status==200){
                    var response=JSON.parse(this.responseText);
                    people=response;
                    console.log(people);
                    buildTable(people);
                   
                }
            }
            xhttp.open("get","veg.json",true);
            xhttp.send();
            


            function buildTable(data){
                var table = document.getElementById('myTable')
        
                for (var i = 0; i < data.length; i++){
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
        