/**
 * Checks if value is an array
 * @param value unknown
 * @returns boolean
 */
export const isArray = (value: unknown): boolean=>{
    return value !== undefined && Array.isArray(value);
}

/**
 * Checks if an array is empty
 * @param value unknown
 * @returns boolean
 */
export const isEmptyArray = (value: unknown) => value !== undefined && Array.isArray(value) && value.length === 0;


/**
 * Null safe function to get
 * an element at a provided index
 * @param value array 
 * @param index number
 * @returns returns element at index or undefined
 */
export const getElementAtIndex = <T>(value: T[], index: number): T | undefined =>{
    if(!isEmptyArray(value) && value.length > 0){
        return value[index];
    }

    return undefined;
}

/**
 * Converts an array to a hash map
 * if an element of array is an object
 * and a provided name of a key to use
 * returns a string value;
 * @param arr array of objects
 * @param key key on an object
 * @returns Map or empty object
 */
export const arrayToMap = <T extends object, K extends keyof T>(arr: T[], key: K): Record<string, T>=>{
    let result: Record<string, T> = {}
    arr.forEach((val)=>{
        let valAtKey = val[key];

        if(typeof valAtKey === "string"){
            result[valAtKey] = val;
        }
    })

    return result;
}