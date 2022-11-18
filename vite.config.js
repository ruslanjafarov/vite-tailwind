import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "../build",
        minify: true,
        sourcemap: true,
    },
    server: {
        open: true,
        host: "0.0.0.0",
        port: "8888",
        hmr: true
    }
})