import React, { useState, useEffect } from 'react'
import Carousel from '../views/Carousel/Carousel';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import Button from 'antd/es/button';

export default function Home() {

    const [count, setCount] = useState(0)
    const [date, setDate] = useState(null)

    // Define the function when Click event and Change event
    const reset = () => setCount(0)
    const handleChange = (date) => {
        message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
        setDate(date)
    }

    return (
        <div style={{ width: 400, margin: '100px auto' }}>
            <h1>{count}</h1>
            <Button type="default" onClick={() => setCount(count + 1)}>Click Me</Button>
            <Button type="default" onClick={reset}>Rest</Button>
            
            <DatePicker onChange={handleChange} />
            <div style={{ marginTop: 20 }}>
                Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
            </div>
      </div>
    );
}