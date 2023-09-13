# @akande/dropdown

@akande/dropdown is a lightweight and customizable JavaScript module for creating drop-down lists in web applications. It allows you to easily integrate and style dropdowns with your own data and callbacks.

## Features

- Simple and easy-to-use.
- Customizable title and list items.
- Supports callback functions for item selection.
- Minimal default styling for easy integration into your projects.

## Installation

You can install @akande/dropdown via npm:

```bash
npm install @akande/dropdown
```

## Usage

To use @akande/dropdown in your HTML file, follow these steps:

1. Include the JavaScript file in your HTML:

   ```html
   <script src="path/to/main.js"></script>
   ```

2. Create an HTML container where you want the dropdown to appear:

   ```html
   <div id="dropdown-container"></div>
   ```

3. In your JavaScript file, import the module, create an instance, and render it in the container:

   ```javascript
   import DropDown from '@akande/dropdown';

   // Create an array of items for the dropdown
   const dropdownItems = [
     {
       title: 'Item 1',
       callback: () => {
         alert('Item 1 clicked!');
       },
     },
     {
       title: 'Item 2',
       callback: () => {
         alert('Item 2 clicked!');
       },
     },
     // Add more items as needed
   ];

   // Select the container element
   const dropdownContainer = document.getElementById('dropdown-container');

   // Create an instance of the dropdown and render it in the container
   const dropdown = new DropDown('Dropdown Example', dropdownItems);
   dropdownContainer.appendChild(dropdown);
   ```

4. Customize the title, list items, and callback functions to suit your needs.

## API Reference

### `new DropDown(title, items)`

Creates a new instance of the dropdown with the specified title and list items.

- `title` (String): The title to display on the dropdown button.
- `items` (Array of Objects): An array of items to display in the dropdown list. Each item should have a `title` (String) and an optional `callback` (Function) that gets executed when the item is clicked.

## License

This project is licensed under the MIT License.

## Author

- Elliot Akande
- Email: [elbo.lynch@gmail.com](elbo.lynch@gmail.com)
- GitHub: [Elliot Akande](https://github.com/Elliot-Akande)
