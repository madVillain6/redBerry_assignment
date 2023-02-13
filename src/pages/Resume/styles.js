import styled from "styled-components";

const PictureContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

const PictureContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;
`;

export const Picture = ({ img, ...props }) => {
  return (
    <PictureContainer {...props}>
      <PictureContent img={img} />
    </PictureContainer>
  );
};

export const NameBar = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #f93b1d;
`;

export const NameBarSmall = styled.h2`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #f93b1d;
`;

export const Contact = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #1a1a1a;
  display: flex;
`;

export const StyledP = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  max-width: 432px;
`;

export const StyledSpn = styled.span`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1a1a1a;
`;

export const DateSpn = styled.span`
  font-family: "Helvetica Neue";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #919191;
  margin-top: 8px;
`;

export const Paragraph = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: capitalize;
  color: #000000;
  margin-top: 16px;
`;

export const StarImg = styled.img`
  margin-top: auto;
  width: 42px;
  height: 42px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
