# ⏱️ Custom Range Counter

Here’s a handy little app that counts up between any two numbers you choose. It’s a simple way to see JavaScript timing in action—plus some DOM manipulation for that live, ticking effect.

## ✨ Features

* Dynamic Range Input: Set where the counter starts and stops—just enter your “From” and “To” values.
* Timed Increments: The counter bumps up by one every second, thanks to `setInterval`.
* Automatic Stop: As soon as your target number appears, the counter stops itself with `clearInterval`.
* Input Validation: If you forget to enter either value, you get a quick alert to fix it before anything happens.
* Responsive Layout: Built with Bootstrap 4, so everything looks neat and stays centered, even on your phone.

## 🛠️ Built With

* HTML5: Lays out the input fields and the display.
* CSS3: Uses Google’s Bree Serif font and tweaks the counter’s size for extra clarity.
* Bootstrap 4: Handles layout and button styling—no fuss.
* JavaScript (ES6): Runs the counting logic, listens for clicks, and converts your input into numbers.

## 🚀 How It Works

Here’s what’s going on under the hood:

1. Event Listener: The “Start” button waits for your click.
2. Input Gathering: Once clicked, the script grabs whatever you entered for start and end.
3. Initialization: The counter displays your starting value right away.
4. Interval Logic:
   - With `setInterval`, the script updates the counter every second.
   - Each time, it grabs the current value, adds one, and updates what you see.
5. Stop Condition: If the counter matches your end value, it calls `clearInterval` and stops counting.

## 📂 Project Structure

* Custom Range Counter.html: Holds the page layout and Bootstrap setup.
* Custom Range Counter.css: Styles the heading and makes the counter number big and clear.
* Custom Range Counter.js: Handles the counting, manages timing, and tracks the current state.
