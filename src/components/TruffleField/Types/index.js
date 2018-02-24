import Comment from './Comment'
import Tag from './Tag'
import Plain from './Plain'

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

    // TODO: this should define an array type
    if (typeof(value) === "array") {
      return Plain
    }

    return Plain
  }
}

export default Types
