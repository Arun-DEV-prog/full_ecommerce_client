import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const authInf = use(AuthContext);
  return authInf;
};

export default useAuth;
