// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  //choices: ['GNU AGPLv3','GNU GPLv3','Mozilla Public License 2.0','Apache License 2.0'],
  var badge = '';
  if (license == null) {
    badge = '';
  }
  else {
    switch (license) {
      case 'GNU AGPLv3':
        badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        break;        
      case 'GNU GPLv3':
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;        
      case 'Mozilla Public License 2.0':
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        break;
      case 'Apache License 2.0': 
        badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
    } 
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
    switch (license) {
      case 'GNU AGPLv3':
        licenseLink = 'https://www.gnu.org/licenses/agpl-3.0.en.html';
        break;        
      case 'GNU GPLv3':
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
        break;        
      case 'Mozilla Public License 2.0':
        licenseLink = 'https://www.mozilla.org/en-US/MPL/2.0/';
        break;
      case 'Apache License 2.0': 
        licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0';
        break;
    } 
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = '';
  var licenseNotice = '';
  if (license == null) {
    licenseSection = '';
  }
  else {
    switch (license) {
      case 'GNU AGPLv3':
        licenseNotice = 'GNU AFFERO GENERAL PUBLIC LICENSE Version 3, 19 November 2007';
        break;        
      case 'GNU GPLv3':
        licenseNotice = 'GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007';
        break;        
      case 'Mozilla Public License 2.0':
        licenseNotice = 'Mozilla Public License Version 2.0';
        break;
      case 'Apache License 2.0': 
        licenseNotice = 'Apache License Version 2.0, January 2004';
        break;
    } 
    licenseSection = '[' + licenseNotice + '](' + renderLicenseLink(license) + ')';
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} <div style="text-align: right"> ${renderLicenseBadge(data.licenseChoice)} </div>
  
  ## Description
  ${data.descript}
  
  ## Table of Contents 
  [Installation](#installation) <br>
  [Usage](#usage) <br>
  [Contributing](#contributing) <br>
  [Tests](#tests) <br>
  [Questions](#questions) <br>
  [License](#license) <br>
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usageIns} <br>

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.testEx}
  
  ## Questions
  For any further questions, please contact me at ${data.email}. <br>
  GitHub: ${data.gitUser}
  
  ## License
  ${renderLicenseSection(data.licenseChoice)}`;
}

module.exports = {
  generateMarkdown: (data) => generateMarkdown(data),
};
