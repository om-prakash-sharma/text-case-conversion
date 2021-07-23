# Case convert in JS

This is simple class to convert text from one case to other cases.
> ex:  from hyphen case to camel case


```js

const  caseObj = new CaseConvert("hello-world-by-java", CaseConvert.TYPE.HYPHEN);

// to convert into camel case
caseObj.toCamelCase(); // output : "helloWorldByJava"

// to convert into underscore case
caseObj.toUnderscore(); // output : "hello_world_by_java"

// to convert into sentence
caseObj.toSentence(); // output : "Hello World By Java"
