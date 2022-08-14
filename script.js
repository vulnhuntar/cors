var corsUrl=prompt("Enter the URL:");
			function cors1(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
						if (this.readyState == 4 && this.status == 200){
                                                        document.getElementById("demo").innerHTML = alert(this.responseText);
                                                }
                                        }
                                        xhttp.open("GET", corsUrl, true);
                                        xhttp.withCredentials = true;
                                        xhttp.send();
                        }
                        
                        function cors2(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
						if (this.readyState == 4 && this.status == 200){
                                                        document.getElementById("demo").innerHTML = alert(this.responseText);
                                                }
                                        }
                                        xhttp.open("POST", corsUrl, true);
                                        xhttp.withCredentials = true;
                                        xhttp.send();
                        }
                        
                        function cors3(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
						if (this.readyState == 4 && this.status == 200){
                                                        document.getElementById("demo").innerHTML = alert(this.responseText);
                                                }
                                        }
                                        xhttp.open("OPTIONS", corsUrl, true);
                                        xhttp.withCredentials = true;
                                        xhttp.send();
                        }
                        
                        function cors4(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
						if (this.readyState == 4 && this.status == 200){
                                                        document.getElementById("demo").innerHTML = alert(this.responseText);
                                                }
                                        }
                                        xhttp.open("DELETE", corsUrl, true);
                                        xhttp.withCredentials = true;
                                        xhttp.send();
                        }
                        
                        function cors5(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
						if (this.readyState == 4 && this.status == 200){
                                                        document.getElementById("demo").innerHTML = alert(this.responseText);
                                                }
                                        }
                                        xhttp.open("PUT", corsUrl, true);
                                        xhttp.withCredentials = true;
                                        xhttp.send();
                        }
(function autorun(){
                  	cors1();
})();
