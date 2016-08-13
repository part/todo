import Realm from 'realm'
import app from './app'

module.exports = Realm.register('todo', app);