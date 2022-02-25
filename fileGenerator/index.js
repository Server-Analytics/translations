const readline = require('readline');
const fs = require('fs');

const fileGeneratorConfig = {
    baseLang: "fr-FR",
    version: "1.0.1"
}

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

async function runScript() {
    const ans = await askQuestion("Quel language souhaitez vous mettre à jour ou créer ? ");

    // Check if answer is a valid language code (fr-FR, en-US, etc.)
    if (!ans.match(/^[a-z]{2}-[A-Z]{2}$/)) {
        console.log("Erreur : le code de langue n'est pas valide. Par exemple : en-EN pour anglais Britannique.");
        return runScript();
    }

    // Try fetching the language file
    let languageFile = {};
    let baseLangFile = require(`../fr-FR.js`);

    try {
        languageFile = require(`../${ans}.js`);
    } catch (e) {}

    // If the language file does not exist, create it
    if (!languageFile) {
        languageFile = {};
    }

    // File checking stats
    let totalMissingAmount = 0;
    let missingFields = [];

    // Check language integrity (if every field is found in all language files)
    let currentField = "";
    Object.keys(baseLangFile).forEach(fieldName => {
        currentField = fieldName;
        checkLanguageEntry([fieldName]);
    });

    function getDeepValue(obj, path) {
        for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
            obj = obj[path[i]];
        };
        return obj;
    };

    function checkLanguageEntry(entryPath) {

        let entry = getDeepValue(baseLangFile, entryPath.join("."));

        // Check if field is an object, if so, check object fields
        if (typeof entry === "object") {

            let localEntryPath = getDeepValue(languageFile, entryPath.join("."));
            if (!localEntryPath) {
                totalMissingAmount++;
                if (!languageFile[entryPath[0]]) languageFile[entryPath[0]] = {};
                else getDeepValue(languageFile, entryPath.slice(0, -1).join("."))[entryPath[entryPath.length - 1]] = entry;
            }

            Object.keys(entry).forEach((objEntryName) => {
                checkLanguageEntry(entryPath.concat([objEntryName]));
            });

        } else {

            let localEntryPath = getDeepValue(languageFile, entryPath.join("."));
            if (!localEntryPath) {
                missingFields.push(entryPath.join("."));
                totalMissingAmount++;
                getDeepValue(languageFile, entryPath.slice(0, -1).join("."))[entryPath[entryPath.length - 1]] = typeof entry == "string" ? entry.replace("\\", "\\\\") : entry;
            }

            console.log(" \x1b[47m\x1b[30m[" + currentField.padStart(15, " ") + "]\x1b[0m - Entrée analysée : " + (localEntryPath ? "\x1b[32m" : "\x1b[31m") + entryPath.join(".") + "\x1b[0m");

        }
    }

    // Update language info object
    languageFile.infos.language_code = ans;
    languageFile.infos.default = false;

    // Add language file object with update info
    languageFile._FILE_UPDATES_INFO = {
        "last_update_timestamp": Date.now(),
        "last_update_date": new Date().toLocaleDateString(),
        "last_update_filegenerator_version": fileGeneratorConfig.version,
    };

    // Create JSON object
    let languageFileJSON = JSON.stringify(languageFile, null, 4)

    // make the JSON object more readable (get rid of the " for object names, if the object name only contains letters, underscores and numbers) and do not start with a number
    languageFileJSON = languageFileJSON.replace(/\"([a-zA-Z_][a-zA-Z_0-9]*)\":/g, '$1:');

    // Add comment header to the string
    let commentHeader = `/**\n * Ce fichier à été généré pour la dernière fois le ${new Date().toLocaleDateString()} à ${new Date().toLocaleTimeString()} par le script de génération de fichier langue.\n * Si celui-ci ne comporte pas les textes des dernières versions, pensez à le régénérer, ou demandez à qqn d'autre de le faire (sur le salon "traductions" du serveur Discord).\n *\n * @version ${fileGeneratorConfig.version} - Version du générateur\n * @language ${ans}\n * @default ${fileGeneratorConfig.baseLang}\n */\n\n`;

    // Create the file as countrycode.js
    fs.writeFile(`../${ans}.js`, `${commentHeader}module.exports = ${(languageFileJSON)}`, (err) => {
        if (err) throw err;
        console.log(`\x1b[32m Génération terminée!\x1b[0m Le fichier ${ans}.js à bien été mis à jour. Merci !`);

        // Create diff file for missing fields
        if (missingFields.length > 0) {
            fs.writeFile(`../${ans}.diff`, `+ ${missingFields.join("\n+ ")}`, (err) => {
                console.log(`\x1b[32m Fichier DIFF généré!\x1b[0m Le fichier ${ans}.diff à été créé et répertorie toutes les modifications générées.`);
            });
        }

        askQuestion("\n\n\x1b[32mGénération terminée.\x1b[0m Souhaitez-vous générer un autre fichier ? (y/n) ").then(ans => {
            if (ans.toLowerCase() === "y") runScript();
            else process.exit();
        });

    });

};

runScript();