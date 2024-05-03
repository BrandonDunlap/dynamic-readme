// Function to create a license badge
function renderLicenseBadge(license) {
  if (license !== 'None') {
      return `![License](https://img.shields.io/badge/license-${license.replace(/ /g, '_')}-blue.svg)`;
  }
  return '';
}

// Function to create a license link
function renderLicenseLink(license) {
  if (license !== 'None') {
      return `[License](#license)`;
  }
  return '';
}

// Function to create the license section
function renderLicenseSection(license) {
  if (license !== 'None') {
      return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  
  return `
# ${data.title}
${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseLink ? `- ${licenseLink}` : ''}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;
