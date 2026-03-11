/**
 * Utility to generate mailto links with pre-filled subject and body.
 */
export const getMailtoLink = (type, details = {}) => {
  const email = "contact@sonnaexxports.com";
  let subject = "";
  let body = "";

  switch (type) {
    case 'product':
      subject = `Inquiry for ${details.name}`;
      body = `Hello Sonna Exxports Team,\n\nI am interested in placing a bulk order for ${details.name}.\n\nPlease provide more information regarding pricing, MOQ, and sampling for this product.\n\nThank you.`;
      break;
    
    case 'uniform':
      subject = `Inquiry for Specialized Uniform Manufacturing - ${details.variant || 'General'}`;
      body = `Hello,\n\nI am looking for a customized uniform manufacturing solution for our organization.\n\nType: ${details.variant || 'Specialized Uniforms'}\n\nI would like to discuss our specific requirements for bulk manufacturing.\n\nThank you.`;
      break;

    case 'customization':
      subject = "Inquiry for Private Label & Custom Manufacturing";
      body = "Hello,\n\nI am interested in starting a private label or custom manufacturing project with Sonna Exxports.\n\nI would like to discuss my requirements from fabric selection to final packaging.\n\nThank you.";
      break;

    case 'about':
      subject = "Business Inquiry - Sonna Exxports";
      body = "Hello,\n\nI visited your About page and would like to learn more about your manufacturing and export services.\n\nThank you.";
      break;

    default:
      subject = "General Inquiry - Sonna Exxports";
      body = "Hello,\n\nI would like to get in touch regarding your manufacturing services.\n\nThank you.";
  }

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
