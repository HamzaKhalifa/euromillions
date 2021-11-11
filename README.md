## Technology: 

I used React with CRA + Redux + Typescript + React-JSS + axios + redux-thunk + react-router-dom + react-icons 

## Ways to improve (How I could have done it differently) IMPORTANT: 

I could have setup a NextJS app instead for static rendering by exporting a `getStaticProps` function in my Game page Component, and inside of which the application would make the API call during build time and render a static webpage that will still be interactive following the **HYDRATION** process. But then I would have to install `next-redux-wrapper` for the application to be able to work with `redux` as a statically served page and be synched with other pages in its redux state. <br>

Currently, since the project was setup using CRA (create-react-app), it's fully relying on client side rendering. <br>
Since it's a small component with its encapsulated logic, I figured it wouldn't be worth it to setup neither of a real time server side rendering functionality (`getServerSideProps` in NextJS), nor of a build time static rendering (`getStaticProps` in NextJS.)<br>

When it comes to building a dashboard application, or a web page as a serious game, I personally prefer client side rendering as most data is very dynamic (gets frequently updated) and there is usually little rendering of html and images involved. <br>
In contrast, when I'm building an eCommerce or a portfolio with static data, I would use an entire framework (like NextJS or Gatsby) and embrace the options it/they offer for performance optimization.