// Ignite CLI plugin for Contacts
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-contacts'
const NPM_MODULE_VERSION = '1.0.0'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'ContactsExample.js.ejs'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true, version: NPM_MODULE_VERSION })

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'Contacts Example' })

  // Example of copying templates/Contacts to App/Contacts
  // if (!filesystem.exists(`${APP_PATH}/App/Contacts`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/Contacts`, `${APP_PATH}/App/Contacts`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../Contacts/Contacts'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/Contacts folder
  // const removeContacts = await context.prompt.confirm(
  //   'Do you want to remove App/Contacts?'
  // )
  // if (removeContacts) { filesystem.remove(`${APP_PATH}/App/Contacts`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../Contacts/Contacts'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

