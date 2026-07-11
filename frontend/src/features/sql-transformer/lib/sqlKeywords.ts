/**
 * Reserved for SQL Transformer (Milestone 5)
 */
export const SQL_KEYWORDS = new Set([
  // DQL
  "SELECT",
  "DISTINCT",
  "FROM",
  "WHERE",
  "GROUP",
  "BY",
  "HAVING",
  "ORDER",
  "LIMIT",
  "OFFSET",
  "ASC",
  "DESC",

  // JOINS
  "JOIN",
  "INNER",
  "LEFT",
  "RIGHT",
  "FULL",
  "OUTER",
  "CROSS",
  "ON",
  "USING",

  // DML
  "INSERT",
  "INTO",
  "VALUES",
  "UPDATE",
  "SET",
  "DELETE",

  // DDL
  "CREATE",
  "ALTER",
  "DROP",
  "TRUNCATE",
  "RENAME",

  // Objects
  "TABLE",
  "DATABASE",
  "VIEW",
  "INDEX",

  // Conditions
  "AND",
  "OR",
  "NOT",
  "IN",
  "BETWEEN",
  "LIKE",
  "IS",
  "NULL",
  "EXISTS",

  // Aggregates
  "COUNT",
  "SUM",
  "AVG",
  "MIN",
  "MAX",

  // Conditional
  "CASE",
  "WHEN",
  "THEN",
  "ELSE",
  "END",

  // Window Functions
"OVER",
"PARTITION",
"ROW_NUMBER",
"RANK",
"DENSE_RANK",
"LEAD",
"LAG",
"FIRST_VALUE",
"LAST_VALUE",

  // Set Operations
  "UNION",
  "ALL",

  // Aliases
  "AS",

  // Date & Time
  "NOW",
  "CURRENT_DATE",
  "CURRENT_TIME",
  "CURRENT_TIMESTAMP",
  "DATE",
  "YEAR",
  "MONTH",
  "DAY",
  "HOUR",
  "MINUTE",
  "SECOND",
  "DATEDIFF",
  "DATE_ADD",
  "DATE_SUB",

  // String Functions
  "CONCAT",
  "LENGTH",
  "LOWER",
  "UPPER",
  "SUBSTRING",
  "TRIM",
  "REPLACE",

  // Numeric Functions
  "ROUND",
  "CEIL",
  "FLOOR",
  "ABS",
  "MOD",

  // NULL Handling
  "COALESCE",
  "IFNULL",
  "NULLIF",
]);