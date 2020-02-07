/**
 * Check if string is valid password: 12 characters minimun, 1 letter, 1 number
 * @param  {String}  password Password
 * @return {Boolean} TRUE if provided argument is a valid email address, FALSE if not
 */
function isValidPassword(password) {
  return /^((?=.*[A-Za-z])(?=.*[0-9]))(?=.{12,})/.test(password)
}

export { isValidPassword }
