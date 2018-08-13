import React from 'react';
import style from '../style/portfolio.less';

const Portfolio = () => (
  <div className={style.portfolio}>
    <div>
      <h3>
        BlockBallot | <a href="http://blockballot.us/" target="_blank">blockballot.us</a> | <a href="https://github.com/blockballot/blockballot" target="_blank">code</a>
      </h3>
      <div className={style.images}>
        <div className={style.one} />
        <div className={style.two} />
        <div className={style.three} />
      </div>
      <div className={style.description}>
        <h4>A voting platform built on the Ethereum network</h4>
      </div>
      <div>
        I came up with the idea for this app when exploring compelling non-currency-related use cases for distributed ledger technology. Today, voting is a process that requires unfettered trust in a central institution. This app protects against the potential for data manipulation in voting processes by enabling organizations to create ballots and deploy them as contracts on the Ethereum network. Voters will then recieve a unique voter code that permits them access to the ballot where they can vote securely and view a record of their transaction on Etherscan.
      </div>
      <br/>
      <div>
        BlockBallot uses a Node.js and Geth server, MySQL to store user  authentication data, solc to deploy contracts to the Ethereum network, and React, Web3.js, Material UI, and Semantic UI on the front end. The app is deployed as a Digital Ocean droplet.
      </div>
    </div>
    <hr/>
    <div>
      <h3>
        Meet Sean Mills | <a href="http://www.seanmills.website/" target="_blank">seanmills.website</a> | <a href="https://github.com/evalineBai/smm-personal-site" target="_blank">code</a>
      </h3>
      <div className={style.images}>
        <div className={style.four} />
        <div className={style.five} />
        <div className={style.six} />
      </div>
      <div className={style.description}>
        <h4>A pared-down personal site for a Caltech astronomer and cool dude</h4>
      </div>
      <div>
        Sean wanted a translation of his original Google Pages site to something more clean, modern, and simple. The site is a straightforward home for his many publications, press articles, and contact information. This is a React SPA hosted with AWS S3.
      </div>
    </div>
    <hr/>
    <div>
      <h3>
        Cartblanched | <a href="https://cartblanched.herokuapp.com/" target="_blank">cartblanched.herokuapp.com</a> | <a href="https://github.com/cartblanched/cartblanched" target="_blank">code</a>
      </h3>
      <div className={style.images}>
        <div className={style.seven} />
        <div className={style.eight} />
        <div className={style.nine} />
      </div>
      <div className={style.description}>
        <h4>Automatically populate an online shopping cart and order groceries based on the ingredient lists of your favorite recipes</h4>
      </div>
      <div>
        This multi-featured app was a joy to build! Users can create accounts, search for recipes from the Spoonacular API based on the ingredients they have on-hand at home (or not), and generate a shopping list based on the recipes they find. The app will dynamically generate an online shopping cart of grocery items cataloged via the Walmart API and enables user to purchase their cart on the external Walmart site. The app also uses the Twilio API to send ingredient lists via text message for in-store purchases. Built with Node, React, MongoDB, and Semantic UI.
      </div>
    </div>
    <hr />
    <div>
      <h3>
        Locastore | <a href="https://locastore.herokuapp.com/" target="_blank">locastore.herokuapp.com</a> | <a href="https://github.com/Locastore/locastore" target="_blank">code</a>
      </h3>
      <div className={style.images}>
        <div className={style.ten} />
        <div className={style.eleven} />
        <div className={style.twelve} />
      </div>
      <div className={style.description}>
        <h4>A platform to connect consumers to the locally-owned business ecosystems around them</h4>
        <div>
          This concept is a play on the term "Locavore," which means "a person whose diet consists only or principally of locally grown or produced food." Locastore is a platform to connect shoppers, wherever they are, to locally-owned businesses and favorite businesses for later reference. The app uses a data filter atop the Yelp API to remove big-box stores from search results. Built with Node, React, MongoDB, lots of raw CSS, and Bootstrap!
        </div>
      </div>
    </div>
  </div>
);


export default Portfolio;