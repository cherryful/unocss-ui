/** Used to generate unique IDs. */
const idCounter: any = {}

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @example
 *
 * uniqueId('contact_')
 * => 'contact_104'
 *
 * uniqueId()
 * => '105'
 */
export function uniqueId(prefix = '$lodash$'): string {
  if (!idCounter[prefix])
    idCounter[prefix] = 0

  const id = ++idCounter[prefix]
  if (prefix === '$lodash$')
    return `${id}`

  return `${prefix}${id}`
}
