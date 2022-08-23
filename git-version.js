const { gitDescribeSync } = require('git-describe');
const { writeFileSync } = require('fs');

const gitInfo = gitDescribeSync();

console.log(gitInfo);

const versionInfoJson = JSON.stringify(gitInfo, null, 2);

writeFileSync('git-version.json', versionInfoJson);
