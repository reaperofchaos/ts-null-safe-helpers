import _ from "lodash";
import List from "../List.class"

describe("List class test", ()=>{
    describe("Constructor", ()=>{
        test("construct no data", ()=>{
            const ListayWithNoData = new List();

            expect(ListayWithNoData.get()).toStrictEqual([]);
        })
        test("construct null", ()=>{
            const ListayWithNoData = new List(null);

            expect(ListayWithNoData.get()).toStrictEqual([]);
        })
        test("construct int", ()=>{
            const ListayWithData = new List(1);

            expect(ListayWithData.get()).toStrictEqual([1]);
        })
        test("construct string", ()=>{
            const ListayWithData = new List("test");

            expect(ListayWithData.get()).toStrictEqual(["test"]);
        })
        test("construct boolean", ()=>{
            const ListayWithData = new List(false);

            expect(ListayWithData.get()).toStrictEqual([false]);
        })
        test("construct object", ()=>{
            const ListayWithData = new List({test: "hello"});

            expect(ListayWithData.get()).toStrictEqual([{test: "hello"}]);
        })
        test("construct Listay object", ()=>{
            const ListayWithData = new List([{test: "hello"}]);

            expect(ListayWithData.get()).toStrictEqual([{test: "hello"}]);
        })
        test("construct List of numbers", ()=>{
            const ListayWithData = new List([1, 2, 3]);

            expect(ListayWithData.get()).toStrictEqual([1, 2, 3]);
        })
        test("construct Listay numbers", ()=>{
            const ListayWithData = new List(["one", "two"]);

            expect(ListayWithData.get()).toStrictEqual(["one", "two"]);
        })
        test("construct Listay Listay", ()=>{
            const ListayWithData = new List([[1], [2], [3]]);

            expect(ListayWithData.get()).toStrictEqual([[1], [2], [3]]);
        })
    })
    describe("forEach", ()=>{
        test("forEach updates a string", ()=>{
            const testArr = ["The", "sly", "fox", "jumped", "over", "the", 'lazy', "dog"];
            let test1String = "";
            let test2String = "";

            const concat = (val: string)=>{test1String = test1String + val + " "};
            const concat2 = (val: string)=>{test2String = test2String + val + " "};

            const testList = new List(testArr);
            testArr.forEach((t)=>concat2(t))
            testList.forEach(concat);
            expect(test1String).toStrictEqual(test2String);
        })
        test("forEach evaluates a boolean", ()=>{
            const testArr = ["The", "sly", "fox", "jumped", "over", "the", 'lazy', "dog"];

            let exists = false;
            let exists2 = false;
            const find = (val: string)=>{if(val === "jumped" || exists){exists = true}};
            const find2 = (val: string)=>{if(val === "jumped" || exists2){exists2 = true}};

            const testList = new List(testArr);
            testArr.forEach((t)=>find2(t))
            testList.forEach(find);
            expect(exists).toStrictEqual(exists2);
        })
    })
    describe("at", ()=>{
        test("at", ()=>{
            const testArr = ["The", "sly", "fox", "jumped", "over", "the", 'lazy', "dog"];
            const testList = new List(testArr);

            expect (testList.at(0)).toStrictEqual(testArr[0]);
            expect (testList.at(1)).toStrictEqual(testArr[1])
            expect (testList.at(2)).toStrictEqual(testArr[2])
            expect (testList.at(testArr.length -1)).toStrictEqual(testArr[testArr.length -1])
            expect (testList.at(99999)).toStrictEqual(undefined)
            expect (testList.at(-99999)).toStrictEqual(undefined)
        })
    })
    describe("push and add", ()=>{
        test("push numbers", ()=>{
            const test = [1, 2, 3]
            const ListayWithData = new List(test);
            const expected = _.cloneDeep(test)
            expected.push(8);
            
            ListayWithData.push(8)

            expect(ListayWithData.get()).toStrictEqual(expected)
        })
        test("push multiple types", ()=>{
            const test = [1, "2", true]
            const ListayWithData = new List(test);
            const expected = _.cloneDeep(test)
            expected.push(8);
            expected.push("hello");
            expected.push(false);

            ListayWithData.push(8)
            ListayWithData.add("hello");
            ListayWithData.push(false);

            expect(ListayWithData.get()).toStrictEqual(expected);
        })
        test("push empty multiple types", ()=>{
            const test: (number | string | boolean)[] = []
            const ListayWithData = new List(test);
            const expected = _.cloneDeep(test)
            expected.push(8);
            expected.push("hello");
            expected.push(false);

            ListayWithData.push(8)
            ListayWithData.add("hello");
            ListayWithData.push(false);

            expect(ListayWithData.get()).toStrictEqual(expected);
        })
    });
});