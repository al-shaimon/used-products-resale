import React from 'react';

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center text-xl font-bold my-2">Blogs</h2>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            <strong>There are four ways to manage React Application.</strong>
            <br />
            When we talk about state in our applications, it’s important to be clear about what
            types of state actually matter. <br />
            <br />
            There are four main types of state you need to properly manage in your React apps:{' '}
            <br />
            <ul>
              <li>1. Local state</li>
              <li>2. Global state</li>
              <li>3. Server state</li>
              <li>4. URL state</li>
            </ul>
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            Every object with its methods and properties contains an internal and hidden property
            known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to
            add methods and properties in objects. It is a method by which an object can inherit the
            properties and methods of another object. Traditionally, in order to get and set the
            [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
            Nowadays, in modern language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2"
      >
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            <strong>Unit Test: </strong>A unit test is a type of software test that focuses on
            components of a software product. The purpose is to ensure that each unit of software
            code works as expected. A unit can be a function, method, module, object, or other
            entity in an application’s source code. <br />
            <br />
            The objective of a unit test is to test an entity in the code, ensure that it is coded
            correctly with no errors, and that it returns the expected outputs for all relevant
            inputs. Unit tests are typically created by developers during the coding phase of a
            project, and are written as code that exists in the codebase alongside the application
            code it is testing. Many unit testing frameworks exist that help developers manage and
            execute unit tests.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2"
      >
        <div className="collapse-title text-xl font-medium">React vs. Angular vs. Vue?</div>
        <div className="collapse-content">
          <p>
            <strong>React: </strong>developed by Facebook, was initially released in 2013. Facebook
            uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to
            Vue, the React developers also announce their newest version on the{' '}
            <a href="https://reactjs.org/blog">blog section of the React website.</a>
            <br />
            <br />
            <strong>Angular: </strong>developed by Google, was first released in 2010, making it the
            oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift
            occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the
            original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS
            (version 1) still gets updates, we will focus the discussion on Angular. <br />
            <br />
            <strong>Vue: </strong>also known as Vue.js, is the youngest member of the group. It was
            developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has
            seen a substantial shift in popularity, even though it doesn’t have the backing of a
            large company. The most current version is always announced on the official Vue website
            on their releases page. Contributors for Vue are supported by Patreon. It should be
            noted that Vue also has its own GitHub repo, and functions using TypeScript. <br />
            <br />
            <strong>Angular vs React: </strong>If the choice you’re making is based on Angular vs
            React alone, then you’ll simply need to consider the pros and cons discussed for those
            libraries in this post. But overall, keep in mind that both libraries can be used for
            mobile and web apps, while Angular is generally better for more complex apps that are
            enterprise-ready. <br />
            React often requires extra modules and components, which keeps the core library small,
            but means there’s extra work involved when incorporating outside tools. Angular, on the
            other hand, is more of a full-fledged solution that doesn’t require extras like React
            often does, though it does have a steeper learning curve for its core compared to React.
            React is more suitable for intermediate to advanced JavaScript developers who are
            familiar with concepts from ES6 and up, while Angular favors those same developers who
            are also familiar with TypeScript. <br />
            <br />
            <strong>React vs Vue: </strong>The choice between React vs Vue is often debated and it’s
            not an easy one. Vue has a vibrant and ever-growing community and has taken over
            popularity vs. React in many respects. React developers are still churning out lots of
            new components and extras, so there’s no sign that React is on the decline either. Vue
            is generally more suited to smaller, less complex apps and is easier to learn from
            scratch compared to React. Vue can be easier to integrate into new or existing projects
            and many feel its use of HTML templates along with JSX is an advantage. Overall, Vue
            might be the best choice if you’re a newer developer and not as familiar with advanced
            JavaScript concepts, while React is quite well suited for experienced programmers and
            developers who have worked with object-oriented JavaScript, functional JavaScript, and
            similar concepts. <br />
            <br />
            <strong>Angular vs Vue: </strong>In most cases, you probably wouldn’t be deciding
            between only Angular and Vue. They are vastly different libraries with very different
            feature sets and learning curves. Vue is the clear choice for less experienced
            developers, and Angular would be preferred for those working on larger apps. A large
            library like Angular would require more diligence in keeping up with what’s new, while
            Vue would be less demanding in this regard and the fact that the two most recent major
            releases of Vue are in separate repositories helps. It should also be noted that Vue was
            created by a developer who formerly worked on Angular for Google, so that’s another
            thing to keep in mind, though that wouldn’t have a huge impact on your decision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
