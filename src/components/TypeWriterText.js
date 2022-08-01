import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-items: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: blue;
  }

  .text-2 {
    color: orange;
  }

  .text-3 {
    color: red;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  width: 80%;
  align-items: flex-start;
`

const ButtonContainer = styled.div`
  width: 80%;
  align-items: flex-start;
`

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover a new era of cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">NFTs.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2">Collectible Items.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-3">Ape Killers!</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Bored of Apes? Try Something New.</SubTitle>
      <ButtonContainer>
        <Button text="Explore" link="">
          Explore
        </Button>
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
