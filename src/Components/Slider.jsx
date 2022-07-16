import styled from "styled-components";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowLeftOutlined";
import { sliderItems } from "../Pages/data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  /* transition: all 0.5s ease; */
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
  margin-left: 131px;
  margin-top: 31px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 58px;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 245px;
  border-radius: 0%;
  /* background-color: #8c8686; */
`;

const Slider = () => {
  const [slideIndex, SetslideIndex] = useState(0);
  const HandleClick = (direction) => {
    if (direction === "left")
      SetslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    else {
      SetslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => HandleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {" "}
        {sliderItems.map((items) => (
          <Slide bg={items.bg}>
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>
            <InfoContainer>
              <Title> {items.title} </Title>
              <Desc> {items.desc} </Desc>
              <Link to = {`/products/${items.cat}`}> <Button>EXPLORE NOW</Button></Link>
             
            </InfoContainer>
          </Slide>
        ))}{" "}
      </Wrapper>
      <Arrow direction="right" onClick={() => HandleClick("left")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
