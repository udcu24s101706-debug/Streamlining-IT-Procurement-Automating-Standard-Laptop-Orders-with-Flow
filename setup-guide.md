# Setup Guide
1. In Service Catalog, create the "Standard Laptop" item using `src/catalog/standard_laptop_item.json`.
2. In Flow Designer, create a flow triggered by that catalog item and add the steps from
   `src/flows/standard_laptop_order.flow.json`.
3. Create the email notifications from `src/notifications/`.
4. Test with a standard and a non-standard model.
