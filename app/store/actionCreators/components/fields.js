import { CHANGE_INPUT_TEXT } from "../../actions/components/fields"

export const changeInputText = (fieldName, fieldValue) => {
    return {
        type: CHANGE_INPUT_TEXT,
        fieldName,
        fieldValue
    }
}