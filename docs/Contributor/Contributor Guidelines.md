## Contributor Guidelines

### 1. Introduction

💡Thank you for your interest in contributing to our Edison documentation💡

Edison is a free OSS!
If you don't understand the rules for contributors, you can always ask in an Issue on Github!
We will answer it immediately!
### 2. Setup

Before you start, ensure you have the required software and tools installed, including 
- Node.js >= 16.0.0
- npm >= 7.0.0

1. Fork the repository.
2. Clone your forked repository locally.
3. Install the necessary dependencies: 
   ```bash
   npm install
   ```
4. Open Arduino IDE.
5. `File` > `Examples` > `Firmata` > `StandardFirmata`
6. `Tools` > `Board` > `your board`
7. `Tools` > `Serial Port` > `your port`
8. Click `Upload` button.
if you use WSL, you need to follow [this instruction](/docs/Getting%20Started/How%20to%20WSL)

### 3. How to write issue

1. Go to [issues](https://github.com/AllenShintani/Edison/issues)
- If you want to add new device, write issue with `new device` label and device name.

- If you want to add new method, write issue with `new method` label and method name.

- If you find bug, write issue with `bug` label and bug name.

###   4. Making Changes
Branching: Always create a new branch for your changes. Use a descriptive name, like fix-header-bug or add-login-docs.

Editing: Ensure your edits adhere to our style guide. Keep your modifications clean and well-organized.

Committing: Use clear and concise commit messages.
### 5. Submitting Your Changes
Before pushing your changes, ensure everything is working locally.
Push the branch to your forked repository on GitHub.
Create a pull request (PR) against the main repository.
Describe your changes clearly in the PR description.
### 6. Review Process
After submitting a PR, the maintainers will review your submission.
Address any comments or feedback you receive from the maintainers.
Once your PR is approved, the maintainers will merge it.
### 7. Community and Conduct
Always be respectful and understanding towards other contributors.
If you have questions or need help, don't hesitate to ask in the community channels or forum.
### 8. Finally
Thank you for your contributions and dedication to enhancing our documentation. Together, we can make it the best resource possible!