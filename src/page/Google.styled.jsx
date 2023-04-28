import styled from 'styled-components';

export const Section = styled.section`
  height: 100%;
  padding: 10px 20px 10px;
  background-color: #b5f0e2;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  text-align: center;
  border-radius: 10px;
  background-color: #f5fbfb;
  padding: 20px;
  transition: transform 1s;
  margin: 10px auto;
  @media (min-width: 768px) {
    margin: 10px;
  }

  @media (min-width: 1200px) {
    margin: 0;
    :hover {
      transform: scale(1.05);
      box-shadow: 0px 2px 15px -2px;
      border: 2px solid #5de17a;
      z-index: 1;
      Button {
        background-color: #87f287;
        border: none;
      }
    }
  }
`;

export const Plan = styled.h5`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Dollar = styled.span`
  font-size: 20px;
`;

export const Price = styled.span`
  font-size: 70px;
  margin: 0 5px;
`;

export const Period = styled.span`
  display: inline-block;
  font-size: 20px;
  color: #8b8888;
`;

export const List = styled.ul`
  margin: 20px 0;
  text-align: left;
  margin-left: 20px;
`;

export const Item = styled.li`
  font-size: 16px;
  color: #b4b1b1;
  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 7px;
`;

export const Link = styled.a`
  padding: 5px 40px;
`;

export const Rotate = styled.div`
  position: absolute;
  right: -7px;
  top: -6px;
  overflow: hidden;
  width: 180px;
  height: 200px;
`;
export const Text = styled.span`
  position: absolute;
  top: 26px;
  left: 58px;
  font-size: 12px;
  font-weight: bold;
  padding-top: 1px;
  background: #da3b3b;
  box-shadow: 0px 2px 15px -2px;
  color: #e8dbc2;
  transform: rotate(45deg);
  height: 20px;
  width: 100%;
  ::after {
    right: 34px;
    border-color: #da3b3b #da3b3b transparent transparent;
  }
  ::before {
    left: 28px;
    border-color: #da3b3b transparent transparent #da3b3b;
  }
  ::after,
  ::before {
    content: '';
    position: absolute;
    top: 100%;
    border-width: 5px;
    border-style: solid;
    border-radius: 1px;
    box-sizing: border-box;
    padding: 0;
    z-index: -1;
  }
`;
