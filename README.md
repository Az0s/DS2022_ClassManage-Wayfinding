# ClassManage-Wayfinding
> Coursework of DataStructure of BUPT 2022. Created Apr 7 2022. Dev on React with Redux and Python with Flask.


## How to start
1. client side web server
```sh
cd frontend && npm install #install node modules
npm start #start local web server
```

## ./backend/ structure
.
├── DB  
│   ├── class.csv   **Class DB**  
│   ├── coursework  **Coursework storage**  
│   │   └── 202201  
│   └── student.csv **Student DB*$$*  
├── README.md  
├── backend       
│   ├── DB.py   **DB proto**  
│   ├── DB_Classes.py   **provide `classes` as db_class**  
│   ├── DB_Stu.py   - **provide `students`**  
│   ├── Server  **flask server**  
│   │   ├── app.py   
│   │   └── reverseProxy.py  
│   ├── coursework.py   **coursework upload and management**  
│   ├── log.txt     **sys log**   
│   ├── logger.py   **sys log module**  
│   ├── timing.py   **virtual time module**  
│   ├── user.py **CLI interface**  
│   ├── util.py - utils  
│   └── zip.py  **zip function for file upload**  
├── frontend    **npm env with react**  
│   ├── README.md  
│   ├── package-lock.json  
│   ├── package.json  
│   ├── public  
│   └── src  
├── log.txt  
├── settings.json  
├── test.ipynb   
└── time.json   **virtual time config**  


## TODO
1. 单个课程展示界面（资料？）

> 课程信息？【课程资料、当前进度、已交作业、待交作业、课程群、考试时间和考试地点等信息】）
作业（是否已交）

输入课程名称(时间）查询

系统可以检测个人活动、集体活动和课程的时间冲突，并给出提示。


### 提交内容

整个系统的架构、完成的所有功能、设计和使用的各种算法、算法性能的分析、系统测试结果、运行效果截图展示等内容；报告中最好能够突出自己所做功能如何更好地满足实际用户的需求，以及采用算法的理由和优缺点；每个小组交一份报告，但是在报告中要明确详细的阐述所有组员的分工和贡献；此报告作为评分的主要依据； 

可执行代码（可运行的系统，包括环境配置说明）

功能需求报告、总体方案设计报告、数据结构说明报告、各模块设计报告、测试报告、评价和改进意见报告、用户使用说明报告