import React from "react";
import CharacterCard from "./CharacterCard";

const ListCharacters = ({ characters }) => {
    return (
        <div className="h-full ">
            <h1 className="font-mono font-extrabold text-white text-4xl">Personajes</h1>
            <div className="grid gap-2 grid-cols-2 mt-5">
                {characters.map((character, index) => (
                    <CharacterCard key={index} {...character} />
                ))}
            </div>
        </div>
    );
};

export default ListCharacters;
