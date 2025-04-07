// Groups the permissions based on the tab field.
// Displays each group in a separate section (e.g., a box with a title corresponding to the tab value).
// Renders each permission inside its respective group with a checkbox, where checking/unchecking it updates the state.
// Implements an onChange function that logs the updated selection state when any checkbox is toggled.
// export const permissions = [
//   { "id": "create_provider", "description": "Create a provider." , tab: "asset"},
//   { "id": "view_provider", "description": "View provider details." , tab: "asset"},
//   { "id": "edit_provider", "description": "Edit provider info." , tab: "asset"},
//   { "id": "add_admin_user", "description": "Add an admin user." , tab: "asset"},
//   { "id": "view_admin_user", "description": "View admin users." , tab: "project"},
//   { "id": "add_acelavar_user", "description": "Add an Acelavar user."  , tab: "project"},
//   { "id": "search_acelavar_user", "description": "Search Acelavar users." , tab: "project" },
//   { "id": "add_user", "description": "Add a provider user."  , tab: "project"},
//   { "id": "add_customer_user", "description": "Add a customer user."  , tab: "project"},
//   { "id": "activate_user", "description": "Activate a provider user."  , tab: "setting"},
//   { "id": "renewal_actions", "description": "Perform renewal actions."  , tab: "setting"},
// ]

import React, { useState } from "react";

const Permission = () => {
  const permissions = [
    { id: "create_provider", description: "Create a provider.", tab: "asset" },
    {
      id: "view_provider",
      description: "View provider details.",
      tab: "asset",
    },
    { id: "edit_provider", description: "Edit provider info.", tab: "asset" },
    { id: "add_admin_user", description: "Add an admin user.", tab: "asset" },
    { id: "view_admin_user", description: "View admin users.", tab: "project" },
    {
      id: "add_acelavar_user",
      description: "Add an Acelavar user.",
      tab: "project",
    },
    {
      id: "search_acelavar_user",
      description: "Search Acelavar users.",
      tab: "project",
    },
    { id: "add_user", description: "Add a provider user.", tab: "project" },
    {
      id: "add_customer_user",
      description: "Add a customer user.",
      tab: "project",
    },
    {
      id: "activate_user",
      description: "Activate a provider user.",
      tab: "setting",
    },
    {
      id: "renewal_actions",
      description: "Perform renewal actions.",
      tab: "setting",
    },
  ];

  const [selected, setSelected] = useState({})

  const groupPermission = permissions.reduce((acc, curr) => {
    if (!acc[curr.tab]) {
      acc[curr.tab] = [];
    }
    acc[curr.tab].push(curr);
    return acc;
  }, {});

  console.log(Object.entries(groupPermission));

  const handleCheckboxChange = (id) => {
    setSelected({...selected , [id] : !selected[id]})
    console.log("Updated State", selected);
    
  }

  return (
    <div>
      {Object.entries(groupPermission).map(([tab, permissions]) => (
        <div>
          <h1>{tab}</h1>
          {permissions.map((permission) => (
            <div>
              <input type="checkbox" 
              onChange={() => handleCheckboxChange(permission.id)}/>
              <span>{permission.description}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Permission;
