  
const Header = (title, date, temp) => {

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const top = document.createElement('div')
    top.classList.add('header')

  const times = document.createElement('h1')
    times.textContent = title
  const day = document.createElement('span')
    day.textContent = date
    day.classList.add('date')
  const degrees = document.createElement('span')
    degrees.textContent = temp
    degrees.classList.add('temp')

  top.appendChild(times)
  top.appendChild(day)
  top.appendChild(degrees)

  return top
}
// Header("Lambda Times", "January 6, 2021", "26")



const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  ["header-container"].appendChild(Header)
  // Header.classList.add('header-container')

}

export { Header, headerAppender }
