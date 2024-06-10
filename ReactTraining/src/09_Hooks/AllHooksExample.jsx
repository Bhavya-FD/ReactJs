/* eslint-disable no-unused-vars */
import React from 'react'
// import HookExample3 from './HookExample3'
// import HookExample4 from './HookExample4'
// import HookExample5 from './HookExample5'
// import HookExample6_task from './HookExample6_task'
// import UseRefExample from './UseRefExample'
// import UseRefExample2 from './UseRefExample2'
// import UseRefExample3 from './UseRefExample3'
// import AllUseContext_Example from './UseContext/Problem_using_props/AllUseContext_Example'
import ComponentEx1 from './UseContext/ComponentEx1'
import ThemeComponentEx1 from './UseContext/ThemeComponentEx1'
import ThemeComponentEx2 from './UseContext/ThemeComponentEx2'

export default function AllHooksExample() {
  return (
    <div>
        {/* <HookExample3/> */}
        {/* Fetch api with useEffect */}
            {/* <HookExample4/> */}

        {/* Fetch api data and show in table */}
        {/* <HookExample5/> */}

        {/* fetch products details from api and display in card */}
        {/* <HookExample6_task/> */}

        {/* UseRef Example  */}
        {/* <UseRefExample/> */}

        {/* using three hooks  */}
        {/* <UseRefExample2/> */}

        {/* Show value in alert */}
        {/* <UseRefExample3/> */}



        {/* UseContext Example */}

        {/* <Component1/> */}

        {/* <ComponentEx1/> */}

        {/* change theme using useContext */}
        <ThemeComponentEx1>
          <ThemeComponentEx2/>
        </ThemeComponentEx1>

    </div>
  )
}
