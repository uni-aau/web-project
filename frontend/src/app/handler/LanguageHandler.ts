export class LanguageHandler {
  static formatString(message: string, values: string[]) {
    let formattedString = message;

    for (let i = 0; i < values.length; i++) {
      formattedString = formattedString.replace("{" + i + "}", values[i]);
    }

    return formattedString;
  }

}
