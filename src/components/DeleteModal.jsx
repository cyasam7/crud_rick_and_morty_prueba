import React from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../redux/actions";

function DeleteModal() {
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(Actions.changeModalState(false));
    };

    const handleSubmit = () => {
        dispatch(Actions.deleteCharacter());
        dispatch(Actions.changeModalState(false));
    };

    return (
        <div className="w-full p-5 flex flex-col gap-4 ">
            <p className="font-bold text-lg text-gray-800">
                ¿Seguro que deseas eliminar este personaje?
            </p>
            <div className="w-full flex gap-2 justify-end font-bold">
                <button
                    onClick={handleCancel}
                    type="button"
                    className="shadow text-white rounded bg-red-400 hover:bg-red-600 px-3 py-1 font-bold"
                >
                    Cancelar
                </button>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="shadow text-red-400 hover:text-red-600 rounded bg-white hover:bg-white px-3 py-1 font-bold"
                >
                    Confirmar
                </button>
            </div>
        </div>
    );
}

export default DeleteModal;
