
window.HELP_IMPROVE_VIDEOJS = false;

window.toggleVideoDescription = function () {
  const button = document.getElementById('description-toggler')
  const description = document.getElementById('video-description')
  const container = document.getElementsByClassName('video-description')[0]
  const text = document.getElementById('video-text')

  const hidden = 'hidden'
  const show = 'show'
  const hideText = 'hide'
  const showText = 'show more'
  const column = 'column'
  const row = 'row'

  if (text.classList.contains(hidden)) {
    text.classList.remove(hidden)
    description.classList.add(show)
    button.textContent = hideText
    container.style.flexDirection = column
  } else {
    text.classList.add(hidden)
    description.classList.remove(show)
    button.textContent = showText
    container.style.flexDirection = row
  }
}
