const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function checkDependencies() {
    console.log('🔍 Checking dependencies...');
    try {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const requiredDeps = ['express', 'mongoose', 'typescript', '@types/express', '@types/node'];
        
        const missingDeps = requiredDeps.filter(dep => 
            !packageJson.dependencies[dep] && !packageJson.devDependencies[dep]
        );

        if (missingDeps.length > 0) {
            console.error('❌ Missing required dependencies:', missingDeps.join(', '));
        } else {
            console.log('✅ All required dependencies are present');
        }
    } catch (error) {
        console.error('❌ Error checking dependencies:', error.message);
    }
}

function checkTypeScriptConfig() {
    console.log('\n🔍 Checking TypeScript configuration...');
    try {
        const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
        if (!tsConfig.compilerOptions.strict) {
            console.warn('⚠️ TypeScript strict mode is not enabled');
        }
        console.log('✅ TypeScript configuration is valid');
    } catch (error) {
        console.error('❌ Error in TypeScript configuration:', error.message);
    }
}

function checkFileStructure() {
    console.log('\n🔍 Checking project structure...');
    const requiredDirs = ['src', 'src/controllers', 'src/models', 'src/routes', 'src/views'];
    
    requiredDirs.forEach(dir => {
        if (fs.existsSync(dir)) {
            console.log(`✅ Directory exists: ${dir}`);
        } else {
            console.error(`❌ Missing directory: ${dir}`);
        }
    });
}

function checkEnvironmentVariables() {
    console.log('\n🔍 Checking environment variables...');
    if (!fs.existsSync('.env')) {
        console.warn('⚠️ .env file is missing');
    } else {
        console.log('✅ .env file exists');
    }
}

function runTypeScriptCheck() {
    console.log('\n🔍 Running TypeScript type check...');
    try {
        execSync('npx tsc --noEmit', { stdio: 'inherit' });
        console.log('✅ TypeScript type check passed');
    } catch (error) {
        console.error('❌ TypeScript type check failed');
    }
}

function runESLint() {
    console.log('\n🔍 Running ESLint...');
    try {
        execSync('npx eslint .', { stdio: 'inherit' });
        console.log('✅ ESLint check passed');
    } catch (error) {
        console.error('❌ ESLint check failed');
    }
}

// Run all checks
console.log('🚀 Starting project diagnostic...\n');
checkDependencies();
checkTypeScriptConfig();
checkFileStructure();
checkEnvironmentVariables();
runTypeScriptCheck();
runESLint();
console.log('\n✨ Diagnostic complete!'); 