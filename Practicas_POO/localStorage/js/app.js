const listaTweets = document.getElementById('listaTweets');
let tweetDelete='';

eventListener();

function eventListener(){

  document.addEventListener('DOMContentLoaded',localStorgeReady);


  document.querySelector('#formulario').addEventListener('submit',addTweet);
  listaTweets.addEventListener('click',removeTeewt);
}

let tweets = new tweet();
function addTweet(){
    let contentTweet=document.getElementById('tweet').value.trim();
    tweets.addTweet(contentTweet);
    document.getElementById('tweet').value="";
    

}

function removeTeewt(event){
    event.preventDefault();
    if(event.target.tagName === 'SPAN'){
        tweetDelete=event.target.parentElement.parentElement.textContent.slice(0,-1);
        Swal.fire({
            title: '¿Estas seguro?',
            text: `Se eliminara el tweet ${tweetDelete}`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.value) {
                event.target.parentElement.parentElement.remove();
                tweets.removeTweetLS(tweetDelete);
              Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Tweet eliminado',
                showConfirmButton: false,
                timer: 1000
              })
            }
          })
        

    }
    
}

function localStorgeReady(){
  let tweet2 = tweets.getLocalStorage();

  tweet2.forEach(function(tweet){
    tweets.createTweet(tweet)
  });
}

