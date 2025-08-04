# Assesment QA - Cypress API Test Project

This project contains automated API tests using [Cypress](https://www.cypress.io/) for the `POST /api/v1/assessment` endpoint.

## API Specification

| Field       | Type   | Constraints                                    |
|-------------|--------|------------------------------------------------|
| name        | string | Max 25 characters                              |
| id_number   | int    | Max 6 digits                                   |
| region_id   | int    | Max 5 digits                                   |
| lob_id      | int    | Value between 1 - 4                            |
| owner_id    | int    | Max 1 digit                                    |
| created_by  | string | Max 50 characters                              |

All fields are **mandatory**.

## Project Setup

1. Install dependencies
   ```bash
   npm install
   ```

2. Run Cypress Test Runner
   ```bash
   npx cypress open
   ```

3. Run tests in headless mode
   ```bash
   npx cypress run
   ```

## GitHub Actions Integration

This project uses GitHub Actions to run tests on every push or pull request.

---