import { serializeForm, addEvent } from '../../src/index'
import { title } from '../utils'

title('serializeForm')

addEvent('#form', 'submit', e => {
  e.preventDefault()
  console.log(serializeForm('#form'));

})
