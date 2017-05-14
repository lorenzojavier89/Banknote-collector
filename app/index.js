const remote = require('electron').remote;
const main = remote.require('./main.js');

function showAddNewWindow() {
    main.openWindow('addNew/addNew.html');
}
