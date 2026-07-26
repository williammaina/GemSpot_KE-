/**
 * Truncates a string to a specified maximum length and appends an ellipsis.
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Generates a standard Google Calendar Web Intent URL.
 */
export const generateGoogleCalendarUrl = (title, dateString, location, description) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedLocation = encodeURIComponent(location || 'Nairobi, Kenya');
  const encodedDetails = encodeURIComponent(description || 'Discovered via GemSpot KE.');
  
  // Format date for Google Calendar (YYYYMMDDTHHmmssZ)
  const startDate = dateString ? new Date(dateString).toISOString().replace(/-|:|\.\d\d\d/g, '') : new Date().toISOString().replace(/-|:|\.\d\d\d/g, '');

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${startDate}/${startDate}&details=${encodedDetails}&location=${encodedLocation}`;
};

/**
 * Debounce utility for search inputs and auto-suggestions.
 */
export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};