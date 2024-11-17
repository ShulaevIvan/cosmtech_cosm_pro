import React from "react";
import { Link } from "react-router-dom";

const JobForm = (props) => {
    const jobState = props.jobState;
    console.log(jobState)
    return (
        <React.Fragment>
            <div className="job-form-popup-background">
            <div className="job-form-popup-wrap">
                <div className="job-form-btnclose-wrap">
                    <span 
                        className="job-form-btnclose"
                        onClick={props.popupHandler}
                    ></span>
                </div>
                <div className="job-from-title-wrap">
                    <h3>{jobState.jobPopup.vacancyActive ? 
                        `Отклик на вакансию ${jobState.jobPopup.vacancyActive.name}` 
                    : ''}</h3>
                </div>
                <div className="job-form-wrap">
                    <div className="job-form-inputs-row">
                        {jobState.jobPopup.inputs.filter((item) => item.type !== 'file').map((inputItem) => {
                            return (
                                <React.Fragment key={inputItem.id}>
                                    <div className="job-form-input-wrap">
                                        <div className="job-form-input-title">
                                            <label htmlFor={`job-form-tinput-id-${inputItem.name}`}>{inputItem.title}</label>
                                        </div>
                                        <div className="job-form-input">
                                            <input 
                                                id={`job-form-tinput-id-${inputItem.name}`} 
                                                type={inputItem.type}
                                                placeholder={inputItem.placeholder}
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="job-from-file-row">
                            <div className="job-form-file-input-wrap">
                                <label className="input-file">
                                    <span className="input-file-text" type="text"></span>
                                    <input type="file" name="file" />
                                    <span className="input-file-btn">Прикрепить резюме</span>
                                </label>
                            </div>
                            <div className="job-form-file-input-name">testFile.pdf</div>
                        </div> 
                    </div>
                    <div className="job-form-policy-wrap">
                        <div className="form-mode-checkbox">
                            <input 
                                type="checkbox" 
                                id="job-form-policy-checkbox" className="job-form-policy-checkbox" />
                            <label htmlFor="job-form-policy-checkbox"></label>
                            <span>согласен с <Link 
                                to={'/about/policy'}
                                target={'_blank'}
                            >политикой конфидициальности</Link></span>
                        </div>
                    </div>
                    

                    <div className="job-form-send-btn-wrap">
                        <span className="job-form-send-btn">Отправить</span>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
};

export default JobForm;