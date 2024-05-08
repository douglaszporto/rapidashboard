export const MinMax = (v: number, min: number, max: number) => {
    return Math.min(Math.max(v,min),max);
}

export const RequestJsonAsForm = (obj: {[key:string]:any}) => {
    let formdata = new FormData();

    for(let i of Object.keys(obj)) {
        if (obj.hasOwnProperty(i)) {
            if (Array.isArray(obj[i])) {
                obj[i].map((o:any) => formdata.append(i,o))
            } else {
                formdata.append(i, obj[i]);
            }
        }
    }

    return formdata;
}

export const isElementInViewport = (el: HTMLElement) => {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export const classSet = (obj:{[i:string]: any}):string => {
    let result = "";

    for(let i in obj) {
        if (i && Boolean(obj[i])) {
            result += " "+i;
        }
    }

    return result.trim();
}