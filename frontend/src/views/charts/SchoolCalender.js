
import {
    CCol,
    CCard,
    CCardBody,
    CCardTitle,
    CCardSubtitle,
    CButton,
    CCardFooter,
    CCardText,
    CContainer,
    CRow,
    CCardHeader,
    CCardLink,
    CTableHead,
    CTableHeaderCell,
    CTableBody,
    CTable,
    CTableRow,
    CTableDataCell,
} from "@coreui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SchoolCalender = () => {
    const isLogged = useSelector((state)=> state.isLogged)
    const dispatch = useDispatch()

    const weekdays = ["周一", "周二", "周三", "周四", "周五", "周六", "周天"];

    const classes = [
        {
            name: "电子竞技科学与技术",
            weekday: "1",
            time: "8:00-10:30",
            index: "1",
            teacher: "白浩楠",

            loc: "郑州市",
        },
        {
            name: "电子竞技科学与技术",
            weekday: "3",
            time: "8:00-10:30",
            index: "3",
            teacher: "白浩楠",

            loc: "郑州市",
        },
        {
            name: "优雅男子",
            weekday: "2",
            time: "8:00-10:30",
            index: "1",
            teacher: "吕卓生",
            loc: "S101",
        },
        {
            name: "优雅男子3",
            weekday: "4",
            time: "8:00-10:30",
            index: "6",
            teacher: "吕卓生",
            loc: "S101",
        },
        {
            name: "优雅男子3",
            weekday: "5",
            time: "8:00-10:30",
            index: "4",
            teacher: "吕卓生",
            loc: "S101",
        },
        {
            name: "优雅男子2",
            weekday: "6",
            time: "8:00-10:30",
            index: "2",
            teacher: "吕卓生",
            loc: "S101",
        },
    ];
    const [timetable, setTimetable] = useState([[], [], [], [], [], [], []]);

    const updateTimetable = () => {
        let rows = [[], [], [], [], [], []];
        let a = 1;
        let day = 1;
        for (a = 1; a <= 6; a++) {
            const crtRow = classes.filter((element) => {
                return element.index == a;
            });
            for (day = 1; day <= 7; day++) {
                rows[a - 1].push(
                    (crtRow.filter((element) => {
                        return element.weekday == day;
                    }))[0]
                );
            }
        }
        console.log(rows);
        return rows;
    };
    // setTimetable(updateTimetable());
    const RenderTimetable = () => {
        return (
            <CTableBody>
                {timetable.map((item, index) => {
                    return (
                        <CTableRow>
                            <CTableHeaderCell>{index}</CTableHeaderCell>
                            {item.map((subItem, subIndex) => {
                                return undefined == subItem ? (
                                    <CTableDataCell></CTableDataCell>
                                ) : (
                                    <CTableDataCell>
                                        <CCard width="20rem" >
                                            <CCardBody>
                                                <CCardTitle>
                                                    <font size="2">
                                                        {subItem.name}
                                                    </font>
                                                </CCardTitle>
                                                <CCardSubtitle className="mb-2 text-medium-emphasis">
                                                    <font size="2">
                                                        {subItem.time}
                                                    </font>
                                                </CCardSubtitle>
                                                <CCardText>
                                                    <font size="2">
                                                        {subItem.loc}
                                                    </font>
                                                    <br />
                                                    <font size="2">

                                                    {subItem.teacher}
                                                    </font>

                                                    <br />
                                                </CCardText>
                                            </CCardBody>
                                        </CCard>
                                    </CTableDataCell>
                                );
                            })}
                        </CTableRow>
                    );
                })}
            </CTableBody>
        );
    };
    return (
        <>
            {/* <CButton onClick={()=>{dispatch(
                {type:"set", isLogged:!isLogged}
            )}}>
                <font>Log in</font>
            </CButton> */}
            <CCard className="mb-4">
                <CCardHeader>
                    <CRow>
                        <CCol>
                            <h4>课程表</h4>
                        </CCol>
                        <CCol>
                            <div align="right">
                                <CButton
                                    onClick={() => {
                                        setTimetable(updateTimetable());
                                    }}
                                    color="light"
                                    size="sm"
                                >
                                    <font size='1' color="grey">刷新</font >
                                </CButton>
                            </div>
                        </CCol>
                    </CRow>
                </CCardHeader>

                <CTable  hover bordered small responsive color="light">
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell>#</CTableHeaderCell>

                            <CTableHeaderCell scope="col">
                                周一
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                周二
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                周三
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                周四
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                周五
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                周六
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                周天
                            </CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    {RenderTimetable()}
                </CTable>
            </CCard>
        </>
    );
};

export default SchoolCalender;
