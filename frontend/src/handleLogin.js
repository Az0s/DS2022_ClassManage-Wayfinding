/*
 * @Date: 2022-06-12 13:10:51
 * @LastEditors: Azus
 * @LastEditTime: 2022-06-12 13:18:35
 * @FilePath: /coreui-free-react-admin-template/src/handleLogin.js
 */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const handleLogin = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.isLogged);
    dispatch({type:'set', isLogged:true})
    window.history.back(-1);
};

export default handleLogin;
