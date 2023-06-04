import { Toaster } from "react-hot-toast";
import FormLogin from "../../components/FormLogin";

function Login() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg">
      <Toaster />
      <FormLogin />
    </div>
  );
}
export default Login;
