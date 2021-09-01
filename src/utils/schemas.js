import * as Yup from "yup";

/** Function MaxCharacter
 * @param number Caracteres Maximos permitiros
 
 * */

function MaxCharacters(number) {
    return `Tamaño maximo de ${number} caracteres`;
}

const RequiredMessage = "Este campo es requerido.";

export const SchemaCharacter = Yup.object({
    name: Yup.string("Debe ser un caracter").max(20, MaxCharacters(20)).required(RequiredMessage),
    status: Yup.string().required(RequiredMessage),
    species: Yup.string().max(20, MaxCharacters(20)).required(RequiredMessage),
    type: Yup.string().max(20, MaxCharacters(10)),
    gender: Yup.string().required(RequiredMessage),
});
