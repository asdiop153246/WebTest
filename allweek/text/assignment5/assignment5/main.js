
var x = 0;

function postFunction(){
        
        var Newtext = document.getElementById("text1").value;
        if(x == 0){
            document.getElementById("topic1").innerHTML = Newtext;  
        }
        else if(x == 1){
            document.getElementById("comment1").innerHTML = Newtext;
        }
        else if(x == 2){
            document.getElementById("comment2").innerHTML = Newtext;
        }
        x+=1;
        
    }


function clearFunction(){
    
    document.getElementById("topic1").innerHTML = ""
    document.getElementById("comment1").innerHTML = ""
    document.getElementById("comment2").innerHTML = ""

}

