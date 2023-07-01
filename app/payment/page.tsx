"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { keyframes, styled } from "styled-components";
import Modal from "@/components/Modal/Modal";
import { usePhoneMask } from "@/utils/hooks/usePhoneMask";
import { getFakeResponse } from "@/utils/helpers/getFakeResponseAPI";
import { device } from "@/styles/breakpoints";
import { Tips } from "@/utils/constants";

const BackSpan = styled.span`
  color: gray;
  font-size: 12px;
  margin-left: 8px;
`;

const show = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  width: 80%;
  margin: 0 auto;
  height: 100%;

  animation: ${show} 0.7s ease;
`;

const ProviderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;

  @media ${device.xm} {
    font-size: 14px;
  }

  @media ${device.xs} {
    font-size: 12px;
  }
`;

const CardImg = styled.img`
  width: 200px;
  height: 70px;
  object-fit: scale-down;

  @media ${device.xs} {
    width: 180px;
  }
`;

const Label = styled.label`
  display: block;
  margin: 0 auto;
  width: 70%;
  margin-top: 1em;
  position: relative;
`;

const Input = styled.input`
  display: block;
  margin: 8px auto 0 auto;
  width: 70%;
  height: 100%;
  font-size: 14px;
  padding: 1em;
`;

const Button = styled.button`
  display: block;
  margin: 2em auto 2em auto;
  font-size: 16px;
  padding: 8px;
  background-color: #5558fa;
  color: #fff;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
`;

const Error = styled.div`
  font-size: 12px;
  color: red;
  margin: 0 auto;
  width: 70%;
  margin-top: 4px;
`;

const MoneySign = styled.div`
  position: absolute;
  bottom: -41px;
  right: 3%;
`;

export default function Payment() {
  const [open, setOpen] = useState(false);
  const [failedOpen, setFailedOpen] = useState(false);

  const [phone, setPhone] = useState("");
  const [cash, setCash] = useState(0);

  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const providerName = searchParams.get("name");
  const imgSrc = searchParams.get("img");

  const { onChange, onKeyDown } = usePhoneMask();

  interface IFormValues {
    phone: string;
    cash: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  enum Response {
    FAILED = "FAILED",
    SUCCESS = "SUCCESS",
  }

  const submit = (data: IFormValues) => {
    const value = getFakeResponse();
    if (Response[value] === Response.SUCCESS) {
      setFailedOpen(false);
      setPhone(data.phone);
      setCash(data.cash);
      setOpen(true);
      setLoading(true);
      // fake response 2s
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else if (Response[value] === Response.FAILED) {
      setOpen(false);
      setFailedOpen(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Container>
      <Link href="/">
        <BackSpan>Назад</BackSpan>
      </Link>
      <ProviderContainer>
        {imgSrc ? <CardImg src={imgSrc} alt="logo" /> : null}
        <div>Выбранный провайдер: {providerName}</div>
      </ProviderContainer>
      <form onSubmit={handleSubmit(submit)}>
        <Label>Номер телефона</Label>
        <Input
          type="tel"
          onKeyDown={onKeyDown}
          placeholder="+7 (999) 999-99-99"
          {...register("phone", {
            required: Tips.REQUIRED,
            validate: {
              phone: (value) =>
                value.replace(/\D/g, "").length >= 11 || Tips.PHONE,
            },
            onChange,
            max: {
              value: 11,
              message: "Введите корректный номер",
            },
            min: {
              value: 11,
              message: "Слишком короткое значение",
            },
          })}
        />

        <Error>{errors?.phone?.message}</Error>
        <Label>
          Сумма пополнения <MoneySign>₽</MoneySign>
        </Label>
        <Input
          placeholder="0"
          type="text"
          {...register("cash", {
            required: Tips.REQUIRED,
            pattern: {
              value: /^[0-9]+$/,
              message: "Введите числовое значение",
            },
            max: {
              value: 1000,
              message: Tips.MAX,
            },
            min: {
              value: 1,
              message: Tips.MIN,
            },
          })}
        />

        <Error>{errors?.cash?.message}</Error>
        <Button>Отправить</Button>
      </form>
      {open ? (
        <Modal
          heading="Операция прошла успешно"
          button={
            <Link href="/">
              <Button>На главную</Button>
            </Link>
          }
          isOpen={open}
          phone={phone}
          cash={cash}
          provider={providerName}
          rejected={false}
          onClose={() => setOpen(false)}
          isLoading={loading}
        />
      ) : null}
      {failedOpen ? (
        <Modal
          heading="Возникла ошибка"
          onClose={() => setFailedOpen(false)}
          button={<Button onClick={() => setFailedOpen(false)}>Закрыть</Button>}
          isOpen={failedOpen}
          rejected={true}
          isLoading={loading}
        />
      ) : null}
    </Container>
  );
}
