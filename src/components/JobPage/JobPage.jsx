import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import JobFormHappyState from "./JobFormHappyState";
import JobForm from "./JobForm";
import fileToBase64 from '../../functions/fileToBase64'
import { 
    getAvalibleVacancy,
    showMoreVacanyDescription,
    showJobPopup,
    validateJobForm,
    jobPolicyActive,
    jobSendBtnActive,
    sendVacancyRequest,
    jobHappyStatePopupShow
} from "../../redux/slices/innerPageSlice";


const JobPage = () => {

    const jobState = useSelector((state) => state.innerPage.jobPage);
    const dispatch = useDispatch();
    const jobInputsRefs = [
        { type: 'name', ref: useRef(null) },
        { type: 'phone', ref: useRef(null) },
        { type: 'file', ref: useRef(null) },
        { type: 'checkbox', ref: useRef(null), }
    ];

    const showMoreDescriptionHandler = (vacancyItem) => {
        dispatch(showMoreVacanyDescription({vacancyId: vacancyItem.id}));
    };
    
    const jobPopupHandler = (vacancyObj, status) => {
        if (!vacancyObj || !status) {
            dispatch(showJobPopup({vacancy: {}, status: false}));
            return;
        }
        dispatch(showJobPopup({vacancy: vacancyObj, status: status}));
    };

    const findJobInputRef = (inputType) => {
        return jobInputsRefs.find((item) => item.type === inputType).ref;
    };

    const jobInputHandler = async (inputType) => {
        return new Promise((resolve, reject) => {
            const targetRef = findJobInputRef(inputType);
            if (inputType === 'file' && targetRef.current.files && targetRef.current.files.length > 0) {
                const file = fileToBase64(targetRef.current.files[0]);
                return resolve(file);
            }
            return dispatch(validateJobForm({inputType: inputType, inputValue: targetRef.current.value}));
        })
        .then((data) => {
            if (data && data.name) {
               return dispatch(validateJobForm({inputType: 'file', inputValue: data}));
            }
        });
      
    };

    const clearInputHandler = (e, inputType) => {
        if (e.key === 'Backspace') {
            const targetRef = findJobInputRef(inputType);
            dispatch(validateJobForm({inputType: inputType, inputValue:''}));
            targetRef.current.value = '';
        }
    };

    const policyHandler = (status) => {
        dispatch(jobPolicyActive({status: status}));
    };

    const sendJobRequestHandler = () => {
        const sendData = jobState.jobPopup.sendData;
        dispatch(sendVacancyRequest(sendData));
    };

    const happyStatePopupHandler = (status) => {
        dispatch(jobHappyStatePopupShow({status: status}));
    };

    useEffect(() => {
        const findValidInputs = jobState.jobPopup.inputs.filter((item) => 
            (item.value && item.name === 'name' && item.valid) || (item.value && item.name === 'phone' && item.valid));
        if (findValidInputs && findValidInputs.length === 2 && jobState.jobPopup.sendData.name) {
            dispatch(jobSendBtnActive({status: true}));
            return;
        }
        dispatch(jobSendBtnActive({status: false}));
    }, [jobState.jobPopup.sendData])

    useEffect(() => {
        dispatch(getAvalibleVacancy());
    }, []);

    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
                <section>
                    <div className="container">
                        {jobState.jobPopup.haapyStatePopup.active ? 
                            <JobFormHappyState
                                popupHanlder={happyStatePopupHandler}
                                userData={jobState.jobPopup.haapyStatePopup.data}

                            /> 
                        : null}
                        {jobState.jobPopup.active ? 
                            <JobForm 
                                jobState={jobState}
                                findInputRef={findJobInputRef}
                                popupHandler={jobPopupHandler}
                                popupInputHandler={jobInputHandler}
                                clearInputHandler={clearInputHandler}
                                policyHandler={policyHandler}
                                sendJobHandler={sendJobRequestHandler}
                            />
                        : null}
                        {!jobState.vacancyList || jobState.vacancyList.length === 0 ? 
                            <React.Fragment>
                                <div className="job-page-vacancy-empty-wrap">
                                    <div className="job-page-vacancy-description">
                                        <p>К сожалению, вакансий сейчас нет, 
                                            но вы можете отправить нам свое резюме на электронную почту  <a href="mailto:pro@comsteh.ru">pro@cosmtech.ru.</a>
                                        </p>
                                        <p>Мы ценим каждый талант и готовы рассмотреть резюме в любом случае.</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        : null}
                        <div className="job-main-row">
                            {jobState.vacancyList.length > 0 ? jobState.vacancyList.map((vacancyItem) => {
                                return (
                                    <React.Fragment key={vacancyItem.id}>
                                        <div className={vacancyItem.active ? "job-item-wrap description-full-active" : "job-item-wrap"}>
                                            <div className="job-item-title-group">
                                                <h4><span className="departament-title">Отдел:</span>{vacancyItem.departament}</h4>
                                                <div className="job-item-main-title-row">
                                                    <div className="job-item-main-title">
                                                        <h3>{vacancyItem.name}</h3>
                                                    </div>
                                                    <div className="job-item-salary-title">
                                                        <h3>{vacancyItem.salary}</h3>
                                                    </div>
                                                </div>
                                                
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
                                                    <span 
                                                        className="job-item-send-request-btn"
                                                        onClick={() => jobPopupHandler(vacancyItem, true)}
                                                    >Откликнуться</span>
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