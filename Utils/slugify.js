export function stringToSlug(str) {
    str = str.toLowerCase().replace(/[^\w\s'-]/g, '').replace(/[\s]/g, '%20');
    return str;
}

export function slugToString(slug) {
    if (!slug) {
        return '';
    }

    let str = slug.replace(/-/g, ' ').replace(/%20/g, "'");
    str = str.replace(/\b(?<!['-])\w/g, function (match) {
        return match.toUpperCase();
    });
    return str;
}