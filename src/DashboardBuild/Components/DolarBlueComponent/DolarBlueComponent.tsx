"use client"

import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';

export default function DolarBlueComponent() {

  const [currencyPrice, setCurrencyPrice] = useState({sell: 0, buy:0});
  const [currency, setCurrency] = useState(0);

  const currencyList = [
    { id: 0, name: "USD/ARS", uri: "" },
    { id: 1, name: "USD/BTC", uri: "https://api.coinbase.com/v2/exchange-rates?currency=BTC" },
    { id: 2, name: "USD/ETH", uri: "https://api.coinbase.com/v2/exchange-rates?currency=ETH" }
  ];

  useEffect(() => {
    console.log(currency);
    if(currency == 0) {
      console.log("fetching dolar blue")
      fetchDolarBlue();
    } else {
      console.log("fetching crypto")
      getCryptoPrice(currency);
    }
  }, [currency]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //FETCH PRECIO DOLAR BLUE
  const fetchDolarBlue = async () => {
        const res = await fetch("https://api.bluelytics.com.ar/v2/latest");
        const data = await res.json();
        setCurrencyPrice({sell: data.blue.value_sell, buy: data.blue.value_buy});
      };

  //FETCH PRECIO CRYPTO SELECCIONADA
  const getCryptoPrice = async (currency) => {
        const res = await fetch(currencyList[currency].uri)
        const data = await res.json();
        setCurrencyPrice({sell: -1, buy: data.data.rates.USD});
  };

  return (
    <div className={styles.container}>
      <div className={styles.moreInfo}>
        <Button variant="primary" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
        </Button>
      </div>
      <h3 className="title">USD/ARS</h3>
      <hr style={{ marginBottom: "16px" }}></hr>
      <div className="row">
        <div className="col-md-12">
          <p className="text">Precio</p>
          <p className="text">
            <b>${currencyPrice.buy}</b>
          </p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title">Cambiar moneda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="divisas"
            id="tab"
            className="mb-3"
          >
            <Tab eventKey="divisas" title="Divisas">
              <Form>
                <Form.Check
                        onClick={() => setCurrency(0)}
                        type={`radio`}
                        label={`USD/ARS`}
                        id={`usd-ars`}
                      />
                </Form>
            </Tab>
            <Tab eventKey="crypto" title="Crypto">
              <Form>
                <Form.Check
                  onClick={() => setCurrency(1)}
                  type={`radio`}
                  label={`USD/BTC`}
                  id={`usd-btc`}
                />
                <Form.Check
                  onClick={() => setCurrency(2)}
                  type={`radio`}
                  label={`USD/ETH`}
                  id={`usd-eth`}
                />
              </Form>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </div>
  );
}
