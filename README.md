# Dotametrics

Dotametrics is a system for analyzing, delivering, and displaying raw data from a match of Dota 2. It includes the back-end system that analyzes raw data, the API for delivering it via RESTful endpoints, and the front-end AngularJS architecture for fetching the data and displaying charts.
Dotametrics is currently a work in progress.

## Features

Dotametrics currently supports the following statistics:
  * Last Hits over time
  * Denies over time
  * CS as a ratio of Last Hits / Denies
  * KDA (Kills, Deaths, Assists) ratio
  * Rune Control (Radiant vs Dire)

## Requirements

 * [Node.js](http://nodejs.org/)
 * [npm](https://npmjs.org/)
 * [nodemon](https://github.com/remy/nodemon)

## Installation

* Fork and clone then repo
* Install dependencies:

```js
npm install
```

* Start server:

```js
nodemon server.js
```

## Stack

Dotametrics makes use of the following open-source resources:
 * [Node.js](http://nodejs.org/)
 * [Express](http://expressjs.com/)
 * [AngularJS](http://angularjs.org/)
 * [ChartJS](http://www.chartjs.org/)
 * [Angles](http://lgsilver.github.io/angles/)

