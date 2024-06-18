// Import necessary modules
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';
import process from 'process';

// Get __filename and __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define a function to parse a CSV/TSV file
const parseFile = async (filePath, separator = ',') => {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // Read the lines from the file
  const lines = [];
  for await (const line of rl) {
    lines.push(line.split(separator));
  }

  return lines;
};

// Function to transform the parsed data into the desired TechradarData structure
const transformData = (parsedData) => {
  const TECH_RADAR_RINGS = ['adopt', 'trial', 'assess', 'hold'];
  const techradarData = /** @type {TechradarData} */ ({
    id: "Internal Developer Platform",
    rings: [
      { id: "adopt", name: "ADOPT" },
      { id: "trial", name: "TRIAL" },
      { id: "assess", name: "ASSESS" },
      { id: "hold", name: "HOLD", color: "#e09b96" },
    ],
    slices: [],
  });

  const sliceMap = {};

  parsedData.forEach((row, index) => {
    if (row.length < 3) {
      console.error(`Invalid row at index ${index}: Missing required fields`);
      return;
    }

    const [sliceName, ringId, name, icon, state, url] = row;

    // Validate ringId
    if (!TECH_RADAR_RINGS.includes(ringId)) {
      console.error(`Invalid ringId at index ${index}: ${ringId}`);
      return;
    }

    if (!sliceMap[sliceName]) {
      sliceMap[sliceName] = {
        name: sliceName,
        blipsByRing: {
          adopt: [],
          trial: [],
          assess: [],
          hold: [],
        },
      };
    }

    const blip = { name };
    if (icon) blip.icon = icon;
    if (state) blip.state = state;
    if (url) blip.url = url;

    sliceMap[sliceName].blipsByRing[ringId].push(blip);
  });

  techradarData.slices = Object.values(sliceMap);

  return techradarData;
};

// Function to generate the JavaScript file with the data structure
const generateOutputFile = (data, outputPath) => {
  const importStatement = `import { TechradarData } from "../../lib/main";\n\n`;
  let dataContent = `const data: TechradarData = ${JSON.stringify(data, null, 2)};\n\nexport default data;`;

  // Replace double backslashes with single backslashes
  dataContent = dataContent.replace(/\\\\/g, '\\');

  fs.writeFileSync(outputPath, importStatement + dataContent);
};

// Main function to execute the whole process
const main = async () => {
  // Get arguments from the command line
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: node generateTechRadar.mjs <input.csv> <output.js> [separator]');
    process.exit(1);
  }

  const inputFile = path.resolve(__dirname, args[0]);
  const outputFile = path.resolve(__dirname, args[1]);
  const separator = args[2] || ','; // Default to comma if separator is not provided

  // Parse the input file
  const parsedData = await parseFile(inputFile, separator);

  // Transform the data
  const techradarData = transformData(parsedData);

  // Generate the output file
  generateOutputFile(techradarData, outputFile);

  console.log('Tech Radar data successfully generated!');
};

// Execute the main function
main().catch(err => console.error(err));

