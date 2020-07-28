import React,{useEffect,useContext} from "react";
import UserForm from "../Userinfo/UserForm";
import CategorieFilter from "../Userinfo/CategorieFilter";
import UsersInfo from "../Userinfo/UserInfo";
import AuthContext from "../../context/auth/authContext";
const Users = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <CategorieFilter/>
      <UsersInfo/>
      <UserForm />
      
    </div>
  );
};

export default Users;
