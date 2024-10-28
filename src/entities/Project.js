/**
 * Represents an item in the components data.
 * @typedef {Object} Project
 * @property {string} img 
 * @property {string[]} tags
 * @property {string} title
 * @property {string} text
 * @property {string} link
 */

import projectsJson from '../data/projects.json'

/**
 * @type {Project[]}
 */
const projects = projectsJson


export default projects