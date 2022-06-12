import React from "react";
import { Link } from "react-router-dom";
import handleLogin from "./../../../handleLogin.js";
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CImage,
    CInputGroup,
    CInputGroupText,
    CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import logo from "./../../../assets/brand/logoHorizontal.png";

import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.isLogged);

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={8}>
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                        <div>
                                            <p>
                                                <CImage
                                                    src={logo}
                                                    width={200}                                                    alt="Logo"
                                                    />
                                            </p>
                                        </div>
                                        <br/>
                                                    <CForm>
                                        <p className="text-medium-emphasis">
                                        </p>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText>
                                                <CIcon icon={cilUser} />
                                            </CInputGroupText>
                                            <CFormInput
                                                placeholder="学号"
                                                autoComplete="username"
                                            />
                                        </CInputGroup>
                                        <CInputGroup className="mb-4">
                                            <CInputGroupText>
                                                <CIcon icon={cilLockLocked} />
                                            </CInputGroupText>
                                            <CFormInput
                                                type="password"
                                                placeholder="密码"
                                                autoComplete="current-password"
                                            />
                                        </CInputGroup>
                                        <CRow>
                                            <CCol xs={6}>
                                                <CButton
                                                    color="primary"
                                                    className="px-4"
                                                    onClick={() => {
                                                        dispatch({
                                                            type: "set",
                                                            isLogged: true,
                                                        });
                                                        window.history.back(-1);
                                                    }}
                                                >
                                                    登陆
                                                </CButton>
                                            </CCol>
                                            <CCol xs={6} className="text-right">
                                                <CButton
                                                    color="link"
                                                    className="px-0"
                                                >
                                                    忘记密码？
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                            <CCard
                                className="text-white bg-primary py-5"
                                style={{ width: "44%" }}
                            >
                                <CCardBody className="text-center">
                                    <div>
                                        <h3>现在注册</h3>
                                        <p>
                                            <br />
                                            通过学号进行注册后即可访问课程、作业、资料信息。
                                        </p>
                                        <Link to="/register">
                                            <CButton
                                                color="primary"
                                                className="mt-3"
                                                active
                                                tabIndex={-1}
                                            >
                                                注册
                                            </CButton>
                                        </Link>
                                    </div>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Login;
