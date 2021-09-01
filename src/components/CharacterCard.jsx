import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import * as Actions from "../redux/actions";

const CharacterCard = ({ change, ...props }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(Actions.selectCharacter(props.id));
        dispatch(Actions.changeModalState(true));
    };

    return (
        <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gray-600 shadow-sm container flex">
            <img src={props.image} className="w-1/2" alt="imagen" />
            <div className="w-1/3">
                <div className="container p-5 text-white">
                    <p className="font-extrabold text-3xl">{props.name}</p>
                    <div className="flex font-bold gap-2">
                        <p>{props.species}</p>
                        <p>{props.gender}</p>
                    </div>
                    <p className=" font-bold text-gray-400">Estatus:</p>
                    <p>{props.status}</p>
                    {props.type && (
                        <>
                            <p className=" font-bold text-gray-400">Tipo:</p>
                            <p>{props.type}</p>
                        </>
                    )}
                    {!change && (
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={handleDelete}
                                className="px-3 py-2 mt-2 bg-red-600 rounded-lg hover:bg-red-500"
                            >
                                Eliminar
                            </button>
                            <Link
                                to={`/editar/${props.id}`}
                                className="px-3 py-2 mt-2 bg-yellow-600 rounded-lg hover:bg-yellow-500"
                            >
                                Editar
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default CharacterCard;
