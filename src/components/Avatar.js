import styled from "styled-components";

const SAvater = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: #2c2c2c;
  overflow: hidden;
`;

const Img = styled.img`
  max-width: 100%;
`;

function Avatar({ url = "" }) {
  return <SAvater>{url !== "" ? <Img src={url} /> : null}</SAvater>;
}

export default Avatar;
