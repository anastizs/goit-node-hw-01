const { Command } = require("commander");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone")
  .parse(process.argv);

const { action, id, name, email, phone } = program.opts();

async function invokeAction(action, options) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.table(allContacts);
      break;

    case "get":
      const contactById = await getContactById(options.id);
      if (contactById) {
        console.table([contactById]);
      } else {
        console.log("Contact not found");
      }
      break;

    case "add":
      const newContact = await addContact(
        options.name,
        options.email,
        options.phone
      );
      console.table([newContact]);
      break;

    case "remove":
      const removedContact = await removeContact(options.id);
      if (removedContact) {
        console.table([removedContact]);
      } else {
        console.log("Contact not found");
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(action, { id, name, email, phone });
