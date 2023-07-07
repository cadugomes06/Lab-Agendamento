import { useContext, useEffect, useState } from "react";
import Header from "../../../components/Header";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from "../../../utils/Button";

import infoIcon from "../../../assets/icons/info.svg";
import infoGrayIcon from "../../../assets/icons/info-gray.svg";
import calendarIcon from "../../../assets/icons/calendar.svg";
import calendarGrayIcon from "../../../assets/icons/calendar-gray.svg";
import checkallIcon from "../../../assets/icons/checkall.svg";
import checkallGrayIcon from "../../../assets/icons/checkall-gray.svg";
import checkIcon from "../../../assets/icons/checkone.svg";
import checkGrayIcon from "../../../assets/icons/checkone-gray.svg";

const UserHome = () => {
  const [cardSelect, setCardSelect] = useState(2);

  const { state } = useContext(UserContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (state.userOn === false) {
      navigate("../userlogin");
    }
  }, [state.userOn]);

  const handleClickCardOne = () => {
    setCardSelect(1);
  };
  const handleClickCardTwo = () => {
    setCardSelect(2);
  };
  const handleClickCardThree = () => {
    setCardSelect(3);
  };

  return (
    <>
      <Header />

      <section className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
        <div
          className="w-[62rem] h-[30rem] flex justify-evenly items-center animeLeft"
          id="agendamentos"
        >
          <div
            className={
              cardSelect === 1
                ? "sectionOnhome relative"
                : "sectionOffhome relative"
            }
            onClick={handleClickCardOne}
          >
            <div className="w-full h-[6rem] flex justify-center items-center">
              <h2 className="">Agendamentos</h2>
            </div>
            <div className="w-[28px] h-[28px] absolute left-1 top-1">
              <img
                src={cardSelect === 1 ? calendarIcon : calendarGrayIcon}
                alt=""
                className="w-[28px] h-[28px]"
              />
            </div>

            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div className="w-full h-[8rem] flex justify-center items-center">
              <h2>0</h2>
            </div>

            <div className="w-full flex justify-center items-center h-[6rem]">
              <Button
                text="Agendar"
                marginTop={cardSelect === 1 ? "60px" : "0px"}
                height="42px"
                width={cardSelect === 1 ? "200px" : "120px"}
                background={cardSelect === 1 ? "teal" : "gray"}
                boxShadow={cardSelect === 1 ? "none" : ""}
                disabled={cardSelect === 1 ? false : true}
              />
            </div>
          </div>

          <div
            className={
              cardSelect === 2
                ? "sectionOnhome relative"
                : "sectionOffhome relative"
            }
            onClick={handleClickCardTwo}
          >
            <div className="w-full h-[5rem] flex justify-center items-center text-center">
              <h2>
                Disponibilidade <br />
                para agendamento!
              </h2>
            </div>
            <div className="w-[26px] h-[26px] absolute left-1 top-1">
              <img
                src={cardSelect === 2 ? checkallIcon : checkallGrayIcon}
                alt=""
                className="w-[26px] h-[26px]"
              />
            </div>

            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div
              className={
                cardSelect === 2
                  ? `pt-8 flex text-cente justify-between h-[10rem] w-full text-sm text-gray-200 gap-2 px-6`
                  : "flex text-cente justify-between h-[10rem] w-full text-sm text-gray-200 gap-2 px-4"
              }
            >
              <ul className="flex flex-col items-start">
                <li className="border-b-[1px] w-[100%] border-gray-100/40">
                  Unimed Intercambio
                </li>
                <li className="border-b-[1px] w-[100%] border-gray-100/40">
                  <p>Petrobras</p>
                </li>
                <li className="border-b-[1px] w-[100%] border-gray-100/40">
                  Sul América
                </li>
                <li className="border-b-[1px] w-[100%] border-gray-100/40">
                  Amil Saúde
                </li>
                <li className="border-b-[1px] w-[100%] border-gray-100/40">
                  Assim Saúde
                </li>
                <li className="border-b-[1px] w-[100%] border-gray-100/40">
                  Mediservice
                </li>
                <li className="border-b-[1px] w-[100%] border-gray-100/40">
                  Gama Saúde
                </li>
              </ul>

              <div className="flex flex-col justify-center h-[9.5rem]">
                <div className="w-[20px] h-[20px]">
                  <img
                    src={cardSelect === 2 ? checkIcon : checkGrayIcon}
                    alt=""
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <img
                    src={cardSelect === 2 ? checkIcon : checkGrayIcon}
                    alt=""
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <img
                    src={cardSelect === 2 ? checkIcon : checkGrayIcon}
                    alt=""
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <img
                    src={cardSelect === 2 ? checkIcon : checkGrayIcon}
                    alt=""
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <img
                    src={cardSelect === 2 ? checkIcon : checkGrayIcon}
                    alt=""
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <img
                    src={cardSelect === 2 ? checkIcon : checkGrayIcon}
                    alt=""
                  />
                </div>
                <div className="w-[20px] h-[20px]">
                  <img
                    src={cardSelect === 2 ? checkIcon : checkGrayIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-[6rem] flex justify-center items-center">
              <Button
                text="Saiba mais"
                marginTop={cardSelect === 2 ? "60px" : ""}
                height="42px"
                disabled={cardSelect === 2 ? false : true}
                width={cardSelect === 2 ? "200px" : "120px"}
                background={cardSelect === 2 ? "teal" : "gray"}
                boxShadow={cardSelect === 2 ? "none" : ""}
              />
            </div>
          </div>

          <div
            className={
              cardSelect === 3
                ? "sectionOnhome relative"
                : "sectionOffhome relative"
            }
            onClick={handleClickCardThree}
          >
            <div className="w-full h-[6rem] flex justify-center items-center">
              <h2>Informações</h2>
            </div>
            <div className="w-[20px] h-[20px] absolute left-1 top-1">
              <img
                src={cardSelect === 3 ? infoIcon : infoGrayIcon}
                alt=""
                className="w-[20px] h-[20px]"
              />
            </div>

            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div className="w-full h-[8rem] flex justify-center items-center px-4">
              <p
                className={
                  cardSelect === 3
                    ? `text-[1rem] text-gray-200 leading-6`
                    : `text-[0.8rem] text-gray-300`
                }
              >
                Ao agendar seus exames, será possível agilizar seu processo de
                cadastramento em nossas unidade. Proporcionando uma experiência
                ainda melhor!
              </p>
            </div>
            <div className="h-[7rem] w-full flex justify-center items-center">
              <Button
                text="Saiba Mais"
                marginTop={cardSelect === 3 ? "60px" : ""}
                height="42px"
                disabled={cardSelect === 3 ? false : true}
                width={cardSelect === 3 ? "200px" : "120px"}
                background={cardSelect === 3 ? "teal" : "gray"}
                boxShadow={cardSelect === 3 ? "none" : ""}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserHome;
