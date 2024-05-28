import LoginPage from '../ExtraComponents/LoginPage'
import Profile from '../ExtraComponents/Profile'

export default function JsxTernaryOperator() {
    const isLogin = true;
    // const isLogin = false;
  return (
    <div>
        {/* Ternary Operator or Conditional Operator.
        Ternary Operator is divided into 3 parts that is why it is called ternary operator.
        Ternary Operator represent with ? :
        exp1 ? exp2 : exp3
        If exp1 is true it will execute exp2 otherwise it will execute exp3 */}

        {isLogin ? <Profile/> : <LoginPage/>}

    </div>
  )
}
