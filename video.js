document.addEventListener("DOMContentLoaded", function() {
  // let myData = localStorage.getItem('data')

  let greeting = document.getElementById('greeting')
  let name = localStorage.getItem('username')
  greeting.innerText = name

})
