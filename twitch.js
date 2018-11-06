document.addEventListener("DOMContentLoaded", function() {
  // let myData = localStorage.getItem('data')

  let input = document.getElementById("input")
  let form = document.querySelector("form")
  form.addEventListener('submit', function() {
    event.preventDefault()
    console.log(input.value)
    localStorage.setItem('username', input.value)
    window.location.href = 'videopage.html'
  })
  // localStorage.setItem("data", "the value")
  // localStorage.getItem("data")
  // console.log(myData)
  //
  // let list = []
  // localStorage.setItem("array", JSON.stringify([1, 2, 3, 4]))


})
