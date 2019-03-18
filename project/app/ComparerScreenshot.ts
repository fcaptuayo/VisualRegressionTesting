import * as  compareImages from 'resemblejs/compareImages';
import * as  fs from 'fs-extra';
import Path = require("path");
import * as serverScreenshot from "node-server-screenshot";


export class ComparerScreenshot {

    constructor() {

    }

    public async executeCompare() {
        const timeStamp = `${new Date().getTime()}`;
        const input_version1 = Path.join(__dirname, "../", `compare__${timeStamp}__before.png`);
        const input_version2 = Path.join(__dirname, "../", `compare__${timeStamp}__after.png`);
        const compareImage = Path.join(__dirname, "../", `compare__${timeStamp}__result.png`);

        await this.getVersion(input_version1);
        await this.getVersion(input_version2);
        await this.compare(input_version1, input_version2, compareImage);
    }

    public async getVersion(version) {
        return new Promise((resolve, reject) => {
            serverScreenshot.fromURL("https://fcaptuayo.github.io/VisualRegressionTesting/",
                version,
                () => {
                    resolve(version);
                });
        });
    }

    public async compare(input_image01, input_image02, output_image) {
        const options = {
            output: {
                errorColor: {
                    red: 255,
                    green: 0,
                    blue: 255
                },
                errorType: 'movement',
                transparency: 0.3,
                largeImageThreshold: 1200,
                useCrossOrigin: false,
                outputDiff: true
            },
            scaleToSameSize: true,
            ignore: ['nothing', 'less', 'antialiasing', 'colors', 'alpha'],
        };
        const data = await compareImages(
            await fs.readFile(input_image01),
            await fs.readFile(input_image02),
            options
        );

        await fs.writeFile(output_image, data.getBuffer());
    }

}
