# fetch 
1. so we fetch the api with the help of fetch api method 
2. we also see the output in our browser screen
3. but there is something wrong there in network tab in browser tools there are multiple requests there 
4. so the 1fetch.png file the infinite loop of requests are show there
5. so jo hamara tarika hai bar bar kyu chal raha hai again and again 
6. so the reason is jab hamne setApiData(data) function fetch method ke andar likh rakha hai to vo chalega vo chalega means state update hogi
7. aur jab state updata hogi to component render hoga again 
8. and jab render hoga to fetch method fir se chalega aur jab vo firse chalega to jo andar ki state hai vo firse chalegi
9. aur jab state firse chalegi to firse fetch method chalegi and ye cycle infinetly chalti hee jayegi
10. so itna to clear ho gaya hai ki ham is prakar se to api ko fetch nahi karenge