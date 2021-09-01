import React from "react";
import Input from "./Input";
import Select from "./Select";
import { useHistory } from "react-router-dom";
function Form({ formik }) {
    const history = useHistory();
    const optionsStatus = [
        {
            name: "-Selecciona-",
            value: "",
        },
        {
            name: "Vivo",
            value: "alive",
        },
        {
            name: "Muerto",
            value: "dead",
        },
        {
            name: "Desconocido",
            value: "unknown",
        },
    ];
    const optionsGenero = [
        {
            name: "-Selecciona-",
            value: "",
        },
        {
            name: "Mujer",
            value: "female",
        },
        {
            name: "Hombre",
            value: "male",
        },
        {
            name: "Sin genero",
            value: "genderless",
        },
        {
            name: "Desconocido",
            value: "unknown",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit();
    };
    const handleBack = () => {
        history.goBack();
    };

    return (
        <div className="w-full flex flex-col p-10 bg-white shadow rounded-xl">
            <p className="text-center font-mono font-bold text-xl text-gray-800">
                Coloca los datos de un personaje existente.
            </p>
            <Input value={formik.values.name} name="name" formik={formik} placeholder="Nombre" />
            <Select
                value={formik.values.status}
                values={optionsStatus}
                formik={formik}
                name="status"
            ></Select>
            <Input
                value={formik.values.species}
                name="species"
                formik={formik}
                placeholder="Especie"
            />
            <Input value={formik.values.type} name="type" formik={formik} placeholder="Tipo" />
            <Select
                value={formik.values.gender}
                values={optionsGenero}
                formik={formik}
                name="gender"
            />
            <div className="w-full flex justify-end gap-2">
                <button
                    onClick={handleBack}
                    type="button"
                    className="shadow text-white rounded bg-yellow-400 hover:bg-yellow-600 px-5 py-2 font-bold"
                >
                    Cancelar
                </button>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="shadow text-white rounded bg-green-400 hover:bg-green-600 px-5 py-2 font-bold"
                >
                    Guardar
                </button>
            </div>
        </div>
    );
}

export default Form;
