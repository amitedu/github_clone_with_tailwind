# tailwind_starter_template_JIT_with_CSS_minify
Tailwind Starter Template with Just In Time and minify with cssnano.

How to use:
    Step-1: npm install
        // Install all dependence
    Step-2: npm run dev
        // It will run the development environment and will watch the file for further changes
    Step-3: npm run prod
        // After building your site run this command for minify the css




How to build form scratch:

    Step-1: npm init -y

    Step-2: npm install -D tailwindcss@latest autoprefixer@latest postcss-cli@latest cssnano@latest

    Step-3: npx tailwindcss init -p
        // It will create postcss.config.js and tailwind.config.js

        // In the postcss.config.js file copy this postcss.config.js content

        // In the tailwind.config.js copy this tailwind.config.js content

    Step-4: Create tailwind.css file and copy this tailwind.css content

    Step-5: Create a public directory and create index.html and styles.css in that directory

    Step-6: add below lines in the package.json under "scripts"
        "dev": "set TAILWIND_MODE=watch&postcss tailwind.css -o ./public/styles.css -w --verbose",
        "prod": "set NODE_ENV=production&postcss tailwind.css -o ./public/styles.css --verbose"
