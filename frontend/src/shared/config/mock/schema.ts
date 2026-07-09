export const schema = [
  {
    name: "customers",
    columns: ["customer_id", "customer_name", "city"],
  },
  {
    name: "orders",
    columns: ["order_id", "customer_id", "amount"],
  },
];