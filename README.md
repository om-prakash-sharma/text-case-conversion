# Case convert in JS

This is simple class to convert text from one case to other cases.
> ex:  from hyphen case to camel case, underscore case, sentence.


```js

const  caseObj = new CaseConvert("hello-world-by-js", CaseConvert.TYPE.HYPHEN);

// To convert into camel case
caseObj.toCamelCase(); // output : "helloWorldByJs"

// To convert into underscore case
caseObj.toUnderscore(); // output : "hello_world_by_js"

// To convert into sentence
caseObj.toSentence(); // output : "Hello World By Js"

 ``` 
 
 > ex:  from camel case to hyphen case, underscore case, sentence.

```js

const  caseObj = new CaseConvert("helloWorldByJs", caseConvert.TYPE.CAMEL_CASE);

// To convert into hyphen case
caseObj.toHyphenCase(); // output : "hello-world-by-js"

 ``` 
 
