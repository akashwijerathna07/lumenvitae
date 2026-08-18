import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    base: "/lumen-vitae/",

    server: {
        host: true,

        // watch: {
        //   usePolling: true,
        //   interval: 100
        // }
    }
});