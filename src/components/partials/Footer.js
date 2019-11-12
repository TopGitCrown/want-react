import React, { Component } from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

export default function FooterElement() {

  return (
    <div>
      <Layout>
        <Footer>
          This is Footer
        </Footer>
      </Layout>
    </div>
  );
}