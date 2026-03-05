# Data fetching using async and await
1. first we use the normal promise .then .then and catch method and chaining type architecture
2. but now we have the async await those are also work with promise
3. we use the async on the method in which we fetch the data from the api 
4. the api is return the promise so we use the await in front of promise and store it into response variable
5. than we convert it into json format so the promis is still promise so we again store it with await 
6. why we write await becuse we store the promise we do not know when will we take the result 
7. that's why we use the await simple and after that we store the core data in the data variable and store it into apidata state with set api data method
8. after that we use the set loading to false the loading state because our data is set now 