import React, { useState, useEffect, Fragment, useReducer } from "react";
import Axios from "axios";
import { Input, Button, Row, Col, List, Spin, Alert, Form } from 'antd';

/**
 * FETCH REDUCER
 * @param {Object} state 
 * @param {Object} action 
 */
const dataFetchReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "FETCH_INIT":
      return { 
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return { 
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return { 
        ...state,
        isLoading: false,
        isError: true 
      };
    default:
      throw new Error();
  }
};

/**
 * GET DATA WITH ALGOLIA
 * @param {String} initialUrl 
 * @param {Object} initialData 
 */
const useSearchEngineApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const result = await Axios(url);
        if (!didCancel)
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        if (!didCancel)
          dispatch({ type: "FETCH_FAILURE"});
      }
    }

    fetchData();
    return () => {
      didCancel = true;
    }
  }, [url]);

  return [state, setUrl];
}

export default function Search() {
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useSearchEngineApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );

  const onClose = e => {
    console.log(e, 'I was closed.');
  };

  return (
    <Fragment>
      <h1></h1>
      <Form 
        onSubmit={event => {
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
          
          event.preventDefault();
        }}
      >
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
              type="submit" 
              icon="search" 
              span={6}
              onClick={() => 
                doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
              }
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>


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