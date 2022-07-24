import React from "react";
import { useState, useEffect } from "react";
import chip from "../images/puce.png";
import visa from "../images/visalogo.png";

const Card = () => {
  const [holders, setHolders] = useState("");
  const [numbers, setNumbers] = useState("");
  const [CVV, setCVV] = useState("");
  const [optionsSelectedMonth, setOptionsSelectedMonth] = useState("");
  const [optionsSelectedYears, setOptionsSelectedYears] = useState("");
  const [isActive, setIsActive] = useState(false);

  //ALL HANDLE
  const handleNumbers = (e) => {
    const onlyNumber = e.target.value.replace(/[^0-9,.]+/g, "");
    setNumbers(onlyNumber);
  };
  const handleHolders = (e) => {
    const nameHolders = e.target.value.toUpperCase().replace(/[^a-z\s]/gi, "");
    setHolders(nameHolders);
  };

  const handleOptionsMonth = (e) => {
    setOptionsSelectedMonth(e.target.value);
  };

  const handleOptionsYears = (e) => {
    setOptionsSelectedYears(e.target.value);
  };

  const handleCVV = (e) => {
    const onlyNumber = e.target.value.replace(/[^0-9,.]+/g, "");
    setCVV(onlyNumber);
  };

  //CHANGE STAR TO NUMBER
  const switchToNumber = numbers.padEnd(16, "#").split("");

  //FOCUS BORDER
  const [borderNumber, setBorderNumber] = useState(false);
  const [borderHolder, setBorderHolder] = useState(false);
  const [borderExpires, setBorderExpires] = useState(false);

  //USE EFFECT
  const [test, setTest] = useState(false);

  useEffect(() => {
    setTest(true);
  }, [switchToNumber]);

  return (
    <div className="card-form">
      <div className="card-list">
        <div className="card-item">
          <div
            className={
              isActive
                ? "card-item__side -front active"
                : "card-item__side -front"
            }
          >
            <div
              className={
                borderNumber
                  ? "card-item__focus triggerNumber"
                  : borderHolder
                  ? "card-item__focus triggerHolder"
                  : borderExpires
                  ? "card-item__focus triggerExpires"
                  : "card-item__focus"
              }
            ></div>
            <div className="card-item__cover"></div>
            <div className="card-item__wrapper">
              <div className="card-item__top">
                <img
                  src={chip}
                  alt="chip credit card"
                  className="card-item__chip"
                ></img>
                <div className="card-item__logoVisa">
                  <img src={visa} alt="visa logo"></img>
                </div>
              </div>
              <label htmlFor="cardNumber" className="card-item__number">
                {switchToNumber.map((element, index) => {
                  let listStar = (
                    <span
                      key={index}
                      className={
                        element != "#" ? "star__element star__element_fadeIn" : "star__element star__element_fadeOut"
                      }
                    >
                      {element}
                    </span>
                  );

                  return listStar;
                })}
              </label>
              <div className="card-item__content">
                <label htmlFor="cardHolder" className="card-item__holder">
                  <p>Card Holder</p>
                  <p>{holders ? holders : "FULL NAME"}</p>
                </label>
                <label htmlFor="cardExpires" className="card-item__expires">
                  <p>Expires</p>
                  <p>
                    {optionsSelectedMonth ? optionsSelectedMonth : "MM"}/
                    {optionsSelectedYears ? optionsSelectedYears : "YY"}
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div
            className={
              isActive ? "card-item__side back active" : "card-item__side back"
            }
          >
            <div className="card-item__cover"></div>
            <div className="card-item__band"></div>
            <div className="card-item__CVV">
              <p className="card-item__CVV_name">CVV</p>
              <div className="card-item__CVV_whiteZone">
                <p className="card-item__CVV_inputCVV">{CVV ? CVV : "***"}</p>
              </div>
            </div>
            <div className="card-item__visaLogo">
              <img src={visa}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="card-form__inner">
        <div className="card-form-input__number">
          <label>Card Number</label>
          <input
            name="cardNumber"
            id="cardNumber"
            onChange={handleNumbers}
            value={numbers}
            onFocus={() => setBorderNumber(true)}
            onBlur={() => setBorderNumber(false)}
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength="16"
          ></input>
        </div>
        <div className="card-form-input__holder">
          <label>Card Holders</label>
          <input
            name="cardHolder"
            id="cardHolder"
            onChange={handleHolders}
            onFocus={() => setBorderHolder(true)}
            onBlur={() => setBorderHolder(false)}
            value={holders}
            maxLength={"30"}
          ></input>
        </div>

        <div className="card-form-input__moreInformations">
          <div className="card-form-input__expires">
            <label>Expires date</label>
            <div className="selectInput">
              <select
                id="cardExpires"
                onChange={handleOptionsMonth}
                onFocus={() => setBorderExpires(true)}
              >
                <option disabled value defaultValue>
                  Month
                </option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              <select
                onChange={handleOptionsYears}
                onFocus={() => setBorderExpires(true)}
                onBlur={() => setBorderExpires(false)}
              >
                <option disabled value defaultValue>
                  Year
                </option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
              </select>
            </div>
          </div>
          <div className="card-form-input__CVV">
            <label>CVV</label>
            <input
              maxLength={"3"}
              onChange={handleCVV}
              value={CVV}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
            ></input>
          </div>
        </div>

        <input
          type="submit"
          value="Submit"
          className="card-form__submit"
        ></input>
      </div>
    </div>
  );
};

export default Card;
