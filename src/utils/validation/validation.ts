export const required = (value: any) => {
   if (value) return undefined;
   return 'Field is required';
}

export const maxLengthCreater = (maxLength: number) => (value: any) => {
   if (value && value.length > maxLength) return `Max length ${maxLength} symbels`;
   return undefined;
}