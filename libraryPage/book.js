
function getData(){
		  
  // Creating a object
  let book = "Tale of teeth";    
  let xhr = new XMLHttpRequest();
  let url = "https://k73kkx4x3l.execute-api.us-east-1.amazonaws.com/stage/";
  console.log(url);
  // open a connection
  xhr.open("POST", url,true);
  xhr.setRequestHeader("Accept", "*/*");

    
    // Set the request header i.e. which type of content you are sending
xhr.setRequestHeader("Content-Type", "application/json");
  // Converting JSON data to string

// xhr.onload = function() {
  //     console.log(xhr.response)
  //   };
  
  // Set the request header i.e. which type of content you are sending
  
  
  // Create a state change callback
  var details;
  xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
         details=JSON.parse(xhr.response);
         console.log(details);

        console.log(details);

        document.getElementById("book-title").innerHTML=details['response']['bookName']['S'];
        document.getElementById("book-description").textContent=data.book-description;

        }};
        
        var data = JSON.stringify({ "bookName": book});
        console.log(data);
        // Sending data with the request
        
        
        
        xhr.send(data);
  
  

    // var AN=document.getElementsByClassName("author-name");
    // for(var i=0;i<AN.length;i++){
    //   AN[i].textContent=data.author-name;
    // }

    // document.getElementById("release-date").textContent=data.release-date;
    // document.getElementById("author-age").textContent=data.author-age;
    // document.getElementById("about-author").textContent=data.about-author;
  
}




