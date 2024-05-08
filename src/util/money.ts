export const MoneyFromNumberToString = (value: number, hideCurrency?:boolean, hideCents?:boolean): string => {
    if (typeof value === 'string') {
        value = parseFloat(value);
    }
    let result = (new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })).format(value);

    if (hideCents) {
        result = (new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 0,
        })).format(value);
    }
    if (hideCurrency) {
        result = result.replace(/[^\d\.,]/gi,'');
    }

    return result;
}


export const MoneyFromStringToNumber = (num:string) => {
    if (typeof num !== 'string') {
        return 0;
    }
    let dotPos:number = Math.max(num.indexOf('.'),0);
    let commaPos:number = Math.max(num.indexOf(','),0);
    let sep:number|boolean = false;

    if ((dotPos > commaPos) && dotPos)
        sep = dotPos;
    else {
        if ((commaPos > dotPos) && commaPos)
            sep = commaPos;
        else
            sep = false;
    }

    if (sep === false)
        return parseFloat(num.replace(/[^\d]/g, ""));

    return parseFloat(
        num.substr(0, sep).replace(/[^\d]/g, "") + '.' + 
        num.substr(sep+1, num.length).replace(/[^0-9]/, "")
    );

}
