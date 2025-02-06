import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TzInnerPopup = (props) => {
    const popupState = props.innerPopupState;
    const selectProductTypeRef = useRef();
    const selectProductRef = useRef();

    useEffect(() => {
        console.log(popupState.productTypes)
    }, [popupState.productTypes])

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
                                    <label htmlFor="tz-inner-popup-product-select">Продукт:</label>
                                    {popupState.productTypes.find((item) => item.selected && item.type === 'cosmetic') ? 
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
                                    : null}
                                    {popupState.productTypes.find((item) => item.selected && item.type === 'decorative') ? 
                                        <select
                                            ref={selectProductRef}  
                                            name="product" 
                                            id="tz-inner-popup-product-select"
                                            onChange={() => props.selectHandler('decorProducts', selectProductRef.current, props.popupType)}
                                        >
                                            {popupState.decorProducts.map((productItem) => {
                                                return (
                                                    <React.Fragment key={productItem.id}>
                                                        <option value={productItem.value}>{productItem.name}</option>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </select>
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
                                                            <input type="file" name="file" />
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