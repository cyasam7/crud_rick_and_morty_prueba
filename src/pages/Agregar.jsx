import React from "react";

import Form from "../components/Form";
import { useFormik } from "formik";
import { SchemaCharacter } from "../utils/schemas";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as Actions from "../redux/actions";

const initialValues = {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
};

function Agregar() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (values, { setErrors }) => {
        dispatch(Actions.createCharacter(values, setErrors))
            .then(() => {
                history.goBack();
            })
            .catch((err) => {
                const message = err?.response?.data?.error;
                if (message === "There is nothing here") {
                    setErrors({
                        gender: "No existe el personaje con los datos que ingresaste.",
                    });
                }
            });
    };

    const formik = useFormik({
        initialValues,
        validationSchema: SchemaCharacter,
        onSubmit: handleSubmit,
    });

    return (
        <div className="w-full px-4 sm:px-10 md:px-20 py-12 flex flex-col">
            <Form formik={formik} />
        </div>
    );
}

export default Agregar;
