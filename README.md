# Google Tag Manager for React

This package provides a simple way to integrate Google Tag Manager into your React applications.

## Installation

Using pnpm:

```bash
pnpm add @lucianfialho/gtm-react
```

## Usage

Wrap your application with the `GTMProvider` component and pass your GTM ID as a prop:

```jsx
import React from "react";
import { GTMProvider } from "@yourname/my-react-gtm";

function App() {
  return (
    <GTMProvider id="GTM-XXXXXX">{/* The rest of your app */}</GTMProvider>
  );
}

export default App;
```
