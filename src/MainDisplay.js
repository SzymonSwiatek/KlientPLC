import React, { useState, useEffect } from 'react';
import rocket from './Santa.svg';
import { Container, Row, Col } from 'reactstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import useWebSocket from 'react-use-websocket';

const MainDisplay = () => {
    const [input, setInput] = useState({
        "Connected": false,
        "Q0": false,
        "Q1": false,
        "Q2": false,
	"Q3": false,
        "Q4": false,
        "Q5": false,
	"I0": false,
        "I1": false,
        "I2": false,
	"I3": false,
        "I4": false,
        "I5": false,
	"I6": false,
        "I7": false,
        "M10": false,
	"M13": false,
    });
    const [timeLeft, setTimeLeft] = useState();
    const [M00, setM00] = useState(false)
    const [M01, setM01] = useState(false)
    const [M02, setM02] = useState(false)
    const [M03, setM03] = useState(false)
    const [M04, setM04] = useState(false)
    const [M05, setM05] = useState(false)
    const [M06, setM06] = useState(false)
    const [M07, setM07] = useState(false)
    


    const socketUrl = 'ws://192.168.1.16:5678/';
    const { sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl, {
        onOpen: () => console.log('opened'),
        shouldReconnect: (closeEvent) => true,
    });



    useEffect(() => {
        if (lastJsonMessage) {
            setInput(lastJsonMessage);
        }
    }, [lastJsonMessage]);

    useEffect(() => {
        sendJsonMessage({ 'M00': M00, 'M01': M01, 'M02': M02, 'M03': M03, 'M04': M04, 'M05': M05, 'M06': M06, 'M07': M07 })
    }, [M00]);

    useEffect(() => {
        sendJsonMessage( {'M00': M00, 'M01': M01, 'M02': M02, 'M03': M03, 'M04': M04, 'M05': M05, 'M06': M06, 'M07': M07 })
    }, [M01]);

    useEffect(() => {
        sendJsonMessage({ 'M00': M00, 'M01': M01, 'M02': M02, 'M03': M03, 'M04': M04, 'M05': M05, 'M06': M06, 'M07': M07 })
    }, [M02]);

    useEffect(() => {
        sendJsonMessage({ 'M00': M00, 'M01': M01, 'M02': M02, 'M03': M03, 'M04': M04, 'M05': M05, 'M06': M06, 'M07': M07 })
    }, [M03]);
    useEffect(() => {
        sendJsonMessage({ 'M00': M00, 'M01': M01, 'M02': M02, 'M03': M03, 'M04': M04, 'M05': M05, 'M06': M06, 'M07': M07 })
    }, [M04]);

    useEffect(() => {
        sendJsonMessage( {'M00': M00, 'M01': M01, 'M02': M02, 'M03': M03, 'M04': M04, 'M05': M05, 'M06': M06, 'M07': M07 })
    }, [M05]);

    useEffect(() => {
        sendJsonMessage({'M00': M00, 'M01': M01, 'M02': M02, 'M03': M03, 'M04': M04, 'M05': M05, 'M06': M06, 'M07': M07})
    }, [M06]);

    useEffect(() => {
        sendJsonMessage({ 'M00': M00, 'M01': M01, 'M02': M02, 'M03': M03, 'M04': M04, 'M05': M05, 'M06': M06, 'M07': M07})
    }, [M07]);




    const handleM00 = () => {
        setM00(!M00);
        
    }

    const handleM01 = () => {
        setM01(!M01);
	
    }

    const handleM02 = () => {
        setM02(!M02);
	
    }

    const handleM03 = () => {
        setM03(!M03);
	
    }

    const handleM04 = () => {
        setM04(!M04);
	
    }

    const handleM05 = () => {
        setM05(!M05);
	
    }

    const handleM06 = () => {
        setM06(!M06);

    }

    const handleM07 = () => {
        setM07(!M07);
    }


    const data = input;

    useEffect(() => {
	if (data.M13)
	    setTimeLeft(10);
	}, [data.M13]);
    	

    useEffect(() => {
	
        const timerL = setTimeout(() => {
            
	    if (data.M13) {
                if (timeLeft > 0)
                    setTimeLeft(timeLeft - 1);
                else setTimeLeft('START!!!');
            }
        }, 1000);
	
        return () => clearTimeout(timerL);
	
    }, [timeLeft]);

    

    return (
        <Container>
            <Row style={{ paddingBottom: '40px' }}>
                <Col className="text-center"><h1 style={{ color: 'orange' }}>Wizualizacja Webowa Sterownika PLC Siemens S7-1200</h1></Col>
            </Row>
	    
	    <Row style={{ paddingBottom: '40px' }}>
		<Col className="text-center"><h3 style={{ color: 'silver' }}>Znajdź kombinację przełączników markerów lub przycisków na wejściu sterownika aby wywołać animację.</h3></Col>
	    </Row>

            <Row style={{ paddingBottom: '10px' }}>
                <Col><h2 style={{ color: 'aqua' }}>Wyjścia:</h2></Col>
		<Col><h2 style={{ color: 'aqua' }}>Wejścia:</h2></Col>
		<Col><h2 style={{ color: 'aqua' }}>Markery:</h2></Col>
            </Row>
            
            <Row>
                <Col><h3>Q 0.0</h3></Col>
                <Col><h3 style={data.Q0 ? { color: 'green' } : { color: 'red' }}>{data.Q0 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>I 0.0</h3></Col>
                <Col><h3 style={data.I0 ? { color: 'green' } : { color: 'red' }}>{data.I0 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>M 0.0</h3></Col>
                <Col>
                    <BootstrapSwitchButton onChange={handleM00} checked={M00} />
                </Col>
            </Row>

	    <Row>
                <Col><h3>Q 0.1</h3></Col>
                <Col><h3 style={data.Q1 ? { color: 'green' } : { color: 'red' }}>{data.Q1 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>I 0.1</h3></Col>
                <Col><h3 style={data.I1 ? { color: 'green' } : { color: 'red' }}>{data.I1 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>M 0.1</h3></Col>
                <Col>
                    <BootstrapSwitchButton onChange={handleM01} checked={M01} />
                </Col>
            </Row>

            <Row>
                <Col><h3>Q 0.2</h3></Col>
                <Col><h3 style={data.Q2 ? { color: 'green' } : { color: 'red' }}>{data.Q2 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>I 0.2</h3></Col>
                <Col><h3 style={data.I2 ? { color: 'green' } : { color: 'red' }}>{data.I2 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>M 0.2</h3></Col>
                <Col>
                    <BootstrapSwitchButton onChange={handleM02} checked={M02} />
                </Col>
            </Row>
            
            <Row>
                <Col><h3>Q 0.3</h3></Col>
                <Col><h3 style={data.Q3 ? { color: 'green' } : { color: 'red' }}>{data.Q3 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>I 0.3</h3></Col>
                <Col><h3 style={data.I3 ? { color: 'green' } : { color: 'red' }}>{data.I3 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>M 0.3</h3></Col>
                <Col>
                    <BootstrapSwitchButton onChange={handleM03} checked={M03} />
                </Col>
            </Row>

            <Row>
                <Col><h3>Q 0.4</h3></Col>
                <Col><h3 style={data.Q4 ? { color: 'green' } : { color: 'red' }}>{data.Q4 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>I 0.4</h3></Col>
                <Col><h3 style={data.I4 ? { color: 'green' } : { color: 'red' }}>{data.I4 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>M 0.4</h3></Col>
                <Col>
                    <BootstrapSwitchButton onChange={handleM04} checked={M04} />
                </Col>
            </Row>

            <Row>
                <Col><h3>Q 0.5</h3></Col>
                <Col><h3 style={data.Q5 ? { color: 'green' } : { color: 'red' }}>{data.Q5 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>I 0.5</h3></Col>
                <Col><h3 style={data.I5 ? { color: 'green' } : { color: 'red' }}>{data.I5 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>M 0.5</h3></Col>
                <Col>
                    <BootstrapSwitchButton onChange={handleM05} checked={M05} />
                </Col>
            </Row>

            <Row>
                <Col> </Col>
                <Col> </Col>

		<Col><h3>I 0.6</h3></Col>
                <Col><h3 style={data.I6 ? { color: 'green' } : { color: 'red' }}>{data.I6 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>M 0.6</h3></Col>
                <Col>
                    <BootstrapSwitchButton onChange={handleM06} checked={M06} />
                </Col>
            </Row>

            <Row>
                <Col> </Col>
                <Col> </Col>

		<Col><h3>I 0.7</h3></Col>
                <Col><h3 style={data.I7 ? { color: 'green' } : { color: 'red' }}>{data.I7 ? "ON" : "OFF"}</h3></Col>

		<Col><h3>M 0.7</h3></Col>
                <Col>
                    <BootstrapSwitchButton onChange={handleM07} checked={M07} />
                </Col>
            </Row>













            <Row style={{ paddingBottom: '10px', paddingTop: '40px' }}>
                <Col><h2 style={{ color: 'deepskyblue' }}>Diagnostyka:</h2></Col>
            </Row>
	    <Row>
                <Col><h3>Komunikacja:</h3></Col>
                <Col sm={{ size: 9 }}><h3 style={data.Connected ? { color: 'green' } : { color: 'red' }}>{data.Connected ? "ON" : "OFF"}</h3></Col>
            </Row>


            <Row>
                <Col><h3>Stoper:</h3></Col>
                <Col sm={{ size: 9 }}><h3>{timeLeft}</h3></Col>
            </Row>
  
            
	    

            <div style={data.M10 ? { display: 'block' } : { display: 'none' }}>
                <img src={rocket} className="App-logo" alt="rocket" />
            </div>

        </Container>
    );
};

export default MainDisplay;