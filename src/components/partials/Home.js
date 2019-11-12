import React, { useState, useEffect } from 'react'
import Carousel from '../views/Carousel/Carousel';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Button from 'antd/es/button';
import Posts from '../App/Search';

const { Content } = Layout;

export default function Home() {

  const [count, setCount] = useState(0)
  const [date, setDate] = useState(null)

  return (
    <div>
      <Layout>
        <Content>
          <Carousel/>
          <Posts/>
        </Content>
      </Layout>
    </div>
  );
}