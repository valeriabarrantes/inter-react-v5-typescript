import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // VITE will find the index.html from this folder and will render the CSS and App.js from that.
});
