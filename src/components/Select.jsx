import React from "react";

function Select({ children, formik, name, values, ...rest }) {
    return (
        <>
            <label className="block my-3 border-separate">
                <select
                    {...rest}
                    onChange={formik.handleChange(name)}
                    className="form-select block w-full mt-1 py-3 border rounded"
                >
                    {values.map((i, index) => (
                        <option key={index} value={i.value}>
                            {i.name}
                        </option>
                    ))}
                </select>
            </label>
            {formik.errors[name] && formik.touched[name] ? (
                <div className="my-1 p-2 flex items-center justify-start bg-red-200 border-red-500 rounded">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-600 feather feather-alert-octagon w-5 h-5 mx-2"
                    >
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p className="text-red-600">{formik.errors[name]}</p>
                </div>
            ) : null}
        </>
    );
}

export default Select;
