/* eslint-disable no-unused-vars */

import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold  mb-4 text-slate-800">About</h1>
      <p className="mb-4 text-slate-700">
        This is a MERN (MongoDB, Express, React, Node.js) stack application with
        authentication. It allows users to sign up, log in, and log out, and
        provides access to protected routes only for authenticated users.
      </p>
      <p className="mb-4 text-slate-700">
        Requirement Gathering: Understanding project requirements and planning
        the application architecture. Setting Up the Development Environment:
        Configuring development tools, version control, and setting up the
        project repository. Frontend Development: Building the UI components
        using React, managing state, and ensuring responsive design. Backend
        Development: Developing the server-side logic, APIs, and integrating
        with the frontend. Database Management: Designing the database schema,
        writing queries, and ensuring data consistency. Testing and Debugging:
        Writing tests, debugging code, and optimizing performance. Deployment:
        Deploying the application to production, setting up continuous
        integration and continuous deployment (CI/CD) pipelines. Maintenance:
        Monitoring the application, fixing bugs, and implementing new features.
      </p>
      <p className="mb-4 text-slate-700">
        This application is intended as a starting point for building full-stack
        web applications with authentication using the MERN stack.
      </p>
    </div>
  );
}
