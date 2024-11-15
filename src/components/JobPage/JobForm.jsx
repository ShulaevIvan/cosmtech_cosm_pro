import React from "react";

const JobForm = () => {
    return (
        <React.Fragment>
            <div className="job-form-popup-wrap">
                <div className="job-form-wrap">
                    <div className="job-form-inputs-row">
                        <div className="job-form-input-wrap">
                            <div className="job-form-input-title">
                                <label>Имя</label>
                            </div>
                            <div className="job-form-input">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="job-form-input-wrap">
                            <div className="job-form-input-title">
                                <label>Телефон</label>
                            </div>
                            <div className="job-form-input">
                                <input type="text" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="job-form-input-file-wrap">
                        <label>Резюме</label>
                        <input type="file" />
                    </div>
                    <div className="job-form-send-btn-wrap">
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default JobForm;