// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
var licenseType = '${data.license}';
var EmptyLicense = '';

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return;
  var EmptyLicense = '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '${data.license};
var EmptyLicense = '';}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  //simple readme template
  ## Description 

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ## Installation
  ${data.installation}
  ## Tests
  ${data.test}
`;
}

module.exports = generateMarkdown;
