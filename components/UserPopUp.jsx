import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { LogoutEmail } from "../config/redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const UserPopUp = () => {
  const dispatch = useDispatch();
  const { dataLogin } = useSelector((store) => store.authReducer);

  return (
    <div className="bg-white position-absolute rounded pop-up p-3">
      <div className="d-flex">
        <Image
          src={dataLogin?.user?.photoURL}
          alt="img"
          width={70}
          height={70}
          className="rounded me-2"
        />
        <div className="d-flex flex-column">
          <p className="fw-bold mb-0">Halo,</p>
          <p className="fs-6">{dataLogin?.user?.displayName}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link href="/">
          <Button
            onClick={() => dispatch(LogoutEmail())}
            className="btn-logout"
          >
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserPopUp;
