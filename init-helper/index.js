const fs = require('fs');
const path = require('path')
const { execSync } = require('child_process');

const labName = process.argv[2];

if (!labName) {
    console.error('Please provide a lab name as an argument.');
    process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');

const labDir = path.join(rootDir, 'lab-' + labName);
if (!fs.existsSync(labDir)) {
    fs.mkdirSync(labDir);
    fs.mkdirSync(path.join(labDir, 'src'));
    fs.writeFileSync(path.join(labDir, 'src', 'index.ts'), `
       async function main() {
           console.log('Hello, Lab ${labName}!');
       }
       
       main().catch(console.error);
    `);
    fs.writeFileSync(path.join(labDir, 'package.json'), JSON.stringify({
        "name": `lab-${labName}`,
        "version": "1.0.0",
        "main": "index.js",
        "type": "commonjs",
        "scripts": {
            "build": "tsc",
            "start": "node ./dist/index.js",
            "dev": "ts-node ./src/index.ts",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "devDependencies": {
            "typescript": "^5.9.2"
        },
        "dependencies": {
            "ts-node": "^10.9.2"
        }
    }, null, 2));
    fs.writeFileSync(path.join(labDir, 'tsconfig.json'), JSON.stringify({
            "compilerOptions": {
                /* Шляхи компіляції */
                "rootDir": "./src",
                "outDir": "./dist",

                /* Середовище виконання */
                "target": "esnext",
                "module": "commonjs",
                "moduleResolution": "node",
                "lib": ["esnext"],
                "types": ["node"],

                /* Генерація додаткових файлів */
                "sourceMap": true,
                "declaration": true,
                "declarationMap": true,

                /* Перевірки */
                "strict": true,
                "noUncheckedIndexedAccess": true,
                "exactOptionalPropertyTypes": true,

                /* JSX для React */
                "jsx": "react-jsx",

                /* Інше */
                "skipLibCheck": true,
                "esModuleInterop": true,
                "forceConsistentCasingInFileNames": true,

                /* Alias для імпортів */
                "paths": {
                    "@/*": ["./src/*"]
                }
            },
            "include": ["src"],
            "exclude": ["node_modules", "dist"],
    }), null, 2);

    execSync('npm install', { cwd: labDir, stdio: 'inherit' });
}

console.log(rootDir);