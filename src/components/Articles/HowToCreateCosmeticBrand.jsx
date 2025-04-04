import React from 'react';
import { useSelector } from 'react-redux';
import InnerPageHeader from '../InnerPageHeader/InnerPageHeader';
import ArticleInfoHeader from './ArticleInfoHeader';
import ArticlesRightSide from './ArticlesRightSide';
import ArticleNavbar from './ArticleNavbar';
import ArticleForm from './ArticleForm';

import banner1 from '../../img/articles/stmCosmeticBanner.jpg';
import banner2 from '../../img/articles/stmCosmeticBanner2.jpg';
import banner3 from '../../img/articles/stmCosmeticBanner3.jpg';

const HowToCreateCosmeticBrand = () => {
    const articleState = useSelector((state) => state.articles);
    const selectedArticle = articleState.articles.find((item) => item.selected);


    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <ArticleNavbar />
                <div className="container">
                    <div className="article-page-row">
                        <div className="article-page-content">
                                <article>
                                    {selectedArticle ? 
                                        <ArticleInfoHeader
                                            author={selectedArticle.author}
                                            date={selectedArticle.articleDate.toLocaleDateString('ru')}
                                            time={selectedArticle.readingTime}
                                        />
                                    : null}
                                </article>
                                <article>
                                    <div className="article-table-content-wrap">
                                        <div className="article-table-content">
                                            <h3>Оглавление:</h3>
                                            <ul>
                                                <li><a href="#step1">Шаг 1: Исследовать целевую аудиторию и конкурентов</a></li>
                                                <li><a href="#step2">Шаг 2. Определить концепцию и позиционирование бренда</a></li>
                                                <li><a href="#step3">Шаг 3. Создать косметический продукт</a></li>
                                                <li><a href="#step4">Шаг 4. Разработать упаковку и фирменный стиль</a></li>
                                                <li><a href="#step5">Шаг 5. Пройти процедуру сертификации</a></li>
                                                <li><a href="#step5">Шаг 6. Определить каналы продаж.</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <article>
                                    <div className="inner-page-article-banner-img-wrap">
                                        <img src={banner2} alt={'test1'} />
                                    </div>

                                    <div className="inner-page-article-content-wrap">
                                        <div className="inner-page-article-text-content full">
                                            <h3>Как создать свой косметический бренд с нуля: пошаговое руководство.</h3>
                                            <p>За последние три года в России активно растет контрактное производство косметики. Такой тренд наметился во многом на фоне санкций и желания российских компаний предложить рынку новые качественные продукты.</p>
                                            <p>Создание собственного косметического бренда – процесс невероятно интересный, но вместе с тем ответственный и непростой. Он требует детального планирования, изучения рынка, понимания маркетинга и продаж. Основные шаги, которые необходимо пройти тем, кто планирует запустить свой бренд.</p>
                                        </div>
                                    </div>
                                </article>

                                <article>
                                    <div className="inner-page-article-content-wrap">
                                        <div className="inner-page-article-text-content full">
                                            <h3>Как создать свой косметический бренд с нуля: пошаговое руководство.</h3>
                                            <p>За последние три года в России активно растет контрактное производство косметики. Такой тренд наметился во многом на фоне санкций и желания российских компаний предложить рынку новые качественные продукты.</p>
                                            <p>Создание собственного косметического бренда – процесс невероятно интересный, но вместе с тем ответственный и непростой. Он требует детального планирования, изучения рынка, понимания маркетинга и продаж. Основные шаги, которые необходимо пройти тем, кто планирует запустить свой бренд.</p>
                                        </div>
                                    </div>
                                </article>

                                <article>
                                    <div className="inner-page-article-content-wrap">
                                        <div className="inner-page-article-text-content full">
                                            <h3>Шаг 1. Исследовать целевую аудиторию и конкурентов.</h3>
                                            <p>Анализ конкурентов необходим для того, чтобы понимать, кто сегодня присутствует на рынке, какой продукт и в каком ценовом сегменте предлагают производители, какой на него спрос и т.д. </p>
                                            <p>Исследовать свою целевую аудиторию (ЦА) нужно с целью формирования концепции бренда. Не следует производить косметику для всех – эта задача под силу только огромным компаниям с мировым именем. Если вы начинающий производитель, о котором пока никто не знает, рекомендуется выбрать конкретную ЦА.</p>
                                            <h4>Примеры ЦА:</h4>
                                            <ul>
                                                <li>Женщины, которые регулярно проводят процедуры кератинового выпрямления волос. Их запрос – шампуни, бальзамы, маски и другие средства по уходу за волосами без содержания сульфатов и парабенов. </li>
                                                <li>Аудитория, для которой важна невысокая стоимость продукта и чистый состав. В этом случае можно использовать несложные формулы и предложить простой и доступный продукт.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>

                                <article>
                                    <div
                                        id='step2' 
                                        className="inner-page-article-content-wrap left"
                                    >
                                        <div className="inner-page-article-text-content full">
                                            <h3>Шаг 2. Определить концепцию и позиционирование бренда.</h3>
                                            <p>Если ваша цель – быстрая прибыль и отсутствие желания заморачиваться с сильным уникальным торговым предложением, можно ограничиться контрактным производством и разработкой дизайна этикеток. Обычно такую косметику продают на маркетплейсах, где цена и визуал – два важнейших фактора продаж.</p>
                                            <p>Если же вы хотите, чтобы ваш бренд был узнаваемым, то стоит разработать уникальный продукт и вложиться в концепцию. Нужно задаться вопросами: какова ценность моего бренда для ЦА? Какую пользу несет этот продукт? Какая идея, помимо прямого предназначения, заложена в бренд?</p>
                                        </div>
                                    </div>
                                    <div className="inner-page-article-banner-img-wrap">
                                        <img src={banner3} alt={'test'} />
                                    </div>
                                </article>

                                <article>
                                    <div
                                        id='step3'  
                                        className="inner-page-article-content-wrap"
                                    >
                                        <div className="inner-page-article-text-content full">
                                            <h3>Шаг 3. Создать косметический продукт.</h3>
                                            <h4>На этом этапе вы обращаетесь к услуге контрактного производства и выбираете один из сценариев сотрудничества:</h4>
                                            <ol>
                                                <li>Предлагаете собственную рецептуру и даете производителю полное ТЗ с описанием ароматов, консистенции и т.д. </li>
                                                <li>Доверяете контрагенту разработку рецепта продукции вашего будущего бренда, описывая лишь сегмент рынка, ЦА и требования к качеству конечного продукта. </li>
                                            </ol>
                                        </div>
                                    </div>
                                </article>

                                <article>
                                    <div
                                        id='step4'  
                                        className="inner-page-article-content-wrap"
                                    >
                                        <div className="inner-page-article-text-content full">
                                            <h3>Шаг 4. Разработать упаковку и фирменный стиль.</h3>
                                            <p>Необходима визуализация вашего бренда – то, что будет отличать его от других предложений на рынке. Делается это с помощью айдентики: логотипа, шрифтов, цветовых решений. Этот этап работ реализует дизайнер – ваш специалист или рекомендованный производителем (часто компании, занимающиеся контрактным производством косметики, сотрудничают на постоянной основе с дизайнерами).</p>
                                        </div>
                                    </div>
                                </article>

                                <article>
                                    <div
                                        id='step5'  
                                        className="inner-page-article-content-wrap"
                                    >
                                        <div className="inner-page-article-text-content full">
                                            <h3>Шаг 5. Пройти процедуру сертификации.</h3>
                                            <p>Прежде чем выйти на рынок, необходимо оформить все юридические документы и пройти сертификацию. Днный этап включает в себя регистрацию товарного знака, получение разрешение на продажу, сертификацию продукции по стандартам безопасности. Этим занимается юрист, которого можно найти самостоятельно или же воспользоваться услугами проверенных специалистов, рекомендованных компанией-производителем.</p>
                                        </div>
                                    </div>
                                    <div className="inner-page-article-banner-img-wrap">
                                        <img src={banner1} alt={'test'} />
                                    </div>
                                </article>
                                
                                <article>
                                    <div
                                        id='step6'  
                                        className="inner-page-article-content-wrap"
                                    >
                                        <div className="inner-page-article-text-content full">
                                            <h3>Шаг 6. Определить каналы продаж.</h3>
                                            <h4>Этим можно начать заниматься параллельно на первых этапах, когда вы будете изучать рынок и разрабатывать концепцию бренда. Каналов продаж несколько:</h4>
                                            <ul>
                                                <li>маркетплейсы;</li>
                                                <li>салоны красоты;</li>
                                                <li>розничные магазины косметики, в том числе крупные сетевые бутики;</li>
                                                <li>собственный интернет-магазин.</li>
                                            </ul>
                                            <p>Необходимо регулярно проводить анализ эффективности выбранных каналов реализации продукции, тестировать новые варианты, при необходимости – корректировать.</p>
                                            <p>Наша компания занимается производством контрактной косметики для малого, среднего и крупного бизнеса. Мы предлагаем комплексный подход: от разработки рецептуры до помощи в подготовке к декларированию и сертификации.</p>
                                        </div>
                                    </div>
                                </article>
                                <ArticleForm />
                        </div>
                        <ArticlesRightSide 
                            selectedArticle={selectedArticle}
                        />
                    </div>
                </div>
            </div>
           
        </React.Fragment>
    )
};


export default HowToCreateCosmeticBrand;