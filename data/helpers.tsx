import dayjs from "https://npm.tfl.dev/dayjs@1";

/**
 * .filter predicate for active forms
 * @param param0 The form
 * @returns Whether it should be included or not
 */
export const filterActiveForms = <F extends { endTime: string }>({ endTime }: F): boolean => endTime !== null && (dayjs(endTime).isAfter(dayjs()));