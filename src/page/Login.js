import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Input, Button, ButtonGroup } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  // 비밀번호 보기
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // 로그인, 페이지 이동
  const navigate = useNavigate();

  const LoginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate('/shopping-project/')
  }
  
  return (
    <div className="container mx-auto grid place-items-center">
      <form className="login grid place-items-center gap-3 p-16 max-mobile-login:p-16"
      onSubmit={(event)=>LoginUser(event)}>
        <h1>Login</h1>
        <Input
          isClearable
          type="Id"
          label="ID"
          variant="bordered"
          placeholder="Enter your id"
          color="secondary"
          onClear={() => console.log("input cleared")}
          className="max-w-xs max-mobile-login:w-50"
        />

        <Input
          label="PASSWORD"
          variant="bordered"
          placeholder="Enter your password"
          color="secondary"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs max-mobile-login:w-50"
        />
        <Button
          radius="full"
          className="w-80 bg-gradient-to-tr from-indigo-400 to-indigo-800 text-white shadow-lg max-mobile-login:w-40"
          type="submit"
        >
          Login
        </Button>
        <Button
          radius="full"
          className="w-80 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg max-mobile-login:w-40"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Login;
