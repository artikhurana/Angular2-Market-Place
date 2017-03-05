"use strict";
var contacts_list_1 = require("./contacts-list");
var contacts_detail_1 = require("./contacts-detail");
exports.ContactsAppRoutes = [
    { path: '', component: contacts_list_1.ContactsListComponent },
    { path: 'contacts/:id', component: contacts_detail_1.ContactsDetailComponent }
];
//# sourceMappingURL=routing-interface.js.map