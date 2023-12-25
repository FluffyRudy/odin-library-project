# Simple Library App

This is a simple library app built with HTML, CSS, and JavaScript. The app allows users to add books to a virtual library and keep track of their reading status.

## Features

- **Add Book**: Users can add a book to the library by clicking the "Add Book" button. This opens a dialog where users can enter the book's details, including the author, title, page number, and reading status.

- **Book Cards**: Each book is represented as a card in the library. The card displays the book's details and its reading status. The reading status can be toggled by clicking on it.

- **Form Validation**: The "Confirm" button in the dialog is disabled until all input fields are filled.

## Code Structure

The app is structured into a single HTML file, a CSS file for styles, and a JavaScript file for interactivity. The JavaScript code uses the Document Object Model (DOM) API to manipulate the HTML elements and implement the app's functionality.

## Future Enhancements

- **Session Storage**: In the future, the app will use the Web Storage API's session storage to persist the library data for the duration of the page session.

- **Cloud Storage**: Eventually, the app will be enhanced to store the library data in a cloud database, allowing users to access their library from any device.

## Acknowledgments

This project is based on the TheOdinProject curriculum. The original project idea and resources can be found on [here](https://www.theodinproject.com/lessons/node-path-javascript-library).

## How to Use

To use the app, open the HTML file in a web browser. Click the "Add Book" button to open the dialog, enter the book's details, click "Confirm" to add the book to the library and click "Remove" to remove book from library.
