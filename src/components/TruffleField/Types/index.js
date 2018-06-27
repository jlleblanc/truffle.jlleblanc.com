import Comment from './Comment'
import Tag from './Tag'
import Plain from './Plain'
import List from './List'
import Link from './Link'
import Audio from './Audio'
import Bible from './Bible'
import Instagram from './Instagram'
import Emoji from './Emoji'

let typeMap = {
  'tag': Tag,
  'comment': Comment,
  'recipe': Comment,
  'link': Link,
  'podcast episode': Audio,
  'bible passage': Bible,
  'instagram': Instagram,
  'emoji': Emoji
}

class Types {
  static find(type, value) {
    let normalizedType = type.toLowerCase()

    if (typeMap.hasOwnProperty(normalizedType)) {
      return typeMap[normalizedType]
    }

    if (typeof(value) === "boolean") {
      return Tag
    }

    if (Array.isArray(value)) {
      return List
    }

    // Handle string types last
    if (typeof(value) === "string" && value.indexOf('http') === 0) {
      return Link
    }

    return Plain
  }
}

export default Types
