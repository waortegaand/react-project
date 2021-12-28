import React from "react";
import { Link } from 'react-router-dom';

const SignUpButton = () => {
  return (
      <button type="button" className="btn btn-warning">
        <Link to="/registro">
          Registro
        </Link>
      </button>
)};

export default SignUpButton;
