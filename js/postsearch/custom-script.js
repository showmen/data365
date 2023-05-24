var idList = ['detailContent','postComments','postReactions','postShared','defaultPanel'];

document.getElementById('detailContent').style.display = 'none';
document.getElementById('postComments').style.display = 'none';
document.getElementById('postReactions').style.display = 'none';
document.getElementById('postShared').style.display = 'none';
document.getElementById('accordionFlushExampleComment1').style.display = 'none';
document.getElementById('accordionFlushExampleComment2').style.display = 'none';
document.getElementById('ShareExampleComment').style.display = 'none';
// document.getElementById('accordionFlushExampleComment3').style.display = 'none';

function reloadDiv(id){
    idList.forEach(element => {
        document.getElementById(element).style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
    if(id === "detailContent"){
        document.getElementById("detailHeader").innerHTML = 'Post Information';
    }
    if(id === "postComments"){
        document.getElementById("detailHeader").innerHTML = 'Comments';
    }
    if(id === "postReactions"){
        document.getElementById("detailHeader").innerHTML = 'Reactions';
    }
    if(id === "postShared"){
        document.getElementById("detailHeader").innerHTML = 'Post Shared';
    }
}

function showNestedComments(id){
    if(document.getElementById(id).style.display == 'block'){
        document.getElementById(id).style.display = 'none';
    }
    else{
        document.getElementById(id).style.display = 'block';
    }
    
}