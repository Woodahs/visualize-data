import React from "react";
import SingleSelectProps from "./single-select.props";
import Select from "react-select";
import SelectOption from "../../types/select-option/select-option";

const SingleSelectComponent = (props: SingleSelectProps) => {
    function onChange(option: SelectOption | null) {
        props.onChange(option?.value || "");
    }

    return (
        <div>
            <Select
                value={{
                    value: props.value,
                    label: props.value,
                }}
                options={props.options.map(item => ({value: item, label: item}))}
                isMulti={false}
                onChange={onChange as any}
                isClearable={true}
            />
        </div>
    );
};

SingleSelectComponent.displayName = "SingleSelectComponent";

export default SingleSelectComponent;
