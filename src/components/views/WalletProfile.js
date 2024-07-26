import { Row,Col } from 'antd';
import {useState} from 'react';
import {AiOutlineQrcode,AiTwotoneContainer,AiOutlineKey,AiOutlineUser} from 'react-icons/ai';
import WalletResetPasswordModal from "../component/WalletResetPasswordModal";
import { useTranslation } from 'react-i18next';
import PairCardButton from "../component/PairCardButton";
import axios from "axios";
import {SERVER_URL} from "../../constants/env";

const pair=
[{name:"BTC",percent:3.19763724,price:57832.47921786725}]

    
function WalletProfile() {
  const [t,i18n] = useTranslation();
  const [use,setUser] = useState(JSON.parse(localStorage.getItem("userInfo")));
  const [showModal,setShowModal] = useState(false);
    const [coinData,setCoinData] = useState(pair);

    try {
        axios.get(SERVER_URL+'wallets/gettoptokens')
            .then((response)=>{
                if(response.data.response && response.data.data.length>0){
                    let data = response.data.data;
                    console.log(data);
                    let initCoinData = [];
                    for(var i=0;i<6;i++)
                        initCoinData.push({
                            name:data[i].symbol,
                            price:data[i].price,
                            percent:data[i].daily_percent
                        });

                    setCoinData(initCoinData);
                }
                else{

                }
            })
    } catch (error) {
        console.log(error);
    }
 let item = coinData.find(item=> item.name === "ETH");

  return (
      <>

          <Col span={22} offset={1} className="mt-8 myColor1 text-sm">
              <div className="w-1/4 pairCard flex justify-center py-4 mb-4">
                  <div className="flex flex-col text-center lg:block lg:text-left">
                      <span className="text-xs font-bold xl:text-base 2xl:text-lg mr-2">{item?.name}</span>
                      <span className="rounded-base font-bold text-red-500 ">{item?.percent.toFixed(2)}%</span>
                      <p className="text-base font-bold xl:text-xl 2xl:text-3xl">$ {item?.price.toFixed(2)}</p>
                  </div>
              </div>
                  <Row>
                      <Col span={20}>
                          {t('Email Address')}
                      </Col>
                      <Col span={4} className="text-center text-overflow">
                          {t('Edit Password')}
                      </Col>
                  </Row>

                  <Row className="text-lg font-bold">
                      <Col span={20}>
                          {t(use.email)}
                      </Col>
                      <Col span={4} className="text-center">
                          <a onClick={() => setShowModal(true)}><AiOutlineKey size={20} className="inline mr-2"/></a>
                      </Col>
                  </Row>


                  {
                      showModal ?
                          <WalletResetPasswordModal setModalShow={setShowModal} title="Reset Password"/>
                          : null
                  }
          </Col>
      </>

);
}

export default WalletProfile;