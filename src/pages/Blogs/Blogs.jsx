import React from "react";
import { useTitle } from "../../components/hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-5xl font-bold text-white mx-auto text-center py-10">
        Some common FAQ<small>s</small>
      </h1>

      <div>
        <div className="mb-10">
          <h1 className="text-black bg-warning  pl-2 text-xl font bold py-2">
            <strong className="text-black">Q-1:</strong> What is an access token
            and refresh token? How do they work and where should we store them
            on the client-side?
          </h1>
          <h1 className="text-white bg-black bg-opacity-20 p-2">
            <strong className="text-warning">A-1:</strong> An access token is a
            credential for accessing protected resources, issued after user
            authentication. A refresh token is a long-lived credential used to
            obtain new access tokens. They work together, with the access token
            used for accessing resources and the refresh token used to get a new
            access token when it expires. Store them securely on the client-side
            using mechanisms like HTTP-only cookies, secure local storage, or
            encrypted key-value stores.
          </h1>
        </div>
        <div className="mb-10">
          <h1 className="text-black bg-warning  pl-2 text-xl font bold py-2">
            <strong className="text-black">Q-2:</strong> What is the difference
            between SQL and NoSQL databases?
          </h1>
          <h1 className="text-white bg-black bg-opacity-20 p-2">
            <strong className="text-warning">A-2:</strong> SQL databases are
            relational databases that store data in structured tables with
            predefined schemas and use structured query language (SQL) for
            querying and manipulating data. NoSQL databases, on the other hand,
            are non-relational databases that store data in a variety of formats
            like key-value pairs, documents, graphs, or wide-column stores. They
            offer flexible schemas and are designed to handle large amounts of
            unstructured or semi-structured data.
          </h1>
        </div>
        <div className="mb-10">
          <h1 className="text-black bg-warning  pl-2 text-xl font bold py-2">
            <strong className="text-black">Q-3:</strong> What is express JS and
            Nest JS? give a short description.
          </h1>
          <h1 className="text-white bg-black bg-opacity-20 p-2">
            <strong className="text-warning">A-3:</strong> Express.js is a
            minimalist web application framework for Node.js, which provides a
            straightforward and flexible way to build web applications and APIs.
            It offers a lightweight and unopinionated approach, allowing
            developers to have full control over the applications structure and
            logic. Nest.js, on the other hand, is a progressive TypeScript-based
            framework built on top of Express.js. It is designed to provide a
            more structured and scalable approach to building server-side
            applications. Nest.js follows the modular and dependency injection
            principles, making it suitable for building complex and
            enterprise-grade applications. It also provides features like
            built-in support for TypeScript, decorators, modules, and a powerful
            dependency injection system.
          </h1>
        </div>
        <div className="mb-10">
          <h1 className="text-black bg-warning  pl-2 text-xl font bold py-2">
            <strong className="text-black">Q-4:</strong> What is MongoDB
            aggregate and how does it work?
          </h1>
          <h1 className="text-white bg-black bg-opacity-20 p-2">
            <strong className="text-warning">A-4: </strong>
            MongoDBs aggregate is a powerful framework that allows you to
            perform advanced data analysis operations on MongoDB collections. It
            enables you to process and transform data using a pipeline of
            stages. Each stage in the pipeline applies a specific operation to
            the data, such as filtering, grouping, sorting, projecting, or
            performing mathematical calculations. The aggregate framework works
            by passing the documents through the pipeline stages in a sequential
            manner. Each stage modifies the data and passes it to the next stage
            until the final result is achieved. This allows you to perform
            complex queries, aggregations, and transformations on the data
            stored in MongoDB, providing you with flexibility and efficiency in
            data analysis and reporting.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
