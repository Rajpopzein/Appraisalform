import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { Row, Col} from "react-bootstrap";
import dayjs from 'dayjs';
import Navbar from "./navbar";
import {customParseFormat} from 'dayjs/plugin/customParseFormat';

import { useForm } from "rc-field-form";
import Tables from "./Table";
import axios from "axios";
import QuestionwithField from "./QuestionwithField";


const Registrationform = () => {

  

 const[qustion, setQuestion] = useState([])


  const[form] = Form.useForm();
  const desiginationData = [
    {
      value: "Associate Trainee",
      label: "Associate Trainee",
    },
    {
      value: "Software Developer",
      label: "Software Developer",
    },
    {
      value: "Software Tester",
      label: "Software Tester",
    },
  ]



  useEffect(()=>{
    axios.get('https://demo.emeetify.com:81/appraisel/users/getDetails')
    .then((responce)=>{setQuestion(responce.data.data)}).catch((error)=>{console.log("errors--",error)})
  },[])



  console.log(qustion)

  // dayjs.extend(customParseFormat);
  const dateFormatList = ['DD/MM/YYYY'];
 
  const datachange = (e) => {
    console.log("datachange---------", e);
  };

  const handlesubmit = (e) => {
    console.log("handlesubmit", e);
  };

  const handleDesigination =() =>{
    console.log()
  }

  const handleDevelopment =() =>{
    console.log()
  }

  return (
    <div>
      <Card body style={{ margin:"20px 60px"}}>
        <Form form={form} onFinish={handlesubmit}>
          <h4 style={{margin:"20px 0px"}}>Performence Appraisal Form</h4>
          <Row style={{margin:"20px"}}>
            <Col span={8}>
              <Form.Item
                name="employeeName"
                label="Employer Name"
                rules={[
                  // {
                  //   type: "EmployeeName",
                  //   message: "The input is not valid EmployeeName!",
                  // },
                  {
                    required: "true",
                    message: "Please input EmployerName!",
                  },
                ]}
              >
                <Input onChange={datachange} placeholder="Employee Name" />
              </Form.Item>
            </Col>
            <Col span={8} offset={8}>
              <Form.Item
                name="desigination"
                label="Desigination"
                rules={[
                  {
                    required: "true",
                    message: "Please input Desigination!",
                  },
                ]}
              >
                <Select
                  
                  defaultValue={{ value: "", label: "Select Desigination" }}
                  style={{ width: '100%' }}
                  onChange={handleDesigination}
                  options={desiginationData}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{margin:"20px"}}>
            <Col span={8}>
            <Form.Item
                name="joiningdate"
                label="Joining Date"
                rules={[
                  // {
                  //   type: "EmployeeName",
                  //   message: "The input is not valid EmployeeName!",
                  // },
                  {
                    required: "true",
                    message: "Please input Joining date",
                  },
                ]}
              >
               <DatePicker style={{width:"95%",marginLeft:"15px"}} defaultValue={dayjs('01/01/2023',dateFormatList[0])} format='DD/MM/YYYY'/>
              </Form.Item>
            </Col>
            <Col span={8} offset={8}>
              <Form.Item
                name="Department"
                label="Department"
                rules={[
                  // {
                  //   type: "EmployeeName",
                  //   message: "The input is not valid EmployeeName!",
                  // },
                  {
                    required: "true",
                    message: "Please input Department!",
                  },
                ]}
              >
                <Select
                  labelInValue
                  defaultValue={{ value: "", label: "Select Department" }}
                  style={{ width: '100%' }}
                  onChange={handleDevelopment}
                  options={[
                    {
                      value: "Development",
                      label: "Development",
                    },
                    {
                      value: "Testing",
                      label: "Testing",
                    },
                    {
                      value: "Sales and Marketing",
                      label: "Sales and Marketing",
                    },
                    {
                      value: "Business Operations",
                      label: "Business Operations",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Tables/>
          <h3 style={{textDecoration:"underline",borderRight:"20px"}}>KRA-Technical Aspect</h3>
          <Card style={{ margin:"20px 60px"}}>
                  {qustion.map((qdata)=>(<QuestionwithField kra={qdata.kra} measures={qdata.measures}/>))}
          </Card>
          <Form.Item>
            <Button htmlType="submit" >Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Registrationform;
