import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

// Parse command line arguments
// Usage: node index.js [number_of_commits] [start_date] [end_date]
// Example: node index.js 150 2025-01-01 2025-06-30
const args = process.argv.slice(2);

const commitCount = args[0] ? parseInt(args[0], 10) : 100;
const startDateInput = args[1] || moment().subtract(1, "y").format("YYYY-MM-DD");
const endDateInput = args[2] || moment().format("YYYY-MM-DD");

// Validate commits count
if (isNaN(commitCount) || commitCount <= 0) {
  console.error("Error: Number of commits must be a positive integer.");
  process.exit(1);
}

// Parse and validate dates
const startMoment = moment(startDateInput, ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"], true);
const endMoment = moment(endDateInput, ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"], true);

if (!startMoment.isValid()) {
  console.error(`Error: Invalid start date format "${startDateInput}". Please use YYYY-MM-DD.`);
  process.exit(1);
}

if (!endMoment.isValid()) {
  console.error(`Error: Invalid end date format "${endDateInput}". Please use YYYY-MM-DD.`);
  process.exit(1);
}

if (endMoment.isBefore(startMoment)) {
  console.error(`Error: End date (${endDateInput}) cannot be before start date (${startDateInput}).`);
  process.exit(1);
}

console.log(`Generating ${commitCount} commits between ${startMoment.format("YYYY-MM-DD")} and ${endMoment.format("YYYY-MM-DD")}...`);

const makeCommits = (n) => {
  if (n === 0) {
    console.log("All commits created. Pushing changes...");
    return simpleGit().push();
  }

  // Calculate a random date/time within the range
  const diffMs = endMoment.diff(startMoment);
  const randomMs = random.int(0, diffMs);
  const randomDate = moment(startMoment).add(randomMs, "ms").format();

  const data = {
    date: randomDate,
  };

  jsonfile.writeFile(path, data, (err) => {
    if (err) {
      console.error("Error writing data.json:", err);
      return;
    }
    
    simpleGit()
      .add([path])
      .commit(
        `Contribution timestamp: ${randomDate}`, 
        { "--date": randomDate }, 
        (commitErr) => {
          if (commitErr) {
            console.error("Error creating commit:", commitErr);
            return;
          }
          console.log(`Commit ${commitCount - n + 1}/${commitCount}: ${randomDate}`);
          makeCommits(--n);
        }
      );
  });
};

makeCommits(commitCount);

