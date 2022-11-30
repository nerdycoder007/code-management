import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useContext } from "react";
import UserContext from "../../context/AuthContext";
import Button from "./Button";
interface DecodedTypes {
  email: string;
  name: string;
  picture: string;
}
const LoginBtn = () => {
  const context = useContext(UserContext);
  console.log(context?.userData.name);
  function handleGoogleLogin(res: any) {
    const decoded: DecodedTypes = jwtDecode(res.credential);
    const { email, name, picture } = decoded;
    localStorage.setItem("userData", JSON.stringify({ email, name, picture }));
    context?.setUserData({ email, name, picture });
  }
  return (
    <>
      {!context?.userData.name ? (
        <GoogleLogin onSuccess={(res) => handleGoogleLogin(res)} />
      ) : (
        <div className="flex items-center gap-4">
          <Button
            onClick={() => {
              localStorage.setItem("userData", "");
              context.setUserData({
                name: "",
                email: "",
                picture: "",
              });
              window.location.reload();
            }}
          >
            <Squares2X2Icon className="icon" />
            <p>Logout</p>
          </Button>
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <img src={context.userData.picture} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default LoginBtn;
