import Comment from './Comment'
import Tag from './Tag'
import Plain from './Plain'
import List from './List'

let typeMap = {
  'Tag': Tag,
  'Comment': Comment
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

    return Plain
  }
}

export default Types
