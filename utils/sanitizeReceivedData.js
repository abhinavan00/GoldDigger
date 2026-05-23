import sanitizeHtml from 'sanitize-html';

export function sanitizeReceivedData(data) {
    const cleanData = sanitizeHtml(data, {allowedTags: [], allowedAttributes: {}});

    return cleanData;
}