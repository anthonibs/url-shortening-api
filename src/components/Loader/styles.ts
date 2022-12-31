import styled from "styled-components";

export const Overlay = styled.div`
	width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #36c4c44c;
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
	z-index: 2000;
`;