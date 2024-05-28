/* eslint-disable no-unused-vars */
import StyleComponent1 from "./StyleComponent1";
import StyleComponent2 from "./StyleComponent2";
import StyleComponent3 from "./StyleComponent3";

export default function AllStyleComponents() {
  return (
    <div>
        {/* Inline CSS style Component  */}
            {/* <StyleComponent1/> */}

        {/* Internal CSS style Component */}
            {/* <StyleComponent2/> */}

        {/* External CSS style Component */}
          <StyleComponent3/>
    </div>
  )
}
