## Deployments

### CI : 
 - Merging new code in
 - CI pipelines include automatic tools and processes (i.e. unit tests, linting tools) that automatically verify the code changes before merging it into the repository. Developers are less likely to be blocked by another developer’s work.

### CD:
 - Releasing code
 - Continuous Delivery (CD) ensures code changes are tested and ready for production deployment as soon as they are merged into the project.

1. Everyworkflows should have one or more jobs
  - First give the job name
  - NExt provide which VM to run on
  - npm ci => npm install

### CD
 - firebase login:ci => gets the token
 - Set the token in github secrets

### References

1. https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions
2. https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions
3. https://docs.github.com/en/actions/guides/building-and-testing-nodejs
4. https://docs.github.com/en/actions/reference/environment-variables
5. https://docs.github.com/en  
6. https://gist.github.com/ljmocic/3b171a3ee6e2a613eac7c465480a72e1
