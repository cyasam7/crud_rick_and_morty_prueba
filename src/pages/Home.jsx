import React from "react";
import ListCharacters from "../components/ListCharacters";
import DeleteModal from "../components/DeleteModal";
import Modal from "../components/Modal";

import { useSelector } from "react-redux";

function Home() {
    const { characters } = useSelector((state) => state.characters);

    const isNotEmpty = characters.length;

    return (
        <>
            <Modal>
                <DeleteModal />
            </Modal>
            {isNotEmpty ? (
                <ListCharacters characters={characters} />
            ) : (
                <div className="flex h-screen justify-center items-center">
                    <p className="font-mono text-white font-extrabold text-3xl">
                        No hay personajes.
                    </p>
                </div>
            )}
        </>
    );
}

export default Home;
