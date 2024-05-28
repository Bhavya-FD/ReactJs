/* eslint-disable no-unused-vars */
import React from 'react'
import ParentPropExample1 from './ParentPropExample1'
import ParentPropExample2 from './ParentPropExample2'
import ParentPropExample3 from './ParentPropExample3'
import ParentPropExample4 from './ParentPropExample4'
import ParentPropExample5 from './ParentPropExample5'
import ParentProp6 from './ParentProp6'
import ParentProp7 from './ParentProp7'
import ParentComponent8 from './ParentComponent8'
import ParentClassComponent9 from './ParentClassComponent9'
import ParentClassComponent10 from './ParentClassComponent10'

export default function AllPropsExample() {
  return (
    <div>
        {/* Send single key and value to child Component */}
        {/* <ParentPropExample1/> */}

        {/* Send multiline code to child Component */}
        {/* <ParentPropExample2/> */}

        {/* transfer Method or Function to Child Component  */}
        {/* <ParentPropExample3/> */}

        {/* Conditional Rendering */}
        {/* <ParentPropExample4/> */}

        {/* Default Props */}
        {/* <ParentPropExample5/> */}

        {/* Send Array data to Child Component */}
        {/* <ParentProp6/> */}

        {/* complex props : send array with multiple objects */}
        {/* <ParentProp7/> */}

        {/* Send input data and create object in array */}
        <ParentComponent8/>

        {/* render Data using class Component */}
        {/* <ParentClassComponent9/> */}

        {/* onclick render data */}
        {/* <ParentClassComponent10/> */}
    </div>
  )
}
