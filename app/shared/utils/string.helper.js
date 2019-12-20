// import React from 'react';

export const handleTitleLength = (str, titleMaxLength = 62) => {
  if (str.length > titleMaxLength) return `${str.slice(0, titleMaxLength)}...`;
  if (str.length > titleMaxLength) return `${str.slice(0, titleMaxLength)}...`;
  return str;
};
export const handleDescriptionLength = (str, descriptionMaxLength = 134) => {
  if (str.length > descriptionMaxLength)
    return `${str.slice(0, descriptionMaxLength)}...`;
  return str;
};

export const deleteFirstCharacters = (string, number) => string.slice(number);

// export const hideLongText = (text, maxLength) => {
//   const allText = <span>{text}</span>;
//   if (text.length > maxLength) {
//     return (
//       <Tooltip placement="right" title={allText}>
//         {`${text.slice(0, maxLength)}...`}
//       </Tooltip>
//     );
//   }
//   return text;
// };

export const deleteExtraSpaces = string => string.replace(/\s+/g, ' ');

export const stringifyString = string => JSON.stringify(string);

/**
 *
 * @param {string} string your cant pass an undefined string
 */
export const parseString = string => (string ? JSON.parse(string) : undefined);
