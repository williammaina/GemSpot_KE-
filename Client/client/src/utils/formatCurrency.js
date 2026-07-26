/**
 * Formats a given number or string into Kenyan Shillings (KES) currency format.
 * Example: 5500 -> "KES 5,500/-"
 */
export const formatCurrency = (amount) => {
  if (amount === undefined || amount === null) return 'KES 0/-';
  
  // If already a formatted string containing KES, return as is
  if (typeof amount === 'string' && amount.includes('KES')) {
    return amount;
  }

  const numericValue = Number(amount);
  if (isNaN(numericValue)) return 'KES 0/-';

  const formattedNumber = new Intl.NumberFormat('en-KE', {
    maximumFractionDigits: 0,
  }).format(numericValue);

  return `KES ${formattedNumber}/-`;
};