import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const TzInnerPopup = (props) => {
    const popupState = props.innerPopupState;
    const selectProductTypeRef = useRef();
    const selectProductRef = useRef();
    const selectDecorProductRef = useRef();
    const fileRef = useRef();

    const cosmSelected = props.popupType === 'product' && popupState.decorProducts.find((selectedItem) => selectedItem.selected && selectedItem.type !== 'default');
    const decorCosmSelected = props.popupType === 'product' && popupState.cosmeticProducts.find((selectedItem) => selectedItem.selected && selectedItem.type !== 'default');
    
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
                                    <label htmlFor="tz-inner-popup-product-type-select">Тип Косметики:</label>
                                    <select
                                        ref={selectProductTypeRef} 
                                        name="product-type" 
                                        id="tz-inner-popup-product-type-select"
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
                                            <label htmlFor="tz-inner-popup-cosmetic-product-select">Продукт:</label>
                                            <select
                                                ref={selectProductRef}  
                                                name="product" 
                                                id="tz-inner-popup-cosmetic-product-select"
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
                                                        <label htmlFor={`tz-inner-popup-input-cosmetic-custom-field`}>Желаемая категория</label>
                                                    </div>
                                                    <div className="tz-inner-popup-input-wrap">
                                                        {popupState.customCosmFields.map((fieldItem) => {
                                                            return (
                                                                <React.Fragment key={`${fieldItem.id}-custom-cosm`}>
                                                                    <input
                                                                        ref={props.findInputRef(props.refs, fieldItem.name)}  
                                                                        id="tz-inner-popup-input-cosmetic-custom-field"
                                                                        type={fieldItem.type}
                                                                        placeholder={fieldItem.placeholder}
                                                                        value={fieldItem.value}
                                                                        onChange={() => props.inputHandler(
                                                                            fieldItem.id, 
                                                                            fieldItem.name, 
                                                                            props.findInputRef(props.refs, fieldItem.name).current)
                                                                        }
                                                                        onKeyDown={(e) => props.clearInputHandler(e, props.popupType, fieldItem.id, fieldItem.name)}        
                                                                    />
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </div>
                                                </React.Fragment> 
                                            : null}
                                        </React.Fragment>
                                    : null}
                                    {popupState.productTypes.find((item) => item.selected && item.type === 'decorative') ? 
                                        <React.Fragment>
                                            <label htmlFor="tz-inner-popup-decor-product-select">Продукт:</label>
                                            <select
                                                ref={selectDecorProductRef}  
                                                name="product" 
                                                id="tz-inner-popup-decor-product-select"
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
                                                        <label htmlFor={`tz-inner-popup-input-decor-cosm-custom-field-2`}>Желаемая категория</label>
                                                    </div>
                                                    <div className="tz-inner-popup-input-wrap">
                                                        {popupState.customDecorFields.map((fieldItem) => {
                                                            return (
                                                                <React.Fragment key={`${fieldItem.id}-custom-decor`}>
                                                                    <input
                                                                        ref={props.findInputRef(props.refs, fieldItem.name)}  
                                                                        id="tz-inner-popup-input-decor-cosm-custom-field-2"
                                                                        type={fieldItem.type}
                                                                        placeholder={fieldItem.placeholder}
                                                                        value={fieldItem.value}
                                                                        onChange={() => props.inputHandler(
                                                                            fieldItem.id, 
                                                                            fieldItem.name, 
                                                                            props.findInputRef(props.refs, fieldItem.name).current)
                                                                        }
                                                                        onKeyDown={(e) => props.clearInputHandler(e, props.popupType, fieldItem.id, fieldItem.name)}
                                                                    />
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </div>
                                                   
                                                </React.Fragment>
                                            : null}
                                        </React.Fragment>
                                    : null}
                                </div>
                            </React.Fragment>
                        : null}
                        {props.popupType === 'product' && (cosmSelected || decorCosmSelected) ?    
                            <div className="tz-inner-popup-input-wrap">
                                <div className="tz-inner-popup-input-title">
                                    <label htmlFor="tz-inner-popup-product-name-input-custom">Название продукта</label>
                                </div>
                                <input
                                    id='tz-inner-popup-product-name-input-custom'
                                    className={popupState.productNameField.valid ? null : 'input-err'}
                                    ref={props.productNameRef}
                                    type={popupState.productNameField.type}
                                    value={popupState.productNameField.value}
                                    placeholder={popupState.productNameField.placeholder}
                                    onChange={() => props.changeProductNameHandler(props.productNameRef.current)}
                                    onKeyDown={(e) => props.clearProductNameHandler(e)}
                                />
                            </div>               
                        : null}
                        {props.form.map((formItem) => {
                            return (
                                <React.Fragment key={formItem.id}>
                                    <div className="tz-inner-popup-input-wrap">
                                        {formItem.type !== 'textarea' && formItem.type !== 'file' ? 
                                            <div className="tz-inner-popup-input-title">
                                                <label htmlFor={`tz-inner-popup-input-${formItem.id}`}>{formItem.title}</label>
                                            </div>
                                        : null}
                                       
                                        {formItem.type === 'textarea' && props.popupType === 'product' && (cosmSelected || decorCosmSelected) ? 
                                            <React.Fragment>
                                                 <div className="tz-inner-popup-input-title">
                                                    <label htmlFor={`tz-inner-popup-input-${formItem.id}`}>{formItem.title}</label>
                                                </div>
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
                                            </React.Fragment>
                                            
                                        : 
                                            formItem.type === 'file' ?
                                                    <React.Fragment>
                                                        <div className="tz-form-wrap-file-upload">
                                                            <label htmlFor='tz-form-custom-file-id' className="input-file">
                                                                <span className="input-file-text" type="text"></span>
                                                                <input
                                                                    id="tz-form-custom-file-id"
                                                                    ref={fileRef} 
                                                                    type="file" name="file"
                                                                    onChange={() => props.inputFileHandler(fileRef.current)} 
                                                                />
                                                                <span className="input-file-btn">Прикрепить файл</span>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            {popupState.cosmeticProductsCustomFile.displayName ? 
                                                                `Прикреплен (${popupState.cosmeticProductsCustomFile.displayName})`
                                                            : null}
                                                        </div>
                                                    </React.Fragment>
                                                    
                                                : formItem.type !== 'textarea' ?
                                                    <input
                                                        ref={props.findInputRef(props.refs, formItem.name)}
                                                        id={`tz-inner-popup-input-${formItem.id}`} 
                                                        className={formItem.valid ? '' : 'input-err'}
                                                        type={props.type}
                                                        placeholder={formItem.placeholder}
                                                        value={formItem.value}
                                                        onChange={() => props.inputHandler(
                                                            formItem.id, 
                                                            formItem.name, 
                                                            props.findInputRef(props.refs, formItem.name).current)
                                                        }
                                                        onKeyDown={(e) => props.clearInputHandler(e, props.popupType, formItem.id, formItem.name)}
                                                    />
                                                    : null
                                        }
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="tz-inner-popup-from-controls-row">
                            <div className="tz-inner-popup-from-controls-btn-wrap">
                                <Link 
                                    className={popupState.allFieldsValid ? "tz-inner-popup-from-controls-btn" : "tz-inner-popup-from-controls-btn btnDisabled"}
                                    onClick={() => props.saveHandler(props.popupType)}
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