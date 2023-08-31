import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "uppercaseExclamationSuperPipe",
})
export class UppercaseExclamationSuperPipe implements PipeTransform {
  transform(value: string, count: number): string {
    const uppercasedValue = value.toUpperCase();
    return uppercasedValue + "!".repeat(count);
  }
}
