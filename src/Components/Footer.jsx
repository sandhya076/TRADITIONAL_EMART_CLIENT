import styled from "styled-components";
import Pinterest from "@mui/icons-material/Pinterest";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";

const Container = styled.div`
  display: flex;
  background-color: white;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;
const Logo = styled.h1`
  margin-top: 19px;
`;
const Desc = styled.div`
  margin: 20px 0px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  margin-left: 5%;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Payment = styled.img`
  width: 50%;
  margin-left: 4%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>TRADITIONAL EMART</Logo>
        <Desc>
          Still looking for the perfect Traditional outfit. Then Do shopping in
          Traditional EMART, all you need to do is relax and get excited about
          the event. Traditional EMART has become World's best online portal for
          Indian Traditional dresses.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women Collection</ListItem>
          <ListItem>Men Collection</ListItem>
          <ListItem>Wedding Collection</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} />
          India, Telangana, 65-222/8
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 1234567869
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          support@emart.com
        </ContactItem>
        <Payment src="https://media.horusrc.com/wysiwyg/pay_by_cards.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
