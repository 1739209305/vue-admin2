export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach((v) => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

export function dataToTree(parents, children) {
  parents.map((p) => {
    children.map((c, index) => {
      if (c.pid === p.id) {
        let _c = JSON.parse(JSON.stringify(children))
        _c.slice(index, 1)

        dataToTree([c], _c)

        if (p.children) {
          p.children.push(c)
        } else {
          p.children = [c]
        }
      }
    })
  })
  return parents
}
