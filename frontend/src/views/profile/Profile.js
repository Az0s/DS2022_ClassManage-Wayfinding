/*
 * @Date: 2022-06-14 01:26:25
 * @LastEditors: Azus
 * @LastEditTime: 2022-06-14 17:36:00
 * @FilePath: /DS/frontend/src/views/profile/Profile.js
 */
import React, { useState, useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CSpinner, CCard } from "@coreui/react";

const Profile = () => {
    let REMOTE_URL = "http://127.0.0.1:5000/";
    const [info, setInfo ] =  useState();
    const [isOK, setOK] = useState(false);
  
    
    const dispatch = useDispatch();
    const username = useSelector((data) => data.username);
    let data = {
        username: username,
    };
    
  useEffect(() => {
      axios
          .post(REMOTE_URL + "api/student/", data, {
              headers: { "Access-Control-Allow-Origin": "*" },
          })
          .then((data) => {
              console.log("return data");
              console.log(data.data.json);
              // returned as html
              setInfo(data.data);
              setOK(true);
          });
  }, []);

    console.log("profile set");
    console.log(info);
    if(false==isOK){
      return (<>
            <CSpinner color="primary" />
        </>)
    }

    // return( <div>username: {info.json}</div>)
    return (
        <CCard>
           {info.data} 
        </CCard>
    );
};

export default Profile;
