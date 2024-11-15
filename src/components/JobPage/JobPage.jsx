import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import JobForm from "./JobForm";
import { 
    getAvalibleVacancy,
    showMoreVacanyDescription
} from "../../redux/slices/innerPageSlice";


const JobPage = () => {

    const jobState = useSelector((state) => state.innerPage.jobPage);
    const dispatch = useDispatch();
    const btnRef = useRef(null);

    const showMoreDescriptionHandler = (vacancyItem) => {
        dispatch(showMoreVacanyDescription({vacancyId: vacancyItem.id}));
    };

    useEffect(() => {
        dispatch(getAvalibleVacancy());
    }, []);

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        <JobForm />
                        <div className="job-main-row">
                            {jobState.vacancyList ? jobState.vacancyList.map((vacancyItem) => {
                                return (
                                    <React.Fragment key={vacancyItem.id}>
                                        <div className={vacancyItem.active ? "job-item-wrap description-full-active" : "job-item-wrap"}>
                                            <div className="job-item-title-group">
                                                <h4>{vacancyItem.departament}</h4>
                                                <h3>{vacancyItem.name}</h3>
                                                <span className="job-item-time-added">{vacancyItem.date}</span>
                                            </div>
                                            <div className={vacancyItem.active ? "job-item-description description-full-active" : "job-item-description"}>
                                                <div className="job-сonditions-wrap">
                                                    <h5>Условия работы</h5>
                                                    <ul className="job-list-style">
                                                        {vacancyItem.conditions.map((conditionItem) => {
                                                            return (
                                                                <React.Fragment key={Math.random()}>
                                                                    <li>{conditionItem}</li>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                                <div className="job-duties-wrap">
                                                    <h5>Обязаности</h5>
                                                    <ul className="job-list-style">
                                                        {vacancyItem.dutys.map((dutysItem) => {
                                                            return (
                                                                <React.Fragment key={Math.random()}>
                                                                    <li>{dutysItem}</li>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                                <div className="job-requirements-wrap">
                                                    <h5>Обязаности</h5>
                                                    <ul className="job-list-style">
                                                        {vacancyItem.requirements.map((requirementsItem) => {
                                                            return (
                                                                <React.Fragment key={Math.random()}>
                                                                    <li>{requirementsItem}</li>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                                {vacancyItem.phone ? 
                                                    <React.Fragment>
                                                        <div className="job-additional-contacts">
                                                            <p><strong>Подробности по номеру:</strong> 
                                                                <Link to={`tel:${vacancyItem.phone.replace(/\s/g, '')}`}>{vacancyItem.phone}</Link>
                                                            </p>
                                                        </div>
                                                    </React.Fragment>
                                                : null}
                                                
                                            </div>
                                            <div className="job-item-controls-wrap">
                                                <div className="job-item-showmore-btn-wrap">
                                                    <Link onClick={() => showMoreDescriptionHandler(vacancyItem)}>
                                                        {vacancyItem.active ? 'Свернуть' : 'Читать далее'}
                                                    </Link>
                                                </div>
                                                <div className="job-item-send-request-btn-wrap">
                                                    <span className="job-item-send-request-btn">Откликнуться</span>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            }) : null}
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};

export default JobPage;