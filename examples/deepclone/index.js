import { deepClone } from '../../src/index'

const baseObject = {
  firstLevel: {
    secondLevel: 'Test'
  }
}

const spreadClone = {
  ...baseObject
}

const deepCloned = deepClone(baseObject)

baseObject.firstLevel.secondLevel = 'updated'

console.log('deepCloned:', deepCloned)
console.log('spreadClone:', spreadClone)
