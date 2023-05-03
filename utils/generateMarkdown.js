
function createTocForReadme(data) {
  var {title, description, installation, usage, contributing, license, tests, githubProfile, email} = data

  var toc =
`## Table of Contents:
`

  if (installation != "") {
       toc +=
`* [Installation](#Installation Instructions)
`
  }
  if (usage != "") {
      toc +=
`* [Usage Information](#Usage Information)
`  
  }
  if (contributing != "") {
      toc +=
`* [Contributing](#Contributing)
`
  }
  if (license != "None") {
      toc +=
`* [License](#License)
`
  }
  toc +=
`* [Questions](#Questions)

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
reach out to [https://github.com/${githubProfile}](${githubProfile}) 
or... 
send an email to ${email}`
  
  console.log(md)
  return md
}

module.exports = createReadmeMarkdown;
