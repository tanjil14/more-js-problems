// function bgYellow(){
//     document.body.style.backgroundColor='yellow'
// }
// const btn=document.getElementById('on-click-btn')
// btn.onclick=bgBlue;

// function bgBlue(){
//     document.body.style.backgroundColor='blue'
// }

// 1.add button event handler
function submitComment(){
    // 2.get user comment 
    const commentBox=document.getElementById('new-comment');
    
    // 3.create comment paragraph
    const newComment=document.createElement('p')
    newComment.innerText=commentBox.value;

    // 4. append the comment
    const commentContainer=document.getElementById('comment-container');
    commentContainer.appendChild(newComment)

    //clean cmnt box
    commentBox.value=''
}
document.getElementById('delete-btn').addEventListener('click',function(){
    document.getElementById('secret-info').style.display='none'
    document.getElementById('delete-confirm').value=''
})
document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const deleteBtn =document.getElementById('delete-btn')
    if(event.target.value=='delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled',true)
    }
})