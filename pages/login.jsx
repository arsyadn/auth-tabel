import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import { LoginGoogle } from "../config/redux/actions/authAction";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const DataUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLoginGoogle = async () => {
    const data = await dispatch(LoginGoogle());
    if (data) router.push("/");
    console.log(data);
  };

  return (
    <div className="login-wrapper d-flex flex-column align-items-center justify-content-center w-100 h-100 d-inline-block">
      <Form className="form-wrapper d-flex flex-column align-items-center pt-4 rounded w-25 justify-content-center">
        <Form.Text className="fs-4 text-light mb-3">
          Welcome Employee!
        </Form.Text>
        <Button
          onClick={handleLoginGoogle}
          className="btn-login mb-5 px-4 py-2 h-"
        >
          Login with Google
        </Button>
      </Form>
    </div>
  );
};
export default DataUser;
