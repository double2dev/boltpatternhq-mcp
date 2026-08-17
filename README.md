# 🚗 BoltPatternHQ MCP Server

[![Smithery Badge](https://smithery.ai/badge/double2dev/boltpatternhq-mcp)](https://smithery.ai/server/double2dev/boltpatternhq-mcp)
[![double2dev/boltpatternhq-mcp MCP server](https://glama.ai/mcp/servers/double2dev/boltpatternhq-mcp/badges/score.svg)](https://glama.ai/mcp/servers/double2dev/boltpatternhq-mcp)
[![Official MCP Registry](https://img.shields.io/badge/MCP%20Registry-Verified-0073e6)](https://registry.modelcontextprotocol.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Official Model Context Protocol (MCP) Server for [BoltPatternHQ](https://boltpatternhq.com/)** — providing AI coding assistants (Claude, Cursor, Windsurf, VS Code) with instant, zero-latency automotive wheel fitment, PCD (Pitch Circle Diameter), center bore, thread size, and offset reference data.

---

## 🔗 Quick Links & Resources

* 🌐 **Official Website & Live Search Engine**: [https://boltpatternhq.com/](https://boltpatternhq.com/)
* 📚 **MCP & API Documentation**: [https://boltpatternhq.com/data/](https://boltpatternhq.com/data/)
* ⚡ **Get Full 11,601-Row B2B Dataset ($29 Lifetime License)**: [https://boltpatternhq.com/data/](https://boltpatternhq.com/data/)
* 👨‍💻 **Developer Profile & Blog**: [https://double2.hatenablog.com/](https://double2.hatenablog.com/)

---

## ⚡ Why Use BoltPatternHQ MCP?

When developing automotive e-commerce storefronts (Shopify / WooCommerce), wheel fitment calculators, CAD parts models, or ERP systems, LLMs often suffer from hallucinated vehicle wheel specifications. 

The **BoltPatternHQ MCP Server** bridges your AI programming environment directly to standardized, OEM-verified automotive engineering specifications:
* **0ms Offline Querying**: Built-in curated sample library of iconic JDM, Euro, and American vehicles (Mazda MX-5 Miata, Suzuki Jimny, Toyota Raize/Rocky, BMW 3 Series, VW Golf GTI, Ford Mustang, Tesla Model 3/Y, etc.).
* **Standardized Engineering Metrics**: PCD (e.g., `4x100`, `5x114.3`, `5x139.7`), Center Bore (in mm), Offset Range (ET in mm), Lug Nut Thread Sizes (`M12x1.5`, `M14x1.25`, Ball/Spherical seat notes), and lug bolt counts.
* **Seamless B2B Integration**: Easily prototype your automotive scripts with our sample dataset, then scale seamlessly to our complete 11,601-row master CSV database.

---

## 🛠️ Available MCP Tools

This server exposes 3 standardized AI tools via `stdio`:

### 1. `search_bolt_pattern`
Search vehicle wheel specs by manufacturer make, model name, chassis code, year, or exact PCD string.
* **Input**: `{ "query": "Jimny" }` or `{ "query": "5x114.3" }` or `{ "query": "Roadster" }`
* **Output**: Detailed fitment report including center bore, offset tolerance, and OEM hub notes.

### 2. `get_make_models`
List all supported automotive brand manufacturers and highlighted models available in the public MCP library.
* **Input**: `{}`
* **Output**: Categorized markdown overview of makes and vehicle generations.

### 3. `get_sample_data`
Export the full curated JSON sample dataset for direct ingestion into CAD workflows, SQL databases, or unit tests.
* **Input**: `{}`
* **Output**: Standardized JSON array of vehicle fitment objects.

---

## 📦 Installation & Client Configuration

You can run the server instantly without installing any Python virtual environments using Node.js and `npx`.

### 1. Claude Desktop
Add the following configuration to your Claude Desktop config file:
* **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
* **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "boltpatternhq": {
      "command": "npx",
      "args": ["-y", "boltpatternhq-mcp"]
    }
  }
}
```

### 2. Cursor IDE
In Cursor, open **Settings** -> **Features** -> **MCP Servers** -> **Add new MCP server**:
* **Name**: `boltpatternhq`
* **Type**: `command`
* **Command**: `npx -y boltpatternhq-mcp`

### 3. Smithery CLI
To run or install via [Smithery](https://smithery.ai/):
```bash
npx -y @smithery/cli install @double2dev/boltpatternhq-mcp --client claude
```

### 4. VS Code (Cline / Roo Code / Continue) & Windsurf
Add to your workspace or global MCP settings JSON:
```json
{
  "mcpServers": {
    "boltpatternhq": {
      "command": "npx",
      "args": ["-y", "boltpatternhq-mcp"]
    }
  }
}
```

---

## 🚀 Building & Running Locally from Source

If you prefer to clone and modify the source code:

```bash
# Clone repository
git clone https://github.com/double2dev/boltpatternhq-mcp.git
cd boltpatternhq-mcp

# Install dependencies
npm install

# Compile TypeScript
npm run build

# Test server stdio launch
npm start
```

---

## 🏢 B2B Commercial Licensing & Master Dataset

This MCP server provides instant access to the **BoltPatternHQ Public Sample Library** for prototyping and AI debugging.

For production e-commerce websites, global tire/wheel export operations, and commercial parts-lookup systems, unlock the complete master database:
* **11,601 Verified Model-Year Records** (1992–2026)
* **66 Global Automotive Manufacturers** (JDM, USDM, Euro, ADM, EV platforms)
* **Standardized UTF-8 CSV & JSON Formats** ready for instant SQL/ERP import
* **One-Time Buy-Once Lifetime License ($29 USD)** — no recurring monthly MRR API fees!

👉 **Download Master Database Here**: [https://boltpatternhq.com/](https://boltpatternhq.com/)

---

## 🌍 MCP Directory & Ecosystem Verification

This project is structured and verified for inclusion in the following global AI ecosystem registries:
* [Official MCP Registry](https://registry.modelcontextprotocol.io/) (`.mcp/server.json`)
* [Glama.ai MCP Servers](https://glama.ai/mcp/servers)
* [Smithery.ai](https://smithery.ai/)
* [MCP.Directory](https://mcp.directory/)
* [mcp.so](https://mcp.so/)
* [MCPServers.org](https://mcpservers.org/)
* [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)

---

## 📄 License

This MCP server wrapper and public sample data are open-sourced under the **MIT License**.
Built with ❤️ by [double2 @個人開発者](https://double2.hatenablog.com/).
