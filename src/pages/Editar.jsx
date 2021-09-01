import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { useFormik } from "formik";
import { SchemaCharacter } from "../utils/schemas";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import * as Actions from "../redux/actions";
import { Link } from "react-router-dom";

const initialValues = {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
};

function Editar() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const { characters } = useSelector((state) => state.characters);
    const [Error, setError] = useState(false);
    const [_, setBandera] = useState(false);

    const handleSubmit = (values) => {
        dispatch(Actions.updateCharacter(id, values));
        history.push("/creados");
    };

    const formik = useFormik({
        initialValues,
        validationSchema: SchemaCharacter,
        onSubmit: handleSubmit,
    });

    useEffect(() => {
        const character = characters.find((i) => i.id === parseInt(id));
        if (character) {
            formik.initialValues.gender = character.gender.toLowerCase();
            formik.initialValues.name = character.name;
            formik.initialValues.species = character.species;
            formik.initialValues.status = character.status.toLowerCase();
            formik.initialValues.type = character.type;
            setError(false);
        } else {
            setError(true);
        }
        setBandera((prev) => !prev);
    }, [id]);

    console.log(formik.initialValues);

    return (
        <div className="w-full px-4 sm:px-10 md:px-20 py-12 flex flex-col">
            {!Error ? (
                <Form formik={formik} />
            ) : (
                <div className="h-screen flex justify-center items-center">
                    <p className="font-mono text-white font-bold text-3xl">
                        Personaje perdido,{` `}
                        <Link className="underline" to="/">
                            volver al inicio.
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Editar;
