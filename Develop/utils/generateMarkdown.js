// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  var badge = '';
  if (license == null) {
    badge = '';
    return badge;
  }
  else {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = '';
  if (license == null) {
    licenseLink = '';
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = '';
  if (license == null) {
    licenseSection = '';
    return licenseSection;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n ## Description \n\n ${data.descript}\n\n ## Table of Contents\n\n[Installation](#installation)\n[Usage](#usage)\n[Contributing](#contributing)\n[Tests](#tests)\n[Questions](#questions)
  \n\n## Installation

  \n\n## Usage

  \n\n## Contributing

  \n\n## Tests

  \n\n## Questions

  
  `;
}

module.exports = generateMarkdown;
