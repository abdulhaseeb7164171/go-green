# go-green

> Make your GitHub profile look like you've been hard at work... even when you haven't.

**go-green** is a lightweight Node.js script that automates Git commits with custom timestamps, allowing you to create commits in the **past** (or even the **future**) and generate custom GitHub contribution graphs.

> **Note:** This project is intended for learning, experimentation, and creating contribution graph art.

---

## Features

- Create commits on any date
- Fill your GitHub contribution graph
- Generate contribution graph patterns and artwork
- Lightweight and easy to customize
- Built with Node.js

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abdulhaseeb7164171/go-green.git
cd go-green
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the script

You can execute the script using the default configuration or specify custom arguments for the number of commits and date range:

```bash
# General Usage:
node index.js [number_of_commits] [start_date] [end_date]
```

#### Examples

* **Default (100 commits distributed randomly over the past year):**
  ```bash
  node index.js
  ```

* **Generate 150 commits between Jan 1, 2025 and Jun 30, 2025:**
  ```bash
  node index.js 150 2025-01-01 2025-06-30
  ```

* **Generate 50 commits for a single month (e.g. October 2025):**
  ```bash
  node index.js 50 2025-10-01 2025-10-31
  ```

---

## Ideas

Some features that could be added in the future:

- Create custom patterns or pixel art on the contribution graph
- Control commit density to produce different shades of green
- Convert text into contribution graph artwork
- Import patterns from JSON files
- Randomize commit counts for a more natural-looking graph

---

## Dependencies

| Package      | Purpose                       |
| ------------ | ----------------------------- |
| `moment`     | Date and time manipulation    |
| `simple-git` | Run Git commands from Node.js |
| `random`     | Generate random commit counts |

---

## Disclaimer

This project is intended for educational purposes, experimentation, and contribution graph art. Please use it responsibly and avoid using it to misrepresent your work or contributions.

---

## License

Licensed under the MIT License.
