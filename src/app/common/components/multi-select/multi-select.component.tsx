import React from "react";
import MultiSelectProps from "./multi-select.props";
import Select from "react-select";

const MultiSelectComponent = (props: MultiSelectProps) => {
    function onChange(values: any | null) {
        props.onChange((values as any[])?.map(item => item.value) || []);
    }

    return (
        <Select
            value={props.value.map(item => ({label: item, value: item}))}
            options={props.options.map(item => ({value: item, label: item}))}
            isMulti={true}
            onChange={onChange}
        />
    );
};

MultiSelectComponent.displayName = "MultiSelectComponent";

export default MultiSelectComponent;
