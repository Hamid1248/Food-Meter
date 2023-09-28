import React, { Component } from "react";
import styled, { css } from "styled-components";

 export const Head=()=> {
  return (
    <Container>
      <Rect>
        <FoodMeterRow>
          <FoodMeter>FoodMeter</FoodMeter>
          <Home>Home</Home>
          <Favorites>Favorites</Favorites>
          <Bookings>Bookings</Bookings>
          <AboutUs>About Us</AboutUs>
          <Rect3Stack>
            <Rect3></Rect3>
            <Search placeholder="Search"></Search>
          </Rect3Stack>
        </FoodMeterRow>
      </Rect>
      <Rect2></Rect2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-width: 2px;
  border-color: #000000;
  background-color: rgba(66,105,226,1);
  flex-direction: column;
  border-style: solid;
  height: 100vh;
  width: 100vw;
`;

const Rect = styled.div`
  width: 1366px;
  height: 80px;
  background-color: rgba(37,39,43,1);
  flex-direction: row;
  display: flex;
`;

const FoodMeter = styled.span`
  font-family: Times New Roman;
  font-style: normal;
  font-weight: 700;
  color: rgba(66,105,226,1);
  font-size: 40px;
`;

const Home = styled.span`
  font-family: Times New Roman;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 104px;
  margin-top: 16px;
`;

const Favorites = styled.span`
  font-family: Times New Roman;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 86px;
  margin-top: 16px;
`;

const Bookings = styled.span`
  font-family: Times New Roman;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 88px;
  margin-top: 16px;
`;

const AboutUs = styled.span`
  font-family: Times New Roman;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-left: 85px;
  margin-top: 16px;
`;

const Rect3 = styled.div`
  top: 0px;
  left: 0px;
  width: 222px;
  height: 31px;
  position: absolute;
  background-color: #E6E6E6;
  border-width: 2px;
  border-color: rgba(66,105,226,1);
  border-style: solid;
`;

const Search = styled.input`
  font-family: Roboto;
  top: 0px;
  left: 13px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 31px;
  width: 222px;
  border: none;
  background: transparent;
`;

const Rect3Stack = styled.div`
  width: 235px;
  height: 31px;
  margin-left: 114px;
  margin-top: 12px;
  position: relative;
`;

const FoodMeterRow = styled.div`
  height: 47px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 142px;
  margin-left: 34px;
  margin-top: 17px;
`;

const Rect2 = styled.div`
  width: 1366px;
  height: 172px;
  background-color: rgba(37,39,43,1);
  margin-top: 516px;
`;

