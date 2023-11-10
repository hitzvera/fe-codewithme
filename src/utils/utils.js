export function stringToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim leading and trailing whitespaces
  str = str.toLowerCase(); // convert to lowercase
  str = str.replace(/[^a-z0-9\s-]/g, ''); // remove non-alphanumeric characters (except for spaces and hyphens)
  str = str.replace(/\s+/g, '-'); // replace spaces with hyphens
  return str;
}
