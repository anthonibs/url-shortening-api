import styled from "styled-components";

export const Overlay = styled.div`
  align-items: center;
  backdrop-filter: blur(3px);
  background: #36c4c44c;
  display: flex;
  justify-content: center;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
	width: 100%;
	z-index: 2000;
`;