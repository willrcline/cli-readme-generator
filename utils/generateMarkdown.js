
function createTocForReadme(data) {
  var {title, description, installation, usage, contributing, license, tests, githubProfile, email} = data

  var toc =
`## Table of Contents:
`

  if (installation != "") {
       toc +=
`* [Installation](#installation-instructions)
`
  }
  if (usage != "") {
      toc +=
`* [Usage Information](#usage-information)
`  
  }
  if (contributing != "") {
      toc +=
`* [Contributing](#contributing)
`
  }
  if (license != "None") {
      toc +=
`* [License](#license)
`
  }
  toc +=
`* [Questions](#questions)

`
return toc
}


function createReadmeMarkdown(data) {
  var {title, description, installation, usage, contributing, license, tests, githubProfile, email} = data
  var toc = createTocForReadme(data)

  var md = 
`# ${title}

`
  
  if (description != "") {
      md += 
`## Description
${description}
  
`
  }
  md += toc

  if (installation != '') {
      md += 
`## Installation Instructions
${installation}
  
`
  }
  if (usage != "") {
      md += 
`## Usage Information
${usage}

`
  }
  if (contributing!= '') {
      md += 
`## Contributing
${contributing}

`
  }
  if (license != "None") {
      md += 
`## License
${license}

`
  }
  if (tests != "") {
      md += 
`## Testing Information
${license}

`
  }
  md += 
`## Questions
For any questions about this project,  
reach out to [${githubProfile}](https://github.com/${githubProfile})  
or...  
send an email to ${email}`
  
  console.log(md)
  return md
}

module.exports = createReadmeMarkdown;
