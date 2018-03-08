## Memory Game

&nbsp;
## 00 Initial Setup

* Globally install *create-react-app*.

```
$ npm install -g create-react-app
```

* Start the react project.

```
$ create-react-app react-bands
```


&nbsp;
## 01 Cards

* Initialize state.


&nbsp;
## 02 Card component

* Create the Card component and display cards in App.


&nbsp;
## 03 cardStyle

* Add the cardStyle object which will conditionally provide the cards' background color.
* Pass the *bgcolor* and *showing* props from App to the Card components.


&nbsp;
## 04 toggle hide-show

* Expose the card click event as a method prop passed from App to Card.
* Configure handleClick to toggle between hiding and the selected card.



&nbsp;
## 05 New game

* Set the new game handler.







&nbsp;
## 06 Deploy to Github Pages

* Step 1: Add homepage to package.json

Open package.json and add a homepage field for the project:

```
  "homepage": "https://stefaleon.github.io/React-Memory-Game/"
```
Create React App uses the homepage field to determine the root URL in the built HTML file.

* Step 2: Install gh-pages and add deploy to scripts in package.json

```
$ npm install --save gh-pages
```
Add the following scripts in package.json:

```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
The predeploy script will run automatically before deploy is run.

* Step 3: Deploy the site by running npm run deploy

```
$ npm run deploy
```

* Step 4: Ensure your project’s settings use gh-pages

**Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch**

* Step 5: Commit and Push




&nbsp;
## 07 Add the game logic

* Add the *noClick* piece of state.
* Change *handleClick*.
  * It now includes the *mapCardState* helper, which maps through the cards and applies the *newCardState* conditionally.
  * Finds the card of interest.
  * Calls *mapCardState* in order to return the cards that are showing.
  * If two showing cards have the same color, then uses *mapCardState* to set their state to MATCHING.
  * Otherwise, hides the two cards, by using *mapCardState* to set their state to HIDING, after a delay.
