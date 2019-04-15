window.onload = () => {
  const textarea = document.getElementById('textarea')
  const button = document.getElementById('button')
  const image = document.getElementById('image')
  const update = text => {
    image.src = `http://chart.googleapis.com/chart?cht=qr&chs=400x400&choe=UTF-8&chl=${encodeURIComponent(text)}`
    image.alt = text
    textarea.value = text
    textarea.select()
  }
  chrome.tabs.query({active: true}, tabs => { // eslint-disable-line
    update(tabs[0].url)
  })
  button.onclick = () => {
    if (textarea.value !== '') {
      update(textarea.value)
    }
  }
}
