import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketUtilityService {
  constructor() {
  }

  calculateDurationInHours(timeString: string): number {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours + minutes / 60;
  }

  addTimeToDate(startDate: Date, timeString: string): Date {
    const [hours, minutes] = timeString.split(':').map(Number);
    const result = new Date(startDate.getTime());
    result.setHours(result.getHours() + hours);
    result.setMinutes(result.getMinutes() + minutes);
    return result;
  }

  formatDateForInput(date: Date): string {
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', date);
      return '';
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  extractTime(timeString: string): { hours: number; minutes: number } {
    const [hours, minutes] = timeString.split(':').map(Number);
    return {hours, minutes};
  }
}
