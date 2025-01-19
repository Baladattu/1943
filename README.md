Here’s a concise version of the `README.md` file for your QR code food calorie scanner app:

```markdown
# QR Code Food Calorie Scanner

A simple React application that uses the device camera to scan QR codes containing food item information. Once scanned, the app calculates and displays the total calories of the food items based on predefined calorie values.

## How It Works

- The user scans a QR code using the device's camera.
- The QR code contains JSON data about food items (e.g., name and quantity).
- The app calculates the calories for each item using predefined values and displays the result.
- The camera automatically closes after a successful scan.

## Example QR Code Data

The app expects QR codes to contain data in the following format:

```json
{
  "dishName": "South Indian Breakfast",
  "items": [
    { "name": "Idli", "quantity": 2 },
    { "name": "Sambhar", "quantity": 1 },
    { "name": "Chutney", "quantity": 1 }
  ]
}
```

For this QR code, the app will display the total calories for each item based on the quantity.

## Technologies Used

- **React**: For building the user interface.
- **jsQR**: A library for decoding QR codes.
- **Netlify**: For deployment and hosting.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/qr-code-calorie-scanner.git
   cd qr-code-calorie-scanner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm start
   ```

## Deployment

The app can be easily deployed to Netlify by building the app and uploading the `build` folder to the platform.

## License

This project is licensed under the MIT License.

```

This version of the `README.md` file provides a high-level overview of the app, how it works, and basic instructions on running it locally or deploying it.