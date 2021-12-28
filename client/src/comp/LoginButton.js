import React from "react";
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
  <button type="button" className="btn btn-outline-light me-2">
    <Link to="/login">
      Iniciar sesión
    </Link>
  </button>
)};

export default LoginButton;
