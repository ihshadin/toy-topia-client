import React from 'react';
import useDynamicTitle from '../../../hooks/useDynamicTitle';

const Blogs = () => {
    useDynamicTitle();
    return (
        <section className='px-3 py-14 md:py-24 xl:px-0 max-w-4xl mx-auto'>
            <div className='mb-5 bg-white p-10 rounded-3xl'>
                <h2 className='text-p font-bold text-xl md:text-2xl mb-3'>
                    1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h2>
                <ul className='list-disc inline-block ps-8'>
                    <li>Access token: short-lived, limited-permission credential used to access protected resources.</li>
                    <li>Refresh token: long-lived, high-permission credential used to obtain new access tokens.</li>
                    <li>Store access tokens and refresh tokens securely.</li>
                    <li>Follow best practices for storing access tokens and refresh tokens.</li>
                </ul>
            </div>
            <div className='mb-5 bg-white p-10 rounded-3xl'>
                <h2 className='text-p font-bold text-xl md:text-2xl mb-3'>
                    2. Compare SQL and NoSQL databases?
                </h2>
                <ul className='list-disc inline-block ps-8'>
                    <li>Data model: SQL databases are relational, while NoSQL databases are non-relational.</li>
                    <li>Data structure: SQL databases store data in tables, while NoSQL databases store data in a variety of formats, including documents, key-value pairs, graphs, and wide columns.</li>
                    <li>Query language: SQL databases use SQL, while NoSQL databases use NoSQL-specific languages or ad hoc queries.</li>
                    <li>Scalability: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>Consistency: SQL databases offer ACID consistency, while NoSQL databases offer eventual consistency.</li>
                    <li>Cost: SQL databases are typically more expensive than NoSQL databases.</li>
                    <li>Popularity: SQL databases are more popular than NoSQL databases.</li>
                </ul>
                <p>The best database for a particular application depends on the specific requirements of the application. If the application requires strong consistency and performance, then a SQL database may be the best choice. If the application requires scalability and flexibility, then a NoSQL database may be the best choice.</p>
            </div>
            <div className='mb-5 bg-white p-10 rounded-3xl'>
                <h2 className='text-p font-bold text-xl md:text-2xl mb-3'>
                    3. What is express js? What is Nest JS?
                </h2>
                <p>Express.js is a popular and lightweight web application framework for Node.js. It provides a minimalist and flexible approach to building web servers and APIs. With Express.js, developers have fine-grained control over the application's structure and can choose from a wide range of middleware and plugins to enhance functionality.</p>
                <br />
                <p>Nest.js, on the other hand, is a TypeScript-based framework designed for building scalable and maintainable server-side applications. It follows a modular and opinionated architectural pattern inspired by Angular, which makes it well-suited for enterprise-level projects. Nest.js provides features like dependency injection, declarative routing, validation, and authentication out of the box, which helps developers focus on writing business logic rather than boilerplate code.</p>
            </div>
            <div className='mb-5 bg-white p-10 rounded-3xl'>
                <h2 className='text-p font-bold text-xl md:text-2xl mb-3'>
                    4. What is MongoDB aggregate and how does it work?
                </h2>
                <p>MongoDB's aggregate is a framework for performing advanced data processing on documents stored in a MongoDB database. It uses a pipeline of stages to process data, with each stage performing a specific operation such as filtering, grouping, or aggregating. The aggregation pipeline allows you to manipulate and analyze data in a flexible and powerful way, enabling you to extract insights and perform complex calculations. It leverages MongoDB's document model and query capabilities to provide efficient and scalable data transformations.</p>
            </div>
        </section>
    );
};

export default Blogs;