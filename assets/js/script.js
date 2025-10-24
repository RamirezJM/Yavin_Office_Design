const topButton = document.getElementById('btn-top')

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    topButton.classList.add('show')
  }
  else{
    topButton.classList.remove('show')
  }
})
topButton.addEventListener('click', () => {
  document.documentElement.scrollTop = 0
})



function incrementStats(){
  const counters = document.querySelectorAll('.stat')

  counters.forEach((counter) => {
    counter.innerText = 0
    const updateCounter = () => {
      const target = Number(counter.getAttribute('data-target'))
      const insideContent = Number(counter.innerText)

      const increment = target / 300
      if(insideContent < target){
        counter.innerText = Math.ceil(insideContent + increment)
        setTimeout(updateCounter, 1)
      }else{
        counter.innerText = target
      }
    }
    updateCounter()
  })
}
document.addEventListener('DOMContentLoaded', incrementStats)