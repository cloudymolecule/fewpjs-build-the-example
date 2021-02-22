// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hidden = document.getElementById('modal')
hidden.classList.add('hidden')

const hearts = document.querySelectorAll('.like-glyph')

for (let i = 0; i < hearts.length; i++) {
  let heart = hearts[i]
  // heart.setAttribute('id', (i + 1))

  function fakeRequest() {
    function heartSwitch() {
      if (heart.innerHTML == FULL_HEART){
        heart.innerHTML = EMPTY_HEART
        heart.classList.remove('activated-heart')
      } else {
        heart.innerHTML = FULL_HEART
        heart.classList.add('activated-heart')
      }
    }
    mimicServerCall().then(function(response) {
      heartSwitch()
    }).catch(function(error) {
      heart.innerHTML = EMPTY_HEART
      heart.classList.remove('activated-heart')
      const h2Error = document.querySelector('#modal h2')
      h2Error.innerText = error
      hidden.classList.remove('hidden')
      setTimeout(hideHidden, 5000)
      function hideHidden() {
        hidden.classList.add('hidden')
      }
    })
  }
  heart.addEventListener('click', () => {
    fakeRequest()
  })
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
