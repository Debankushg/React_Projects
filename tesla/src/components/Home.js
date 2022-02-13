import React from 'react'
import styled from  'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
    <Section 
        title ="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="../images/model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
    />
    <Section 
        title ="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="../images/model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
    />
    <Section 
        title ="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="../images/model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
    />
    <Section 
        title ="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="../images/model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
    />
    <Section 
        title ="Solar Panels"
        description="Lowest Cost Solar Pannels in America"
        backgroundImg="../images/solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
    />
    <Section 
        title ="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="../images/solar-roof.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
    />
    <Section 
        title ="Accessories"
        description=""
        backgroundImg="../images/accessories.jpg"
        leftBtnText="Shop Now"
        
    />

    </Container>
  )
}

export default Home;

const Container = styled.div`
    height:100vh
`