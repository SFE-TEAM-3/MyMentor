import React from 'react'
import SideBar from '../sideBar/SideBar'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OppInfo from '../oppInfo/OppInfo';
import './content.css'

const Content = () => {
  return (
    <div className='p-2'>
        <Container>
            <Row className='mt-3'>
                <Col lg="3" className='d-none d-lg-block'>
                    <SideBar />
                </Col>
                <Col lg="9">
                    <div className='opp-info radius shadow-sm'>
                    <OppInfo/>
                    </div>
                    
                </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default Content