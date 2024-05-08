export const strPad = (str: string, char: string, ammout: number) => {
    while(str.length < ammout) {
        str = char + str;
    }

    return str;
}

export const capitalize = (str: string) => {
    let strArr = str.trim().toLowerCase().replace(/\s+/gi," ").split(" ");
    return strArr.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}

export const FirstUppercase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
}