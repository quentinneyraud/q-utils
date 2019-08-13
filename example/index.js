import { addClass, addEvent, serializeForm, removeEvent, gebc, gebi, getPos, logElement, qs, qsa, removeClass } from '../src/index'

const sep = () => console.log('#'.repeat(20))
const blank = (n = 1) => console.log('\n'.repeat(n))
const firstTitle = gebi('first-title')
const secondTitle = gebi('second-title')

console.log('SELECTORS')
blank()
sep()
blank()

console.log('qs(document.body, \'#first-title\')', qs(document.body, '#first-title'))
blank()
console.log('qsa(document.body, \'.title\')', qsa(document.body, '.h2'))
blank()
console.log('gebi(\'first-title\')', gebi('first-title'))
blank()
console.log('gebc(document.body, \'h2\')', gebc(document.body, 'h2'))
blank()
console.log('gebc(document.body, \'h2\', true)', gebc(document.body, 'h2', true))
blank()
sep()

blank(4)

console.log('EVENTS')
blank()
sep()
blank()
console.log("addEvent(firstTitle, 'mouseenter', () => { console.log('mouseenter') })", addEvent(firstTitle, 'mouseenter', () => { console.log('mouseenter') }))
blank()
console.log("removeEvent(firstTitle, 'mouseenter')", removeEvent(firstTitle, 'mouseenter'))
blank()
sep()

blank(4)

console.log('LOG')
blank()
sep()
blank()
console.log('logElement(firstTitle)')
logElement(firstTitle)
blank()
sep()

blank(4)
console.log('CLASSES')
blank()
sep()
blank()
console.log('start with')
logElement(firstTitle)
blank()
console.log("addClass(firstTitle, 'test')")
addClass(firstTitle, 'test')
logElement(firstTitle)
blank()

console.log("removeClass(firstTitle, 'test')")
removeClass(firstTitle, 'test')
logElement(firstTitle)
blank()
sep()

blank(4)

console.log('POSITION')
blank()
sep()
blank()
console.log('getPos(firstTitle)')
console.log(getPos(firstTitle))
blank()
console.log('getPos(firstTitle).relativeTo(secondTitle)')
console.log(getPos(firstTitle).relativeTo(secondTitle))
blank()
sep()

blank(4)

sep()
blank()
console.log("serializeForm(gebi('form'))")
console.log(serializeForm(gebi('form')))
