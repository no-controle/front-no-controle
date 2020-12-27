export const currentMonth = `${new Date().getMonth() + 1}/${new Date().getFullYear()}`;

export function getMonth(value) { return value.split("/")[0]; }

export function getYear(value) { return value.split("/")[1]; }