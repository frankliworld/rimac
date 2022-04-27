import { message } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TextSmall } from "../styles/TextStyles";

const Amount = (props) => {
  const { min, max, changeValue } = props;
  const [amount, setAmount] = useState(14300);
  useEffect(() => {
    if (amount < min) {
      setAmount(min);
    }
    if (amount > max) {
      setAmount(max);
    }
    amount === min && message.info("El mínimo es $" + min);
    amount === max && message.info("El máximo es $" + max);
    changeValue && changeValue(amount);
  }, [amount]);
  return (
    <Wrapper>
      <Section>
        <Text>Indica la suma asegurada</Text>
        <Small>
          MIN ${min}
          <Span> | </Span>
          MAX ${max}
        </Small>
      </Section>
      <Cover>
        <Button
          disabled={amount <= min}
          onClick={() => setAmount(amount - 100)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M13.0001 8L3.00012 8"
              stroke="#6F7DFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Value>${amount}</Value>
        <Button
          disabled={amount >= max}
          onClick={() => setAmount(amount + 100)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="#6F7DFF"
          >
            <path
              d="M8.00012 3V13"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.0001 8L3.00012 8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </Cover>
    </Wrapper>
  );
};
export default Amount;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  margin-bottom: 32px;
`;

const Section = styled.section``;
const Cover = styled.div`
  padding: 0 6px;
  height: 56px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #c5cbe0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 6px;
  align-items: center;
`;
const Text = styled(TextSmall)`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  margin-bottom: 10px;
`;
const Small = styled(Text)`
  color: var(--Text2);
  font-size: 12px;
`;
const Span = styled.span`
  color: #e4e8f7;
  padding: 0 10px;
`;
const Value = styled(Text)`
  margin-bottom: 0;
`;
const Button = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: var(--Seconday);
  display: grid;
  place-content: center;
  border: none;
  background: none;
  &:disabled {
    cursor: not-allowed;
    filter: grayscale(100%);
  }
`;
