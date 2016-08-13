import Realm from 'realm'
import TodoService from '../services/todo'

export default Realm.model({
  service: TodoService
})
