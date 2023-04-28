import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 15px;
  table-layout: fixed;
  width: 80%;
  border-collapse: collapse;
  border: 3px solid purple;
  margin-bottom: 50px;
`;

export const Tr = styled.tr`
  border: 1px solid #ccc;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
`;

export const Th = styled.th`
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  margin-left: 10px;
  border-radius: 10px;
  width: 110px;
  height: 30px;
  :hover {
    background-color: #2ddf8c;
    border: none;
  }
`;

export const Input = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  height: 30px;
  font-size: 16px;
  outline: none;
`;

export const Field = styled.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #3a2504;
  background-color: inherit;
  border: none;
`;

export const Edit = styled.button`
  width: 50%;
  border-radius: 10px;
  :hover {
    background-color: #2ddf8c;
    border: none;
  }
`;

export const Sort = styled.button`
  margin-left: 60px;
  width: 20px;
  border-radius: 5px;
  border-color: #2ddf8c;
  :hover {
    background-color: #2ddf8c;
  }
`;
