import { HeaderWrapper, HeaderTitle, StepIndicator } from "./styled";

export const StepHeader = ({ title, step }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <StepIndicator>{step}/3</StepIndicator>
    </HeaderWrapper>
  );
};
