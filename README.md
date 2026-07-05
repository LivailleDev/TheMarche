# The Marché — Shopping Cart App

A small **mobile shopping-cart app** built with **React Native (Expo)**. Browse a
product list, add items to the cart, adjust quantities, and see the running total —
with cart state shared across screens via React Context.

<!-- LIVE_DEMO -->

## Features

- Product list with **add to cart**
- Cart with **+ / − quantity** controls per item and a **live total**
- Cart **badge** showing the number of items
- Shared cart state via **React Context** (single source of truth)
- Screens: Login → Shop → Cart (React Navigation stack)

## Tech

React Native · Expo (SDK 48) · React Navigation · React Context · react-native-web

## Run it

**On your phone (Expo Go):**

```bash
npm install
npx expo start        # scan the QR code with the Expo Go app
```

**In the browser (web build):**

```bash
npm install
npx expo start --web
```

## Notes

- The login screen is a **demo entry point** — it doesn't perform real authentication.
- The product catalog is static/in-memory (no backend).
