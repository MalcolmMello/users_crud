import { Pool } from "pg";

const connectionString = 'postgres://huwrbusr:7-rth0hVKLJtRbjoC6XCfrQnoTurcBJS@jelani.db.elephantsql.com/huwrbusr'

const db = new Pool({ connectionString })

export default db