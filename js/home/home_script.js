document.getElementById('accordionFlushExampleComment1').style.display = 'none';
document.getElementById('accordionFlushExampleComment2').style.display = 'none';

function showNestedComments(id){
    if(document.getElementById(id).style.display == 'block'){
        document.getElementById(id).style.display = 'none';
    }
    else{
        document.getElementById(id).style.display = 'block';
    }
    
}