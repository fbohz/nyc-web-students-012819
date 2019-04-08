## Flatiron Stock Exchange

Welcome to the Flatiron Stock Exchange!
Today, you are a broker who is trying to better organize the stocks available on the Flatiron Stock Market.
The database of stocks can be found in a JSON-server, so before you start your React server, make sure to start your JSON-server on `http://localhost:3000/stocks`.

```
TO INSTALL: npm install -g json-server
TO START: json-server --watch db.json
```

After the stocks are fetched, your job is to:
* Render all the stocks onto the page. The styling of how a Stock should look like is already in the `Stock.js` component.
  * what do i need?
  * receive list of stocks -> iterate and return of Stock component

* allow a user to buy a stock by clicking on it and when it is bought, it should be added to `My Portfolio`.
  * click -> event handler potentially callback thats passed down
    * state/property to know  whether or not it is in portfolio

* allow a user to sell a stock in their `Portfolio` by clicking on the stock and it should be removed from their `Portfolio`.
  * event handler
    * reverse of above either change the property of whether its mine
    * or just chnage state

* allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.
  * have state that indicates the order of which stocks should be rendered

* allow a user to filter stocks based on the type of the stock.
  * have a piece of state to filter our stocks by

Best of luck!
