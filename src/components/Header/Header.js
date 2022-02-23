import styled from "styled-components";
import Links from "../Links/Links";
import { useSelector } from "react-redux";

const HeaderContainer = styled.header`
  display: flex;
  height: 50px;
  align-items: center;
  background-color: #ccc;
  justify-content: center;
  gap: 12px;

  & ul {
    display: flex;
    width: 100%;
    margin: 100px 0 10px 0;
    justify-content: center;
    align-items: center;
    padding: 0;
    list-style: none;
    margin: 0 10px;

    & li a {
      text-decoration: none;
      color: #000;
      margin: 0 8px;
    }
    @media (max-width: 530px) {
      display: none;
    }
  }

  @media (max-width: 650px) {
    font-size: 14px;
  }
  @media (max-width: 590px) {
    font-size: 13px;
  }

  @media (max-width: 560px) {
    font-size: 12px;
  }
  @media (max-width: 530px) {
    justify-content: center;
  }
`;

const Header = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <HeaderContainer>
        <Links />
        {user.name && <span>{`Hola ${user.name}`}</span>}
      </HeaderContainer>
    </>
  );
};
export default Header;
