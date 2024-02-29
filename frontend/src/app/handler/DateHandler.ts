import {formatDate} from "@angular/common";

export class DateHandler {
  static formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);
    const format = 'yyyy/MM/dd HH:mm';
    const locale = 'en-US';

    return formatDate(date, format, locale)
  }
}
