import template from "./action-roll.hbs";
import { Roll } from "./action-roll";

export const chat = async (roll: Roll) => {
  console.log("fooo");
  console.log(template);
  let content = await renderTemplate(template, roll.binding);
  console.log(content);
  console.log(roll);
  console.log(roll.binding);
  ChatMessage.create({
    content,
    speaker: ChatMessage.getSpeaker,
    type: CONST.CHAT_MESSAGE_TYPES.ROLL,
  });
};
