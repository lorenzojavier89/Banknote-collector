const remote = require('electron').remote;
const main = remote.require('./main.js');

export function showAddNewWindow() {
    main.openWindow('addNew/addNew.html');
}
