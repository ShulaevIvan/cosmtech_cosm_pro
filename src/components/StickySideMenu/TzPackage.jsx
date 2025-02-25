import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const TzPackage = (props) => {
    const tzState = props.tzState;
    const packageTypeOptions = tzState.packageOptions.packageTypeOptions;
    const cosmeticPackageOptions = tzState.packageOptions.packageFormatOptions.cosmetic;
    const decorativePackageOptions = tzState.packageOptions.packageFormatOptions.decorative;
    
    const selectPackageTypeRef = useRef(null);
    const selectPackageBodyCosmeticRef = useRef(null);
    const selectPackageBodyDecorCosmeticRef = useRef(null);
    const selectPackageHeadCosmeticRef = useRef(null);
    const selectPackageHeadDecorCosmeticRef = useRef(null);
    const customPackageInputRef = useRef(null);

    return (
        <React.Fragment>
            <div className="sticky-sidemenu-package-options-wrap">
                <select
                    ref={selectPackageTypeRef}
                    onChange={() => props.packageSelectHandler('packageType', selectPackageTypeRef.current.value)}
                >
                    {packageTypeOptions.map((optionItem) => {
                        return (
                            <React.Fragment key={optionItem.id}>
                                <option>{optionItem.name}</option>
                            </React.Fragment>
                        )
                    })}
                </select>
                {packageTypeOptions.find((packageType) => packageType.selected && packageType.type !== 'default') ? 
                    <React.Fragment>
                        {packageTypeOptions.find((item) => item.type === 'cosmetic' && item.selected) ? 
                            <select
                                ref={selectPackageBodyCosmeticRef}
                                onChange={() => props.packageSelectHandler('cosmetic', selectPackageBodyCosmeticRef.current.value)}
                            >
                            {cosmeticPackageOptions.map((optionItem) => {
                                return (
                                    <React.Fragment key={optionItem.id}>
                                        <option>{optionItem.name}</option>
                                    </React.Fragment>
                                )
                            })}
                            </select>
                        : null}

                        {packageTypeOptions.find((item) => item.type === 'decorativeCosm' && item.selected) ? 
                            <select
                                ref={selectPackageBodyDecorCosmeticRef}
                                onChange={() => props.packageSelectHandler('decorative', selectPackageBodyDecorCosmeticRef.current.value)}
                            >
                                {decorativePackageOptions.map((optionItem) => {
                                    return (
                                        <React.Fragment key={optionItem.id}>
                                            <option>{optionItem.name}</option>
                                        </React.Fragment>
                                    )
                                })}
                            </select>
                        : null}

                        {cosmeticPackageOptions.find((item) => item.selected && item.additionalOptions && item.additionalOptions.length > 0) ? 
                            <React.Fragment>
                                <select
                                    ref={selectPackageHeadCosmeticRef}
                                    onChange={() => props.packageSelectHandler('cosmeticOption', selectPackageHeadCosmeticRef.current.value)}
                                >
                                    {cosmeticPackageOptions.find((item) => item.selected).additionalOptions.map((optionItem) => {
                                        return (
                                            <React.Fragment key={optionItem.id}>
                                                <option>{optionItem.name}</option>
                                            </React.Fragment>
                                        )
                                    })}
                                </select>
                            </React.Fragment>
                        : null}

                        {decorativePackageOptions.find((item) => item.selected && item.additionalOptions && item.additionalOptions.length > 0) ? 
                            <React.Fragment>
                                <select
                                    ref={selectPackageHeadDecorCosmeticRef}
                                    onChange={() => props.packageSelectHandler('decorativeOption', selectPackageHeadDecorCosmeticRef.current.value)}
                                                                        >
                                    {decorativePackageOptions.find((item) => item.selected).additionalOptions.map((optionItem) => {
                                        return (
                                            <React.Fragment key={optionItem.id}>
                                                <option>{optionItem.name}</option>
                                            </React.Fragment>
                                        )
                                    })}
                                </select>
                            </React.Fragment>
                        : null}

                        {cosmeticPackageOptions.find((item) => item.selected && item.type === 'customField') ||
                            decorativePackageOptions.find((item) => item.selected && item.type === 'customField') ? 
                                <React.Fragment>
                                    <div className="sticky-sidemenu-package-options-custom-input-wrap">
                                        <input
                                            ref={customPackageInputRef}
                                            type={tzState.packageOptions.packageCustomField.type}
                                            placeholder={tzState.packageOptions.packageCustomField.placeholder} 
                                            value={tzState.packageOptions.packageCustomField.value}
                                            onChange={() => props.customPackageInputHandler(customPackageInputRef.current.value)}
                                            onKeyDown={(e) => props.customPackageClearInputHandler(e)}
                                        />
                                    </div>
                                </React.Fragment>
                        : null}

                        {!tzState.resultData.package.allFieldsValid ? 
                            <div className="sticky-sidemenu-package-save-btn-wrap">
                                <Link
                                    className={tzState.packageOptions.allFieldsValid ? 
                                    "sticky-sidemenu-package-save-btn" : "sticky-sidemenu-package-save-btn btnDisabled"
                                    }
                                    onClick={props.savePackageHandler} 
                                >{tzState.resultData.package.allFieldsValid ? 'Сохранено': 'Сохранить'}</Link>
                            </div>
                        : null}
                    </React.Fragment>
                
                : null}
            </div>
        </React.Fragment>
    )
};

export default TzPackage;