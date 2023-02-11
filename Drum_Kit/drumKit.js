function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip it if it's not a transform
  // console.log(e.propertyName)
  e.target.classList.remove("playing");
}

function playSound(e) {
    // console.log(e.keyCode) ;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   console.log(audio);
    if (!audio) return; //stop the function when no keys are hit

    
    
    audio.currentTime = 0;
    audio.play();
    // console.log(key);
    // key.classList.remove('playing')
    // key.classList.toggle('playing')
    // this.setTimeout(function(){
    // }, 0.07 )
    key.classList.add("playing");
  }

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

