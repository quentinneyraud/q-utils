import { qs, qsa, gebi, gebc } from '../../src/index'
import { title, blank } from '../utils'

title('qs')
console.log(qs('ul', '.item'));
console.log(qs('#list1', '.item'));
console.log(qs('ul', '.t'));

blank(2)
title('qsa')

blank(2)
title('gebi')
console.log(gebi('list'))

blank(2)
title('gebc')

console.log(gebc('#list', 'item'))
