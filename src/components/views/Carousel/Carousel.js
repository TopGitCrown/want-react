import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

export default function Carousel() {

  return (
    <div>
      <Row>
        <Col span={24}>
          <Image src="./assets/images/app-slider-02.jpg" className="image" />
        </Col>
      </Row>
    </div>
  );
}

const Image = styled.img`
  width: 100%;
  height: 600px;
  opacity: 0.6;
`