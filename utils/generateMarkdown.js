function generateLicenseBadge(license) {
  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'GPL 3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'BSD 3': '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
    'None': ''
  };
  return badges[license] || '';
}

function generateMarkdown(data) {
  return `
# ${data.title}
${generateLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
If you hav any Questions? Please contact me at ${data.email}, or find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;