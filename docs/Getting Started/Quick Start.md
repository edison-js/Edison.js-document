---
sidebar_position: 1
---
Get Edison with NPM:

```bash
npm install edison
```

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.


## Uploading Standard Firmata to Arduino

- Open Arduino IDE.
- `File` > `Examples` > `Firmata` > `StandardFirmata`
- `Tools` > `Board` > `your board`
- Click `Upload` button.
if you use WSL, you need to follow [this instruction](/docs/Getting%20Started/How%20to%20WSL)
## Try LED flashing

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
