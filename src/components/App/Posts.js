import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import { Input, Button, Row, Col, List, Spin, Alert } from 'antd';

export default function Posts() {

  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await Axios(url);
        setData(result.data);        
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    }

    fetchData();
  }, [url]);

  const onClose = e => {
    console.log(e, 'I was closed.');
  };

  return (
    <Fragment>
      <h1></h1>
      <Row>
        <Col span={8} offset={6}>
          <Input  
            type="text" 
            name="query" 
            value={query}
            onChange={event => setQuery(event.target.value)}
            span={6}
          />
        </Col>
        <Col span={6} offset={1}>
          <Button 
            type="primary" 
            icon="search" 
            span={6}
            onClick={() => 
              setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
            }
          >
            Search
          </Button>
        </Col>
      </Row>

      {isError && 
        <Alert
          message="Error Fetching"
          description="Something went wrong..."
          type="error"
          closable
          onClose={onClose}
        />
      }

      {isLoading? (
        <Row>
          <Col span={12} offset={10}>
            <Spin tip="Loading..." size="large"></Spin>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={12} offset={6}>
            <List
              itemLayout="horizontal"
              dataSource={data.hits}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href={item.url}>{item.title}</a>}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      )}
      
    </Fragment>
  );
}