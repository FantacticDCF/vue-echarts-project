export const getheight  = (id) => {
  let oldHeight = document.documentElement.clientHeight
  let newHeight = document.getElementById(id)
  newHeight.style.height = (Number(oldHeight) - 195)+ 'px'
  return oldHeight
}
