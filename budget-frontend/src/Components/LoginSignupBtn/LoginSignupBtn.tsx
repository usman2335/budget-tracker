import { Button } from "antd"
import "./LoginSignupBtn.css"

interface ChildProps {
  children: React.ReactNode;
}
const LoginSignupBtn = ({children} : ChildProps) => {
  return (
        <Button type = "default" className="button">{children}</Button>
  )
}

export default LoginSignupBtn