import _ from 'lodash'
import { getElementAtIndex } from '../helpers/array.helpers'

/**
 * Null safe array container
 */
class List<T> {
    data: T[] = []
    length: number = 0

    constructor (value?: T[] | T) {
        this.init(value)
    }

    /**
    * Iniitalizes the data and length properties
    * @param value
    */
    init (value?: T[] | T): void {
        if (value === undefined || value === null) {
            this.data = []
            this.length = 0
        } else if (Array.isArray(value)) {
            this.data = value
            this.length = value.length
        } else {
            this.data = [value]
            this.length = 1
        }
    }

    /**
    * get the current value of the data
    */
    get (): T[] { return this.data }

    /**
     * Null safe function to get element at index
     * @param index 
     * @returns element or undefined
     */
    at (index: number){ return getElementAtIndex(this.data, index)}

    /**
     * add current value to list
     * @param value 
     */
    add (value: T): void { 
        if(value !== undefined){
            const updatedList = _.cloneDeep(this.data);
            updatedList.push(value);
            this.data = updatedList;
            this.length = updatedList.length;
        }
    }

    replaceAt(value: T, index: number): void{
        if(this.data.at(index)){
            this.data[index] = value;
        }
    }

    addAt (value: T, index: number): void { 
        if(this.data.at(index)){
            this.data = this.data.splice(index, 1, value);
            this.length = this.data.length;
        }
    }

    /**
     * add current value to list
     * alias for add
     * @param value 
     */
    push(value: T): void {
        this.add(value)   
    }

    forEach(func: (val:T, index?: number)=>void):void{
        this.data.forEach((val, index)=>func(val, index))
    }

    map(func: (val:T, index?: number)=>any[]):any[]{
        return this.data.map((val, index)=>func(val, index))
    }

    find(func: (val:T, index?: number)=> boolean): T | undefined{
        return this.data.find((val, index)=>func(val, index))
    }

    findIndex(func: (val:T, index?: number)=> number): number{
        return this.data.findIndex((val, index)=>func(val, index))
    }
}

export default List
