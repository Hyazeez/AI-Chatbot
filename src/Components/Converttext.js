export function convertTextToLinks(text) {
  if (!text) return "";

  // Convert line breaks to <br> to keep formatting
  text = text.replace(/\n/g, "<br/>");

  // Convert markdown-style bullets (*) to <ul><li>
  text = text.replace(/^\* (.+)$/gm, "<li>$1</li>");
  if (text.includes("<li>")) {
    text = `<ul>${text}</ul>`;
  }

  // Convert URLs to clickable links
  const urlPattern = /(https?:\/\/[^\s<]+)/g;
  text = text.replace(urlPattern, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  // Convert email addresses to mailto links
  const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
  text = text.replace(emailPattern, (email) => {
    return `<a href="mailto:${email}">${email}</a>`;
  });

  // Convert WhatsApp short links or phone numbers to chat links
  const whatsappPattern = /(wa\.me\/\d{11})/g;
  text = text.replace(whatsappPattern, (wa) => {
    const phone = wa.match(/\d{11}/)[0];
    return `<a href="https://${wa}" target="_blank">WhatsApp: +${phone}</a>`;
  });

  // Convert social handles without http into full URLs
  text = text.replace(/(?:^|[^href="])(facebook\.com\/[^\s<]+)/g, (_, handle) => {
    return `<a href="https://${handle}" target="_blank">${handle}</a>`;
  });

  text = text.replace(/(?:^|[^href="])(instagram\.com\/[^\s<]+)/g, (_, handle) => {
    return `<a href="https://${handle}" target="_blank">${handle}</a>`;
  });

  text = text.replace(/(?:^|[^href="])(twitter\.com\/[^\s<]+)/g, (_, handle) => {
    return `<a href="https://${handle}" target="_blank">${handle}</a>`;
  });

  return text;
}
