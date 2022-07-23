// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  var badge = '';
  if (license == null) {
    badge = '';
  }
  else {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = '';
  if (license == null) {
    licenseLink = '';
  }
  else {
    licenseLink = license + '.com';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = '';
  if (license == null) {
    licenseSection = '';
  }
  else {
    licenseSection = license + renderLicenseLink(license);
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} <div style="text-align: right"> ${renderLicenseBadge(data.license)} </div>
  
  ## Description
  ${data.descript}
  
  ## Table of Contents
  
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usageIns}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.testEx}
  
  ## Questions
  For any further questions, you can reach me at ${data.email}.
  GitHub: ${data.gitUser}
  
  ## License
  ${renderLicenseSection(data.license)}`;
}

module.exports = {
  generateMarkdown: (data) => generateMarkdown(data),
};
