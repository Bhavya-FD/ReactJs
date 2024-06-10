import LoginPage from "../ExtraComponents/LoginPage";
import Profile from "../ExtraComponents/Profile";

export default function JsxIfElseCondition() {
// This can be done in two ways 

    // const isLoggedIn = false;
    // if (isLoggedIn) {
    //     return <Profile/>
    // } else {
    //     return <LoginPage/>
    // }

    const isLoggedIn = false;
    let element ;
    if (isLoggedIn) {
        element =  <Profile/>
    } else {
        element =  <LoginPage/>
    }
    return element;
}
