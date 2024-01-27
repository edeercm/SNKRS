import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 4rem 0;
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 5rem 0 10rem;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 55vh;
  object-fit: cover;
  object-position: center;
`