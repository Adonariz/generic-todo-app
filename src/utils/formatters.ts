/**
 * Функция для склонения существительных при использовании с числами
 * @param count число
 * @param noun слово для склонения
 * @param suffix опциональный суффикс для слова
 * @returns строка с числом и склоненным словом
 */
export const pluralize = (
  count: number,
  noun: string,
  suffix = "s",
): string => {
  return `${count} ${noun}${count !== 1 ? suffix : ""}`;
};
