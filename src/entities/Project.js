/**
 * Represents an item in the components data.
 * @typedef {Object} Project
 * @property {string} img 
 * @property {string[]} tags
 * @property {string} title
 * @property {string} text
 * @property {string} link
 * @property {ProjectType} type
 */

import projectsJson from '../data/projects.json'

/**
 * @type {Project[]}
 */
const projects = projectsJson

/**
 * @enum {string}
 */
export const ProjectType = {
    COMPLETE_APP: 'complete-app',
    SMALL_APP: 'small-app'
}


export default projects