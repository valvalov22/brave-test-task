import { device } from "@/styles/breakpoints";
import { getDate } from "@/utils/helpers/getDate";
import React from "react";
import { keyframes, styled } from "styled-components";

interface IModalProps {
  heading: string;
  onClose: () => void;
  button: React.ReactNode;
  isOpen: boolean;
  rejected: boolean;
  phone?: string;
  cash?: number;
  provider?: string | null;
  isLoading: boolean;
}

const Wrapper = styled.div`
  background-color: #fff;
  padding: 32px;
  width: 456px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  border-radius: 12px;
  position: relative;
  text-align: center;

  @media ${device.md} {
    width: 90%;
  }

  @media ${device.xs} {
    font-size: 14px;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 13;
`;

const Emoji = styled.div`
  font-size: 48px;
  text-align: center;
  margin-top: 1em;
`;

const LoaderContainer = styled.div``;

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #3d5af1 transparent #3d5af1 transparent;
  border-radius: 50%;
  animation: ${rotateAnimation} 1.5s linear infinite;
`;

const Modal: React.FC<IModalProps> = ({
  heading,
  button,
  isOpen,
  rejected,
  isLoading,
  phone,
  cash,
  provider,
}) => {
  return (
    <>
      {isOpen ? (
        <ModalContainer>
          <Wrapper>
            {isLoading ? (
              <LoaderContainer>
                <Spinner />
              </LoaderContainer>
            ) : (
              <div>
                <h2>{heading}</h2>
                {rejected ? (
                  <div>
                    <div>Повторите попытку</div>
                    <Emoji>🫥</Emoji>
                  </div>
                ) : (
                  <div>
                    <div>Номер телефона: {phone}</div>
                    <div>Сумма пополнения: {cash}₽</div>
                    <div>Провайдер: {provider}</div>
                    <div>Время: {getDate()}</div>
                    <Emoji>🙂</Emoji>
                  </div>
                )}
                <div>{button}</div>
              </div>
            )}
          </Wrapper>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
