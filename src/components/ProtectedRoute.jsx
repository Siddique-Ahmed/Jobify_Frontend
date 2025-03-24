import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = {
    name: "siddique",
    role: "student",
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (auth === null || auth.role !== "student") {
      navigate("/login");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
