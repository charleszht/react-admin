export function localSave(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

export function localGet(key) {
  const str = localStorage.getItem(key)
  if (str !== 'undefined') {
    return JSON.parse(str)
  }
  return null
}

export function localRemove(key) {
  localStorage.removeItem(key)
}
