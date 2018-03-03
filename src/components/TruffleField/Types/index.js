import Comment from './Comment'
import Tag from './Tag'
import Plain from './Plain'
import List from './List'
import Link from './Link'

let typeMap = {
  'Tag': Tag,
  'Comment': Comment,
  'Link': Link
}

class Types {
  static find(type, value) {
    if (typeMap.hasOwnProperty(type)) {
      return typeMap[type]
    }

    if (typeof(value) === "boolean") {
      return Tag
    }

    if (Array.isArray(value)) {
      return List
    }

    if (value.indexOf('http') === 0) {
      return Link
    }

    return Plain
  }
}

export default Types
