import React from 'react'

function ConLogSTAction() {
  return (
    <div>ConLogSTAction</div>
  )
}

export default ConLogSTAction


// const conlog = (state, action) => {
//     console.log('--------- ' + action.type + ' ---------')
//     console.log('payload:', action.payload)
//     console.log('display:', state.value.display)
//     console.log('displayLine:', state.value.displayLine)
//     console.log('cleanOut:', state.value.cleanOut)
//     console.log('record:')
//     state.value.record.forEach((value, recIndex) => {
//         console.log(recIndex + ". " + value); 
//        });
//     console.log('-'.repeat(20 + action.type.length))
//     }
