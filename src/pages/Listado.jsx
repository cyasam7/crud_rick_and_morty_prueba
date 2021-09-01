import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "../components/CharacterCard";
import * as Actions from "../redux/actions";
import { Pagination } from "@material-ui/lab";
function Listado() {
    const dispatch = useDispatch();
    /* const ref = useRef(null); */
    const { array, page, count } = useSelector((state) => state.characters.list);

    useEffect(() => {
        dispatch(Actions.listCharacters());
    }, [dispatch]);

    const handleChange = (_, value) => {
        dispatch(Actions.nextPageCharacters(value));
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="h-full ">
            <h1 className="font-mono font-extrabold text-white text-4xl">Los personajes</h1>
            <div className="grid gap-2 grid-cols-2 mt-5">
                {array.map((character, index) => (
                    <CharacterCard change key={index} {...character} />
                ))}
            </div>
            <div className="flex justify-center mt-3">
                <Pagination count={count} color="primary" page={page} onChange={handleChange} />
            </div>
        </div>
    );
}

export default Listado;
