Node-EdgeGPT
============

Node-EdgeGPT is a Node.js script that utilizes the Bing Chat API to create a Command Line Interface (CLI) for chatting with an AI-based chatbot. This CLI is based on the OpenAI GPT architecture and provides a simple interface for interacting with the AI chatbot.

Prerequisites
-------------

Before running Node-EdgeGPT, you must have the following installed on your system:

-   Node.js
-   yarn (or npm)
-   A Bing Chat Account

Installation
------------

To install Node-EdgeGPT, follow these steps:

1.  Clone the repository: `git clone https://github.com/erratbi/Node-EdgeGPT.git`
2.  Navigate to the project directory: `cd Node-edgeGPT`
3.  Install dependencies: `yarn` or `npm install`


Configuration
-------------

You can configure Node-EdgeGPT by modifying the `.env.example` file and rename it to `.env`. This file contains the `COOKIE` variable needed for the CLI to function.
To get your cookie head to [Bing chat](https://bing.com/chat), and follow this steps.

![tutorial](https://images2.imgbox.com/c7/e6/HS4WhELy_o.gif)


Usage
-----

To use Node-EdgeGPT, follow these steps:

1.  Start the CLI: `yarn start` or `npm start`
2.  Enter your Bing Chat API key when prompted.
3.  Start chatting with the chatbot.

The chatbot will respond to your input in real-time. To exit the CLI type `:exit` or `:reset` to start a fresh conversation


Contributing
------------

We welcome contributions from the community! If you'd like to contribute to Node-EdgeGPT, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature/fix: `git checkout -b feature/your-feature-name`
3.  Make your changes.
4.  Test your changes thoroughly.
5.  Commit your changes: `git commit -am 'Add some feature'`
6.  Push to the branch: `git push origin feature/your-feature-name`
7.  Submit a pull request.

We'll review your changes and work with you to get them merged into the main codebase.

Reporting Issues
----------------

If you encounter any issues while using Node-EdgeGPT, please [open an issue](https://github.com/erratbi/Node-EdgeGPT/issues/new) on our GitHub repository. We'll do our best to address the issue as soon as possible.

License
-------

Node-EdgeGPT is licensed under the [MIT License](./LICENSE).