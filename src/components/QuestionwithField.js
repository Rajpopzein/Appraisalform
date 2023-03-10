import React from 'react'
import { Card,Row,Col } from 'antd'
function QuestionwithField(props) {
  return (
    <Card style={{margin:'20px'}}>
        <Row style={{margin:'20px'}}>
          <Col span={24}>
            <h6>KRA {props.kra}</h6>
          </Col>
        </Row>
        <Row style={{margin:'20px'}}>
          <Col>
              <p style={{textAlign:"center"}}>{props.measures}</p>
          </Col>
        </Row>
        <Row style={{margin:'20px'}}>
        <Col span={8}>self-rating
        </Col>
        <Col span={8} offset={8}>Justify content
        </Col>
        </Row>
    </Card>
  )
}

export default QuestionwithField