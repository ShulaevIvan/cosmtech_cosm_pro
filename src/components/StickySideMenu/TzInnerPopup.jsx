import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TzInnerPopup = (props) => {
    const popupState = props.innerPopupState;
    const selectProductTypeRef = useRef();
    const selectProductRef = useRef();
    const selectDecorProductRef = useRef();
    const fileRef = useRef();

    return (
        <React.Fragment>
            <div className="sticky-sidemenu-tz-inner-popup">
                <div className="sticky-sidemenu-tz-popup-close-btn-wrap">
                    <span 
                        className="sticky-sidemenu-tz-popup-close-btn"
                        onClick={() => props.closeHandler(props.popupType, false)}
                    ></span>
                </div>
                <div className="sticky-sidemenu-tz-inner-popup-body">
                    <h3>{props.title}</h3>
                    <div className="tz-inner-popup-from-wrap">
                        {props.popupType === 'product' ?
                            <React.Fragment>
                                <div className="tz-inner-popup-product-wrap">
                                    <label htmlFor="tz-inner-popup-product-select">Тип Косметики:</label>
                                    <select
                                        ref={selectProductTypeRef} 
                                        name="product-type" 
                                        id="tz-inner-popup-product-select"
                                        onChange={() => props.selectHandler('productTypes', selectProductTypeRef.current, props.popupType)}
                                    >
                                        {popupState.productTypes.map((optionItem) => {
                                            return (
                                                <React.Fragment key={optionItem.id}>
                                                    <option value={optionItem.value}>{optionItem.name}</option>
                                                </React.Fragment>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="tz-inner-popup-product-wrap">
                                    {popupState.productTypes.find((item) => item.selected && item.type === 'cosmetic') ? 
                                        <React.Fragment>
                                            <label htmlFor="tz-inner-popup-product-select">Продукт:</label>
                                            <select
                                                ref={selectProductRef}  
                                                name="product" 
                                                id="tz-inner-popup-product-select"
                                                onChange={() => props.selectHandler('cosmeticProducts', selectProductRef.current, props.popupType)}
                                            >
                                                {popupState.cosmeticProducts.map((productItem) => {
                                                    return (
                                                        <React.Fragment key={productItem.id}>
                                                            <option value={productItem.value}>{productItem.name}</option>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </select>
                                            {popupState.cosmeticProducts.find((selectedItem) => selectedItem.selected && selectedItem.customField) ?
                                                <React.Fragment>
                                                    <div className="tz-inner-popup-input-title">
                                                        <label htmlFor={`tz-inner-popup-input-cosmetic-custom-field`}>Свой вариант</label>
                                                    </div>
                                                    <div className="tz-inner-popup-input-wrap">
                                                        <input type="text" id="tz-inner-popup-input-decor-cosm-custom-field"></input>
                                                    </div>
                                                </React.Fragment> 
                                            : null}
                                        </React.Fragment>
                                    : null}
                                    {popupState.productTypes.find((item) => item.selected && item.type === 'decorative') ? 
                                        <React.Fragment>
                                            <label htmlFor="tz-inner-popup-product-select">Продукт:</label>
                                            <select
                                                ref={selectDecorProductRef}  
                                                name="product" 
                                                id="tz-inner-popup-product-select"
                                                onChange={() => props.selectHandler('decorProducts', selectDecorProductRef.current, props.popupType)}
                                            >
                                                {popupState.decorProducts.map((productItem) => {
                                                    return (
                                                        <React.Fragment key={productItem.id}>
                                                            <option value={productItem.value}>{productItem.name}</option>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </select>
                                            {popupState.decorProducts.find((selectedItem) => selectedItem.selected && selectedItem.customField) ? 
                                                <React.Fragment>
                                                    <div className="tz-inner-popup-input-title">
                                                        <label htmlFor={`tz-inner-popup-input-decor-cosm-custom-field`}>Свой вариант</label>
                                                    </div>
                                                    <div className="tz-inner-popup-input-wrap">
                                                        <input type="text" id="tz-inner-popup-input-decor-cosm-custom-field"></input>
                                                    </div>
                                                   
                                                </React.Fragment>
                                            : null}
                                        </React.Fragment>
                                    : null}
                                </div>
                            </React.Fragment>
                        : null}
                        {props.form.map((formItem) => {
                            return (
                                <React.Fragment key={formItem.id}>
                                    <div className="tz-inner-popup-input-wrap">
                                        <div className="tz-inner-popup-input-title">
                                            <label htmlFor={`tz-inner-popup-input-${formItem.id}`}>{formItem.title}</label>
                                        </div>
                                        {formItem.type === 'textarea' ? 
                                            <textarea
                                                ref={props.findInputRef(props.refs, formItem.name)}
                                                id={`tz-inner-popup-input-${formItem.id}`} 
                                                type={props.type}
                                                placeholder={formItem.placeholder}
                                                value={formItem.value}
                                                onChange={() => props.inputHandler(
                                                    formItem.id, 
                                                    formItem.name, 
                                                    props.findInputRef(props.refs, formItem.name).current)
                                                }
                                            ></textarea>
                                        
                                        : 
                                            formItem.type === 'file' ? 
                                                    <div className="tz-form-wrap-file-upload">
                                                        <label className="input-file">
                                                            <span className="input-file-text" type="text"></span>
                                                            <input
                                                                ref={fileRef} 
                                                                type="file" name="file"
                                                                onChange={() => props.inputFileHandler(fileRef.current)} 
                                                            />
                                                            <span className="input-file-btn">Прикрепить файл</span>
                                                        </label>
                                                    </div>
                                                :
                                                    <input
                                                        ref={props.findInputRef(props.refs, formItem.name)}
                                                        id={`tz-inner-popup-input-${formItem.id}`} 
                                                        type={props.type}
                                                        placeholder={formItem.placeholder}
                                                        value={formItem.value}
                                                            onChange={() => props.inputHandler(
                                                            formItem.id, 
                                                            formItem.name, 
                                                            props.findInputRef(props.refs, formItem.name).current)
                                                        }
                                                    />
                                        }
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="tz-inner-popup-from-controls-row">
                            <div className="tz-inner-popup-from-controls-btn-wrap">
                                <Link 
                                    className="tz-inner-popup-from-controls-btn"
                                    onClick={() => props.saveHandler('customer')}
                                >сохранить</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default TzInnerPopup;