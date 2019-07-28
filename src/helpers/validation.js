export const isEmpty = (value) => {
    return value.trim().length === 0;
}

export const isValidEmail = value => {
    return value.indexOf('@') > 0;
}