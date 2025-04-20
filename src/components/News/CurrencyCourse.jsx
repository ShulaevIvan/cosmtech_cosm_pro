import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCurrencyData } from "../../redux/slices/newsSlice";
import usdIcon from '../../img/news/usdIcon.png';
import eurIcon from '../../img/news/eurIcon.png';
import chinIcon from '../../img/news/china.png';

const CurrencyCourse = () => {
    const dispatch = useDispatch();
    const currencyState = useSelector((state) => state.news.currencyData);
    const usdData = currencyState.find((item) => item.char_code === 'USD');
    const eurData = currencyState.find((item) => item.char_code === 'EUR');
    const chinData = currencyState.find((item) => item.char_code === 'CNY');
    
    useEffect(() => {
        dispatch(fetchCurrencyData());
    }, []);

    return (
        <React.Fragment>
            <div className="news-company-currency-wrap">
                <h3>{`Курсы валют на сегодня`}</h3>
                <p>Данные взяты c <Link to={'https://www.cbr.ru'} target={'_blank'}>cbr.ru</Link> на {new Date().toLocaleDateString('ru')}.</p>
                <div className="news-company-currency-item">
                    <img src={usdIcon} alt="test" /> Доллар США: {usdData ? `${usdData.value} руб` : 'данные не получены'}
                </div>
                <div className="news-company-currency-item">
                    <img src={eurIcon} alt="test" /> Евро: {eurData ? `${eurData.value} руб` : 'данные не получены'}
                </div>
                <div className="news-company-currency-item">
                    <img src={chinIcon} alt="test" /> Юань: {chinData ? `${chinData.value} руб` : 'данные не получены'}
                </div>
            </div>
        </React.Fragment>
    )
};


export default CurrencyCourse;