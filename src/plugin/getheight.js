export const getheight  = (id) => {
  let oldHeight = document.documentElement.clientHeight
  console.log(oldHeight)
  let newHeight = document.getElementById(id)
  newHeight.style.height = (Number(oldHeight) - 200)+ 'px'
  console.log(oldHeight)
  return oldHeight
}
